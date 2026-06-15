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
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";


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
  const workflowSectionRef = useRef<HTMLElement>(null);
  const isWorkflowInView = useInView(workflowSectionRef, { once: true, amount: 0.2 });
  const [markerStep, setMarkerStep] = useState(0);
  const timeoutRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (!isWorkflowInView) return;
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setMarkerStep((prev) => {
          if (prev >= 4) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 4;
          }
          return prev + 1;
        });
      }, 2500);
    }, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isWorkflowInView]);

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

  const workflowSteps = [
    {
      title: "Start Interview",
      desc: "Choose a role and begin a realistic AI interview.",
      icon: <Mic className="w-5 h-5 text-white" />,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Answer Questions",
      desc: "Respond to technical and behavioral prompts.",
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "AI Evaluation",
      desc: "Get real-time analysis of your responses.",
      icon: <Brain className="w-5 h-5 text-white" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Feedback Report",
      desc: "Receive strengths, weaknesses, and recommendations.",
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Improve Skills",
      desc: "Practice targeted areas and track growth.",
      icon: <Sparkles className="w-5 h-5 text-white" />,
      gradient: "from-emerald-500 to-cyan-500",
    },
  ];

  return (
    <>
    <LandingNavbar />
    <div className="bg-white text-black overflow-hidden">

      {/* Hero */}
      <section className="relative mt-24 flex flex-col items-center mx-8 md:mx-32 mb-4 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-32 w-[520px] h-[520px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)", filter: "blur(120px)" }}
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 -right-24 w-[460px] h-[460px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(240,195,62,0.07) 0%, transparent 70%)", filter: "blur(100px)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.03) 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-24">
          <div className="gap-16 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 38 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Every great
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 38 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <motion.span
                  whileHover={{ scale: 1.05, y: -2, color: "#10b981" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="text-[#EECD42] cursor-pointer inline-block transition-colors duration-200"
                >
                  Interview
                </motion.span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 38 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Begins with{" "}
                <motion.span
                  whileHover={{ 
                    scale: 1.08, 
                    y: -3, 
                    filter: "brightness(1.15) drop-shadow(0 4px 12px rgba(57,184,34,0.3))" 
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 14 }}
                  className="bg-gradient-to-r from-[#dbcc2a] via-[#39b822] to-[#085e20] bg-clip-text text-transparent cursor-pointer inline-block font-extrabold"
                >
                  Practice
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                className="mt-6 text-xl text-zinc-400 max-w-5xl"
              >
                Experience a smarter way to prepare for interviews. From dynamic questioning and intelligent evaluation to personalized improvement plans, EzPrep helps learners develop the skills, confidence, and readiness needed for modern hiring processes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(16,185,129,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-colors cursor-pointer"
                >
                  Start Practicing
                  <ArrowRight size={18} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 0 22px rgba(6,150,104,0.18)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="border border-[#069668] text-emerald-700 px-8 py-4 rounded-xl flex items-center gap-2 font-medium bg-transparent transition-colors cursor-pointer"
                >
                  <Play size={18} />
                  Book Demo
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
        >
          <h3 className="max-w-5xl text-center text-3xl font-bold text-zinc-400">
            Practice Interviews. Build Confidence. Get Ready.
          </h3>
        </motion.div>
      </section>

      {/* ═══ Problem & Awareness ═══ */}
      <section className="relative py-32 overflow-hidden bg-white text-zinc-900 border-b border-zinc-100">
        
        {/* Background Ambient Conversational Nodes Visuals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035] -z-10 select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M -100,200 Q 200,50 600,300 T 1400,100" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 100,500 Q 500,250 900,600 T 1700,400" fill="none" stroke="#f0c33e" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="200" cy="120" r="40" fill="none" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="200" cy="120" r="6" fill="#10b981" />
            <circle cx="600" cy="300" r="50" fill="none" stroke="#f0c33e" strokeWidth="1.5" />
            <circle cx="600" cy="300" r="6" fill="#f0c33e" />
            <circle cx="1000" cy="180" r="45" fill="none" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="1000" cy="180" r="6" fill="#10b981" />
            <line x1="240" y1="120" x2="550" y2="300" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="650" y1="300" x2="955" y2="180" stroke="#cbd5e1" strokeWidth="1" />
          </svg>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto px-6 mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-emerald-200/60 bg-emerald-50/50 text-[10px] font-bold tracking-[0.18em] uppercase text-emerald-600 mb-6 select-none">
            INTERVIEW CHALLENGES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            Technical Knowledge Alone Isn't Enough
          </h2>
          <p className="mt-5 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Most students prepare answers. Few prepare for the interview itself.
          </p>
        </div>

        {/* Main Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 items-center px-6 max-w-6xl mx-auto mt-16">
          {/* Left Panel: What Students Practice */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 bg-zinc-50/80 border border-zinc-200/60 rounded-3xl p-8 shadow-sm backdrop-blur-sm select-none"
          >
            <h3 className="text-xl font-bold text-zinc-800 mb-6 flex items-center gap-2 border-b border-zinc-200/40 pb-4">
              <span className="text-zinc-400 font-medium">01 //</span> What Students Practice
            </h3>
            <div className="space-y-4">
              {[
                { label: "DSA", desc: "Data structures & algorithms patterns" },
                { label: "Projects", desc: "Building applications & web tools" },
                { label: "Theory", desc: "OS, DBMS, System Design books" },
                { label: "MCQs", desc: "Core fundamental questionnaires" }
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-zinc-200/70 text-zinc-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-800 text-sm">{item.label}</h4>
                    <p className="text-zinc-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Bridge Connector */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center relative py-6 lg:py-0">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-px h-32 bg-slate-200 -z-10" />
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 4px 20px rgba(16,185,129,0.15)",
                  "0 4px 30px rgba(16,185,129,0.3)",
                  "0 4px 20px rgba(16,185,129,0.15)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-emerald-600 border border-emerald-500 text-white rounded-2xl px-5 py-4 text-center z-10 flex flex-col items-center justify-center shadow-lg cursor-default select-none max-w-[120px]"
            >
              <span className="text-[10px] font-black tracking-widest uppercase text-emerald-200 leading-none">EZPrep</span>
              <span className="text-xs font-bold mt-1.5 leading-none">Bridges</span>
              <span className="text-[10px] font-semibold text-emerald-100 mt-1 leading-none">The Gap</span>
            </motion.div>
          </div>

          {/* Right Panel: What Interviews Actually Test */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 bg-emerald-500/[0.03] border-2 border-emerald-500/20 rounded-3xl p-8 shadow-[0_20px_50px_rgba(16,185,129,0.05)] backdrop-blur-sm relative overflow-hidden select-none"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2 border-b border-emerald-500/10 pb-4">
              <span className="text-emerald-500/70 font-semibold">02 //</span> What Interviews Test
            </h3>
            <div className="space-y-4">
              {[
                { label: "Confidence", desc: "Handling pressure & dynamic questions" },
                { label: "Communication", desc: "Explaining thought process clearly" },
                { label: "Structured Thinking", desc: "Breaking down problems logically" },
                { label: "Problem Solving", desc: "Adapting to real-time interview hints" }
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900 text-sm">{item.label}</h4>
                    <p className="text-emerald-700/60 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto mt-24">
          {[
            {
              title: "Interview Anxiety",
              emoji: "😰",
              desc: "Nervousness affects communication and confidence, turning good candidates quiet.",
              accent: "border-amber-300 bg-amber-500/5 text-amber-900"
            },
            {
              title: "Communication Gaps",
              emoji: "🎤",
              desc: "Good technical answers fail when they are not explained clearly to the interviewer.",
              accent: "border-emerald-300 bg-emerald-500/5 text-emerald-900"
            },
            {
              title: "Unstructured Thinking",
              emoji: "🧠",
              desc: "Candidates know basic concepts but struggle to organize and structure responses dynamically.",
              accent: "border-emerald-300 bg-emerald-500/5 text-emerald-900"
            },
            {
              title: "No Feedback Loop",
              emoji: "📉",
              desc: "Without detailed mock evaluations, skill improvement becomes trial and guesswork.",
              accent: "border-amber-300 bg-amber-500/5 text-amber-900"
            }
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="backdrop-blur-xl bg-white/70 border border-zinc-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between group transition-all duration-300 cursor-default"
            >
              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-wide ${card.accent} select-none`}>
                  <span>{card.emoji}</span>
                  <span>{card.title}</span>
                </div>
                <p className="mt-5 text-sm text-zinc-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
              <div className="mt-8 h-1 w-12 rounded-full bg-slate-200 transition-colors group-hover:bg-emerald-500" />
            </motion.div>
          ))}
        </div>

        {/* Section Ending */}
        <div className="mt-20 text-center px-6 select-none">
          <p className="text-zinc-500 font-semibold text-base max-w-2xl mx-auto">
            EZPrep helps students practice, evaluate, and improve before the real interview.
          </p>
        </div>

      </section>

      {/* Workflow */}
      <section ref={workflowSectionRef} className="relative max-w-7xl mx-auto px-6 py-32 overflow-visible">
        
        {/* Background dotted grid & ambient orbs (Enhancement 10) */}
        <div className="absolute inset-0 pointer-events-none -z-10 select-none">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" />
          <motion.div
            animate={{ x: [0, 35, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", filter: "blur(110px)" }}
          />
          <motion.div
            animate={{ x: [0, -25, 0], y: [0, -35, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)", filter: "blur(100px)" }}
          />
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -25, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(240,195,62,0.04) 0%, transparent 70%)", filter: "blur(90px)" }}
          />
        </div>

        {/* Section Header (Enhancement 1) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-emerald-200/60 bg-emerald-50/50 text-[10px] font-bold tracking-[0.18em] uppercase text-emerald-600 mb-6 select-none">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            Your Interview Improvement Journey
          </h2>
          <p className="mt-5 text-lg md:text-xl text-zinc-500 font-medium">
            Practice. Receive Feedback. Improve Continuously. Get Interview Ready.
          </p>
        </div>

        {/* Premium Workflow Container (Enhancement 12) */}
        <div className="relative border border-zinc-200/50 bg-white/50 backdrop-blur-xl rounded-[40px] p-6 md:p-10 shadow-2xl overflow-visible max-w-6xl mx-auto">
          
          {/* Workflow Status Strip (Enhancements 2 & 9) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-200/40 pb-8 mb-10 select-none">
            {/* Progress Header Loader Bar */}
            <div className="flex-1 w-full max-w-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Interview Journey Progress</span>
                <span className="text-xs font-extrabold text-emerald-600">{(markerStep + 1) * 20}% Complete</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-100/80 rounded-full overflow-hidden border border-zinc-200/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full"
                  animate={{ width: `${(markerStep + 1) * 20}%` }}
                  transition={{ type: "spring", stiffness: 85, damping: 15 }}
                />
              </div>
            </div>

            {/* Live Processing Indicator Pill */}
            <div className="flex items-center gap-2.5 px-5 py-2 rounded-full border border-emerald-200/60 bg-white/80 backdrop-blur-sm self-start md:self-auto shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-800">
                {markerStep === 0 && "● Initializing Interview Session..."}
                {markerStep === 1 && "● Recording & Processing Interview Data..."}
                {markerStep === 2 && "● AI Evaluating Communication & Technical Depth..."}
                {markerStep === 3 && "● Generating Feedback Report..."}
                {markerStep === 4 && "● Analyzing Growth Insights..."}
              </span>
            </div>
          </div>

          {/* DESKTOP WORKFLOW LAYOUT (Timeline at Top, Cards completely clear below) */}
          <div className="relative hidden md:block">
            
            {/* Timeline Zone above cards */}
            <div className="relative h-[80px] mb-8 select-none">
              {/* Desktop SVG Line Track */}
              <svg className="absolute top-[40px] left-0 w-full h-[2px] pointer-events-none" overflow="visible">
                <line
                  x1="10%"
                  y1="0"
                  x2="90%"
                  y2="0"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <motion.line
                  x1="10%"
                  y1="0"
                  x2="90%"
                  y2="0"
                  stroke="url(#gradient-line-workflow)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={isWorkflowInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2.8, ease: [0.215, 0.61, 0.355, 1] }}
                />
                <defs>
                  <linearGradient id="gradient-line-workflow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Desktop continuous loop data particle */}
              <motion.div
                className="absolute top-[40px] -translate-y-1/2 -translate-x-1/2 z-15 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] border-2 border-white pointer-events-none"
                animate={{
                  left: ["10%", "90%"]
                }}
                transition={{
                  duration: 4.5,
                  ease: "linear",
                  repeat: Infinity
                }}
              />



              {/* Workflow Relationship Labels overlay */}
              {[
                "Question Asked",
                "Answer Submitted",
                "AI Evaluation",
                "Feedback Generated",
                "Improvement Plan"
              ].map((label, idx) => (
                <div
                  key={label}
                  className="absolute top-[10px] -translate-x-1/2 z-25 px-3 py-1 rounded-full border border-zinc-200/80 bg-white/95 text-[9px] font-black uppercase tracking-wider text-zinc-500 shadow-sm backdrop-blur-sm"
                  style={{ left: `${10 + idx * 20}%` }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Desktop cards grid */}
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {workflowSteps.map((step, index) => {
                const isActive = markerStep === index;
                return (
                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      y: 60,
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
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.02,
                      boxShadow: "0 25px 40px -15px rgba(0,0,0,0.08)",
                      borderColor: "rgba(16,185,129,0.3)"
                    }}
                    animate={{
                      borderColor: isActive ? "rgba(16,185,129,0.5)" : "rgba(228,228,231,0.6)",
                      boxShadow: isActive 
                        ? "0 25px 40px -15px rgba(16,185,129,0.2)" 
                        : "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
                      y: isActive ? -5 : 0
                    }}
                    className="
                      relative
                      h-[240px]
                      overflow-hidden
                      rounded-[28px]
                      border
                      backdrop-blur-xl
                      bg-white/70
                      flex
                      flex-col
                      items-center
                      justify-center
                      p-6
                      transition-all
                      duration-300
                      group
                    "
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-emerald-500/[0.03] pointer-events-none rounded-[28px]" />
                    )}

                    <motion.div
                      animate={isActive ? { scale: [1, 1.08, 1] } : {}}
                      transition={{ repeat: isActive ? Infinity : 0, duration: 2, ease: "easeInOut" }}
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg border border-white/40 backdrop-blur-md mb-4 z-10 transition-transform duration-300 group-hover:scale-110`}
                    >
                      {step.icon}
                    </motion.div>

                    <div className="relative z-10 text-center">
                      <h3 className={`font-bold text-base leading-snug transition-colors duration-300 ${isActive ? "text-emerald-800" : "text-zinc-900"}`}>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-medium max-w-[190px] mx-auto">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE WORKFLOW LAYOUT (Timeline on Left, stacked shifted cards on right) */}
          <div className="relative block md:hidden select-none">
            
            {/* Mobile SVG Line Track on the left */}
            <svg className="absolute top-0 left-[20px] w-[2px] h-full pointer-events-none" style={{ minHeight: "1200px" }} overflow="visible">
              <line
                x1="0"
                y1="120"
                x2="0"
                y2="1176"
                stroke="#e2e8f0"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <motion.line
                x1="0"
                y1="120"
                x2="0"
                y2="1176"
                stroke="url(#gradient-line-workflow-vertical)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={isWorkflowInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2.8, ease: [0.215, 0.61, 0.355, 1] }}
              />
              <defs>
                <linearGradient id="gradient-line-workflow-vertical" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>

            {/* Mobile continuous loop data particle */}
            <motion.div
              className="absolute left-[20px] -translate-x-1/2 -translate-y-1/2 z-15 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] border-2 border-white pointer-events-none"
              animate={{
                top: [120, 1176]
              }}
              transition={{
                duration: 5.5,
                ease: "linear",
                repeat: Infinity
              }}
            />



            {/* Mobile cards stack (shifted right via pl-12) */}
            <div className="grid gap-6 pl-12 relative z-10">
              {workflowSteps.map((step, index) => {
                const isActive = markerStep === index;
                return (
                  <div key={step.title} className="relative">
                    {/* Mobile relationship label */}
                    <div className="absolute top-[-14px] left-4 z-25 px-2.5 py-0.5 rounded-full border border-zinc-200/80 bg-white/95 text-[8px] font-black uppercase tracking-wider text-zinc-500 shadow-sm">
                      {[
                        "Question Asked",
                        "Answer Submitted",
                        "AI Evaluation",
                        "Feedback Generated",
                        "Improvement Plan"
                      ][index]}
                    </div>
                    
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 40,
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
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      whileHover={{ 
                        y: -3, 
                        scale: 1.01,
                        boxShadow: "0 20px 30px -10px rgba(0,0,0,0.06)",
                        borderColor: "rgba(16,185,129,0.3)"
                      }}
                      animate={{
                        borderColor: isActive ? "rgba(16,185,129,0.5)" : "rgba(228,228,231,0.6)",
                        boxShadow: isActive 
                          ? "0 20px 35px -10px rgba(16,185,129,0.18)" 
                          : "0 4px 6px -1px rgba(0,0,0,0.03)",
                        y: isActive ? -3 : 0
                      }}
                      className="
                        relative
                        h-[240px]
                        overflow-hidden
                        rounded-[28px]
                        border
                        backdrop-blur-xl
                        bg-white/70
                        flex
                        flex-col
                        items-center
                        justify-center
                        p-6
                        transition-all
                        duration-300
                      "
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-emerald-500/[0.03] pointer-events-none rounded-[28px]" />
                      )}
                      
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg border border-white/40 mb-4 z-10`}>
                        {step.icon}
                      </div>

                      <div className="relative z-10 text-center">
                        <h3 className={`font-bold text-base leading-snug ${isActive ? "text-emerald-800" : "text-zinc-900"}`}>
                          {step.title}
                        </h3>
                        <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-medium max-w-[190px] mx-auto">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </section>

      {/* ═══ Product Demo Video Section ═══ */}
      <motion.section
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col items-center overflow-visible"
      >
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
              filter: "blur(110px)",
            }}
          />
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(240,195,62,0.08) 0%, transparent 70%)",
              filter: "blur(110px)",
            }}
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-emerald-200/60 bg-emerald-50/50 text-xs font-semibold tracking-[0.15em] uppercase text-emerald-600 mb-6">
          PRODUCT DEMO
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 text-center">
          See EZPrep In Action
        </h2>

        {/* Subheading */}
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-zinc-500 text-center leading-relaxed">
          Experience realistic AI interviews, instant evaluation, personalized feedback, and performance analytics in one intelligent platform.
        </p>

        {/* Video Card Container */}
        <div className="w-full max-w-5xl mt-16 px-2 md:px-0">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-[24px] shadow-2xl border border-zinc-200/80 overflow-hidden"
          >
            {/* Browser Header */}
            <div className="bg-zinc-50/80 border-b border-zinc-200/80 px-5 py-3.5 flex items-center justify-between select-none">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/90" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/90" />
                <div className="w-3 h-3 rounded-full bg-green-400/90" />
              </div>
              <div className="text-xs font-semibold text-zinc-500 tracking-wide">
                EZPrep AI Interview Platform
              </div>
              <div className="w-12" /> {/* Balancer */}
            </div>

            {/* Video Player */}
            <video
              className="w-full h-auto aspect-video object-cover"
              src={`${import.meta.env.BASE_URL}videos/EZPrep-demo.mp4`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </motion.div>
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          {[
            { icon: "🎤", text: "AI Interviews" },
            { icon: "📊", text: "Performance Analytics" },
            { icon: "🧠", text: "Smart Evaluation" },
            { icon: "🚀", text: "Placement Readiness" },
          ].map((chip) => (
            <motion.div
              key={chip.text}
              whileHover={{ 
                scale: 1.05, 
                y: -2, 
                boxShadow: "0 10px 20px -10px rgba(16,185,129,0.15)",
                borderColor: "rgba(16,185,129,0.4)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-zinc-200 bg-zinc-50/50 text-zinc-700 font-medium text-sm cursor-default select-none transition-colors duration-200 hover:text-emerald-700"
            >
              <span className="text-base">{chip.icon}</span>
              <span>{chip.text}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center text-center max-w-3xl mx-auto px-4">
          <p className="text-lg font-medium text-zinc-700 leading-relaxed">
            See how EZPrep transforms interview preparation into measurable career readiness.
          </p>
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 22px rgba(6,150,104,0.18)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="border border-[#069668] text-emerald-700 px-8 py-4 rounded-xl flex items-center gap-2 font-medium bg-transparent transition-colors hover:bg-emerald-50/50"
            >
              <Play size={18} />
              Book Demo
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200/60 to-transparent" />

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

       <section className='relative overflow-hidden flex items-center justify-center px-6 py-16 md:py-20 bg-gradient-to-b from-[#125236] via-[#578A3E] to-[#CAA027]'>


        {/* BACKGROUND GLOW WITH SLOW DRIFT (Enhancement 10) */}
        <div className='absolute inset-0 pointer-events-none overflow-hidden select-none'>
          <motion.div
            animate={{ x: [0, 45, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className='absolute top-10 left-10 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full'
          />
          <motion.div
            animate={{ x: [0, -35, 0], y: [0, -45, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className='absolute bottom-10 right-10 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full'
          />
          <motion.div
            animate={{ x: [0, 25, 0], y: [0, -35, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className='absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-amber-500/5 blur-[110px] rounded-full'
          />
        </div>

        <div className='relative z-10 text-center max-w-7xl mx-auto flex flex-col items-center w-full'>

          {/* LABEL BADGE (Enhancement 4) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm tracking-[0.3em] uppercase text-emerald-200 mb-14 select-none'
          >
            WHY EZPREP
          </motion.div>

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
                {index === 'performance.'.length - 1 && (
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

          {/* Premium Potential -> Performance Transformation Layout */}
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-10 lg:gap-14 mt-12 max-w-4xl mx-auto w-full px-6 relative">
            
            {/* Potential Column (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 4.0, duration: 0.7 }}
              className="flex-1 flex flex-col"
            >
              <div className="text-right border-b border-white/10 pb-2.5 mb-5 select-none">
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/70">
                  Potential
                </span>
              </div>
              <div className="flex flex-col gap-3.5">
                {[
                  { text: "Nervous", emoji: "😟" },
                  { text: "No Practice", emoji: "📉" },
                  { text: "Uncertain", emoji: "❓" },
                  { text: "Weak Communication", emoji: "🗣" }
                ].map((item) => (
                  <motion.div
                    key={item.text}
                    whileHover={{ x: -4, filter: "brightness(1.2)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center justify-end gap-3 text-white/70 font-medium text-base md:text-lg select-none cursor-default py-1.5 hover:text-white transition-colors duration-200"
                  >
                    <span>{item.text}</span>
                    <span className="text-xl md:text-2xl">{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Desktop Center Animated Beam */}
            <div className="hidden md:flex flex-col items-center justify-center relative w-20 lg:w-28 select-none">
              <div className="h-full w-px bg-white/5 absolute left-1/2 -translate-x-1/2 top-0" />
              <div className="w-full relative flex items-center justify-center h-8">
                <svg className="w-full h-2 overflow-visible" overflow="visible">
                  <line
                    x1="0%"
                    y1="4"
                    x2="100%"
                    y2="4"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <motion.line
                    x1="0%"
                    y1="4"
                    x2="100%"
                    y2="4"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 4.5, duration: 1.0, ease: "easeInOut" }}
                  />
                </svg>
                {/* Glowing Laser Beam Line */}
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee] pointer-events-none"
                  animate={{
                    left: ["0%", "100%"]
                  }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 5.5
                  }}
                />
              </div>
            </div>

            {/* Mobile Animated Beam */}
            <div className="flex md:hidden flex-col items-center justify-center py-5 relative select-none">
              <svg className="w-2 h-16 overflow-visible" overflow="visible">
                <line
                  x1="4"
                  y1="0%"
                  x2="4"
                  y2="100%"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <motion.line
                  x1="4"
                  y1="0%"
                  x2="4"
                  y2="100%"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 4.5, duration: 1.0, ease: "easeInOut" }}
                />
              </svg>
              {/* Vertical flowing particle */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-4 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee] pointer-events-none"
                animate={{
                  top: ["0px", "64px"]
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 5.5
                }}
              />
            </div>

            {/* Performance Column (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 5.0, duration: 0.7 }}
              className="flex-1 flex flex-col"
            >
              <div className="text-left border-b border-white/10 pb-2.5 mb-5 select-none">
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-cyan-400">
                  Performance
                </span>
              </div>
              <div className="flex flex-col gap-3.5">
                {[
                  { text: "Confident", emoji: "😎" },
                  { text: "Prepared", emoji: "📈" },
                  { text: "Assessed", emoji: "🎯" },
                  { text: "Interview Ready", emoji: "🚀" }
                ].map((item) => (
                  <motion.div
                    key={item.text}
                    whileHover={{ x: 4, filter: "brightness(1.25)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center justify-start gap-3 text-cyan-300 font-bold text-base md:text-lg select-none cursor-default py-1.5 hover:text-cyan-200 transition-colors duration-200"
                  >
                    <span className="text-xl md:text-2xl">{item.emoji}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

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
      <section className="max-w-7xl mx-auto px-6 py-28 border-t border-zinc-100">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase text-emerald-600 mb-4 select-none">
            Trusted Results
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Why Students Trust EZPrep
          </h2>
          <p className="mt-4 text-lg text-zinc-500 max-w-[650px] mx-auto leading-relaxed">
            Measurable outcomes powered by AI-driven interview practice, evaluation, and feedback.
          </p>
        </motion.div>

        {/* Premium Metric Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full"
        >
          {[
            {
              value: "500+",
              title: "Interview Scenarios",
              desc: "Practice diverse technical, behavioral, and role-specific interview situations."
            },
            {
              value: "360°",
              title: "Performance Feedback",
              desc: "Gain comprehensive insights into communication, confidence, and technical skills."
            },
            {
              value: "95%",
              title: "Feedback Accuracy",
              desc: "Receive detailed and consistent evaluations designed to highlight strengths and improvement areas."
            }
          ].map((metric) => (
            <motion.div
              key={metric.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-[28px] border border-zinc-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center justify-center relative overflow-hidden"
            >
              {/* Number */}
              <h3 className="text-6xl md:text-7xl font-bold text-[#0c376ed9] leading-none mb-4">
                {metric.value}
              </h3>
              
              {/* Title */}
              <h4 className="text-xl font-semibold text-zinc-900">
                {metric.title}
              </h4>
              
              {/* Description */}
              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto text-sm md:text-base">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

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