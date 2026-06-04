import { useState } from 'react'

interface CustomRubric {
  title: string
  description: string
}

interface Props {
  onStart: (data: any) => void
  loading: boolean
}

const DEFAULT_RUBRICS = [
  {
    key: 'conceptual_depth',
    label: 'Conceptual Depth',
    description: 'Understanding, reasoning and technical depth'
  },
  {
    key: 'confidence',
    label: 'Confidence',
    description: 'Confidence, decisiveness and hesitation handling'
  },
  {
    key: 'verbal_communication',
    label: 'Verbal Communication',
    description: 'Clarity, articulation and communication quality'
  },
  {
    key: 'fluency_analysis',
    label: 'Fluency Analysis',
    description: 'Sentence flow, pauses and natural speaking'
  },
  {
    key: 'conversational_continuity',
    label: 'Conversational Continuity',
    description: 'Continuity, engagement and relevance'
  }
]

export default function InterviewSetupForm({
  onStart,
  loading
}: Props) {

  const [role, setRole] =
    useState('')

  const [experience, setExperience] =
    useState('')

  const [focusAreas, setFocusAreas] =
    useState('')

  const [interviewGoal, setInterviewGoal] =
    useState('')

  const [difficulty, setDifficulty] =
    useState('medium')

  const [customRubrics, setCustomRubrics] =
  useState<any[]>([])

  const [rubricTitle, setRubricTitle] =
    useState('')

  const [rubricDescription, setRubricDescription] =
    useState('')

  const [selectedRubrics, setSelectedRubrics] =
  useState<string[]>([
    'conceptual_depth',
    'confidence',
    'verbal_communication'
  ])


  console.log("custom rubrics", customRubrics)
  console.log("selected rubrics", selectedRubrics)



// remove custom rubric

const removeRubric = (
  index: number
) => {

  const totalRubrics =
    selectedRubrics.length
    + customRubrics.length

  if (totalRubrics <= 5) {

    alert(
      'Minimum 3 rubrics required'
    )

    return
  }

  setCustomRubrics((prev) =>
    prev.filter(
      (_, i) => i !== index
    )
  )
}

//   handle start

    const handleStart = () => {
        const payload = {
            role,
            experience,
            interview_goal: interviewGoal,
            difficulty_level: difficulty,
            focus_areas: focusAreas
                .split(',')
                .map(i => i.trim())
                .filter(Boolean),
            selected_rubrics: selectedRubrics, // ONLY keys
            custom_rubrics: customRubrics, // full objects with title and description
        }

        console.log("FINAL PAYLOAD:", payload)
        onStart(payload)
    }

  return (

    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>

      <div className='bg-white rounded-3xl shadow-xl p-10 w-full max-w-5xl'>

        <h1 className='text-5xl font-bold mb-3'>
          AI Interview Setup
        </h1>

        <p className='text-gray-500 mb-10 text-lg'>
          Configure the interview and evaluation criteria
        </p>

        <div className='grid md:grid-cols-2 gap-6 mb-8'>

          <div>

            <label className='block font-semibold mb-2'>
              Role / Subject
            </label>

            <input
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              placeholder='Frontend Developer / Biology Viva / English Speaking'
              className='w-full border rounded-2xl p-4'
            />

          </div>

          <div>

            <label className='block font-semibold mb-2'>
              Experience Level
            </label>

            <input
              value={experience}
              onChange={(e) =>
                setExperience(e.target.value)
              }
              placeholder='Fresher / 2 Years / Class 12'
              className='w-full border rounded-2xl p-4'
            />

          </div>

        </div>

        <div className='mb-8'>

          <label className='block font-semibold mb-2'>
            Focus Areas
          </label>

          <textarea
            value={focusAreas}
            onChange={(e) =>
              setFocusAreas(e.target.value)
            }
            placeholder='React, Node.js, DBMS, Communication'
            className='w-full border rounded-2xl p-4 h-32'
          />

        </div>

        <div className='grid md:grid-cols-2 gap-6 mb-8'>

          <div>

            <label className='block font-semibold mb-2'>
              Interview Goal
            </label>

            <textarea
              value={interviewGoal}
              onChange={(e) =>
                setInterviewGoal(e.target.value)
              }
              placeholder='Test conceptual understanding and communication'
              className='w-full border rounded-2xl p-4 h-32'
            />

          </div>

          <div>

            <label className='block font-semibold mb-2'>
              Difficulty
            </label>

            <select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value)
              }
              className='w-full border rounded-2xl p-4'
            >

              <option value='easy'>
                Easy
              </option>

              <option value='medium'>
                Medium
              </option>

              <option value='hard'>
                Hard
              </option>

            </select>

          </div>

        </div>

        {/* rubrics */}

        <div className='border-t pt-10'>

            {/* HEADER */}

            <div className='mb-8'>

                <h2 className='text-3xl font-bold mb-3'>
                Evaluation Rubrics
                </h2>

                <p className='text-gray-500 leading-relaxed'>

                Choose the evaluation criteria for the interview.

                Minimum 3 criteria required.
                Maximum 6 criteria allowed.

                </p>

            </div>

            {/* DEFAULT RUBRICS */}

            <div className='grid md:grid-cols-2 gap-5 mb-10'>

                {DEFAULT_RUBRICS.map((rubric) => {

                const checked =
                    selectedRubrics.includes(
                    rubric.key
                    )

                const totalRubrics =
                    selectedRubrics.length +
                    customRubrics.length

                return (

                    <div
                    key={rubric.key}
                    className={`rounded-3xl border p-5 transition ${
                        checked
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-white border-gray-200'
                    }`}
                    >

                    <div className='flex items-start gap-4'>

                        <input
                        type='checkbox'
                        checked={checked}
                        onChange={() => {

                            if (checked) {

                            if (totalRubrics <= 3) {

                                alert(
                                'Minimum 3 rubrics required'
                                )

                                return
                            }

                            setSelectedRubrics(
                                (prev) =>
                                prev.filter(
                                    (r) =>
                                    r !== rubric.key
                                )
                            )

                            } else {

                            if (totalRubrics >= 6) {

                                alert(
                                'Maximum 6 rubrics allowed'
                                )

                                return
                            }

                            setSelectedRubrics(
                                (prev) => [
                                ...prev,
                                rubric.key
                                ]
                            )
                            }
                        }}
                        className='mt-1 w-5 h-5'
                        />

                        <div>

                        <h3 className='font-bold text-lg'>

                            {rubric.label}

                        </h3>

                        <p className='text-gray-600 mt-2 leading-relaxed'>

                            {rubric.description}

                        </p>

                        </div>

                    </div>

                    </div>
                )
                })}

            </div>

            {/* CUSTOM RUBRIC FORM */}

            <div className='bg-gray-50 border rounded-3xl p-6 mb-8'>

                <h3 className='text-2xl font-bold mb-6'>

                Add Custom Rubric

                </h3>

                <div className='grid md:grid-cols-2 gap-5 mb-5'>

                <input
                    value={rubricTitle}
                    onChange={(e) =>
                    setRubricTitle(
                        e.target.value
                    )
                    }
                    placeholder='Rubric Name'
                    className='border rounded-2xl p-4 bg-white'
                />

                <input
                    value={rubricDescription}
                    onChange={(e) =>
                    setRubricDescription(
                        e.target.value
                    )
                    }
                    placeholder='What should AI evaluate?'
                    className='border rounded-2xl p-4 bg-white'
                />

                </div>
                <div>

                <button
                onClick={() => {

                    const totalRubrics =
                    selectedRubrics.length +
                    customRubrics.length

                    if (
                    !rubricTitle.trim() ||
                    !rubricDescription.trim()
                    ) {

                    alert(
                        'Please fill all rubric fields'
                    )

                    return
                    }

                    if (totalRubrics >= 6) {

                    alert(
                        'Maximum 6 rubrics allowed'
                    )

                    return
                    }

                    setCustomRubrics(
                    (prev) => [

                        ...prev,

                        {
                        title:
                            rubricTitle,

                        description:
                            rubricDescription
                        }
                    ]
                    )

                    setRubricTitle('')
                    setRubricDescription('')
                }}
                className='bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold transition'
                >

                Add Custom Rubric

                </button>

            </div>

            {/* CUSTOM RUBRIC LIST */}

            {!!customRubrics.length && (

                <div className='space-y-4'>

                {customRubrics.map(
                    (rubric, index) => (

                    <div
                        key={index}
                        className='bg-white border rounded-3xl p-5 flex items-start justify-between'
                    >

                        <div>

                        <h3 className='font-bold text-lg'>

                            {rubric.title}

                        </h3>

                        <p className='text-gray-600 mt-2 leading-relaxed'>

                            {rubric.description}

                        </p>

                        </div>

                        <button
                        onClick={() => {

                            const totalRubrics =
                            selectedRubrics.length +
                            customRubrics.length

                            if (totalRubrics <= 3) {

                            alert(
                                'Minimum 3 rubrics required'
                            )

                            return
                            }

                            setCustomRubrics(
                            (prev) =>
                                prev.filter(
                                (_, i) =>
                                    i !== index
                                )
                            )
                        }}
                        className='text-red-600 font-semibold'
                        >

                        Remove

                        </button>

                    </div>
                    )
                )}

                </div>
            )}

            </div>

        </div>
        


        {/* start the interview */}

        <div className='mt-10'>

          <button
            onClick={handleStart}
            disabled={
              loading ||
              !role ||
              !focusAreas
            }
            className='bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-10 py-5 rounded-2xl font-bold transition'
          >

            {loading
              ? 'Preparing Interview...'
              : 'Start Interview'}

          </button>

        </div>

      </div>

    </div>
  )
}