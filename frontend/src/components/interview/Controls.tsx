interface Props {

  listening: boolean

  hasAnswered: boolean

  onRepeat: () => void

  onListen: () => void

  onSubmit: () => void
}

export default function Controls({

  listening,

  hasAnswered,

  onRepeat,

  onListen,

  onSubmit

}: Props) {

  return (

    <div className='flex justify-center gap-4 flex-wrap'>

      <button
        onClick={onRepeat}
        className='bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold transition'
      >
        Repeat Question
      </button>

      {!listening && !hasAnswered && (

        <button
          onClick={onListen}
          className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold transition'
        >
          Start Answer
        </button>
      )}

      {listening && (

        <button
          onClick={onSubmit}
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition'
        >
          Submit Answer
        </button>
      )}

      {hasAnswered && (

        <div className='bg-green-100 text-green-700 px-6 py-3 rounded-2xl font-semibold'>

          Answer Submitted

        </div>
      )}

    </div>
  )
}