interface Props {

  question: string

  isFollowup?: boolean

  prepTimeLeft: number

  answerTimeLeft: number

  listening: boolean
  prepStarted: boolean
}

export default function QuestionCard({

  question,

  isFollowup,

  prepTimeLeft,

  answerTimeLeft,

  listening,
  prepStarted

}: Props) {

  const formatTime = (
    time: number
  ) => {

    const mins =
      Math.floor(time / 60)

    const secs =
      time % 60

    return `${mins}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  return (

    <div className='bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-8 mb-8 shadow-sm'>

      <div className='flex items-center justify-between mb-6'>

        <div className='px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold'>

          {isFollowup
            ? 'Follow-up Question'
            : 'Interview Question'}

        </div>

        {prepStarted && !listening && (

          <div className='bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold'>

            Answer recording Starts in {prepTimeLeft}s

          </div>
        )}

        {listening && (

          <div className='bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold animate-pulse'>

            Recording • {formatTime(answerTimeLeft)}

          </div>
        )}

      </div>

      <p className='text-2xl leading-relaxed text-gray-800 font-medium'>

        {question}

      </p>

    </div>
  )
}