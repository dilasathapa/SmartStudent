import {
  ArrowRight,
  Mic,
  Brain,
  Briefcase,
  BarChart3,
  MessageSquare,
  Trophy,
  Sparkles,
  Play,
} from "lucide-react";
import LandingNavbar from "../LandingNavbar";
import { Footer } from "../Footer";
import { motion } from "framer-motion";


const interviewfeatures = [
  {
    title: "Realistic Interview Simulations",
    description:
      "Practice in an interview environment designed to mirror real-world conversations. Engage naturally, think critically, and build confidence through immersive AI-powered interactions.",
    points: [
      "Conversational AI interviews",
      "Voice-based interactions",
      "Dynamic follow-up questions",
      "Goal-oriented interview scenarios",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "Intelligent, Goal-Oriented Questioning",
    description:
      "Every interview is tailored to understand your background, evaluate your knowledge, and challenge your thinking. The AI adapts the conversation to uncover strengths and identify growth opportunities.",
    points: [
      "Adaptive questioning",
      "Knowledge assessment",
      "Critical thinking evaluation",
      "Personalized interview flow",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "Personalized Feedback & Growth Insights",
    description:
      "Receive detailed insights into your communication, confidence, technical understanding, and problem-solving abilities, along with clear recommendations for improvement.",
    points: [
      "Performance breakdown",
      "Strength & weakness analysis",
      "Actionable recommendations",
      "Progress tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];


type FeatureProps = {
  title: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
};

export function FeatureSection({
  title,
  description,
  points,
  image,
  reverse,
}: FeatureProps) {
  return (
    <section className=" flex items-center">
      <div
        className={` mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 pb-20 gap-24 items-start ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Sticky Image */}
        <div className="sticky top-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[32px] border border-zinc-200 shadow-2xl"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-[600px] object-cover"
            />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? -80 : 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="pt-20"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-medium">
            EzPrep
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
            {title}
          </h2>

          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            {description}
          </p>

          <div className="mt-10 space-y-5">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 text-zinc-700"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function EZPrepPage() {
  const features = [
    {
      icon: <Brain size={28} />,
      title: "AI Technical Interviews",
      description:
        "Practice role-specific technical interviews powered by AI.",
    },
    {
      icon: <MessageSquare size={28} />,
      title: "HR Simulations",
      description:
        "Improve communication, confidence, and behavioral responses.",
    },
    {
      icon: <Mic size={28} />,
      title: "Voice-Based Interviews",
      description:
        "Experience realistic interview conversations and evaluations.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Performance Analytics",
      description:
        "Track improvement across multiple interview attempts.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Placement Readiness",
      description:
        "Prepare for internships and full-time opportunities.",
    },
    {
      icon: <Trophy size={28} />,
      title: "Skill Benchmarking",
      description:
        "Understand where you stand compared to peers.",
    },
  ];

  const workflow = [
    "Start Interview",
    "Answer Questions",
    "AI Evaluation",
    "Feedback Report",
    "Improve Skills",
  ];

  return (
    <>
    <LandingNavbar />
    <div className="bg-white text-black overflow-hidden">

      {/* Hero */}
      <section className="relative mt-24 flex flex-col items-center m-32  mb-4">


        <div className="relative max-w-7xl mx-auto px-6 pb-24">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-10">
            <Sparkles className="w-4 h-4 text-emerald-700" />{" "}
            <span className="text-sm text-emerald-700">
              AI-Powered Interview Preparation Platform
            </span>
          </div>

          <div className="gap-16 items-center">

            <div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Interview Better. 
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold leading-3 pb-6">Perform Smarter.</h1>

              <p className="mt-6 text-xl text-zinc-400 max-w-5xl">
                Experience a smarter way to prepare for interviews. From dynamic questioning and intelligent evaluation to personalized improvement plans, EzPrep helps learners develop the skills, confidence, and readiness needed for modern hiring processes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2">
                  Start Practicing
                  <ArrowRight size={18} />
                </button>

                <button className="border border-[#069668] text-emerald-700 px-8 py-4 rounded-xl flex items-center gap-2">
                  <Play size={18} />
                  Book Demo
                </button>
              </div>

            </div>

            

          </div>

        </div>
        <div>
          <h3 className="max-w-5xl text-center text-3xl font-bold text-zinc-400">
            Practice Interviews. Build Confidence. Get Ready.
          </h3>
          
        </div>

      </section>

      {/* Problem */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-5xl font-bold leading-normal">
              Most Students Face Real Interviews Without Practice
            </h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.0,
              ease: "easeOut",
            }}
            className="space-y-6 text-zinc-700 font-semibold text-lg pt-6"
          >
            <p>
              Technical interviews test more than knowledge.
            </p>

            <p>
              Confidence, communication, and structured thinking
              play a major role in success.
            </p>

            <p>
              EZPrep helps students build these skills before
              the actual interview.
            </p>
          </motion.div>


        </div>

      </section>

      {/* Workflow */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            How EZPrep Works
          </h2>

        </div>

        <div className="grid md:grid-cols-5 gap-6 mt-20">
          {workflow.map((step, index) => (
            <motion.div
              key={step}
              initial={{
                opacity: 0,
                y: 150,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.18,
                ease: "easeOut",
              }}
              className="
                relative
                h-[240px]
                overflow-hidden
                rounded-3xl
                border
                border-[#0c376ed9]/10
                bg-white
                shadow-sm
                flex
                items-center
                justify-center
              "
            >
              {/* Giant Number */}

              <motion.div
                initial={{
                  opacity: 1,
                  scale: 1.8,
                }}
                whileInView={{
                  opacity: 0.2,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.18 + 0.15,
                }}
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  text-[140px]
                  font-black
                  text-[#f0c33e]
                  select-none
                  pointer-events-none
                "
              >
                {`0${index + 1}`}
              </motion.div>

              {/* Content */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.18 + 0.45,
                }}
                className="
                  relative
                  z-10
                  text-center
                  px-5
                "
              >
                <h3 className="font-semibold text-lg leading-snug">
                  {step}
                </h3>

                <p className="mt-3 text-sm text-zinc-500">
                  {index === 0 &&
                    "Start your interview journey in a low-pressure environment where every question is tailored to help you grow and succeed."}

                  {index === 1 &&
                    "Respond to technical, behavioral, and role-specific questions through an interactive interview experience."}

                  {index === 2 &&
                    "Our AI analyzes your responses for communication, confidence, technical depth, and problem-solving ability."}

                  {index === 3 &&
                    "Receive detailed insights, performance scores, strengths, and areas for improvement after every session."}

                  {index === 4 &&
                    "Use personalized recommendations and practice sessions to continuously enhance your interview readiness."}
                </p>
              </motion.div>

              {/* Bottom Progress Line */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "100%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.18 + 0.3,
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  bg-[#06460fd9]
                "
              />
            </motion.div>
          ))}
        </div>

      </section>

        {/* interview features */}
      <section className="relative py-32">
        <div className="text-center mb-32">
          <h2 className="text-5xl font-bold tracking-tight text-zinc-900">
            Everything You Need to Improve Interview Performance
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-zinc-600">
            From realistic practice and intelligent questioning to personalized
            feedback, EzPrep helps candidates prepare with confidence and purpose.
          </p>
        </div>

        {interviewfeatures.map((feature, index) => (
          <FeatureSection
            key={feature.title}
            {...feature}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>

       <section className='relative min-h-screen overflow-hidden flex items-center justify-center px-6 bg-gradient-to-b from-[#125236] via-[#578A3E] to-[#CAA027]'>


        {/* BACKGROUND GLOW */}
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full' />
          <div className='absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-400/20 blur-3xl rounded-full' />
        </div>

        <div className='relative z-10 text-center max-w-7xl mx-auto'>

          {/* LABEL */}
          <div className='inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm tracking-[0.3em] uppercase text-emerald-200 mb-14'>
            WHY EZPREP
          </div>

          {/* ========================================= */}
      {/* ROW 1 */}
      {/* ========================================= */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='flex justify-center'
      >
        {'Transforming'.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.02,
              delay: index * 0.08,
            }}
            className='relative inline-flex items-center'
          >
            <span className='text-[70px] md:text-[110px] lg:text-[140px] font-black tracking-tight leading-[0.95] text-white'>
              {char}
            </span>

            {/* ACTIVE TYPING CURSOR */}
            {index === 'Transforming'.length - 1 && (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  times: [0, 0.3, 0.6, 1],
                }}
                className='absolute -right-3 w-[5px] h-[70px] md:h-[110px] lg:h-[135px] bg-white rounded-full'
              />
            )}
          </motion.span>
        ))}
      </motion.div>

      {/* ========================================= */}
      {/* ROW 2 */}
      {/* ========================================= */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='flex justify-center mt-2'
      >
        {'potential into'.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.02,
              delay: 1.2 + index * 0.07,
            }}
            className='relative inline-flex items-center'
          >
            <span className='text-[34px] md:text-[70px] lg:text-[100px] font-black tracking-tight leading-[1] text-white'>
              {char === ' ' ? '\u00A0' : char}
            </span>

            {/* ACTIVE CURSOR */}
            {index === 'potential into'.length - 1 && (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  times: [0, 0.3, 0.6, 1],
                }}
                className='absolute -right-2 w-[5px] h-[45px] md:h-[80px] lg:h-[95px] bg-white rounded-full'
              />
            )}
          </motion.span>
        ))}
      </motion.div>

      {/* ========================================= */}
      {/* ROW 3 */}
      {/* ========================================= */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='flex justify-center mt-2'
      >
        {'performance.'.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.02,
              delay: 2.8 + index * 0.08,
            }}
            className='relative inline-flex items-center'
          >
            <span className='text-[55px] md:text-[90px] lg:text-[120px] font-black italic tracking-tight leading-[1] text-emerald-200'>
              {char}
            </span>

            {/* ACTIVE CURSOR */}
            {index === 'breaking.'.length - 1 && (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  times: [0, 0.3, 0.6, 1],
                }}
                className='absolute -right-3 w-[5px] h-[60px] md:h-[100px] lg:h-[115px] bg-emerald-300 rounded-full'
              />
            )}
          </motion.span>
        ))}
      </motion.div>


        </div>
      </section>

<section className="max-w-7xl mx-auto px-6 py-32">
  <div className="text-center mb-20">
    <h2 className="text-5xl md:text-6xl font-bold">
      Everything You Need To Become
      <span className="text-[#EECD42]"> Interview Ready</span>
    </h2>

    <p className="mt-6 text-xl text-zinc-500 max-w-3xl mx-auto">
      Practice interviews, measure performance, identify skill gaps,
      and track your readiness for placements through a single
      AI-powered platform.
    </p>
  </div>

  <div className="grid lg:grid-cols-3 gap-8 items-stretch">

    {/* LEFT COLUMN */}

    <motion.div
      initial={{
        opacity: 0,
        x: -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
      className="space-y-8"
    >
      {/* AI Interviews */}

      <div
        className="
          bg-[#dbcc2a]
          border
          border-zinc-200
          rounded-3xl
          p-8
          h-[280px]
          flex
          flex-col
          justify-center
          shadow-sm
        "
      >
        <h3 className="text-2xl font-bold">
          AI Interviews
        </h3>

        <p className="mt-5 text-zinc-500 leading-relaxed">
          Practice realistic interview scenarios powered by AI and
          receive instant feedback on communication, technical depth,
          and confidence.
        </p>
      </div>

      {/* Voice Interviews */}

      <div
        className="
          bg-white
          border
          border-zinc-200
          rounded-3xl
          p-8
          h-[280px]
          flex
          flex-col
          justify-center
          shadow-sm
        "
      >
        <h3 className="text-2xl font-bold">
          Voice-Based Interviews
        </h3>

        <p className="mt-5 text-zinc-500 leading-relaxed">
          Simulate real interview conversations through natural voice
          interactions and improve your speaking confidence.
        </p>
      </div>
    </motion.div>

    {/* CENTER CARD */}

    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.9,
      }}
      className="
        bg-white
        border
        border-zinc-200
        rounded-[36px]
        overflow-hidden
        shadow-lg
      "
    >
      {/* IMAGE */}

      <div className="h-[340px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}

      <div className="p-10">
        <div
          className="
            inline-flex
            px-4
            py-2
            rounded-full
            bg-[#EECD42]/20
            text-[#B88A00]
            text-sm
            font-medium
          "
        >
          Placement Readiness
        </div>

        <h3 className="mt-6 text-3xl font-bold">
          Know Exactly Where You Stand
        </h3>

        <p className="mt-5 text-zinc-500 leading-relaxed">
          Measure your interview readiness through AI-driven
          assessments, detailed evaluations, and actionable insights
          designed to help you succeed in placements.
        </p>
      </div>
    </motion.div>

    {/* RIGHT COLUMN */}

    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        delay: 1,
      }}
      className="space-y-8"
    >
      {/* Analytics */}

      <div
        className="
          bg-white
          border
          border-zinc-200
          rounded-3xl
          p-8
          h-[280px]
          flex
          flex-col
          justify-center
          shadow-sm
        "
      >
        <h3 className="text-2xl font-bold">
          Performance Analytics
        </h3>

        <p className="mt-5 text-zinc-500 leading-relaxed">
          Gain detailed insights into strengths, weaknesses,
          communication skills, and overall interview performance.
        </p>
      </div>

      {/* Benchmarking */}

      <div
        className="
          bg-white
          border
          border-zinc-200
          rounded-3xl
          p-8
          h-[280px]
          flex
          flex-col
          justify-center
          shadow-sm
        "
      >
        <h3 className="text-2xl font-bold">
          Skill Benchmarking
        </h3>

        <p className="mt-5 text-zinc-500 leading-relaxed">
          Compare your performance against role expectations and
          identify the skills that require focused improvement.
        </p>
      </div>
    </motion.div>

  </div>
</section>

      

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-3 gap-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
          >
            {/* Number */}
            <motion.h3
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-6xl md:text-7xl font-bold text-[#0c376ed9]"
            >
              500+
            </motion.h3>

            {/* Line */}
            <div className="flex justify-center my-6">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="
                  w-64
                  h-px
                  origin-center
                  bg-gradient-to-r
                  from-transparent
                  via-[#0c376ed9]
                  to-transparent
                "
              />
            </div>

            {/* Content */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <h4 className="text-xl font-semibold">
                Interview Scenarios
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Practice diverse technical, behavioral, and role-specific interview situations.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
          >
            {/* Number */}
            <motion.h3
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-6xl md:text-7xl font-bold text-[#0c376ed9]"
            >
              360°
            </motion.h3>

            {/* Line */}
            <div className="flex justify-center my-6">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="
                  w-64
                  h-px
                  origin-center
                  bg-gradient-to-r
                  from-transparent
                  via-[#0c376ed9]
                  to-transparent
                "
              />
            </div>

            {/* Content */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <h4 className="text-xl font-semibold">
                Performance Feedback
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Gain comprehensive insights into communication, confidence, and technical skills.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
          >
            {/* Number */}
            <motion.h3
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-6xl md:text-7xl font-bold text-[#0c376ed9]"
            >
              95%
            </motion.h3>

            {/* Line */}
            <div className="flex justify-center my-6">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="
                  w-64
                  h-px
                  origin-center
                  bg-gradient-to-r
                  from-transparent
                  via-[#0c376ed9]
                  to-transparent
                "
              />
            </div>

            {/* Content */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <h4 className="text-xl font-semibold">
                Feedback Accuracy
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Receive detailed and consistent evaluations designed to highlight strengths and improvement areas.
              </p>
            </motion.div>
          </motion.div>

          

        

        </div>
      </section>

      {/* CTA */}
      <section className="">

        <div className=" bg-gradient-to-r from-[#dbcc2a] via-[#358f25] to-[#08842b] text-white p-12 md:p-20 text-center">

          <h2 className="text-4xl md:text-6xl font-bold">
            Build Interview Confidence Before Placement Season
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Practice, receive feedback, improve continuously,
            and walk into interviews with confidence.
          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold">
            Start Your First Mock Interview
          </button>

        </div>

      </section>
      <Footer />
    </div>
      </>
  );
}