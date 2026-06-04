import {calculateFinalScore} from "../../utils/calculateFinalScore"

interface Metric {
  score: number
  remark: string
  improvement_tip?: string
}

interface Evaluation {
  overall_score: number

  strengths: string[]

  improvement_areas: string[]

  topic_weaknesses: string[]

  final_feedback: string

  [key: string]: any
}

interface InterviewQuestion {
  question: string
  response?: string
}

interface Props {
  evaluations: Evaluation[]

  interviewFlow: InterviewQuestion[]

  submitting: boolean

  submitInterview: () => void
}

export default function InterviewResults({

  evaluations,

  interviewFlow,

  submitting,

  submitInterview

}: Props) {

  // =========================
  // DYNAMIC METRIC LABELS
  // =========================

    const formatMetricName = (
        key: string
        ) => {

        return key
            .replaceAll('_', ' ')
            .replace(
            /\b\w/g,
            (l) => l.toUpperCase()
            )
        }

  // =========================
  // CARD COLORS
  // =========================

  const cardColors = [

    {
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-blue-700',
      score: 'text-blue-600'
    },

    {
      bg: 'bg-green-50',
      border: 'border-green-100',
      text: 'text-green-700',
      score: 'text-green-600'
    },

    {
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      text: 'text-purple-700',
      score: 'text-purple-600'
    },

    {
      bg: 'bg-orange-50',
      border: 'border-orange-100',
      text: 'text-orange-700',
      score: 'text-orange-600'
    },

    {
      bg: 'bg-pink-50',
      border: 'border-pink-100',
      text: 'text-pink-700',
      score: 'text-pink-600'
    },

    {
      bg: 'bg-cyan-50',
      border: 'border-cyan-100',
      text: 'text-cyan-700',
      score: 'text-cyan-600'
    },

    {
      bg: 'bg-yellow-50',
      border: 'border-yellow-100',
      text: 'text-yellow-700',
      score: 'text-yellow-600'
    }
  ]

  // =========================
  // CALCULATE FINAL SCORE
  // =========================


  const finalScore = calculateFinalScore(evaluations)

  // =========================
  // FILTER METRICS
  // =========================

    const getMetrics = (
        evaluation: Evaluation
        ) => {

        return Object.entries(
            evaluation
        ).filter(([_, value]: any) => {

            return (
            value &&
            typeof value === 'object' &&
            value.score !== undefined
            )
        })
        }

  return (

    <div className='min-h-screen bg-gray-100 p-8'>

      <div className='max-w-6xl mx-auto'>

        {/* HEADER */}

        <div className='bg-white rounded-3xl p-10 shadow-lg mb-8'>

          <h1 className='text-5xl font-bold mb-4'>
            Interview Completed
          </h1>

          <p className='text-gray-500 text-lg mb-8'>
            AI-generated performance analysis
          </p>

          {/* PERFORMANCE SUMMARY */}

          {finalScore && (

            <div className='bg-gray-50 rounded-3xl p-8 border border-gray-200'>

              <h2 className='text-3xl font-bold mb-6'>
                Performance Summary
              </h2>

              <div className='grid md:grid-cols-2 gap-8'>

                <div className='bg-blue-50 p-6 rounded-2xl border border-blue-100'>

                  <h3 className='font-bold text-blue-700 text-xl'>
                    Overall Score
                  </h3>

                  <p className='text-5xl font-bold text-blue-600 mt-4'>
                    {finalScore.overall.toFixed(1)}
                    /10
                  </p>

                </div>

                <div className='space-y-3'>

                  {Object.entries(finalScore.averages as Record<string, number>).map(([key, value]) => (

                    <div
                      key={key}
                      className='flex justify-between bg-white rounded-xl p-4 border border-gray-200'
                    >

                      <span className='font-semibold text-gray-700'>

                        {
                            formatMetricName(key)
                        }

                      </span>

                      <span className='font-bold text-blue-600'>

                        {value.toFixed(1)}
                        /10

                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          )}

          {/* GENERATE BUTTON */}

          {!evaluations?.length && (

            <button
              onClick={submitInterview}
              disabled={submitting}
              className='bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold transition mt-6'
            >

              {submitting
                ? 'Generating Evaluation...'
                : 'Generate Final Evaluation'}

            </button>
          )}

        </div>

        {/* QUESTION WISE EVALUATIONS */}

        {evaluations?.map(
          (
            evaluation,
            index
          ) => {

            const metrics =
              getMetrics(
                evaluation
              )

            return (

              <div
                key={index}
                className='bg-white rounded-3xl p-8 shadow-lg mb-8'
              >

                {/* QUESTION */}

                <h2 className='text-3xl font-bold mb-4'>
                  Question {index + 1}
                </h2>

                <p className='text-xl text-gray-700 mb-6 leading-relaxed'>

                  {
                    interviewFlow[index]
                      ?.question
                  }

                </p>

                {/* RESPONSE */}

                <div className='bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200'>

                  <h3 className='font-bold text-lg mb-3'>
                    Candidate Response
                  </h3>

                  <p className='text-gray-700 leading-relaxed'>

                    {
                      interviewFlow[index]
                        ?.response ||
                      'No response recorded'
                    }

                  </p>

                </div>

                {/* DYNAMIC SCORE CARDS */}

                <div className='grid md:grid-cols-2 gap-6 mb-8'>

                  {metrics.map(
                    (
                      [key, value],
                      idx
                    ) => {

                      const metric =
                        value as Metric

                      const color =
                        cardColors[
                          idx %
                          cardColors.length
                        ]

                      return (

                        <div
                          key={key}
                          className={`${color.bg} rounded-2xl p-6 border ${color.border}`}
                        >

                          <div className='flex items-center justify-between mb-4'>

                            <h3 className={`font-bold text-lg ${color.text}`}>

                              {
                                formatMetricName(key)
                              }

                            </h3>

                            <div className={`text-3xl font-bold ${color.score}`}>

                              {metric.score}/10

                            </div>

                          </div>

                          <p className='text-gray-700 mb-4 leading-relaxed'>

                            {metric.remark}

                          </p>

                          {/* <div className='bg-white rounded-xl p-4 text-sm text-gray-600 border border-gray-100'>

                            <span className='font-semibold'>
                              Improvement Tip:
                            </span>

                            {' '}

                            {
                              metric.improvement_tip
                              ||
                              'Practice explaining ideas with more clarity and structured reasoning.'
                            }

                          </div> */}

                        </div>
                      )
                    }
                  )}

                </div>

                {/* STRENGTHS & IMPROVEMENTS */}

                <div className='grid md:grid-cols-2 gap-6 mb-8'>

                  {/* STRENGTHS */}

                  <div className='bg-green-50 rounded-2xl p-6 border border-green-100'>

                    <h3 className='text-2xl font-bold text-green-700 mb-4'>
                      Strengths
                    </h3>

                    <ul className='space-y-3'>

                      {
                        evaluation?.strengths?.map(
                          (
                            strength,
                            idx
                          ) => (

                            <li
                              key={idx}
                              className='text-gray-700'
                            >

                              • {strength}

                            </li>
                          )
                        )
                      }

                    </ul>

                  </div>

                  {/* IMPROVEMENT AREAS */}

                  <div className='bg-red-50 rounded-2xl p-6 border border-red-100'>

                    <h3 className='text-2xl font-bold text-red-700 mb-4'>
                      Improvement Areas
                    </h3>

                    <ul className='space-y-3'>

                      {
                        evaluation?.improvement_areas?.map(
                          (
                            area,
                            idx
                          ) => (

                            <li
                              key={idx}
                              className='text-gray-700'
                            >

                              • {area}

                            </li>
                          )
                        )
                      }

                    </ul>

                  </div>

                </div>

                {/* WEAKNESSES */}

                {!!evaluation?.topic_weaknesses?.length && (

                  <div className='bg-yellow-50 rounded-2xl p-6 border border-yellow-100 mb-8'>

                    <h3 className='text-2xl font-bold text-yellow-700 mb-4'>
                      Topic Weaknesses
                    </h3>

                    <ul className='space-y-3'>

                      {
                        evaluation?.topic_weaknesses?.map(
                          (
                            weakness,
                            idx
                          ) => (

                            <li
                              key={idx}
                              className='text-gray-700'
                            >

                              • {weakness}

                            </li>
                          )
                        )
                      }

                    </ul>

                  </div>
                )}

                {/* FINAL FEEDBACK */}

                <div className='bg-gray-50 rounded-2xl p-6 border border-gray-200'>

                  <h3 className='text-2xl font-bold mb-4'>
                    Final Feedback
                  </h3>

                  <p className='text-gray-700 leading-relaxed text-lg'>

                    {
                      evaluation.final_feedback
                    }

                  </p>

                </div>

              </div>
            )
          }
        )}

      </div>

    </div>
  )
}