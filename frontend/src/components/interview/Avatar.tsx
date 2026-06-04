interface Props {

  listening: boolean
}

export default function Avatar({
  listening
}: Props) {

  return (

    <div className='flex justify-center mb-8'>

      <div className={`
        w-36 h-36 rounded-full
        flex items-center justify-center
        text-white text-5xl font-bold
        shadow-2xl transition-all duration-300
        ${
          listening
            ? 'bg-red-500 scale-110 animate-pulse'
            : 'bg-blue-600'
        }
      `}>

        AI

      </div>

    </div>
  )
}