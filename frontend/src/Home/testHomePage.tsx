'use client'

import { useEffect, useState, useRef} from 'react'

import { motion, AnimatePresence } from "framer-motion";
import { School, Video, HeartHandshake, GraduationCap, ArrowUpRight, Sparkles } from 'lucide-react';

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

const workflow = [
  {
    title: 'Upload textbook or notes',
    color: '#10b981',
  },
  {
    title: 'AI structures lessons',
    color: '#06b6d4',
  },
  {
    title: 'Videos are generated',
    color: '#8b5cf6',
  },
  {
    title: 'Interactive quizzes created',
    color: '#f43f5e',
  },
  {
    title: 'Presentations become ready',
    color: '#f59e0b',
  },
  {
    title: 'Student support activated',
    color: '#84cc16',
  },
  {
    title: 'Analytics track progress',
    color: '#ef4444',
  },
]

const MORPH_STAGES = ["particles", "sun", "plant", "seed"];
// Premium cinematic timing configurations
// Add "as const" here to force TypeScript to recognize it as a strict cubic-bezier tuple
const transitionConfig = { 
  duration: 1.2, 
  ease: [0.16, 1, 0.3, 1] as const 
};




export default function SmartStudentHomepage() {
    const [activePreview, setActivePreview] = useState(0)
    const [activeScene, setActiveScene] = useState(0)
    const [phase, setPhase] = useState<'idle' | 'pulse' | 'video'>('idle')
    const [stage, setStage] = useState(0);
    const [morphIndex, setMorphIndex] = useState(0);
    const [showBounceHint, setShowBounceHint] = useState(false)
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

  const progressPercent = (currentTime / totalDuration) * 100;

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

            // SHOW BOUNCE EFFECT AFTER SCROLL FINISHES
            setTimeout(() => {
              // subtle upward tension
              window.scrollBy({
                top: -70,
                behavior: 'smooth'
              })

              // smooth settle back down
              setTimeout(() => {
                window.scrollBy({
                  top: 22,
                  behavior: 'smooth'
                })
              }, 700)

            }, 1800)
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
    
    

    const features = [
      {
        title: 'Educational Videos',
        description:
          'Turn lectures, PDFs, and topics into engaging visual learning content.'
      },
      {
        title: 'Presentations',
        description:
          'Generate clean teaching presentations instantly from your material.'
      },
      {
        title: 'Quizzes & Notes',
        description:
          'Create quizzes, summaries, transcripts, and learning resources automatically.'
      }
    ]

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
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-600 mb-6 max-w-3xl mx-auto text-center leading-tight">
              Turn{" "}
              
              <span className="bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
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
                {/* Premium, clean charcoal canvas background */}
                <motion.div className="w-[85%] max-w-5xl aspect-video rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden relative border border-neutral-800 bg-[#151819]">
                  
                  {/* VISUAL STAGES CONTROLLER */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-10">
                    <AnimatePresence mode="wait">
                      
                      {/* =========================================
                          STAGE 1: THE USER'S QUESTION (0s - 4s)
                      ========================================== */}
                      {currentStage === "question" && (
                        <motion.div
                          key="view-question"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={transitionConfig}
                          className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center"
                        >
                          <div className="text-[10px] text-blue-400 font-mono tracking-[0.3em] uppercase mb-4">
                            Step 1: Type a question
                          </div>
                          
                          <div className="text-xl md:text-3xl font-light text-neutral-100 max-w-2xl font-serif italic border-b border-neutral-800 pb-6 mb-4">
                            "How does a rocket defy gravity to launch into space?"
                          </div>

                          <div className="text-xs text-neutral-400 font-mono bg-neutral-900/60 border border-neutral-800 px-4 py-2 rounded-full">
                            💡 Our AI is turning this sentence into a video custom-made for you...
                          </div>
                        </motion.div>
                      )}

                      {/* =========================================
                          STAGE 2: THE VISUAL BLUEPRINT (4s - 9s)
                      ========================================== */}
                      {currentStage === "blueprint" && (
                        <motion.div
                          key="view-blueprint"
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 1 }}
                          transition={transitionConfig}
                          className="absolute inset-0 flex flex-col justify-center items-center p-8"
                        >
                          <div className="text-[10px] text-amber-400 font-mono tracking-[0.3em] uppercase mb-6">
                            Step 2: AI Sketches a Blueprint
                          </div>

                          {/* Clean, minimalist blueprint layout */}
                          <div className="w-64 h-48 border border-dashed border-amber-500/30 rounded-2xl flex flex-col items-center justify-between p-4 relative bg-neutral-950/40 shadow-inner">
                            <div className="w-12 h-20 border-2 border-neutral-500 rounded-t-full relative flex flex-col justify-around p-2">
                              <div className="w-full h-1 bg-amber-500/40 rounded animate-pulse" />
                              <div className="w-full h-1 bg-amber-500/40 rounded animate-pulse" />
                            </div>
                            <div className="w-16 h-8 border-t-0 border-2 border-neutral-600 rounded-b-lg flex justify-around items-end">
                              <div className="w-2 h-4 bg-red-400/30 rounded-t" />
                              <div className="w-2 h-4 bg-red-400/30 rounded-t" />
                            </div>

                            <div className="absolute top-4 left-4 text-[9px] font-mono text-neutral-500">
                              [Structure: Rocket Body]
                            </div>
                            <div className="absolute bottom-4 right-4 text-[9px] font-mono text-neutral-500">
                              [Force: Upward Thrust]
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* =========================================
                          STAGE 3: THE TRANSITION CLOUD (9s - 12s)
                      ========================================== */}
                      {currentStage === "rendering" && (
                        <motion.div
                          key="view-render"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 bg-[#181c19] flex flex-col items-center justify-center z-30"
                        >
                          {/* Thick smooth gray-white smoke blanketing everything */}
                          <motion.div 
                            animate={{ scale: [0.95, 1.2, 0.95], rotate: [0, 6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,240,240,0.12)_0%,#0f1211_100%)] mix-blend-screen"
                          />
                          
                          <div className="text-center font-mono z-40 animate-pulse">
                            <div className="text-neutral-200 tracking-[0.4em] text-xs uppercase mb-1">
                              Generating Lesson Video...
                            </div>
                            <div className="text-[9px] text-neutral-500 uppercase tracking-widest">
                              Assembling interactive canvas
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* =========================================
                          STAGE 4: THE COMPLETED VIDEO LESSON (12s - 20s)
                      ========================================== */}
                      {currentStage === "animation" && (
                        <motion.div
                          key="view-animation"
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={transitionConfig}
                          className="absolute inset-0 bg-[#121617] p-8 flex items-center justify-center"
                        >
                          <div className="w-full h-full border border-neutral-800 rounded-xl relative overflow-hidden bg-neutral-950/20 p-6 flex flex-col justify-between">
                            
                            {/* The moving graphic loop */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <motion.div 
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                className="flex flex-col items-center"
                              >
                                {/* Rocket Ship Body */}
                                <div className="w-10 h-20 bg-neutral-200 rounded-t-full shadow-lg relative flex flex-col items-center justify-center">
                                  <div className="w-4 h-4 rounded-full bg-cyan-500 border-2 border-white" />
                                </div>
                                
                                {/* Interactive Flashing Engine Fire */}
                                <motion.div 
                                  animate={{ scaleY: [1, 1.6, 1], opacity: [0.8, 1, 0.8] }}
                                  transition={{ repeat: Infinity, duration: 0.2 }}
                                  className="w-6 h-12 bg-gradient-to-t from-transparent via-amber-500 to-red-500 origin-top rounded-b-full shadow-[0_10px_20px_rgba(239,68,68,0.5)]"
                                />
                              </motion.div>
                            </div>

                            {/* Clean Visual Gauges (No complex math labels) */}
                            <div className="flex justify-between items-start z-10 w-full font-mono">
                              <div className="bg-neutral-900/90 border border-neutral-700 p-3 rounded-lg text-[10px] text-neutral-300 backdrop-blur-sm shadow-md">
                                <p className="text-emerald-400 font-bold tracking-wider mb-2">LIVE LESSON STATS</p>
                                <p>🚀 Launch Speed: <span className="text-white font-bold">24,000 mph</span></p>
                                <p>🔥 Action: <span className="text-amber-400">Downward Thrust</span></p>
                              </div>

                              <div className="bg-neutral-900/90 border border-neutral-700 p-3 rounded-lg text-[10px] text-neutral-300 backdrop-blur-sm shadow-md text-right">
                                <p className="text-cyan-400 font-bold tracking-wider mb-1">LEARNING BLOCK</p>
                                <p className="text-neutral-400 max-w-[150px] leading-relaxed">
                                  Every action has an equal and opposite reaction!
                                </p>
                              </div>
                            </div>

                            <div className="z-10 font-mono text-[10px] text-neutral-300 max-w-sm bg-neutral-900/80 px-4 py-2.5 rounded border border-neutral-800 mx-auto text-center shadow-lg">
                              💡 <span className="text-emerald-400 font-bold">Key Concept:</span> The fire pushing <span className="text-red-400">down</span> forces the rocket to shoot <span className="text-emerald-400">up</span>.
                            </div>

                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>

                  {/* TOP BRAND HEADER OVERLAY */}
                  <div className="absolute top-5 left-6 right-6 z-40 flex justify-between items-center select-none font-mono pointer-events-none">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-200 uppercase">
                        AI Video-Textbook Engine
                      </span>
                      <span className="text-[8px] tracking-widest text-neutral-500 uppercase">
                        Text to Interactive Explainer
                      </span>
                    </div>
                    <div className="px-2.5 py-1 rounded border border-neutral-700 bg-neutral-900/80 text-[8px] text-neutral-400 uppercase tracking-widest font-bold backdrop-blur-sm">
                      {currentStage === "question" && "01 // Question Input"}
                      {currentStage === "blueprint" && "02 // Structuring Concepts"}
                      {currentStage === "rendering" && "03 // Generating Assets"}
                      {currentStage === "animation" && "04 // Final Interactive Video"}
                    </div>
                  </div>

                  {/* MEDIA PLAYER TIME DOCK OVERLAY */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#151819] via-[#151819]/95 to-transparent p-6 pt-20 z-40">
                    
                    {/* Continuous Video Slider Track */}
                    <div className="w-full h-[3px] bg-neutral-800 rounded-full overflow-hidden relative mb-5 cursor-pointer">
                      <div 
                        className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-white font-mono">
                      <div className="flex items-center gap-4">
                        <button className="w-9 h-9 rounded-full border border-neutral-700 bg-neutral-900 text-white flex items-center justify-center text-[10px]">
                          ||
                        </button>
                        <div className="text-[9px] text-neutral-400 tracking-widest uppercase">
                          Video Timeline Progress: <span className="text-white font-bold">{progressPercent.toFixed(0)}%</span>
                        </div>
                      </div>
                      
                      <div className="text-[9px] tracking-[0.15em] text-neutral-400 uppercase font-bold">
                        {currentStage === "question" && "Reading user text prompt..."}
                        {currentStage === "blueprint" && "Mapping educational components..."}
                        {currentStage === "rendering" && "Creating animation layers..."}
                        {currentStage === "animation" && "Generated Interactive Lesson"}
                      </div>
                    </div>
                  </div>

                </motion.div>
              </motion.div>
                      )}
                  </div>
              </div>

    <AnimatePresence>
      {showBounceHint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0]
          }}
          exit={{ opacity: 0 }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 1.5
            },
            opacity: {
              duration: 0.5
            }
          }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
        
        </motion.div>
      )}
    </AnimatePresence>

     {/* =========================
        SECTION 1 — AI VIDEO GENERATION
        ========================= */}

        <section
  ref={nextSectionRef}
  className='relative py-32 overflow-hidden bg-white pt-12'
>
  {/* BACKGROUND GLOW */}
  <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/60 blur-3xl rounded-full' />

  <div className='relative max-w-7xl mx-auto px-6'>
    <div className='grid lg:grid-cols-2 gap-16 xl:gap-24 items-center'>
      
      {/* LEFT (Remains exactly as it is) */}
      <div>
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium mb-8'>
          AI EDUCATIONAL VIDEO GENERATION
        </div>

        <h2 className='text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.05]'>
          Turn lectures into engaging educational videos with AI.
        </h2>

        <p className='mt-8 text-xl text-zinc-600 leading-relaxed max-w-2xl'>
          Upload a lecture, topic, PDF, or syllabus and SmartStudent automatically creates educational videos designed for modern classrooms and digital learning.
        </p>

        {/* SUPPORTING FEATURES */}
        <div className='mt-10 space-y-4'>
          {[
            'AI-generated educational videos',
            'Automatic voice narration & visuals',
            'Presentations, quizzes & transcripts included',
            'Built for institutes, teachers, and students'
          ].map((item) => (
            <div key={item} className='flex items-center gap-4'>
              <div className='w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-semibold'>
                ✓
              </div>
              <span className='text-zinc-700 text-lg'>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-12 flex items-center gap-4'>
          <button className='px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium shadow-[0_15px_40px_rgba(16,185,129,0.25)] hover:scale-[1.02] transition-all duration-300'>
            Experience SmartStudent
          </button>

          <button className='px-7 py-4 rounded-2xl border border-zinc-200 bg-white text-zinc-700 font-medium hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300'>
            Watch Demo
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: THE CINEMATIC GENERATIVE VIEWPORT */}
      <div className="relative w-full h-[600px] flex items-center justify-center [perspective:1500px]">
        
        {/* Floating Peripheral Glass Card 1: Audio/Voice Track */}
        <div className="absolute top-8 left-0 z-30 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-[0_20px_40px_rgba(0,0,0,0.06)] animate-[drift-slow_7s_ease-in-out_infinite]">
          <div className="flex gap-0.5 items-end h-3 w-4">
            <span className="w-0.5 h-full bg-emerald-500 rounded-full animate-[pulse-bar_0.6s_ease-in-out_infinite_staggered]" />
            <span className="w-0.5 h-3/4 bg-emerald-500 rounded-full animate-[pulse-bar_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 h-1/2 bg-emerald-500 rounded-full animate-[pulse-bar_0.5s_ease-in-out_infinite_staggered]" />
          </div>
          <span className="text-xs font-mono font-medium text-zinc-800 tracking-tight">🎙️ Synthesizing Voiceover...</span>
        </div>

        {/* Floating Peripheral Glass Card 2: Interactive Nodes */}
        <div className="absolute bottom-8 right-2 z-30 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-zinc-950 text-white border border-zinc-800 shadow-[0_25px_50px_rgba(0,0,0,0.15)] animate-[drift-fast_6s_ease-in-out_infinite]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono tracking-wider text-zinc-400">Embedding Interactive Quiz</span>
        </div>

        {/* MAIN CINEMATIC ENGINE PLAYER */}
        <div className="relative w-full aspect-video rounded-[32px] bg-zinc-950 p-2 shadow-[0_45px_100px_rgba(16,185,129,0.2)] border border-zinc-800/80 [transform:rotateX(10deg)_rotateY(-14deg)_rotateZ(4deg)] overflow-hidden group">
          
          {/* Internal Video Clip Canvas Container */}
          <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-zinc-900">
            
            {/* THE AI MATRIX BACKGROUND: Raw Code/Syllabus Generation Layer */}
            <div className="absolute inset-0 bg-zinc-950 font-mono text-[9px] text-emerald-500/40 p-6 leading-relaxed select-none overflow-hidden opacity-100">
              <div className="space-y-1">
                <p className="text-zinc-500">// INITIALIZING RAW SYLLABUS TEXT CONVERSION...</p>
                <p className="text-emerald-400">import {'{ VideoEngine, NeuralRender }'} from 'smartstudent-core';</p>
                <p>const source = "Lecture_04_Molecular_Biology.pdf";</p>
                <p className="text-zinc-500">{"{"} status: <span className="text-amber-400 animate-pulse">"rendering"</span>, core_model: "v2.0_cinematic" {"}"}</p>
                <p>Vector3D.mapMesh('cell_membrane', {'{ fidelity: "high" }'});</p>
                <p className="text-emerald-400">Timeline.injectTrack('voiceover_en_neutral');</p>
                <p>Generating frames 048 to 920... [OK]</p>
                <p className="text-zinc-500">// EXTRACTING TOPIC WORKFLOW KEYWORDS...</p>
                <p className="text-cyan-400">Keywords matched: ["Mitosis", "ATP Synthesis", "Cytoplasm"]</p>
              </div>
            </div>

            {/* THE HIGH-FIDELITY VIDEO OVERLAY (Revealed by the Scan Bar) */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden mask-reveal-effect">
              {educationalScenes[activeScene] ? (
                <div className="w-full h-full transition-all duration-500 transform scale-100">
                  {educationalScenes[activeScene].content}
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 flex items-center justify-center">
                  {/* High-end decorative geometric visualization loop placeholder */}
                  <div className="relative w-44 h-44 rounded-full border-4 border-dashed border-emerald-500/20 flex items-center justify-center animate-spin [animation-duration:20s]">
                    <div className="w-28 h-28 rounded-full border-2 border-dotted border-emerald-400/40 flex items-center justify-center animate-ping" />
                  </div>
                </div>
              )}
              {/* Dark vignette tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
            </div>

            {/* THE LIVE NEON HORIZONTAL SCANNING BAR */}
            <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_30px_#10b981] z-20 animate-[scan-sweep_5s_linear_infinite]" />

            {/* CONTEXT SPECIFIC HUD INFO BOX */}
            <div className="absolute bottom-4 left-4 z-20 px-4 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white max-w-[280px]">
              <div className="text-[10px] font-mono tracking-widest text-emerald-400 font-semibold uppercase">ACTIVE RENDER</div>
              <div className="text-xs font-medium mt-0.5 truncate">{educationalScenes[activeScene]?.title || "Cellular Energy Production"}</div>
            </div>

            {/* GEN ENGINE METRIC TAG */}
            <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-[9px] font-mono text-zinc-400 tracking-wider">
              FPS: <span className="text-emerald-400 font-bold">60.00</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</section>

      

{/* =========================
   SECTION 2 — WHO IT HELPS
========================= */}

<section className='relative py-24 bg-zinc-50 overflow-hidden'>
      {/* Subtle background atmosphere glows */}
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 blur-3xl rounded-full pointer-events-none' />
      <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-green-100/30 blur-3xl rounded-full pointer-events-none' />

      <div className='relative max-w-7xl mx-auto px-6 z-10'>
        
        {/* Header Block */}
        <div className='text-center max-w-3xl mx-auto mb-20'>
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
<div className='relative h-[720px] md:h-[520px]'>

  {/* CENTER LEFT CARD */}
  <motion.div
    initial={{
      x: 0,
      y: 40,
      scale: 0.8,
      opacity: 0,
      zIndex: 20,
    }}
    whileInView={{
      x: '-110%',
      y: 0,
      scale: 1,
      opacity: 1,
    }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: true }}
    className='absolute left-1/2 top-0 -translate-x-1/2 w-full md:w-[320px]'
  >
    {/* TEACHERS CARD */}
    <div className='relative rounded-[24px] border border-emerald-200/80 bg-gradient-to-b from-emerald-50/40 to-white p-8 shadow-[0_12px_30px_rgba(16,185,129,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col justify-between'>
      
      <div>
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
    </div>
  </motion.div>

  {/* CENTER RIGHT CARD */}
  <motion.div
    initial={{
      x: 0,
      y: 40,
      scale: 0.8,
      opacity: 0,
      zIndex: 20,
    }}
    whileInView={{
      x: '10%',
      y: 0,
      scale: 1,
      opacity: 1,
    }}
    transition={{
      duration: 1,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: true }}
    className='absolute left-1/2 top-0 -translate-x-1/2 w-full md:w-[320px]'
  >
    {/* PARENTS CARD */}
    <div className='relative rounded-[24px] border border-zinc-200 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 transition-all duration-300'>
      
      <div>
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
    </div>
  </motion.div>

  {/* LEFT OUTER CARD */}
  <motion.div
    initial={{
      x: 0,
      y: 20,
      scale: 0.7,
      opacity: 0,
      filter: 'blur(8px)',
      zIndex: 10,
    }}
    whileInView={{
      x: '-220%',
      y: 40,
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
    }}
    transition={{
      duration: 1.1,
      delay: 0.55,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: true }}
    className='absolute left-1/2 top-0 -translate-x-1/2 w-full md:w-[320px]'
  >
    {/* INSTITUTES CARD */}
    <div className='relative rounded-[24px] border border-zinc-200 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 transition-all duration-300'>
      
      <div>
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
    </div>
  </motion.div>

  {/* RIGHT OUTER CARD */}
  <motion.div
    initial={{
      x: 0,
      y: 20,
      scale: 0.7,
      opacity: 0,
      filter: 'blur(8px)',
      zIndex: 10,
    }}
    whileInView={{
      x: '120%',
      y: 40,
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
    }}
    transition={{
      duration: 1.1,
      delay: 0.7,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{ once: true }}
    className='absolute left-1/2 top-0 -translate-x-1/2 w-full md:w-[320px]'
  >
    {/* STUDENTS CARD */}
    <div className='relative rounded-[24px] border border-zinc-200 bg-white p-8 shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 transition-all duration-300'>
      
      <div>
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
    </div>
  </motion.div>
</div>
      </div>
    </section>

{/* =========================
   SECTION 3 — WHY IT MATTERS
========================= */}

<section className='relative py-32 overflow-hidden bg-white'>
  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/40 blur-3xl rounded-full' />

  <div className='relative max-w-7xl mx-auto px-6'>
    <div className='grid lg:grid-cols-2 gap-20 items-center'>
      {/* LEFT VISUAL */}
      <div className='relative'>
        <div className='rounded-[36px] border border-zinc-200 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.05)]'>
          {/* OLD */}
          <div className='bg-zinc-50 p-8 border-b border-zinc-200'>
            <div className='text-sm tracking-[0.2em] text-zinc-500 font-semibold mb-6'>
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
                  <div className='w-3 h-3 rounded-full bg-zinc-400' />

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* NEW */}
          <div className='bg-white p-8'>
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
                  className='flex items-center gap-4 text-zinc-800'
                >
                  <div className='w-3 h-3 rounded-full bg-emerald-500' />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium mb-8'>
          WHY IT MATTERS
        </div>

        <h2 className='text-5xl md:text-6xl font-semibold tracking-tight text-emerald-900 leading-tight'>
          Education infrastructure is {" "}
          <span className='text-emerald-600'>

           breaking.
          </span>
        </h2>

        <p className='mt-8 text-xl text-zinc-600 leading-relaxed'>
          Educators spend countless hours creating repetitive learning material while students still struggle with engagement and personalization.
        </p>

        <p className='mt-6 text-xl text-zinc-600 leading-relaxed'>
          SmartStudent automates educational workflows and creates modern learning experiences designed for how students learn today.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* WHY NOW */}
      <section className='relative py-28 border-t border-zinc-100 bg-white overflow-hidden'>
      
      {/* 1. Pattern Background Layer
        Uses mix-blend-mode to make the doodles exceptionally soft and premium.
      */}
      <div 
        className='absolute inset-0 opacity-20 pointer-events-none'
        style={{
          backgroundImage: `url(/assets/lineart_bg.avif)`, 
          backgroundSize: '460px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* 2. Clean Light Gradient Mask Layer 
        Transitions from a crisp, structured grey/emerald tint at the top to clear white at the bottom.
      */}
      <div className='absolute inset-0 bg-gradient-to-b from-zinc-100/50 via-zinc-50/20 to-white pointer-events-none' />

      {/* Content Container */}
      <div className='relative max-w-7xl mx-auto px-6 z-10'>
        <div className='grid lg:grid-cols-2 gap-20 items-start'>
          
          <div>
            <div className='text-sm uppercase tracking-[0.25em] text-emerald-600 mb-6 font-medium'>
              Why SmartStudent
            </div>

            <h2 className='text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-emerald-700'>
              Creating educational content should not take days.
            </h2>
          </div>

          <div className='space-y-8 text-lg text-zinc-600 leading-relaxed pt-2'>
            <p>
              Teachers and institutions spend countless hours creating
              presentations, quizzes, notes, and videos manually.
            </p>

            <p>
              Most educational tools are disconnected, repetitive, and hard
              to scale across classrooms and institutions.
            </p>

            <p>
              SmartStudent brings everything together into one smooth
              experience.
            </p>

            <p>
              One lecture can instantly become a complete learning experience
              with videos, quizzes, presentations, notes, and student support.
            </p>
          </div>

        </div>
      </div>
    </section>

     
      {/* WORKFLOW */}
       
      

      {/* FEATURES */}
      <section
        id='features'
        className='py-32 border-t border-zinc-100'
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20'>
            <div className='max-w-3xl'>
              <div className='text-sm uppercase tracking-[0.25em] text-emerald-600 mb-6 font-medium'>
                Everything in one place
              </div>

              <h2 className='text-5xl font-semibold leading-tight tracking-tight'>
                Create videos, quizzes, presentations, and notes together.
              </h2>
            </div>

            <p className='text-lg text-zinc-600 max-w-xl'>
              Instead of switching between multiple tools, SmartStudent helps
              educators create complete learning experiences from one place.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {features.map((feature) => (
              <div
                key={feature.title}
                className='rounded-[32px] border border-zinc-200 bg-gradient-to-br from-white to-emerald-50/40 p-8 shadow-[0_10px_40px_rgba(16,185,129,0.06)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] transition duration-300'
              >
                <div className='w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mb-8'>
                  ✦
                </div>

                <h3 className='text-2xl font-semibold mb-5'>
                  {feature.title}
                </h3>

                <p className='text-zinc-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* =========================
   TRUST / INSTITUTES SECTION
========================= */}

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




      {/* CTA */}
      <section
        id='vision'
        className='py-36 border-t border-zinc-100 relative overflow-hidden'
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_40%)]' />

        <div className='relative max-w-5xl mx-auto px-6 text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-sm text-emerald-700 font-medium mb-10'>
            Built for the future of learning
          </div>

          <h2 className='text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight'>
            Modern education needs faster and better content creation.
          </h2>

          <p className='mt-10 text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto'>
            SmartStudent helps teachers and institutions create engaging
            learning experiences in minutes instead of days.
          </p>

          <div className='flex flex-wrap justify-center gap-5 mt-14'>
            <button className='px-8 py-4 rounded-2xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition shadow-[0_10px_30px_rgba(16,185,129,0.18)]'>
              Book Demo
            </button>

            <button className='px-8 py-4 rounded-2xl border border-zinc-200 bg-white hover:border-emerald-300 hover:text-emerald-700 transition'>
              Explore Product
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}