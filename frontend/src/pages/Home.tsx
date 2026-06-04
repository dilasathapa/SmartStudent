import { useEffect, useRef, useState } from 'react'

import InterviewScreen from '../components/interview/InterviewScreen'
import InterviewSetupForm from '../components/interview/InterviewSetupForm'
import InterviewResults from '../components/interview/InterviewResults'

const API_URL = import.meta.env.VITE_API_URL

declare global {
  interface Window {
    webkitSpeechRecognition: any
  }
}

interface ScoreMetric {
  score: number
  remark: string
}

interface Evaluation {
  conceptual_depth: ScoreMetric
  confidence: ScoreMetric
  verbal_communication: ScoreMetric
  fluency_analysis: ScoreMetric
  conversational_continuity: ScoreMetric
  overall_score: number
  topic_weaknesses: string[]
  strengths: string[]
  improvement_areas: string[]
  final_feedback: string
}

interface InterviewQuestion {
  question: string
  response?: string
  isFollowup?: boolean
}

type InterviewStatus =
  | 'upload'
  | 'processing'
  | 'interview'
  | 'completed'

export default function VoiceInterviewPage() {

  const MAX_QUESTIONS = 5

  const ANSWER_WINDOW = 15

  const ANSWER_DURATION = 180

  const recognitionRef =
    useRef<any>(null)

  const recordingStartedRef =
    useRef(false)

  const answerTimerRef =
    useRef(ANSWER_DURATION)

  const audioRef =
    useRef<HTMLAudioElement | null>(null)

  const audioUrlRef =
    useRef<string | null>(null)

  const [status, setStatus] =
    useState<InterviewStatus>('upload')

  const [loading, setLoading] =
    useState(false)

  const [submitting, setSubmitting] =
    useState(false)

  const [listening, setListening] =
    useState(false)

  const [hasSpoken, setHasSpoken] =
    useState(false)

  const [processingNext, setProcessingNext] =
    useState(false)

  const [file, setFile] =
    useState<File | null>(null)

  const [blueprint, setBlueprint] =
    useState<any>(null)

  const [interviewFlow, setInterviewFlow] =
    useState<InterviewQuestion[]>([])

  const [conversationHistory, setConversationHistory] =
    useState<any[]>([])

  const [evaluations, setEvaluations] =
    useState<Evaluation[]>([])

  const [currentIndex, setCurrentIndex] =
    useState(0)

  const [finalScore, setFinalScore] =
  useState<any>(null)

const [overallFeedback, setOverallFeedback] =
  useState<{
    strengths: string[]
    weaknesses: string[]
    summary: string
  } | null>(null)

  const [answerWindow, setAnswerWindow] =
    useState(ANSWER_WINDOW)

  const [answerTimer, setAnswerTimer] =
    useState(ANSWER_DURATION)

    
    const [recordingStarted, setRecordingStarted] = useState(false)
    const [prepStarted, setPrepStarted] = useState(false)

  const [countdown, setCountdown] =
    useState<number | null>(null)

  const [transcript, setTranscript] =
    useState('')

  const topic =
    blueprint?.role ||
    'General Interview'

  const currentQuestion = interviewFlow[currentIndex] || null

  // =========================
  // HELPERS
  // =========================

  const cleanQuestion = (
    text: string
  ) => {

    return text
      ?.replace(
        /Sure.*?:/gi,
        ''
      )
      ?.replace(/[""]/g, '')
      ?.trim()
  }



  useEffect(() => {

    recordingStartedRef.current =
      recordingStarted

  }, [recordingStarted])

  useEffect(() => {

    answerTimerRef.current =
      answerTimer

  }, [answerTimer])

  

  // =========================
  // START INTERVIEW
  // =========================

  const startInterview = async (data: any) => {
    try {
      setLoading(true)
      console.log("🚀 Starting interview with data:", data)

      // 1. FIRST: setup interview
      await fetch(`${API_URL}/setup-interview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          role: data.role,
          experience: data.experience,
          interview_goal: data.interview_goal,
          difficulty_level: data.difficulty_level,
          focus_areas: data.focus_areas,
          selected_rubrics: data.selected_rubrics,
          custom_rubrics: data.custom_rubrics,
        })
      })

      // 2. THEN: start interview
      const res = await fetch(
        `${API_URL}/start-interview`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      const result = await res.json()
      console.log("Received first question:", result)

      const firstQuestion = {
        question: cleanQuestion(result.question),
      }

      setInterviewFlow([firstQuestion])

      setCurrentIndex(0)

      setTimeout(() => {
        setStatus('interview')
      }, 0)

    } finally {
      setLoading(false)
    }
  }

  // =========================
  // SPEAK QUESTION
  // =========================

  const speakQuestion = async () => {

    if (!currentQuestion)
      return

    try {

      const welcomeMessage = `
      Hey, welcome to your AI interview session.

      I’ll be your interviewer today.
      Feel free to think out loud while answering, and don’t worry if you’re unsure about something — just try your best.

      Alright, let’s get started with the first question.
      `

      const finalSpeech =
        currentIndex === 0
          ? `${welcomeMessage} ${cleanQuestion(currentQuestion.question)}`
          : cleanQuestion(currentQuestion.question)

      const res = await fetch(
        `${API_URL}/speak`,
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body: JSON.stringify({
            text: finalSpeech
          })
        }
      )

      const blob =
        await res.blob()

      const audioUrl =
        URL.createObjectURL(blob)

      if (audioRef.current) {

        audioRef.current.pause()

        audioRef.current = null
      }

      if (audioUrlRef.current) {

        URL.revokeObjectURL(
          audioUrlRef.current
        )
      }

      audioRef.current =
        new Audio(audioUrl)

      audioUrlRef.current =
        audioUrl

      await audioRef.current.play()

      audioRef.current.onended = () => {

        setHasSpoken(true)

        setPrepStarted(true)

        setAnswerWindow(ANSWER_WINDOW)

        setRecordingStarted(false)

        setListening(false)

        setCountdown(null)
      }

    } catch (error) {

      console.error(
        'Voice playback failed',
        error
      )
    }
  }

  // =========================
  // COUNTDOWN
  // =========================

  const startCountdown = () => {

  let count = 3

  setCountdown(count)

  const interval = setInterval(() => {

    count--

    if (count <= 0) {

      clearInterval(interval)

      setCountdown(null)

      beginRecording()

    } else {

      setCountdown(count)
    }

  }, 1000)
}

  // =========================
  // BEGIN RECORDING
  // =========================

  const beginRecording = () => {

  if (!window.webkitSpeechRecognition) {
    return
  }

  setRecordingStarted(true)
  recordingStartedRef.current = true

  setListening(true)

  setAnswerTimer(ANSWER_DURATION)

  const startRecognition = () => {

    const recognition =
      new window.webkitSpeechRecognition()

    recognitionRef.current =
      recognition

    recognition.lang = 'en-US'

    recognition.continuous = true

    recognition.interimResults = true

    recognition.onresult = (
      event: any
    ) => {

      let finalTranscript = ''

      for (
        let i = 0;
        i < event.results.length;
        i++
      ) {

        finalTranscript +=
          event.results[i][0]
            .transcript + ' '
      }

      setTranscript(
        finalTranscript.trim()
      )
    }

    recognition.onerror = (
      event: any
    ) => {

      console.log(
        'Speech error:',
        event.error
      )
    }

    recognition.onend = () => {

      if (
        recordingStartedRef.current &&
        answerTimerRef.current > 0
      ) {

        startRecognition()

      } else {

        setListening(false)
      }
    }

    try {

      recognition.start()

    } catch (err) {

      console.log(
        'Recognition already running'
      )
    }
  }

  startRecognition()
}

  

  // =========================
  // SUBMIT ANSWER
  // =========================

  const handleSubmitAnswer =
    async () => {

      if (processingNext)
        return

      setProcessingNext(true)
      setRecordingStarted(false)

      recordingStartedRef.current = false

      try {

        if (
          recognitionRef.current
        ) {

          recognitionRef.current.onend = null

          recognitionRef.current.stop()
        }

        setListening(false)

        setRecordingStarted(
          false
        )

        const finalTranscript =
          transcript.trim()

        setInterviewFlow(
          (prev) => {

            const updated =
              [...prev]

            updated[
              currentIndex
            ] = {

              ...updated[
                currentIndex
              ],

              response:
                finalTranscript
            }

            return updated
          }
        )

        const updatedHistory =
          [
            ...conversationHistory,

            {
              question:
                currentQuestion.question,

              answer:
                finalTranscript,

              isFollowup:
                currentQuestion.isFollowup || false
            }
          ]

        setConversationHistory(
          updatedHistory
        )

        if (
          currentIndex + 1 >=
          MAX_QUESTIONS
        ) {

          await sendClosingMessage()

          setTimeout(() => {

            setStatus(
              'completed'
            )

          }, 1000)

          return
        }

        const res =
          await fetch(
            `${API_URL}/followup`,
            {
              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json'
              },

              body: JSON.stringify({
                topic,
                question_number: currentIndex + 2,

                previous_question:
                  currentQuestion.question,

                student_answer:
                  finalTranscript,

                conversation_history:
                  updatedHistory
              })
            }
          )

        const data =
          await res.json()

        const nextQuestion =
          cleanQuestion(
            data.question
          )

        setInterviewFlow(
          (prev) => [

            ...prev,

            {
              question:
                nextQuestion,

              isFollowup: true
            }
          ]
        )

        setTranscript('')


        setAnswerTimer(
          ANSWER_DURATION
        )

        setHasSpoken(false)
        setAnswerWindow(ANSWER_WINDOW)

        setCountdown(null)
        setRecordingStarted(false)

        recordingStartedRef.current = false


        setHasSpoken(false)

        setCountdown(null)

        setTranscript('')

        setAnswerWindow(ANSWER_WINDOW)

        setAnswerTimer(ANSWER_DURATION)

        setListening(false)
        setPrepStarted(false)

        
        setCurrentIndex(
          prev => prev + 1
        )
        setHasSpoken(false)


      } catch (error) {

        console.error(
          'Submit answer failed',
          error
        )

      } finally {

        setProcessingNext(false)
      }
    }

  // =========================
  // CLOSING MESSAGE
  // =========================

  const sendClosingMessage =
    async () => {

      const closingText = `
        That was a great conversation.
        Thanks for your time today.
        Good luck for your future.
      `

      const res = await fetch(
        `${API_URL}/speak`,
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body: JSON.stringify({
            text: closingText
          })
        }
      )

      const blob =
        await res.blob()

      const url =
        URL.createObjectURL(blob)

      const audio =
        new Audio(url)

      await audio.play()

      await new Promise((r) => {

        audio.onended = r

      })
    }

  // =========================
  // AUTO START WINDOW TIMER
  // =========================

  useEffect(() => {

  if (
    status !== 'interview' ||
    recordingStarted ||
    !hasSpoken
  ) return

  if (answerWindow <= 0) {

    if (!countdown) {
      startCountdown()
    }

    return
  }

  const timer = setTimeout(() => {

    setAnswerWindow(prev => prev - 1)

  }, 1000)

  return () => clearTimeout(timer)

}, [
  answerWindow,
  recordingStarted,
  hasSpoken,
  status,
  countdown
])

  // =========================
  // ANSWER TIMER
  // =========================

  useEffect(() => {

    if (
      !recordingStarted
    ) return

    if (
      answerTimer <= 0
    ) {

      handleSubmitAnswer()

      return
    }

    const timer =
      setTimeout(() => {

        setAnswerTimer(
          prev => prev - 1
        )

      }, 1000)

    return () =>
      clearTimeout(timer)

  }, [
    answerTimer,
    recordingStarted
  ])

  // =========================
  // AUTO SPEAK
  // =========================

  useEffect(() => {

    if (
      currentQuestion &&
      !hasSpoken &&
      status === 'interview'
    ) {

      const timer =
        setTimeout(() => {

          speakQuestion()


        }, 500)

      return () =>
        clearTimeout(timer)
    }

  }, [
    currentQuestion,
    hasSpoken,
    status
  ])


  // =========================
  // CLEANUP
  // =========================

  useEffect(() => {

    return () => {

      if (
        recognitionRef.current
      ) {

        recognitionRef.current.stop()
      }

      if (
        audioRef.current
      ) {

        audioRef.current.pause()
      }

      if (
        audioUrlRef.current
      ) {

        URL.revokeObjectURL(
          audioUrlRef.current
        )
      }
    }

  }, [])

  // =========================
  // SUBMIT INTERVIEW
  // =========================

const submitInterview =
  async () => {

    try {

      setSubmitting(true)

      const normalizedFlow =
        Array.from({
          length: MAX_QUESTIONS
        }).map((_, index) => {

          const q = interviewFlow[index]

          return {
            question:
              q?.question || '',

            response:
              q?.response || null,

            attempted:
              !!q?.response
          }
        })

      const evaluationPromises =
        normalizedFlow.map(
          async (q) => {

            if (!q.attempted) {

            const dynamicRubrics = [
              ...(blueprint?.selected_rubrics || []),

              ...(blueprint?.custom_rubrics || []).map(
                (r: any) =>
                  r.title
                    .toLowerCase()
                    .replaceAll(' ', '_')
              )
            ]

            const emptyEvaluation: any = {}

            dynamicRubrics.forEach(
              (rubric: string) => {

                emptyEvaluation[rubric] = {
                  score: 0,
                  remark: 'Not attempted'
                }
              }
            )

            emptyEvaluation.overall_score = 0

            emptyEvaluation.strengths = []

            emptyEvaluation.improvement_areas = [
              'Attempt all questions'
            ]

            emptyEvaluation.final_feedback =
              'No response provided'

            return emptyEvaluation
          }

            const res =
              await fetch(
                `${API_URL}/evaluate`,
                {
                  method: 'POST',

                  headers: {
                    'Content-Type':
                      'application/json'
                  },

                  body: JSON.stringify({
                    question: q.question,
                    student_answer: q.response,
                    topic,
                    interview_goal: blueprint?.interview_goal || '',
                    focus_areas: blueprint?.focus_areas || [],

                    selected_rubrics: blueprint?.selected_rubrics || [],

                    custom_rubrics: blueprint?.custom_rubrics || [],
                    conversation_history: conversationHistory,

                  })
                }
              )

            const data = await res.json()
            console.log("Evaluation result for question:", q.question, data)

            return data.data
          }
        )

      const results =
        await Promise.all(
          evaluationPromises
        )

      const filteredResults =
        results.filter(Boolean)

      setEvaluations(
        filteredResults
      )

      // =========================
      // CALCULATE FINAL SCORE
      // =========================

      const total =
        filteredResults.length

      const metricTotals: any = {}

      filteredResults.forEach((evaluation) => {

        Object.entries(evaluation).forEach(
          ([key, value]: any) => {

            if (
              value &&
              typeof value === 'object' &&
              value.score !== undefined
            ) {

              if (!metricTotals[key]) {
                metricTotals[key] = 0
              }

              metricTotals[key] += value.score
            }
          }
        )
      })

      const avg: any = {}

      Object.keys(metricTotals).forEach((key) => {

        avg[key] =
          metricTotals[key] / total
      })

      const scores =
        Object.values(avg) as number[]

      const overall =
        scores.reduce(
          (a, b) => a + b,
          0
        ) / scores.length



            setFinalScore({
              avg,
              overall
            })

      // =========================
      // OVERALL FEEDBACK
      // =========================

      const allStrengths =
        filteredResults.flatMap(
          (e) => e.strengths || []
        )

      const allWeaknesses =
        filteredResults.flatMap(
          (e) =>
            e.improvement_areas || []
        )

      const allFeedbacks =
        filteredResults.map(
          (e) =>
            e.final_feedback
        )

      setOverallFeedback({

        strengths:
          [...new Set(allStrengths)]
            .slice(0, 5),

        weaknesses:
          [...new Set(allWeaknesses)]
            .slice(0, 5),

        summary:
          allFeedbacks.join(' ')
      })

    } catch (error) {

      console.error(
        'Evaluation failed',
        error
      )

    } finally {

      setSubmitting(false)
    }
  }

  

  

  // =========================
  // PROCESSING SCREEN
  // =========================

  if (
    status === 'processing'
  ) {

    return (

      <div className='min-h-screen flex items-center justify-center bg-gray-100'>

        <div className='text-center'>

          <div className='w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6' />

          <h1 className='text-3xl font-bold'>
            Preparing Interview
          </h1>

        </div>

      </div>
    )
  }

  // =========================
  // UPLOAD SCREEN
  // =========================

  if (status === 'upload') {

  return (

    <InterviewSetupForm
      loading={loading}
      onStart={(data) => {

        setBlueprint(data)
        console.log("Received setup data:", data)

        startInterview(data)
      }}
    />
  )
}

  // =========================
  // INTERVIEW SCREEN
  // =========================

  if (
    status === 'interview' &&
  currentQuestion
  ) {

    return (

      <div className='relative'>

        <InterviewScreen
          currentQuestion={currentQuestion}
          currentIndex={currentIndex}
          maxQuestions={MAX_QUESTIONS}
          listening={listening}
          prepStarted={prepStarted}
          prepTimeLeft={recordingStarted ? 0 : answerWindow}
          answerTimeLeft={recordingStarted ? answerTimer : 0}
          onRepeat={speakQuestion}
          onListen={startCountdown}
          onSubmit={handleSubmitAnswer}
        />


      </div>
    )
  }

  // =========================
  // RESULTS SCREEN
  // =========================

  return (

    <InterviewResults
      evaluations={evaluations}
      interviewFlow={interviewFlow}
      submitting={submitting}
      submitInterview={submitInterview}
    />
  )
}