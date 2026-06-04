'use client'

import { useEffect, useState, useRef} from 'react'

import { motion, AnimatePresence } from "framer-motion";
import { School, Video, HeartHandshake, GraduationCap, ArrowUpRight, Sparkles, Building2, Users } from 'lucide-react';

const educationalScenes = [
  {
    title: 'Physics — Lens Refraction',
    subtitle: 'Understanding how light bends through lenses',
    content: (
      <div className='relative w-full h-full overflow-hidden bg-gradient-to-br from-sky-100 via-cyan-50 to-white'>
        {/* LIGHT SOURCE */}
        <div className='absolute left-10 top-1/2 -translate-y-1/2'>
          <div className='w-5 h-5 rounded-full bg-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.8)]' />
        </div>

        {/* LIGHT RAYS */}
        <div className='absolute left-14 top-1/2 w-44 h-[2px] bg-yellow-300' />

        <div className='absolute left-[220px] top-1/2 -translate-y-1/2'>
          {/* LENS */}
          <div className='relative w-16 h-40 rounded-full border border-cyan-300 bg-cyan-200/30 backdrop-blur-sm' />
        </div>

        {/* REFRACTED RAYS */}
        <div className='absolute left-[280px] top-[45%] w-40 h-[2px] bg-yellow-300 rotate-[20deg]' />
        <div className='absolute left-[280px] top-[55%] w-40 h-[2px] bg-yellow-300 -rotate-[20deg]' />

        {/* LABEL */}
        <div className='absolute bottom-6 left-6'>
          <div className='px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg'>
            <div className='text-sm font-semibold text-zinc-900'>
              Convex Lens Refraction
            </div>
          </div>
        </div>
      </div>
    )
  },

  {
    title: 'Chemistry — Molecular Bonding',
    subtitle: 'Visualizing atoms forming chemical compounds',
    content: (
      <div className='relative w-full h-full overflow-hidden bg-gradient-to-br from-emerald-100 via-green-50 to-white'>
        {/* MOLECULES */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='relative w-72 h-72'>
            {/* CENTER */}
            <div className='absolute left-1/2 top-1/2 w-16 h-16 rounded-full bg-emerald-500 -translate-x-1/2 -translate-y-1/2 shadow-2xl animate-pulse' />

            {/* ORBITING ATOMS */}
            {[
              'top-0 left-1/2',
              'bottom-0 left-1/2',
              'left-0 top-1/2',
              'right-0 top-1/2'
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-12 h-12 rounded-full bg-green-400 shadow-xl -translate-x-1/2 -translate-y-1/2 animate-bounce`}
                style={{
                  animationDuration: `${2 + i * 0.3}s`
                }}
              />
            ))}

            {/* CONNECTIONS */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-52 h-52 rounded-full border border-emerald-300/40' />
            </div>
          </div>
        </div>

        {/* LABEL */}
        <div className='absolute bottom-6 left-6'>
          <div className='px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg'>
            <div className='text-sm font-semibold text-zinc-900'>
              Molecular Structure Formation
            </div>
          </div>
        </div>
      </div>
    )
  },

  {
    title: 'Biology — Cell Structure',
    subtitle: 'Interactive visualization of biological systems',
    content: (
      <div className='relative w-full h-full overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-white'>
        <div className='absolute inset-0 flex items-center justify-center'>
          {/* CELL */}
          <div className='relative w-72 h-72 rounded-full bg-pink-200/50 border border-pink-300 backdrop-blur-sm shadow-2xl'>
            {/* NUCLEUS */}
            <div className='absolute left-1/2 top-1/2 w-24 h-24 rounded-full bg-pink-500 -translate-x-1/2 -translate-y-1/2 animate-pulse' />

            {/* SMALL ORGANELLES */}
            {[
              'top-10 left-20',
              'bottom-12 left-16',
              'right-16 top-20',
              'right-20 bottom-16'
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-8 h-8 rounded-full bg-pink-400`}
              />
            ))}
          </div>
        </div>

        {/* LABEL */}
        <div className='absolute bottom-6 left-6'>
          <div className='px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg'>
            <div className='text-sm font-semibold text-zinc-900'>
              Human Cell Structure
            </div>
          </div>
        </div>
      </div>
    )
  },

  {
    title: 'Mathematics — Graph Visualization',
    subtitle: 'Animated mathematical concepts and equations',
    content: (
      <div className='relative w-full h-full overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-white'>
        {/* GRID */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]' />

        {/* GRAPH */}
        <svg
          viewBox='0 0 400 300'
          className='absolute inset-0 w-full h-full'
        >
          <path
            d='M20 260 Q 120 20 220 180 T 380 40'
            fill='none'
            stroke='#10b981'
            strokeWidth='5'
            strokeLinecap='round'
            className='animate-pulse'
          />
        </svg>

        {/* EQUATION */}
        <div className='absolute top-8 right-8 px-4 py-2 rounded-2xl bg-white/90 shadow-lg text-zinc-900 font-medium'>
          y = ax² + bx + c
        </div>

        {/* LABEL */}
        <div className='absolute bottom-6 left-6'>
          <div className='px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg'>
            <div className='text-sm font-semibold text-zinc-900'>
              Graph & Equation Visualization
            </div>
          </div>
        </div>
      </div>
    )
  }
]

const WORDS = [
  "E = mc²",
  "Photosynthesis",
  "Light energy",
  "F = ma",
  "Carbon dioxide",
  "Chlorophyll",
  "Glucose",
  "Oxygen",
];

const WORD_POSITIONS = [
  { top: "8%", left: "5%" },
  { top: "14%", left: "22%" },
  { top: "10%", left: "42%" },
  { top: "18%", left: "62%" },
  { top: "12%", left: "82%" },

  { top: "38%", left: "10%" },
  { top: "48%", left: "28%" },
  { top: "44%", left: "50%" },
  { top: "52%", left: "70%" },
  { top: "40%", left: "86%" },
];



const MORPH_STAGES = ["particles", "sun", "plant", "seed"];
// Premium cinematic timing configurations
// Add "as const" here to force TypeScript to recognize it as a strict cubic-bezier tuple
const transitionConfig = { 
  duration: 1.2, 
  ease: [0.16, 1, 0.3, 1] as const 
};

// new


// ROTATING CONTENT
const tiers = [
  {
    id: 1,
    title: 'Teachers',
    description:
      'Create AI-powered educational videos, quizzes, presentations and classroom-ready learning resources instantly.',
    icon: <GraduationCap size={40} strokeWidth={2.2} />,
  },

  {
    id: 2,
    title: 'Institutes',
    description:
      'Scale content production across departments with centralized AI infrastructure for modern digital classrooms.',
    icon: <Building2 size={40} strokeWidth={2.2} />,
  },

  {
    id: 3,
    title: 'Students',
    description:
      'Deliver engaging visual learning experiences with adaptive educational content and AI-assisted support.',
    icon: <Users size={40} strokeWidth={2.2} />,
  },
]




export default function StudentHomepage() {
    const [activePreview, setActivePreview] = useState(0)
    const [activeScene, setActiveScene] = useState(0)
    const [phase, setPhase] = useState<'idle' | 'pulse' | 'video'>('idle')
    const [stage, setStage] = useState(0);
    const [morphIndex, setMorphIndex] = useState(0);
    const videoRef = useRef<HTMLDivElement | null>(null)
    const nextSectionRef = useRef<HTMLElement | null>(null)

    const [hasAutoScrolled, setHasAutoScrolled] = useState(false)


    const [currentTime, setCurrentTime] = useState(0);
    const totalDuration = 20; // 20-second simulated continuous video loop

  // Continuous realistic video player timeline progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => (prev >= totalDuration ? 0 : prev + 0.05));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Track narrative states fluidly using explicit time windows
   let currentStage = "question";
  if (currentTime > 4 && currentTime <= 9) currentStage = "blueprint";
  if (currentTime > 9 && currentTime <= 12) currentStage = "rendering";
  if (currentTime > 12) currentStage = "animation";

    // next section scroll
    useEffect(() => {
      if (stage === 3 && !hasAutoScrolled) {
        setHasAutoScrolled(true)
        const timer = setTimeout(() => {
          if (nextSectionRef.current) {
            const rect = nextSectionRef.current.getBoundingClientRect()

            const targetY =
              window.scrollY +
              rect.top - window.innerHeight * 0.58

            requestAnimationFrame(() => {
              window.scrollTo({
                top: targetY,
                behavior: 'smooth'
              })
            })

            
          }
        }, 12000)

        return () => clearTimeout(timer)
      }
    }, [stage])

    // ref

    useEffect(() => {
      if (stage === 3 && videoRef.current) {
        videoRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }, [stage])

    // ____________
    
    
      useEffect(() => {
        if (stage === 3) {
            const interval = setInterval(() => {
            setMorphIndex((prev) => (prev + 1) % MORPH_STAGES.length);
            }, 2200);
    
            return () => clearInterval(interval);
        }
        }, [stage]);
    
      useEffect(() => {
        const t1 = setTimeout(() => setStage(1), 1500); // activate
        const t2 = setTimeout(() => setStage(2), 3500); // dissolve
        const t3 = setTimeout(() => setStage(3), 5500); // video
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }, []);
    

    useEffect(() => {
    let t: any

    const loop = () => {
        setPhase('idle')

        t = setTimeout(() => {
        setPhase('pulse')

        t = setTimeout(() => {
            setPhase('video')

            t = setTimeout(() => {
            loop()
            }, 3500)

        }, 1200)

        }, 5000)
    }

    loop()

    return () => clearTimeout(t)
    }, [])

    useEffect(() => {
    const interval = setInterval(() => {
        setActiveScene((prev) => (prev + 1) % educationalScenes.length)
    }, 2500)

    return () => clearInterval(interval)
    }, [])

    useEffect(() => {
      const interval = setInterval(() => {
        setActivePreview((prev) => (prev + 1) % 4)
      }, 2000)

      return () => clearInterval(interval)
    }, [])


    // new 
    const [index, setIndex] = useState(0);

  // Automatically cycle through the three user tiers every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tiers.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentTier = tiers[index]

  return (
    <div className='min-h-screen bg-white text-zinc-900 '>
      {/* BACKGROUND */}
      <div className='fixed inset-0 -z-10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_30%)]' />

        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px]' />
      </div>

      {/* NAVBAR */}
      <header className='sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl'>
        <div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-semibold'>
              S
            </div>

            <div>
              <h1 className='font-semibold text-lg'>SmartStudent</h1>
              <p className='text-sm text-zinc-500'>
                Smarter tools for modern education
              </p>
            </div>
          </div>

          <nav className='hidden md:flex items-center gap-8 text-sm text-zinc-600'>
            <a href='#features' className='hover:text-emerald-600 transition'>
              Product
            </a>

            <a href='#workflow' className='hover:text-emerald-600 transition'>
              Workflow
            </a>

            <a href='#technology' className='hover:text-emerald-600 transition'>
              Technology
            </a>

            <a href='#vision' className='hover:text-emerald-600 transition'>
              Vision
            </a>
          </nav>

          <div className='flex items-center gap-4'>
            <button className='hidden md:block text-sm text-zinc-600 hover:text-zinc-900 transition'>
              Login
            </button>

            <button className='px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-[0_8px_20px_rgba(16,185,129,0.18)]'>
              Book Demo
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="w-full min-h-[140vh] bg-white relative overflow-hidden flex flex-col pb-20">
      
        {/* HEADER */}
        <div className="text-center pt-16 z-10 items-center">
            <h1 className="
              text-[72px]
              md:text-[60px]
              lg:text-[82px]
              font-extrabold
              tracking-tight
              text-emerald-600
              mb-6
              max-w-5xl
              mx-auto
              text-center
              leading-[0.95]
            ">
              Turn{" "}
              
              <span className="bg-gradient-to-r text-emerald-600 font-extrabold tracking-tighter font-weight-bolder">
                Textbooks
              </span>{" "}
              
              into Engaging{" "}
              
              <span className="text-slate-600 italic font-semibold">
                AI Videos
              </span>{" "}
              
              in Minutes.
            </h1>

        {/* Clear, Benefits-Driven Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          SmartStudent uses specialized video generation models to transform static 
          educational content into high-impact, interactive video lessons. 
          Scale your content creation effortlessly.
        </p>
        </div>

        {/* CTA */}
        <div className='flex flex-wrap items-center justify-center gap-5 mt-4 relative z-20'>
            <button className='px-7 py-4 rounded-2xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition shadow-[0_10px_30px_rgba(16,185,129,0.2)]'>
                Watch Demo
            </button>

            <button className='px-7 py-4 rounded-2xl border border-zinc-200 bg-white hover:border-emerald-300 hover:text-emerald-700 transition'>
                How It Works
            </button>
        </div>

        {/* ANIMATION AREA */}
        <div className="flex-1 relative mt-24">
            
            {/* WORD LAYER */}
            <AnimatePresence>
              {stage < 2 &&
                WORDS.map((word, i) => {

                  const randomX =
                    i % 2 === 0 ? -40 : 40;

                  const randomY =
                    i % 3 === 0 ? -25 : 25;

                  return (
                    <motion.div
                      key={word}
                      initial={{
                        opacity: 0,
                        x: randomX,
                        y: randomY,
                        scale: 0.9,
                        filter: "blur(6px)"
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)"
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        y: -20
                      }}
                      transition={{
                        duration: 0.9,
                        delay: Math.random() * 1.2, // RANDOM ENTRY
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="absolute"
                      style={{
                        top: WORD_POSITIONS[i % WORD_POSITIONS.length].top,
                        left: WORD_POSITIONS[i % WORD_POSITIONS.length].left,
                      }}
                    >
                      <div
                        className="text-3xl md:text-4xl text-zinc-900 font-rainbow whitespace-nowrap"
                        style={{
                          transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 3}deg)`
                        }}
                      >
                        {word}
                      </div>
                    </motion.div>
                  );
                })}
            </AnimatePresence>

            {/* PARTICLE STAGE (fake particles) */}
            {stage === 2 &&
            Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-black rounded-full"
                initial={{
                    opacity: 0,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: window.innerWidth / 2,
                  y: window.innerHeight / 8,
                }}
                transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                }}
                />
            ))}

            {/* VIDEO REVEAL */}
            {stage === 3 && (
             
              
              <motion.div
                ref={videoRef}
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={transitionConfig}
                className="absolute inset-0 flex items-center justify-center p-4"
              >
                {/* GREEN SLANTED BACKGROUND */}
                <div
                  className="
                    absolute
                    right-[-6%]
                    top-[5%]
                    w-[120%]
                    h-[120%]
                    bg-emerald-500/50
                    overflow-hidden
                  "
                  style={{
    clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
  }}
                />
                {/* Premium, clean charcoal canvas background */}
                <motion.div className="w-[85%] max-w-5xl aspect-video rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden relative border border-neutral-800 bg-[#151819]">
                  
                  

                </motion.div>
              </motion.div>
                      )}
                  </div>
              </div>



    <section className="relative h-[160vh] bg-white">

      <div className="sticky top-0 h-screen flex items-center justify-center px-6">

        <div className="max-w-9xl">

          {/* LINE 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="
              text-[100px]
              md:text-[140px]
              lg:text-[90px]
              font-black
              tracking-tight
              leading-[1.05]
              text-slate-400
            "
          >
            Turning {"  "} 
            <span className="tracking-[0.1em] text-emerald-600">

              lectures
            </span>
          </motion.h1>

          {/* LINE 2 */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className="
              text-[60px]
              md:text-[70px]
              lg:text-[80px]
              font-black
              tracking-tight
              leading-[1.05]
              text-slate-500
            "
          >
            into <span className="italic text-zinc-900 ">engaging</span>
          </motion.h1>

          {/* LINE 3 */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className="
              text-[90px]
              md:text-[140px]
              lg:text-[84px]
              font-black
              leading-[2em]
              text-emerald-800
              tracking-[0.2em]
              bg-green-200/60
              px-8
              
            "
          >
            educational videos
          </motion.h1>

          {/* LINE 4 */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className="
              text-5xl
              md:text-7xl
              font-black
              tracking-tight
              leading-[1.05]
              text-slate-500
            "
          >
            with <span className="text-zinc-800 text-[90px]">AI.</span>
          </motion.h1>
          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 1.2,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className="
              mt-10
              max-w-3xl
              w-1/2
              text-lg
              md:text-xl
              leading-relaxed
              tracking-wide
              text-zinc-500
              font-medium
            "
          >
            Upload a lecture, topic, PDF, or syllabus and{' '}
            <span className="text-emerald-700 font-semibold">
              SmartStudent
            </span>{' '}
            automatically creates educational videos designed for modern
            classrooms and digital learning.
          </motion.p>

        </div>

      </div>
    </section>

    <section className="relative w-full py-32 overflow-hidden bg-white pt-2">
  
  {/* MAIN SHIFTED CONTAINER */}
      <div className="ml-[18%] pr-10">
        
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* =========================================
              CARD 1
          ========================================= */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-6 w-[520px] bg-[#f7f8fa] p-5 rounded-[28px] border border-blue-300 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
          >
            
            {/* VISUAL */}
            <div className="w-28 h-24 bg-[#1f4288] rounded-2xl p-3 flex flex-col justify-between overflow-hidden shrink-0 border border-neutral-800 relative">
              
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-[#1f4288]/90 blur-xl" />

              {/* TOP TRACK */}
              <div className="flex items-center gap-1 opacity-70 relative z-10">
                <span className="text-[6px] font-mono text-white w-5">
                  VIS
                </span>

                <motion.div
                  animate={{ width: [16, 28, 16] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                  className="h-2 bg-[#c3cbdc] rounded-sm"
                />

                <motion.div
                  animate={{ width: [30, 16, 30] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                  }}
                  className="h-2 bg-[#4179e8] rounded-sm"
                />
              </div>

              {/* AUDIO WAVE */}
              <div className="flex items-center gap-1 mt-2 relative z-10">
                <span className="text-[6px] font-mono text-white w-5">
                  AUD
                </span>

                <div className="flex items-center gap-[2px] h-8 px-2 rounded   bg-[#1f4288]">
                  {[1.2, 2.1, 1.5, 0.8, 2.4, 1.1, 1.7].map((speed, i) => (
                    <motion.div
                      key={i}
                      animate={{ scaleY: [0.3, 1.4, 0.3] }}
                      transition={{
                        repeat: Infinity,
                        duration: speed,
                        ease: 'easeInOut',
                      }}
                      className="w-[4px] h-full bg-[#c3cbdc] rounded-full origin-center"
                    />
                  ))}
                </div>
              </div>

              {/* SCAN LINE */}
              <motion.div
                animate={{ x: [-20, 120] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.6,
                  ease: 'linear',
                }}
                className="absolute top-0 bottom-0 w-[2px] bg-[#c3cbdc]/70 blur-[1px]"
              />
            </div>

            {/* CONTENT */}
            <div>
              <h4 className="text-[20px] font-black text-slate-900 tracking-tight">
                Automatic Voice Narration
              </h4>

              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                AI synchronizes narration directly with animated visual sequences
                for seamless educational storytelling.
              </p>
            </div>
          </motion.div>

          {/* =========================================
              CARD 2
          ========================================= */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-6 w-[520px] bg-[#f7f8fa] p-5 rounded-[28px] border border-emerald-300 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
          >
            
            {/* GRAPH */}
            <div className="w-28 h-24 bg-black rounded-2xl flex items-center justify-center overflow-hidden shrink-0 border border-neutral-800 relative">

              {/* GRID */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:8px_8px] opacity-10" />

              <svg
                viewBox="0 0 100 80"
                className="w-full h-full overflow-visible stroke-[1]"
              >
                <motion.path
                  animate={{
                    d: [
                      'M 18,55 L 40,22 L 62,46 L 82,18',
                      'M 18,42 L 40,35 L 62,24 L 82,35',
                      'M 18,55 L 40,22 L 62,46 L 82,18',
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'easeInOut',
                  }}
                  stroke="#00a86b"
                  fill="none"
                />

                <motion.circle
                  animate={{
                    cx: [40, 62, 82],
                    cy: [22, 46, 18],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'easeInOut',
                  }}
                  r="3"
                  fill="#d1fae5"
                />
              </svg>

              {/* FLOAT LABEL */}
              <div className="absolute top-2 left-2 text-[5px] font-mono text-white uppercase tracking-widest">
                Render Engine
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <h4 className="text-[20px] font-black text-slate-900 tracking-tight">
                AI-Generated Visuals
              </h4>

              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                SmartStudent turns textbook content into engaging visual learning experiences that are easier for students to understand.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            BOTTOM CARD
        ========================================= */}
        <div className="mt-8 ml-[8%]">
          
          <div className="flex items-center gap-6 w-[650px] bg-[#f7f8fa] p-5 rounded-[28px] border-2 border-purple-300 shadow-[0_20px_60px_rgba(0,0,0,0.05)] font-sans select-none overflow-hidden relative">

            {/* SOFT BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/40 via-transparent to-emerald-50/20" />

            {/* =======================================================
                LEFT VISUAL CONTAINER
            ======================================================= */}
            <div className="w-28 h-28 bg-[#d9aef0] rounded-2xl flex items-center justify-center shrink-0 border border-[#E0F7FA] relative overflow-hidden">

              {/* TECH GRID */}
              <div className="absolute inset-0 bg-[radial-gradient(#B2EBF2_1px,transparent_1px)] bg-[size:8px_8px] opacity-20" />

              {/* ROTATING RING */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: 'linear',
                }}
                className="absolute w-20 h-20 rounded-full border border-dashed border-cyan-300/30"
              />

              {/* INNER RING */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: 'linear',
                }}
                className="absolute w-12 h-12 rounded-full border border-cyan-200/40"
              />

              {/* ICON SWITCH */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTier.id}
                  initial={{
                    opacity: 0,
                    y: -20,
                    scale: 0.7,
                    rotate: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.7,
                    rotate: 10,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="relative z-10 text-cyan-600"
                >
                  {/* ICON GLOW */}
                  <div className="absolute inset-0 -m-4 bg-cyan-100 rounded-full blur-xl opacity-90" />

                  <div className="relative z-10">
                    {currentTier.icon}
                  </div>
                </motion.div>
              </AnimatePresence>

              
            </div>

            {/* =======================================================
                RIGHT CONTENT
            ======================================================= */}
            <div className="font-sans flex-1 h-28 flex flex-col justify-center relative z-10">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTier.id}
                  initial={{
                    opacity: 0,
                    x: 20,
                    filter: 'blur(6px)',
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                    filter: 'blur(6px)',
                  }}
                  transition={{
                    duration: 0.35,
                    ease: 'easeInOut',
                  }}
                >
                  
                  {/* TITLE */}
                  <h4 className="text-[24px] font-black text-slate-900 tracking-tight">
                    Built for {currentTier.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-md">
                    {currentTier.description}
                  </p>

                  {/* TAG */}
                  <div className="mt-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-[11px] font-semibold tracking-wide">
                      AI EDUCATION ENGINE
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>


    

<section className='relative pt-24 bg-zinc-50 overflow-hidden'>
      {/* Subtle background atmosphere glows */}
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 blur-3xl rounded-full pointer-events-none' />
      <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-green-100/30 blur-3xl rounded-full pointer-events-none' />

      <div className='relative max-w-7xl mx-auto px-6 z-10'>
        
        {/* Header Block */}
        <div className='text-center max-w-3xl mx-auto mb-20 mt-8'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200/80 bg-white text-emerald-700 text-sm font-medium mb-6 shadow-sm'>
            <span className='flex h-2 w-2 relative'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
            </span>
            WHO IT HELPS
          </div>

          <h2 className='text-6xl md:text-6xl font-semibold tracking-tight text-emerald-700 leading-tight'>
            Designed for the entire educational ecosystem.
          </h2>

          <p className='mt-6 text-lg text-zinc-600 leading-relaxed'>
            SmartStudent connects institutes, teachers, parents, and students through one integrated AI video learning platform.
          </p>
        </div>

        {/* Clean Light-Mode Ecosystem Grid Layout */}
        {/* Animated Ecosystem Layout */}
        {/* Animated Ecosystem Layout */}
<div className='relative my-24'>
  
  {/* SAME LINE GRID */}
  <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch'>
    
    {/* TEACHERS */}
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className='h-full'
    >
      <div className='h-full min-h-[260px] rounded-[24px] border border-emerald-200/80 bg-gradient-to-b from-emerald-50/40 to-white p-8 shadow-[0_12px_30px_rgba(16,185,129,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col'>
        
        <div className='w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-6'>
          <Video className='w-5 h-5' />
        </div>

        <h3 className='text-xl font-semibold text-zinc-900 mb-3'>
          Teachers
        </h3>

        <p className='text-zinc-600 leading-relaxed text-sm'>
          Reduce repetitive work with automatically generated study materials,
          presentations, and learning guides.
        </p>
      </div>
    </motion.div>

    {/* PARENTS */}
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className='h-full'
    >
      <div className='h-full min-h-[260px] rounded-[24px] border border-zinc-200 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col'>
        
        <div className='w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center mb-6'>
          <HeartHandshake className='w-5 h-5' />
        </div>

        <h3 className='text-xl font-semibold text-zinc-900 mb-3'>
          Parents
        </h3>

        <p className='text-zinc-600 leading-relaxed text-sm'>
          Track student progress and receive simple learning insights.
        </p>
      </div>
    </motion.div>

    {/* INSTITUTES */}
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className='h-full'
    >
      <div className='h-full min-h-[260px] rounded-[24px] border border-zinc-200 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col'>
        
        <div className='w-12 h-12 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-6'>
          <School className='w-5 h-5' />
        </div>

        <h3 className='text-xl font-semibold text-zinc-900 mb-3'>
          Institutes
        </h3>

        <p className='text-zinc-600 leading-relaxed text-sm'>
          Manage classrooms, teachers, and student learning from one platform.
        </p>
      </div>
    </motion.div>

    {/* STUDENTS */}
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className='h-full'
    >
      <div className='h-full min-h-[260px] rounded-[24px] border border-zinc-200 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col'>
        
        <div className='w-12 h-12 rounded-xl bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center mb-6'>
          <GraduationCap className='w-5 h-5' />
        </div>

        <h3 className='text-xl font-semibold text-zinc-900 mb-3'>
          Students
        </h3>

        <p className='text-zinc-600 leading-relaxed text-sm'>
          Learn through engaging AI-generated videos and interactive lessons.
        </p>
      </div>
    </motion.div>
  </div>
</div>
      </div>
    </section>




    <section className='relative py-24 overflow-hidden bg-white border-t border-zinc-100'>
  {/* BACKGROUND GLOW */}
  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/40 blur-3xl rounded-full pointer-events-none' />

  <div className='relative max-w-7xl mx-auto px-6'>
    
    {/* HEADER */}
    <div className='text-center max-w-3xl mx-auto mb-16'>
      <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium mb-6'>
        Empowering Academic Institutions
      </div>

      <h2 className='text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight'>
        Helping modern institutes create smarter learning experiences.
      </h2>

      <p className='mt-6 text-lg text-zinc-600 leading-relaxed'>
        SmartStudent powers AI-driven educational workflows for institutes, teachers, and students.
      </p>
    </div>

    {/* INSTITUTES */}
    <div className='relative'>
      {/* GRID */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {[
          'Sunsine Classes',
          'Concept Institute',
          'Synthesis Classes',
          'Innate Classes',
          'Eva Classes'
        ].map((item, index) => (
          <div
            key={item}
            className='group relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white px-6 py-8 flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)] hover:-translate-y-1 transition-all duration-500'
          >
            {/* HOVER GLOW */}
            <div className='absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            {/* ICON */}
            <div className='relative w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-green-400 flex items-center justify-center text-white text-2xl shadow-lg mb-5'>
              <School className='w-5 h-5' />
            </div>

            {/* NAME */}
            <div className='relative text-center'>
              <div className='text-lg font-semibold text-zinc-900 leading-snug'>
                {item}
              </div>

              <div className='mt-2 text-sm text-zinc-500'>
                Academic Partner
              </div>
            </div>

            {/* ACTIVE DOT */}
            <div className='absolute top-4 right-4 flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* BOTTOM STRIP */}
    <div className='mt-20 rounded-[36px] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-green-50 px-8 py-10 overflow-hidden relative'>
      
      {/* GLOW */}
      <div className='absolute right-0 top-0 w-72 h-72 bg-emerald-200/30 blur-3xl rounded-full' />

      <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8'>
        
        {/* LEFT */}
        <div className='max-w-2xl'>
          <div className='text-sm tracking-[0.25em] text-emerald-600 font-semibold mb-4'>
            BUILDING THE FUTURE OF LEARNING
          </div>

          <h3 className='text-3xl md:text-4xl font-semibold text-zinc-900 leading-tight'>
            AI-generated educational videos are becoming the new classroom experience.
          </h3>
        </div>

        {/* RIGHT */}
        <div className='flex items-center gap-6'>
          <div className='text-center'>
            <div className='text-4xl font-semibold text-emerald-600'>
              5+
            </div>

            <div className='text-sm text-zinc-500 mt-1'>
              Academic Institutions
            </div>
          </div>

          <div className='w-px h-16 bg-zinc-200' />

          <div className='text-center'>
            <div className='text-4xl font-semibold text-emerald-600'>
              AI
            </div>

            <div className='text-sm text-zinc-500 mt-1'>
              Learning Infrastructure
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* what makes us different */}

<section className='relative py-32 overflow-hidden bg-white'>
  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/40 blur-3xl rounded-full' />

  <div className='relative max-w-7xl mx-auto px-6'>
    <div className='grid lg:grid-cols-2 gap-20 '>
      {/* LEFT VISUAL */}
      <div>
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium mb-8'>
          WHAT MAKES US DIFFERENT
        </div>

        

        <p className='mt-8 text-xl text-zinc-600 leading-relaxed'>
          Educators spend countless hours creating repetitive learning material while students still struggle with engagement and personalization.
        </p>

        <p className='mt-6 text-xl text-zinc-600 leading-relaxed'>
          SmartStudent automates educational workflows and creates modern learning experiences designed for how students learn today.
        </p>
      </div>

      {/* RIGHT */}
      
      <div className='relative'>
        <div className='rounded-[36px] border border-zinc-200 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.05)]'>
          {/* OLD */}
          <div className='bg-gradient-to-br from-zinc-400 via-zinc-300 to-white p-8 border-b border-white/30'>
            <div className='text-sm tracking-[0.2em] text-zinc-800 font-semibold mb-6'>
              TRADITIONAL EDUCATION
            </div>

            <div className='space-y-5'>
              {[
                'Manual presentations',
                'Repetitive assessments',
                'Low engagement',
                'Fragmented tools'
              ].map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-4 text-zinc-600'
                >
                  <div className='w-3 h-3 rounded-full bg-zinc-800' />

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* NEW */}
          <div className='bg-gradient-to-br from-[#081b33] via-[#0d5c63] to-[#34d399] p-8'>
            <div className='text-sm tracking-[0.2em] text-emerald-600 font-semibold mb-6'>
              SMARTSTUDENT
            </div>

            <div className='space-y-5'>
              {[
                'AI-generated learning',
                'Interactive educational videos',
                'Real-time analytics',
                'Personalized experiences'
              ].map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-4 text-white'
                >
                  <div className='w-3 h-3 rounded-full bg-emerald-500' />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
     <section
      id="vision"
      className="py-36 border-t border-neutral-100 relative overflow-hidden bg-white"
    >
      {/* Background radial ambiance - lightened significantly to stop muddying text contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,172,193,0.04),transparent_50%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        {/* REFINED PILL: High-end monospaced metric badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#00ACC1]/15 bg-[#E0F7FA]/20 text-[11px] font-mono tracking-[0.25em] uppercase text-[#007A8C] mb-10 shadow-xs">
          • Built for the future of learning
        </div>

        {/* HEADLINE: Deep luxury slate with sharp brand anchor highlights */}
        <h2 className="text-5xl md:text-7xl font-black leading-[1.08] tracking-tight text-[#0F172A] max-w-4xl mx-auto">
          Modern education needs{" "}
          <span className="bg-gradient-to-r from-[#009A60] to-[#00ACC1] bg-clip-text text-transparent">
            faster and better
          </span>{" "}
          content creation.
        </h2>

        {/* SUBTITLE DESCRIPTION: Soft, perfectly balanced neutral slate */}
        <p className="mt-8 text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
          SmartStudent helps teachers and institutions create engaging
          learning experiences in minutes instead of days.
        </p>

        {/* INTERACTIVE CALL-TO-ACTIONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {/* Primary Action Button */}
          <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#009A60] to-[#00ACC1] text-white font-semibold text-sm hover:brightness-105 transition duration-300 shadow-[0_10px_25px_rgba(0,172,193,0.15)]">
            Book Demo
          </button>

          {/* Secondary Action Button */}
          <button className="px-8 py-3.5 rounded-xl border border-zinc-200 bg-white text-zinc-600 font-semibold text-sm hover:border-[#00ACC1]/40 hover:text-[#007A8C] transition duration-300 shadow-xs">
            Explore Product
          </button>
        </div>

      </div>
    </section>






           
   
 

    </div>
    
  )
}