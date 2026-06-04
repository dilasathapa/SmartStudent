'use client'

import { useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'

import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { School, Video, HeartHandshake, GraduationCap, ArrowUpRight, 
    Sparkles, Building2, Users, ChevronLeft, ChevronRight, Star, FileText, Brain } from 'lucide-react';
import { Footer } from './Footer';
import LandingNavbar from './LandingNavbar';
import EdustudioSection from './components/EdustudioSection';
import AIGurukulShowcase from './components/AIGurukulShowcase';
import SmartPapersShowcase from './components/SmartpapersShowcase';
import EzPrepShowcase from './components/EZPrepshowcase';


interface AnimatedCounterProps {
  value: string;
}

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

const points = [
  'Visual Learning Experiences',
  'Faster Content Creation',
  'Easier Concept Understanding',
  'Personalized Student Learning',
  'AI-powered Education',
  'One Upload, Everything',
  'Higher Student Engagement',
  'Scalable Learning Solutions'
]

const reviews = [
  {
    name: 'Aarav Sharma',
    role: 'Engineering Student',
    review:
      'SmartStudent helped me understand difficult physics concepts visually. The videos made learning much easier.',
  },
  {
    name: 'Priya Verma',
    role: 'NEET Aspirant',
    review:
      'The AI-generated explanations feel interactive and engaging. I spend much more time learning now.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Class 12 Student',
    review:
      'Complex chemistry topics became simple through animations and visuals. It feels modern and intuitive.',
  },
  {
    name: 'Sneha Kapoor',
    role: 'School Student',
    review:
      'I love how quickly lessons are converted into videos. Studying feels less stressful and more fun.',
  },
  {
    name: 'Aditya Singh',
    role: 'JEE Aspirant',
    review:
      'The visual learning experience keeps me focused. I can revise concepts much faster now.',
  },
]

// institutes
const institutes = [
  'Sunsine Classes',
  'Concept Institute',
  'Synthesis Classes',
  'Innate Classes',
  'Eva Classes',
  'Pioneer Academy',
  'Future Minds'
]
const scrollingInstitutes = [...institutes, ...institutes]


const stats = [
  {
    value: '78%',
    label: 'Faster lesson creation',
  },
  {
    value: '64%',
    label: 'Higher student engagement',
  },
  {
    value: '82%',
    label: 'Better visual retention',
  },
  {
    value: '57%',
    label: 'Reduced teacher workload',
  },
]

const ROTATING_PHRASES = [
  "educational videos",
  "concept learning",
  "learning experiences"
];


function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Extract digits and suffix (e.g., "68%" -> target: 68, suffix: "%")
  const numericTarget = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const isDecimal = value.includes('.');

  const motionValue = useMotionValue(0);
  
  // Format the output dynamically during the animation loop
  const rounded = useTransform(motionValue, (latest) => {
    const formattedNumber = isDecimal ? latest.toFixed(1) : Math.round(latest);
    return `${formattedNumber}${suffix}`;
  });

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, numericTarget, {
        duration: 2, // Animation duration in seconds
        ease: [0.16, 1, 0.3, 1], // Premium ease-out curve
      });
      return controls.stop;
    }
  }, [isInView, numericTarget, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}


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

// ecosystem

const ecosystemSteps = [
  {
    id: 1,
    title: "EduStudio",
    subtitle: "Transform content into AI-powered learning videos",
    color: "from-yellow-300 to-cyan-300",
  },
  {
    id: 2,
    title: "AI Gurukul",
    subtitle: "A modern learning platform for students",
    color: "from-green-300 to-emerald-300",
  },
  {
    id: 3,
    title: "SmartPapers",
    subtitle: "Generate assessments instantly",
    color: "from-yellow-300 to-green-300",
  },
  {
    id: 4,
    title: "ezPrep",
    subtitle: "AI-powered interview preparation",
    color: "from-cyan-300 to-blue-300",
  }
]

const showcaseComponents = [
  <EdustudioSection />,
  <AIGurukulShowcase />,
  <SmartPapersShowcase />,
  <EzPrepShowcase />
  
]



export default function StudentTest2page() {
    const [activePreview, setActivePreview] = useState(0)
    const [activeScene, setActiveScene] = useState(0)
    const [phase, setPhase] = useState<'idle' | 'pulse' | 'video'>('idle')
    const [stage, setStage] = useState(0);
    const [morphIndex, setMorphIndex] = useState(0);
    const videoRef = useRef<HTMLDivElement | null>(null)
    const nextSectionRef = useRef<HTMLElement | null>(null)

    // active status for ecosystem

    const [activeStep, setActiveStep] = useState(0)

    useEffect(() => {
    const handleScroll = () => {
        const section = document.getElementById("ecosystem-section")

        if (!section) return

        const rect = section.getBoundingClientRect()

        const progress =
        Math.min(
            Math.max(-rect.top / (section.offsetHeight - window.innerHeight), 0),
            1
        )

        const current = Math.min(
        ecosystemSteps.length - 1,
        Math.floor(progress * ecosystemSteps.length)
        )

        setActiveStep(current)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // rotating content

  // Auto-cycle phrases every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 2900);
    return () => clearInterval(interval);
  }, []);


    const [currentTime, setCurrentTime] = useState(0);
    const totalDuration = 20; // 20-second simulated continuous video loop
    // institutes scroll

    const [currentIndex, setCurrentIndex] = useState(1)
     const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % scrollingInstitutes.length)
    }, 2200)

    return () => clearInterval(interval)
    }, [isPaused])

    // count number 


    // reviews

   
  const containerRef = useRef<HTMLDivElement | null>(null)

  // AUTO SCROLL
  useEffect(() => {
    if (isPaused) return

    const container = containerRef.current

    const interval = setInterval(() => {
      if (container) {
        container.scrollLeft += 1

        // INFINITE LOOP
        if (
          container.scrollLeft >=
          container.scrollWidth / 2
        ) {
          container.scrollLeft = 0
        }
      }
    }, 15)

    return () => clearInterval(interval)
  }, [isPaused])

  // MANUAL SCROLL
  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return

    containerRef.current.scrollBy({
      left: direction === 'left' ? -420 : 420,
      behavior: 'smooth',
    })
  }


    // loop scroll

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % points.length)
    }, 2200)

    return () => clearInterval(interval)
    }, [])

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
      <LandingNavbar />

      {/* HERO */}
      <div className="w-full min-h-[140vh] bg-white relative overflow-hidden flex flex-col pb-20 pt-4">
      
        {/* HEADER */}
        <div className="text-center pt-16 z-10 items-center">
            <h1 className="
              text-[72px]
              md:text-[60px]
              lg:text-[82px]
              font-extrabold
              tracking-tight
              text-[#EECD42]
              mb-6
              max-w-5xl
              mx-auto
              text-center
              leading-[0.95]
            ">
              Beyond the{" "}
              
              <span className="bg-gradient-to-r text-black font-extrabold tracking-tighter font-weight-semibold">
                Blackboard. 
              </span>{" "}
              
              Beyond the{"  "}
              
              <span
                className="
                    bg-gradient-to-r 
                    from-[#dbcc2a]
                    via-[#39b822]
                    to-[#085e20]
                    bg-clip-text 
                    text-transparent 
                    font-bold
                    tracking-tighter
                "
                >
                Screen.
              </span>{" "}
            </h1>

        {/* Clear, Benefits-Driven Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          A unified digital environment that resolves late-night doubts, grades complex worksheets, and breathes visual life into everyday presentations.
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
                    bg-gradient-to-br from-[#f3faf8] via-[#06623b] to-[#fcf578] 

                    overflow-hidden
                  "
                  style={{
                    clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
                }}
                />
                {/* Premium, clean charcoal canvas background */}
                <motion.div className="w-[85%] max-w-5xl aspect-video rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden relative border border-neutral-800 bg-[#151819]">
                  {/* <video src="/assets/video_landing.mp4" autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"></video> */}
                  

                </motion.div>
              </motion.div>
                      )}
                  </div>
              </div>



    <section className="relative h-[160vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl w-full font-sans">

          {/* LINE 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[52px] md:text-[80px] lg:text-[105px] font-black tracking-tight leading-[1.05] text-slate-400"
          >
            Turning{" "}
            <span className="bg-gradient-to-r from-[#009A60] to-[#00ACC1] bg-clip-text text-transparent">
              lectures
            </span>
          </motion.h1>

          {/* LINE 2 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[42px] md:text-[65px] lg:text-[85px] font-black tracking-tight leading-[1.05] text-slate-400 mt-2"
          >
            into <span className="italic text-slate-800 ">engaging</span>
          </motion.h1>

          {/* LINE 3: THE 3D DICE FLIP CONTAINER */}
          <div 
            className="relative flex items-center min-h-[70px] md:min-h-[100px] lg:min-h-[130px] my-3 overflow-hidden bg-emerald-800 px-4"
            style={{ perspective: "1000px" }} // Gives the rotation real geometric 3D depth
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                // Dice physics: Enters from bottom tilted back (-90deg), exits top tilted forward (90deg)
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -50, rotateX: 90 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 120, 
                  damping: 14,
                  mass: 0.8
                }}
                style={{ transformOrigin: "center center -40px" }} // Offsets rotation axis backward like a real dice surface
                className="absolute text-[42px] md:text-[65px] lg:text-[90px] font-black tracking-tight leading-none text-white capitalize origin-center"
              >
                {ROTATING_PHRASES[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* LINE 4 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[42px] md:text-[65px] lg:text-[85px] font-black tracking-tight leading-[1.05] text-slate-400"
          >
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">AI.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mt-10 max-w-2xl text-base md:text-lg leading-relaxed text-slate-500 font-medium"
          >
            Upload a lecture, topic, PDF, or syllabus and{" "}
            <span className="text-[#007A8C] font-semibold">SmartStudent</span>{" "}
            automatically creates premium educational ecosystems tailored for modern classrooms.
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
              {/* <motion.div
                animate={{ x: [-20, 120] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.6,
                  ease: 'linear',
                }}
                className="absolute top-0 bottom-0 w-[2px] bg-[#c3cbdc]/70 blur-[1px]"
              /> */}
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
    REPLACED BOTTOM CARD: SMART EDITING TIMELINE
========================================= */}
<div className="mt-8 ml-[8%]">
  <div className="flex flex-col md:flex-row items-center gap-8 w-[720px] bg-[#f7f8fa] p-6 rounded-[28px] border border-slate-300 shadow-[0_20px_60px_rgba(0,0,0,0.03)] font-sans overflow-hidden relative group">
    
    {/* =======================================================
        LEFT VISUAL CONTAINER: MINI VIDEO TIMELINE ENGINE
    ======================================================= */}
    <div className="w-56 h-32 bg-slate-900 rounded-2xl flex flex-col justify-between p-3 shrink-0 border border-slate-800 relative overflow-hidden shadow-inner">
      {/* Subtle scanline background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]" />
      
      {/* 1. TIMELINE TOP BAR */}
      <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 z-10">
        <span className="text-[7px] font-mono text-slate-400 tracking-wider">SEQUENCE_01</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
        </div>
      </div>

      {/* 2. LIVE TRACKS LAYOUT */}
      <div className="flex flex-col gap-1.5 my-auto z-10">
        {/* Track A: B-Roll Media */}
        <div className="flex items-center gap-1">
          <span className="text-[5px] font-mono text-slate-500 w-6">MEDIA</span>
          <motion.div 
            animate={{ width: [60, 90, 60] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="h-2.5 bg-indigo-500/20 border border-indigo-400/40 rounded-sm flex items-center px-1"
          >
            <div className="w-full h-0.5 bg-indigo-400/60 rounded-full" />
          </motion.div>
        </div>

        {/* Track B: Dynamic Captions / Subtitles */}
        <div className="flex items-center gap-1">
          <span className="text-[5px] font-mono text-slate-500 w-6">TEXT</span>
          <div className="flex gap-1 w-full">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
              className="h-2.5 w-8 bg-emerald-500/30 border border-emerald-400/50 rounded-sm" 
            />
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
              className="h-2.5 w-14 bg-emerald-500/30 border border-emerald-400/50 rounded-sm" 
            />
          </div>
        </div>

        {/* Track C: Interactive Overlays */}
        <div className="flex items-center gap-1">
          <span className="text-[5px] font-mono text-slate-500 w-6">FX_MOD</span>
          <motion.div 
            animate={{ x: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="h-2.5 w-7 bg-amber-500/20 border border-amber-400/40 rounded-sm"
          />
        </div>
      </div>

      {/* 3. RUNNING TIMELINE CURSOR NEEDLE */}
      {/* <motion.div 
        animate={{ x: [24, 190, 24] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute top-6 bottom-0 w-[1.5px] bg-red-400 z-20 shadow-[0_0_8px_#f87171]"
      >
        <div className="w-1 h-1 bg-red-400 rotate-45 -ml-[1px] -mt-[2px]" />
      </motion.div> */}
    </div>

    {/* =======================================================
        RIGHT CONTENT DESCRIPTIONS
    ======================================================= */}
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <h4 className="text-[20px] font-black text-slate-900 tracking-tight">
          Intelligent Scene Sequencing
        </h4>
        <span className="px-2 py-0.5 rounded-md bg-slate-900 text-white font-mono text-[8px] tracking-widest scale-90">
          CORE_ENG
        </span>
      </div>

      <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-md">
        SmartStudent compiles generated audio tracks, visual slide motions, and active B-roll overlays onto a synchronized timeline automatically. <span className='text-black'>No manual editing required.</span> 
      </p>

      <div className="mt-4 flex gap-4 items-center">
        <span className="text-[11px] font-mono font-bold text-indigo-600 tracking-wider uppercase">
          ✦ 100% Automated Editing
        </span>
        {/* <span className="text-[11px] font-mono font-bold text-slate-400 tracking-wider uppercase">
          ✦ Auto-Subtitles Inc.
        </span> */}
      </div>
    </div>

  </div>
</div>
      </div>
    </section>

        <section className='relative min-h-screen bg-[#01686c] overflow-hidden flex flex-col items-center justify-center px-6 pt-32 pb-30 '>

            {/* TOP CONTENT */}
            <div className='relative z-10 text-center max-w-4xl mx-auto'>
                
                <div className='inline-flex items-center px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium tracking-[0.2em] uppercase'>
                Why SmartStudent
                </div>

                <h2 className='mt-8 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-white'>
                Built for the future of learning
                </h2>

                <p className='mt-8 text-lg md:text-xl leading-8 text-zinc-400 max-w-3xl mx-auto'>
                transforming traditional educational material into
                engaging AI-powered learning experiences.
                </p>
            </div>

            {/* TEXT ANIMATION */}
            <div className='relative mt-24 w-full max-w-6xl flex items-center justify-center overflow-hidden mb-40'>

                {/* TOP FADE */}
                <div className='absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#01686c] to-transparent z-20 pointer-events-none' />

                {/* BOTTOM FADE */}
                <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#01686c] to-transparent z-20 pointer-events-none' />

                {/* CENTER GLOW */}
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[120px] bg-emerald-100/30 blur-3xl rounded-full' />


                <div className='relative h-[420px] w-full flex items-center justify-center overflow-hidden'>

                {points.map((point, index) => {

                    let offset =
                    (index - activeIndex + points.length) % points.length

                    if (offset > points.length / 2) {
                    offset -= points.length
                    }

                    const y = offset * 110
                    const isActive = offset === 0

                    return (
                    <div
                        key={point}
                        className='absolute transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]'
                        style={{
                        transform: `translateY(${y}px) scale(${
                            isActive ? 1 : 0.88
                        })`,
                        opacity:
                            Math.abs(offset) === 0
                            ? 1
                            : Math.abs(offset) === 1
                            ? 0.35
                            : 0.12,
                        filter:
                            Math.abs(offset) === 0
                            ? 'blur(0px)'
                            : 'blur(2px)'
                        }}
                    >
                        <div
                        className={`
                            text-4xl md:text-6xl font-semibold tracking-tight text-center whitespace-nowrap transition-colors duration-700
                            ${
                            isActive
                                ? 'text-zinc-100'
                                : 'text-zinc-300'
                            }
                        `}
                        >
                        {point}
                        </div>
                    </div>
                    )
                })}
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
              {/* <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span> */}
              {/* <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span> */}
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
        {/* ECOSYSTEM CARDS */}
<div className='relative my-28 flex items-center justify-center overflow-hidden'>

  <div className='relative w-full max-w-7xl h-[320px]'>

   
   

     {/* institute */}
    <motion.div
      initial={{
        opacity: 0,
        x: 520,
        scale: 0.92
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1
      }}
      transition={{
        duration: 1,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      className='absolute left-0 top-0 w-1/4 px-3 z-10'
    >
             <div className='h-[260px] rounded-[28px] border border-purple-600 bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,0.06)]'>
        
        <div className='w-12 h-12 rounded-xl bg-purple-600 text-purple-100 border border-purple-600 flex items-center justify-center mb-6'>
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
     {/* teachers */}
    <motion.div
      initial={{
        opacity: 0,
        x: 160,
        scale: 0.85
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      className='absolute left-1/4 top-0 w-1/4 px-3 z-30'
    >
     

      <div className='h-[260px] rounded-[28px] border border-emerald-500 bg-gradient-to-b from-emerald-50/50 to-white p-8 shadow-[0_20px_50px_rgba(16,185,129,0.08)]'>
        
        <div className='w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-6'>
          <Video className='w-5 h-5' />
        </div>

        <h3 className='text-xl font-semibold text-zinc-900 mb-3'>
          Teachers
        </h3>

        <p className='text-zinc-600 leading-relaxed text-sm'>
          Reduce repetitive work with automatically generated study materials.
        </p>
      </div>
    </motion.div>


    {/* parents */}
    <motion.div
      initial={{
        opacity: 0,
        x: -160,
        scale: 0.85
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1
      }}
      transition={{
        duration: 0.9,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      className='absolute left-2/4 top-0 w-1/4 px-3 z-30'
    >
 

         <div className='h-[260px] rounded-[28px] border border-red-600 bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,0.06)]'>
        
        <div className='w-12 h-12 rounded-xl bg-red-600 text-red-100 border border-red-600 flex items-center justify-center mb-6'>
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

    {/* STUDENTS */}
    <motion.div
      initial={{
        opacity: 0,
        x: -520,
        scale: 0.92
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1
      }}
      transition={{
        duration: 1,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      className='absolute right-0 top-0 w-1/4 px-3 z-10'
    >
      <div className='h-[260px] rounded-[28px] border border-orange-600 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)]'>
        
        <div className='w-12 h-12 rounded-xl bg-orange-600 text-orange-100 border border-orange-600 flex items-center justify-center mb-6'>
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

    <section
            id="ecosystem-section"
            className="relative h-[500vh] bg-gradient-to-br from-[#f3f055] via-[#F8FAFC] to-[#15c054] pb-28 "
            >
            <div className="text-center pt-20 mb-18">
    
                <span
                    className="
                    inline-block
                    px-5 py-2
                    rounded-full
                    bg-emerald-50
                    border border-emerald-200
                    text-emerald-700
                    text-sm
                    font-medium
                    "
                >
                    The SmartStudent Ecosystem
                </span>
    
                <div className="max-w-4xl mx-auto">
                    <h2
                    className="
                        mt-8
                        text-6xl md:text-7xl
                        font-semibold
                        tracking-tight
                        text-[#3e543f]
                        text-center
                        leading-tight
                    "
                    >
                    One platform powering
                    <br />
                    modern education.
                    </h2>
                </div>
    
            </div>
            <div className="sticky top-0 h-screen">
    
                <div className="grid grid-cols-12 h-full gap-2 ml-8">
    
                    {/* TIMELINE */}
    
                    <div className="col-span-3 flex items-center">
                        <div className="relative">
    
                            {ecosystemSteps.map((step, index) => {
    
                                const isActive = index === activeStep
                                const isCompleted = index < activeStep
    
                                return (
                                <div
                                    key={step.id}
                                    className="flex items-center gap-5 mb-12"
                                >
                                    <div
                                    className={`
                                        w-5 h-5 rounded-full
                                        transition-all duration-500
    
                                        ${
                                        isCompleted
                                            ? "bg-green-500"
                                            : isActive
                                            ? "bg-cyan-500 scale-150"
                                            : "bg-zinc-300"
                                        }
                                    `}
                                    />
    
                                    <div>
                                    <h3
                                        className={`
                                        transition-all duration-500
    
                                        ${
                                            isActive
                                            ? "text-2xl text-zinc-900 font-bold"
                                            : "text-zinc-500"
                                        }
                                        `}
                                    >
                                        {step.title}
                                    </h3>
                                    </div>
                                </div>
                                )
                            })}
                            </div>
    
                    </div>
    
                    {/* SHOWCASE */}
    
                    <div className="col-span-9 flex items-center mt-20 p-4">
                        <motion.div
                            key={activeStep}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="
                                w-full
                                h-[700px]
                                mb-24
                                bg-gradient-to-br
                                from-white
                                via-[#FCFFFE]
                                to-[#F6FFFC]
                                border border-[#DDF5EE]
                                shadow-[0_30px_80px_rgba(0,0,0,0.06)]
                                overflow-hidden
                                relative
                                
                            "
                            >
                            <AnimatePresence mode="wait">
    
                            <motion.div
                                key={activeStep}
                                initial={{
                                opacity: 0,
                                x: 60,
                                filter: 'blur(8px)',
                                }}
                                animate={{
                                opacity: 1,
                                x: 0,
                                filter: 'blur(0px)',
                                }}
                                exit={{
                                opacity: 0,
                                x: -60,
                                filter: 'blur(8px)',
                                }}
                                transition={{
                                duration: 0.45,
                                }}
                                className="h-full"
                            >
                                {showcaseComponents[activeStep]}
                            </motion.div>
    
                            </AnimatePresence>
                        </motion.div>
                    </div>
    
                </div>
    
      
    
            </div>
        </section>

{/* how it works */}
    {/* <section className="py-12 sm:py-20 lg:py-24 bg-[#FAFAFA] ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-amber-500 font-bold text-sm sm:text-lg mb-3 sm:mb-4 uppercase tracking-wider">How it Works</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">Three Steps to Excellence</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 relative">
            <div className="flex flex-col items-center text-center group relative">
              <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-8 border-4 border-white dark:border-slate-800 shadow-xl z-10">
                <School className="w-12 h-12" />
              </div>
              <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] border-t-2 border-dashed border-emerald-200 dark:border-slate-700"></div>
              <h4 className="text-2xl font-bold mb-4">1. Onboard</h4>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm">Setup your institute profile, import student data, and define multi-tenant roles within minutes.</p>
            </div>
            <div className="flex flex-col items-center text-center group relative">
              <div className="w-24 h-24 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500 mb-8 border-4 border-white dark:border-slate-800 shadow-xl z-10">
                <FileText className="w-12 h-12" />
              </div>
              <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] border-t-2 border-dashed border-emerald-200 dark:border-slate-700"></div>
              <h4 className="text-2xl font-bold mb-4">2. Create</h4>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm">Use AI to generate curriculum-aligned questions, quizzes, and personalized learning materials.</p>
            </div>
            <div className="flex flex-col items-center text-center group relative">
              <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 mb-8 border-4 border-white dark:border-slate-800 shadow-xl z-10">
                <Brain className="w-12 h-12" />
              </div>
              <h4 className="text-2xl font-bold mb-4">3. Learn</h4>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm">Students engage with dynamic content while AI tracks progress and provides real-time feedback.</p>
            </div>
          </div>
        </div>
      </section> */}

    <section className='relative py-28 overflow-hidden bg-white border-t border-zinc-100'>

      {/* BACKGROUND GLOW */}
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/40 blur-3xl rounded-full pointer-events-none' />

      <div className='relative max-w-7xl mx-auto px-6'>

        {/* HEADER */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 mb-16'>

          <div className='max-w-2xl'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-sm text-emerald-700 font-medium mb-6'>
              STUDENT EXPERIENCES
            </div>

            <h2 className='text-5xl font-semibold tracking-tight text-zinc-900 leading-tight'>
              Students love learning with SmartStudent.
            </h2>

            <p className='mt-6 text-lg text-zinc-600 leading-relaxed'>
              Interactive AI-powered educational videos designed to improve understanding and engagement.
            </p>
          </div>

          
        </div>

        {/* REVIEWS */}
        <div
          ref={containerRef}
          className='flex gap-6 overflow-x-scroll scrollbar-hide p-4 '
        >
          {[...reviews, ...reviews].map((item, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
              whileHover={{
                scale: 1.04,
                y: -6,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className='min-w-[420px] max-w-[420px] rounded-[32px] border border-zinc-200 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex flex-col justify-between'
            >

              {/* STARS */}
              <div className='flex items-center gap-1 mb-6'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className='w-5 h-5 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className='text-lg italic leading-relaxed text-zinc-700'>
                “{item.review}”
              </p>

              {/* USER */}
              <div className='mt-10 flex items-center gap-4'>
                <div className='w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white font-semibold text-lg'>
                  {item.name.charAt(0)}
                </div>

                <div>
                  <div className='font-semibold text-zinc-900'>
                    {item.name}
                  </div>

                  <div className='text-sm text-zinc-500'>
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


   {/* <section className='relative min-h-screen overflow-hidden flex items-center justify-center px-6 bg-gradient-to-r from-[#071326] via-[#0d3b2d] to-[#dff8ec]'> */}
   <section className='relative min-h-screen overflow-hidden flex items-center justify-center px-6 bg-gradient-to-b from-[#125236] via-[#578A3E] to-[#CAA027]'>


  {/* BACKGROUND GLOW */}
  <div className='absolute inset-0'>
    <div className='absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full' />
    <div className='absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-400/20 blur-3xl rounded-full' />
  </div>

  <div className='relative z-10 text-center max-w-7xl mx-auto'>

    {/* LABEL */}
    <div className='inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm tracking-[0.3em] uppercase text-emerald-200 mb-14'>
      WHY IT MATTERS
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
  {'Education'.split('').map((char, index) => (
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
      {index === 'Education'.length - 1 && (
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
  {'infrastructure is'.split('').map((char, index) => (
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
      {index === 'infrastructure is'.length - 1 && (
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
  {'breaking.'.split('').map((char, index) => (
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


{/* what makes us different */}


<section className='py-24 px-2 bg-[#F8FAFC]'>
  <div className='max-w-7xl mx-auto px-6 flex flex-row justify-center gap-20'>

    <div className=' w-[50%] mb-20 ml-0 mt-4'>
      <div className='inline-flex px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium'>
        Measurable Impact
      </div>

      <h2 className='mt-8 text-5xl font-black tracking-tight text-[#11470f]'>
        AI-powered learning that actually improves outcomes.
      </h2>
    </div>

    <div className="w-full lg:w-[50%] flex flex-col">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-baseline justify-between py-8 md:py-10 border-b border-zinc-200/80 first:pt-0 last:border-b-0"
            >
              {/* LARGE METRIC: Now runs the animated scaling counter */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-[#556f60] tracking-tighter select-none w-1/2">
                <AnimatedCounter value={item.value} />
              </div>

              {/* DESCRIPTIVE TEXT */}
              <div className="text-[11px] md:text-xs text-slate-500 leading-relaxed max-w-[240px] md:max-w-[280px] text-left w-1/2 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
  </div>
</section>


    <section className='relative py-24 overflow-hidden bg-[#F6F8F7] border-t border-zinc-100'>
  {/* BACKGROUND GLOW */}
  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/40 blur-3xl rounded-full pointer-events-none' />

  <div className='relative max-w-7xl mx-auto px-6'>
    
    {/* HEADER */}
    <div className='text-center max-w-3xl mx-auto mb-16'>
      <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium mb-6'>
        Empowering Academic Institutions
      </div>

      <h2 className='text-4xl md:text-5xl font-semibold tracking-tight text-black leading-tight'>
        Helping modern institutes create smarter learning experiences.
      </h2>

      <p className='mt-6 text-lg text-zinc-600 leading-relaxed'>
        SmartStudent powers AI-driven educational workflows for institutes, teachers, and students.
      </p>
    </div>

    <div
  className='relative w-full overflow-hidden py-10 '
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  <div className='flex items-center justify-center gap-6'>

    {[-1, 0, 1].map((offset) => {

      const index =
        (currentIndex + offset + institutes.length) %
        institutes.length

      const institute = institutes[index]

      const isCenter = offset === 0

      return (
        <motion.div
          key={`${institute}-${index}`}
          animate={{
            scale: isCenter ? 1.32 : 0.72,
            opacity: isCenter ? 1 : 0.55,
            y: isCenter ? -10 : 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            relative
            w-[420px]
            h-[290px]
            rounded-[32px]
            border
            overflow-hidden
            flex-shrink-0
            p-8
            flex
            flex-col
            justify-center
            items-center
            ${
  isCenter
    ? 'bg-emerald-600  z-20 font-semibold pt-20 mt-4'
    : 'border-neutral-900/10 bg-[#20a060] shadow-[0_10px_30px_rgba(0,0,0,0.02)] z-10  rounded-[32px] mt-2'
}
          `}
        >
          {/* Glow */}
          {/* <div className='absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 opacity-70' /> */}

          {/* Icon */}
          <div className='relative w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center text-white mb-6 shadow-lg'>
            <School className='w-10 h-10' />
          </div>

          {/* Content */}
          <div className='relative text-center'>
            <h3 className='text-xl font-semibold text-zinc-100'>
              {institute}
            </h3>

            <p className='mt-3 text-sm text-zinc-300 italic leading-relaxed'>
              AI-powered academic learning partner
            </p>
          </div>

          {/* Active Dot */}
          <div className='absolute top-5 right-5'>
            <div className='w-2.5 h-2.5 rounded-full bg-zinc-200 animate-pulse' />
          </div>
        </motion.div>
      )
    })}
  </div>
</div>

    {/* BOTTOM STRIP */}
    <div className='mt-20 rounded-[36px] border border-emerald-100 bg-gradient-to-r from-[#75ce4c] via-[#34d1a7] to-[#09542e] px-8 py-10 overflow-hidden relative'>
      
      {/* GLOW */}
      <div className='absolute right-0 top-0 w-72 h-72 bg-emerald-200/30 blur-3xl rounded-full' />

      <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8'>
        
        {/* LEFT */}
        <div className='max-w-2xl'>
          <div className='text-sm tracking-[0.25em] text-emerald-600 font-semibold mb-4'>
            BUILDING THE FUTURE OF LEARNING
          </div>

          <h3 className='text-3xl md:text-4xl font-semibold text-zinc-100 leading-tight'>
            AI-generated educational videos are becoming the new classroom experience.
          </h3>
        </div>

        {/* RIGHT */}
        <div className='flex items-center gap-6'>
          <div className='text-center'>
            <div className='text-4xl font-semibold text-white'>
              5+
            </div>

            <div className='text-sm text-zinc-200 mt-1'>
              Academic Institutions
            </div>
          </div>

          <div className='w-px h-16 bg-zinc-200' />

          <div className='text-center'>
            <div className='text-4xl font-semibold text-white'>
              AI
            </div>

            <div className='text-sm text-zinc-200 mt-1'>
              Learning Infrastructure
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className='relative min-h-screen overflow-hidden flex items-center justify-center bg-[#071326]'>

  {/* BACKGROUND GRADIENT */}
  <div className='absolute inset-0 bg-gradient-to-br from-[#071326] via-[#0f3d2e] to-[#dff8ec]' />

  {/* AMBIENT GLOWS */}
  <div className='absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-emerald-400/20 blur-3xl rounded-full animate-pulse' />

  <div className='absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-cyan-400/20 blur-3xl rounded-full animate-pulse' />

  {/* NOISE GRID */}
  <div className='absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]' />

  {/* CENTER LINE */}
  <div className='absolute w-[70%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent' />

  {/* CONTENT */}
  <div className='relative z-10 text-center px-6'>

    {/* LABEL */}
    <div className='inline-flex items-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm tracking-[0.35em] uppercase text-emerald-200 mb-10'>
      THE FUTURE OF LEARNING
    </div>

    {/* MAIN TEXT */}
    <div className='overflow-hidden'>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className='
          text-[52px]
          md:text-[90px]
          lg:text-[120px]
          font-black
          leading-[0.95]
          tracking-tight
          text-white
        '
      >
        Creating educational
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.6,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className='
          text-[52px]
          md:text-[90px]
          lg:text-[120px]
          font-black
          leading-[0.95]
          tracking-tight
        '
      >
        <span className='text-white'>
          content
        </span>{' '}
        
        <span className='bg-gradient-to-r from-emerald-300 via-cyan-300 to-white bg-clip-text text-transparent'>
          should not take days.
        </span>
      </motion.h1>
    </div>

    {/* SUBTEXT */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.4,
        delay: 0.8,
      }}
      viewport={{ once: true }}
      className='mt-10 max-w-3xl mx-auto text-xl text-white/70 leading-relaxed'
    >
      SmartStudent transforms static educational material into
      engaging AI-powered learning experiences within minutes.
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 1.1,
      }}
      viewport={{ once: true }}
      className='mt-14 flex justify-center'
    >
      <button className='px-8 py-4 rounded-2xl bg-white text-[#071326] font-semibold hover:scale-[1.03] transition-all duration-300 shadow-[0_20px_60px_rgba(255,255,255,0.18)]'>
        Start Creating
      </button>
    </motion.div>
  </div>
</section>



    <Footer />



           
   
 

    </div>
    
  )
}