import {
  ArrowRight,
  TrendingUp,
  FileText,
  Brain,
  Target,
  BarChart3,
  Sparkles,
  Play,
  ReceiptPoundSterling,
  BookCheckIcon,
  ClipboardMinus,
} from "lucide-react";
import LandingNavbar from "../LandingNavbar";
import { Footer } from "../Footer";
import { motion } from "framer-motion";
import type {Variants} from "framer-motion";

export default function SmartPapersPage() {

  const columnVariants: Variants = {
    hidden: {
    opacity: 0,
    rotateY: -75,
    x: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
    },
  },

  };

  const containerVariants : Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

  return (
    <>
    <LandingNavbar />
    <div className="bg-white text-black overflow-hidden">

      {/* Hero */}
      <section className="relative mt-24 flex flex-col items-center m-32  mb-4">

        

        <div className="relative max-w-7xl mx-auto px-6 pb-24">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <Sparkles className="w-4 h-4 text-emerald-800" />
            <span className="text-sm text-emerald-800">
              AI-Powered Exam Prediction Platform
            </span>
          </div>

          <div className="max-w-5xl items-center mt-10">

            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Smarter Predictions. 
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Better Preparation.
              </h1>

              <p className="mt-6 text-xl text-zinc-400">
                Powered by previous year papers, syllabus mapping,
                and AI-driven trend analysis, SmartPapers helps
                students focus on the topics most likely to appear
                in upcoming exams.
              </p>

              <div className="mt-10 flex gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl flex items-center gap-2">
                  Explore Predictions
                  <ArrowRight size={18} />
                </button>

                <button className="border border-[#069668] text-emerald-700 px-8 py-4 rounded-xl flex items-center gap-2">
                  <Play size={18} />
                  Watch Demo
                </button>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* report section */}
      <section className="py-6">
        <h1 className="text-5xl md:text-5xl font-bold leading-tight ml-20 mb-4">Discover what the data reveals</h1>
        <p className="border-zinc-400 border-2 mb-12 ml-20  max-w-2xl"></p>
        <div className=" bg-gradient-to-br from-[#0e2e63] via-[#1e684f] to-[#dff8ec] px-20 py-8">
          <h1 className="text-3xl font-bold text-white">From Past Papers to Future Preparation</h1>
          <div className="flex items-center gap-40 mt-4 ">
            
              <p className="text-lg text-zinc-300">
            Every prediction is supported by syllabus mapping,
            previous year paper analysis and trend identification.
            Explore detailed reports from past examinations.</p>
            <ClipboardMinus className="w-32 h-32 text-zinc-300" />
          </div>
          

          <button className="bg-white text-black px-8 py-4 rounded-xl flex items-center gap-2 font-semibold">
            Download Reports
          </button>
        </div>
      </section>

      {/* Problem */}
      

      <section className="mx-auto px-16 py-28 my-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start ">

          {/* LEFT SIDE - Static */}
          <div>
            <h2 className="text-6xl font-bold leading-tight text-zinc-400">
              Students Spend Too Much Time Studying Everything
            </h2>
          </div>

          {/* RIGHT SIDE - Animated */}
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
            className="space-y-6 text-zinc-700 font-semibold text-lg pt-10"
          >
            <p>
              Large syllabi and limited time make it difficult
              to prioritize preparation effectively.
            </p>

            <p>
              SmartPapers identifies high-value topics and helps
              students focus where it matters most.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Workflow */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            How SmartPapers Works
          </h2>

          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">
            Transform years of previous exam data into focused insights,
            topic predictions, and smarter preparation strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mt-20">
          {[
            "Previous Papers",
            "Pattern Analysis",
            "Weightage Mapping",
            "Prediction Engine",
            "Smart Papers",
          ].map((step, index) => (
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
                    "Collect and analyze years of previous examination papers."}

                  {index === 1 &&
                    "Identify recurring question trends and exam patterns."}

                  {index === 2 &&
                    "Map chapter-wise importance and marks distribution."}

                  {index === 3 &&
                    "Use AI models to predict high-probability exam topics."}

                  {index === 4 &&
                    "Generate focused practice papers for targeted preparation."}
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

      <section className='relative min-h-screen overflow-hidden flex items-center justify-center px-6 bg-gradient-to-b from-[#125236] via-[#578A3E] to-[#CAA027]'>


        {/* BACKGROUND GLOW */}
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full' />
          <div className='absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-400/20 blur-3xl rounded-full' />
        </div>

        <div className='relative z-10 text-center max-w-7xl mx-auto'>

          {/* LABEL */}
          <div className='inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm tracking-[0.3em] uppercase text-emerald-200 mb-14'>
            WHY SMARTPAPERS
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
        {`Exams Change.`.split('').map((char, index) => (
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
              {char === ' ' ? '\u00A0' : char}
            </span>

            {/* ACTIVE TYPING CURSOR */}
            {index === 'Exams Change.'.length - 1 && (
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
        {'Patterns'.split('').map((char, index) => (
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
            {index === 'Patterns'.length - 1 && (
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
        {`Don't.`.split('').map((char, index) => (
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
            {index ===  `Don't.`.length - 1 && (
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

      {/* bg-[#222222] */}

      {/* Features */}
      <section className=" mx-auto px-6 py-28 bg-slate-300/20">

        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            Built for smarter exam preparation
          </h2>

          <p className="mt-5 text-xl text-zinc-500 max-w-3xl mx-auto">
            Transform years of exam data into focused preparation,
            trend-driven insights and smarter revision strategies.
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-28">
  

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="grid lg:grid-cols-3 gap-6 items-stretch"
          >

            {/* ========================================================= */}
            {/* COLUMN 1 - FEATURED CARD */}
            {/* ========================================================= */}

            <motion.div
              variants={columnVariants}
              transition={{
                delay: 0,
              }}
              className="
                rounded-[32px]
                overflow-hidden
                border
                border-zinc-200
                bg-orange-300
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-500
              "
            >
              {/* Image */}

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />

                <img
                  src="https://media.istockphoto.com/id/1221807974/photo/questions-searching.jpg?s=612x612&w=0&k=20&c=EoQxPPtXOduvTQQazFeMYtTNrci3WYoRabSJ-C4zusg="
                  alt="PYQ Analysis"
                  className="w-full h-[320px] object-cover"
                />
              </div>

              {/* Content */}

              <div className="p-8 ">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <FileText size={24} />
                </div>

                <h3 className="mt-6 text-3xl font-bold">
                  PYQ Analysis
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  Analyze years of previous question papers to identify
                  recurring concepts, frequently asked topics and
                  examination patterns that matter most.
                </p>
              </div>
            </motion.div>

            {/* ========================================================= */}
            {/* COLUMN 2 */}
            {/* ========================================================= */}

            <div className="grid grid-rows-2 gap-6">

              <motion.div
                variants={columnVariants}
                transition={{
                  delay: 0.15,
                }}
                className="
                  h-full
                  rounded-[32px]
                  border
                  border-zinc-200
                  bg-yellow-200
                  p-8
                  flex flex-col
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500">
                  <TrendingUp size={24} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Topic Weightage
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  Understand which chapters contribute the most marks
                  and deserve greater focus during preparation.
                </p>
              </motion.div>

              <motion.div
                variants={columnVariants}
                transition={{
                  delay: 0.3,
                }}
                className="
                  h-full
                  rounded-[32px]
                  border
                  border-zinc-200
                  bg-white
                  p-8
                  flex flex-col
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <BarChart3 size={24} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Trend Intelligence
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  Discover topic frequency trends and changing board
                  examination patterns across multiple years.
                </p>
              </motion.div>

            </div>

            {/* ========================================================= */}
            {/* COLUMN 3 */}
            {/* ========================================================= */}

            <div className="grid grid-rows-2 gap-6">

              <motion.div
              variants={columnVariants}
              transition={{
                delay: 0.45,
              }}
                className="
                  h-full
                  rounded-[32px]
                  border
                  border-zinc-200
                  bg-white
                  p-8
                  flex flex-col
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Brain size={24} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  AI Prediction Engine
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  Generate likely exam questions using syllabus mapping,
                  historical patterns and AI-driven analysis.
                </p>
              </motion.div>

              <motion.div
                variants={columnVariants}
                transition={{
                  delay: 0.45,
                }}
                className="
                  h-full
                  rounded-[32px]
                  border
                  border-zinc-200
                  bg-yellow-200
                  p-8
                  flex flex-col
                  hover:shadow-xl
                  transition-all
                  duration-500
                "
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                  <Sparkles size={24} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Smart Practice Papers
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  Practice with AI-generated papers tailored to your
                  board, subject and examination pattern.
                </p>
              </motion.div>

            </div>

          </motion.div>
        </section>

      </section>

      {/* Stats */}
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
              10M+
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
                Questions Analyzed
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Built on a vast repository of previous year papers,
                exam questions and historical assessment data.
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
                Exam Patterns Studied
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Identifying trends, topic frequencies and recurring
              question structures across multiple examinations.
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
              100k+
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
                Students Supported
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Helping learners prepare with focused insights,
              predicted papers and smarter revision strategies.
              </p>
            </motion.div>
          </motion.div>

          

        

        </div>
      </section>

      {/* CTA */}
      <section className="">

        <div className=" bg-gradient-to-r from-[#dbcc2a] via-[#358f25] to-[#08842b] p-12 md:p-20 text-center">

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Study Smarter, Not Harder
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Let AI identify the topics and questions that deserve
            your attention before exam day.
          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold">
            Explore SmartPapers
          </button>

        </div>

      </section>
      <Footer />

    </div>
    </>
  );
}