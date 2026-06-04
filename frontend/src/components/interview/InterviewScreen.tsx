import Avatar from './Avatar'
import QuestionCard from './QuestionCard'
import Controls from './Controls'

import type { InterviewQuestion } from '../../types/interview'

interface Props {

  currentQuestion: InterviewQuestion

  currentIndex: number

  maxQuestions: number

  listening: boolean
  prepStarted: boolean

  prepTimeLeft: number

  answerTimeLeft: number

  onRepeat: () => void

  onListen: () => void

  onSubmit: () => void
}

export default function InterviewScreen({

  currentQuestion,

  currentIndex,

  maxQuestions,

  listening,
  prepStarted,

  prepTimeLeft,

  answerTimeLeft,

  onRepeat,

  onListen,

  onSubmit

}: Props) {

  return (

    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>

      <div className='bg-white rounded-3xl shadow-xl p-10 max-w-4xl w-full'>

        <Avatar
          listening={listening}
        />

        <h1 className='text-4xl font-bold text-center mb-2'>
          AI Voice Interview
        </h1>

        <p className='text-center text-gray-500 mb-8'>
          Question {currentIndex + 1}
          {' '}of{' '}
          {maxQuestions}
        </p>

        <QuestionCard
          question={currentQuestion.question}
          isFollowup={currentQuestion.isFollowup}
          prepTimeLeft={prepTimeLeft}
          answerTimeLeft={answerTimeLeft}
          listening={listening} 
          prepStarted={prepStarted}        />

        <Controls
          listening={listening}
          hasAnswered={
            !!currentQuestion.response
          }
          onRepeat={onRepeat}
          onListen={onListen}
          onSubmit={onSubmit}
        />

      </div>

    </div>
  )
}