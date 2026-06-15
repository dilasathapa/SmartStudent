import React from 'react'
import LandingNavbar from '../LandingNavbar'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { Footer } from '../Footer';
import grid_img1 from "../../assets/smartdeck1.jpeg" 

const journey = [
    "Upload Document",
    "Content Summarization",
    "Smart Slide Structuring",
    "Visual Generation",
    "Export & Present",
  ];

const smartdeckfeatures = [
  {
    title: "Start With Your Content",
    description:
      "Upload documents, notes, reports, lesson plans, research material, or structured outlines, and let SmartDeck understand, organize, and prepare your content for presentation creation.",
    points: [
      "Upload documents, PDFs, notes, and outlines",
      "Support for educational, business, and training content",
      "Automatically extracts key information and context",
      "Understands content hierarchy and structure",
    ],
    image: grid_img1
      
  },
  {
    title: "Transform Content Into a Complete Presentation",
    description:
      "SmartDeck automatically converts your content into a professionally structured presentation with organized slides, visual layouts, summaries, and presentation-ready formatting.",
    points: [
      "AI-generated slide structure and flow",
      "Intelligent content summarization",
      "Automatic slide layouts and formatting",
      "Export as editable PowerPoint presentations",
    ],
    image:
      "https://media.istockphoto.com/id/2248173816/photo/3d-icon-of-an-ai-system-analyzing-and-transforming-documents-representing-text-processing.webp?a=1&b=1&s=612x612&w=0&k=20&c=TGv8A425kcxe9Nr7KXdWNENGHwaKDGezkUr4Aj7SmrI=",
  }
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
            Smartdeck
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

export default function SmartDeck() {
  return (
    <>
      <LandingNavbar />
      <div className="bg-white text-black overflow-hidden">
        {/* Hero */}
        <section className="relative mt-24 flex flex-col items-center m-32  mb-4">
            <div className="relative max-w-7xl mx-auto px-6 pb-24">
            <div className="gap-16 items-center">
                <div>
                <h1 className="text-5xl md:text-7xl font-bold leading-3">
                    Spend Less Time 
                </h1>
                <h1 className="text-5xl md:text-7xl font-bold leading-3">Designing,</h1>
                <h1 className="text-5xl md:text-7xl font-bold leading-5 pb-6">More Time Presenting.</h1>

                <p className="mt-6 text-xl text-zinc-400 max-w-5xl">
                    Upload notes, reports, lesson plans, or content outlines and let SmartDeck generate a polished presentation complete with structure, visuals, and slide design.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2">
                    Start Creating
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
                Turn documents, notes, or ideas into presentation-ready slides in minutes.
            </h3>          
            </div>
        </section>

        {/* creation */}
        <section className="max-w-7xl mx-auto px-6 py-28">

            <div className="grid lg:grid-cols-2 gap-16">

            <div>
                <h2 className="text-5xl font-bold leading-normal">
                    Great ideas are easy. Building presentations around them isn't.
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
                    From content organization and slide creation to visual generation and presentation structure
                </p>
                <p>
                    summarizing content, designing slides, and formatting layouts
                </p>

                <p>
                    SmartDeck automates the entire process so you can move from content to deck in minutes.
                </p>

                
            </motion.div>


            </div>

        </section>

          {/* smartdeck features */}
              <section className="relative py-32">
                <div className="text-center mb-32">
                  <h2 className="text-5xl font-bold tracking-tight text-zinc-900">
                    Create Decks at the Speed of Thought
                  </h2>
        
                  <p className="mt-6 max-w-3xl mx-auto text-xl text-zinc-600">
                    From content to presentation—automatically structured, designed, and ready to present.
                  </p>
                </div>
        
                {smartdeckfeatures.map((feature, index) => (
                  <FeatureSection
                    key={feature.title}
                    {...feature}
                    reverse={index % 2 !== 0}
                  />
                ))}
              </section>

        {/* journey */}
        <section className="max-w-7xl mx-auto px-6 py-28">
            <div className="text-center">
            <h2 className="text-4xl font-bold">
                A Complete Creation Journey
            </h2>
            </div>


            <div className="grid md:grid-cols-5 gap-6 mt-20">
            {journey.map((step, index) => (
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
                        "Provide notes, reports, lesson plans, research documents, or content outlines as the foundation for your presentation."}

                    {index === 1 &&
                        "SmartDeck identifies the most important information and converts it into concise, presentation-ready points."}

                    {index === 2 &&
                        "Automatically create well-structured slides with clear sections, hierarchy, and storytelling."}

                    {index === 3 &&
                        "Generate charts, diagrams, illustrations, and visual elements that make content easier to understand."}

                    {index === 4 &&
                        "Export your completed presentation in PowerPoint format, ready for editing, sharing, or presenting."}
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

            {/* statement */}
        <section className='relative min-h-screen overflow-hidden flex items-center justify-center px-6 bg-gradient-to-b from-[#125236] via-[#578A3E] to-[#CAA027]'>


            {/* BACKGROUND GLOW */}
            <div className='absolute inset-0'>
            <div className='absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full' />
            <div className='absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-400/20 blur-3xl rounded-full' />
            </div>

            <div className='relative z-10 text-center max-w-7xl mx-auto'>

            {/* LABEL */}
            <div className='inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm tracking-[0.3em] uppercase text-emerald-200 mb-14'>
                WHY SMARTDECK
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
            {'Great Ideas'.split('').map((char, index) => (
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
                {index === 'Great Ideas'.length - 1 && (
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
            {'deserve better'.split('').map((char, index) => (
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
                {index === 'deserve better'.length - 1 && (
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
            {'Presentations.'.split('').map((char, index) => (
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
                {char === ' ' ? '\u00A0' : char}
                </span>

                {/* ACTIVE CURSOR */}
                {index === 'Presentations.'.length - 1 && (
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

        {/* featured */}
        <section className="max-w-7xl mx-auto px-6 py-32">

            <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold">
                Everything Needed To Build
                <span className="text-[#EECD42]">
                {" "}Better Presentations
                </span>
            </h2>

            <p className="mt-6 text-xl text-zinc-500 max-w-3xl mx-auto">
                From content organization and slide generation to visuals
                and exports, SmartDeck automates the entire presentation workflow.
            </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">

            {/* COLUMN 1 */}

            <motion.div
                initial={{
                opacity: 0,
                y: 100,
                }}
                whileInView={{
                opacity: 1,
                y: 0,
                }}
                viewport={{
                once: true,
                amount: 0.2,
                }}
                transition={{
                duration: 0.8,
                }}
                className="flex flex-col gap-6"
            >
                {/* AI Script */}

                <div className="bg-white border rounded-3xl p-8 h-[220px]">
                <h3 className="text-2xl font-bold">
                    Smart Slide Structuring
                </h3>

                <p className="mt-4 text-zinc-500">
                    Automatically organize raw content into a clear presentation flow with
          sections, hierarchy, and storytelling.
                </p>
                </div>

                {/* Visual Creation */}

                <div className="bg-white border rounded-3xl p-6 h-[470px]">
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt=""
                    className="w-full h-64 object-cover rounded-2xl"
                />

                <h3 className="mt-6 text-2xl font-bold">
                    AI Layout Engine
                </h3>

                <p className="mt-4 text-zinc-500">
                    Selects layouts, spacing and content placement automatically for every slide.
                </p>
                </div>
            </motion.div>

            {/* COLUMN 2 */}

            <motion.div
                initial={{
                opacity: 0,
                y: 100,
                }}
                whileInView={{
                opacity: 1,
                y: 0,
                }}
                viewport={{
                once: true,
                amount: 0.2,
                }}
                transition={{
                duration: 0.8,
                delay: 0.25,
                }}
                className="flex flex-col gap-6"
            >
                {/* Narration */}

                <div className="bg-white border rounded-3xl p-6 h-[470px]">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                    alt=""
                    className="w-full h-64 object-cover rounded-2xl"
                />

                <h3 className="mt-6 text-2xl font-bold">
                    Visual Generation
                </h3>

                <p className="mt-4 text-zinc-500">
                    Create charts, diagrams and visuals that make ideas easier to understand.
                </p>
                </div>

                {/* Storytelling */}

                <div className="bg-white border rounded-3xl p-8 h-[220px]">
                <h3 className="text-2xl font-bold">
                    AI Presentation Builder
                </h3>

                <p className="mt-4 text-zinc-500">
                    Transform ideas, documents, and notes into complete presentations with minimal effort.
                </p>
                </div>
            </motion.div>

            {/* COLUMN 3 */}

            <motion.div
                initial={{
                opacity: 0,
                y: 100,
                }}
                whileInView={{
                opacity: 1,
                y: 0,
                }}
                viewport={{
                once: true,
                amount: 0.2,
                }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                }}
                className="flex flex-col gap-6"
            >

                

                <div className="bg-white border rounded-3xl p-8 h-[220px]">
                <h3 className="text-2xl font-bold">
                    Content Summarization
                </h3>

                <p className="mt-4 text-zinc-500">
                    Extract key insights from lengthy documents and transform them into
            concise slide-ready content.
                </p>
                </div>
                {/* Curriculum */}

                <div className="bg-white border rounded-3xl p-6 h-[470px]">
                <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt=""
                    className="w-full h-64 object-cover rounded-2xl"
                />

                <h3 className="mt-6 text-2xl font-bold">
                    PPTX Export
                </h3>

                <p className="mt-4 text-zinc-500">
                    Download fully editable PowerPoint presentations ready for presenting,
          sharing or customization.
                </p>
                </div>


                
            </motion.div>

            </div>

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
                90%
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
                    Reduction in Manual Effort
                </h4>

                <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                    Automate content organization, slide creation, and formatting.
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
                10x
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
                    Faster Presentation Creation
                </h4>

                <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                    Generate presentation-ready decks in minutes instead of hours.
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
                5 Min
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
                    Average Deck Generation Time
                </h4>

                <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                    Turn documents into presentation-ready decks within minutes.
                </p>
                </motion.div>
            </motion.div>

            

            

            </div>
        </section>

        {/* CTA */}
        <section className=" mx-auto ">
            <div className=" bg-gradient-to-r from-[#dbcc2a] via-[#358f25] to-[#08842b] text-white p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
                Stop Designing Slides. Start Presenting.
            </h2>

            <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
                Let Smartdeck handle the structure, design, and formatting while you focus on your message.
            </p>

            <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold">
                Request Demo
            </button>
            </div>
        </section>
        <Footer />
        

      </div>
    </>
  )
}
