import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Mic,
  BrainCircuit,
  BarChart3,
  Target,
  CheckCircle2,
  Play,
  Activity,
} from "lucide-react";

function AnimatedCounter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    const totalDuration = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalDuration / end), 16); // cap at ~60fps
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return <span>{count}%</span>;
}

function ScoreRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-slate-700 text-sm">
          {label}
        </span>

        <span className="font-bold text-emerald-600 text-sm">
          {value}%
        </span>
      </div>

      <div className="h-3 rounded-full bg-white overflow-hidden border border-zinc-200/50 shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-emerald-400
            to-cyan-400
          "
        />
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  isString,
}: {
  value: string;
  label: string;
  isString?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-2xl p-4 text-center shadow-sm select-none cursor-default"
    >
      <div className="text-3xl font-black text-slate-900 leading-none">
        {isString ? value : <AnimatedCounter value={parseInt(value)} />}
      </div>
      <div className="text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-widest leading-none">
        {label}
      </div>
    </motion.div>
  );
}

function FeatureBadge({
  icon,
  title,
  className,
  delay = 0,
  duration = 4,
}: {
  icon: React.ReactNode;
  title: string;
  className: string;
  delay?: number;
  duration?: number;
}) {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: prefersReduced ? 0 : [-6, 6, -6],
      }}
      transition={{
        y: prefersReduced 
          ? { duration: 0.5 }
          : {
              repeat: Infinity,
              duration: duration,
              ease: "easeInOut",
              delay: delay,
            },
        opacity: { duration: 0.5 },
      }}
      className={`
        absolute
        hidden lg:flex
        backdrop-blur-xl
        bg-white/70
        border
        border-white/30
        px-5
        py-3
        rounded-2xl
        shadow-lg
        items-center
        gap-3
        z-20
        ${className}
      `}
    >
      <div className="text-emerald-600">
        {icon}
      </div>
      <div className="font-semibold text-slate-700 text-sm">
        {title}
      </div>
    </motion.div>
  );
}

function AuraAIAvatar() {
  return (
    <div className="relative aspect-video rounded-[20px] overflow-hidden border border-white/30 backdrop-blur-xl bg-white/60 shadow-lg flex flex-col items-center justify-center bg-gradient-to-br from-emerald-950/5 to-cyan-950/5 p-4 select-none">
      {/* Animated Aura Sphere */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Pulsing Outer Ring 1 */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
        />
        {/* Pulsing Outer Ring 2 */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.8 }}
          className="absolute inset-0 rounded-full border border-cyan-400/30"
        />
        {/* Glowing Sphere */}
        <motion.div
          animate={{ 
            scale: [1, 1.04, 1], 
            opacity: [0.9, 1, 0.9],
            rotate: [0, 2, 0],
          }}
          transition={{ 
            scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            opacity: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 4, ease: "linear" }
          }}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-400 via-emerald-500 to-cyan-400 flex items-center justify-center text-white shadow-[0_0_24px_rgba(16,185,129,0.4)]"
        >
          <BrainCircuit size={22} />
        </motion.div>
      </div>

      <div className="absolute top-3 right-3 bg-emerald-500/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm border border-emerald-400/20">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        Online
      </div>
      
      <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg">
        Aura AI
      </div>
    </div>
  );
}

function CandidateWebcam() {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  const hudMetrics = [
    { label: "Confidence", val: "87%", color: "text-emerald-600" },
    { label: "Eye Contact", val: "92%", color: "text-cyan-600" },
    { label: "Fluency", val: "84%", color: "text-emerald-600" },
    { label: "Tech Depth", val: "91%", color: "text-cyan-600" }
  ];

  return (
    <div className="relative aspect-video rounded-[20px] overflow-hidden border border-white/30 backdrop-blur-xl bg-white/60 shadow-lg flex items-center justify-center p-4">
      {/* HK Initials Avatar */}
      <div className="w-16 h-16 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-700 font-extrabold text-xl shadow-inner select-none">
        HK
      </div>
      
      {/* Live Badge */}
      <div className="absolute top-3 left-3 bg-red-500/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm border border-red-400/20">
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-1.5 rounded-full bg-white"
        />
        Live
      </div>
      
      {/* Candidate Label */}
      <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg">
        Candidate (You)
      </div>

      {/* Floating HUD metrics */}
      <div className="absolute right-2 top-2 bottom-2 flex flex-col justify-center gap-1.5 max-w-[110px] pointer-events-none">
        {hudMetrics.map((m, idx) => (
          <motion.div
            key={m.label}
            animate={prefersReduced ? {} : { y: [-2, 2, -2] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.4
            }}
            className="backdrop-blur-md bg-white/80 border border-white/60 px-2 py-1 rounded-md shadow-sm flex flex-col items-center justify-center text-center leading-none"
          >
            <span className="text-[7px] font-bold text-slate-500 uppercase tracking-wide mb-0.5">{m.label}</span>
            <span className={`text-[10px] font-extrabold ${m.color}`}>{m.val}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AIThinkingState() {
  const states = [
    "Recording...",
    "Transcribing...",
    "Analyzing Response...",
    "Generating Feedback...",
    "Report Ready"
  ];
  const [currentStateIdx, setCurrentStateIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStateIdx((prev) => (prev + 1) % states.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stateText = states[currentStateIdx];
  const isComplete = stateText === "Report Ready";

  return (
    <div className="flex items-center gap-2 text-emerald-600 font-semibold py-1">
      {!isComplete && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-3.5 h-3.5 border-2 border-emerald-500 border-t-transparent rounded-full"
        />
      )}
      {isComplete && (
        <span className="text-emerald-500 font-bold text-sm">✓</span>
      )}
      <span className="text-xs tracking-wide transition-all duration-300 font-medium">
        {stateText}
      </span>
    </div>
  );
}

function CircularScoreRing({ score = 89 }: { score?: number }) {
  const radius = 28;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  
  useEffect(() => {
    const offset = circumference - (score / 100) * circumference;
    const timer = setTimeout(() => {
      setStrokeDashoffset(offset);
    }, 450);
    return () => clearTimeout(timer);
  }, [score, circumference]);
  
  return (
    <div className="flex flex-col items-center justify-center p-3.5 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl shadow-sm select-none">
      <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-1.5 text-center">
        Overall Score
      </span>
      <div className="relative w-16 h-16 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-slate-100"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="32"
            cy="32"
          />
          <motion.circle
            className="text-emerald-500"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            stroke="url(#scoreGrad)"
            fill="transparent"
            r={radius}
            cx="32"
            cy="32"
          />
          <defs>
            <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute text-sm font-black text-slate-800">
          <AnimatedCounter value={score} />
        </div>
      </div>
    </div>
  );
}

function ConfidenceTrendChart() {
  return (
    <div className="flex flex-col p-3.5 bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl shadow-sm w-full select-none">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">
          Confidence Trend
        </span>
        <span className="text-[8px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-full">
          +22% Improvement
        </span>
      </div>
      <div className="flex items-end justify-between h-12 w-full relative">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 140 40">
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="5" y1="35" x2="135" y2="35" stroke="#f1f5f9" strokeWidth="1" />
          
          <motion.path
            d="M 5,35 L 45,26 L 90,16 L 135,5"
            fill="none"
            stroke="url(#scoreGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.path
            d="M 5,35 L 45,26 L 90,16 L 135,5 L 135,35 L 5,35 Z"
            fill="url(#chartGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
          <motion.circle cx="5" cy="35" r="3" fill="#10b981" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
          <motion.circle cx="45" cy="26" r="3" fill="#10b981" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
          <motion.circle cx="90" cy="16" r="3" fill="#10b981" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />
          <motion.circle cx="135" cy="5" r="3" fill="#06b6d4" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }} />
        </svg>
      </div>
      <div className="flex justify-between text-[8px] font-bold text-slate-400 mt-1.5 leading-none">
        <span>Mock 1</span>
        <span>Mock 2</span>
        <span>Mock 3</span>
        <span>Mock 4</span>
      </div>
    </div>
  );
}

function WorkflowTimeline() {
  const steps = [
    "Question Asked",
    "Answer Submitted",
    "AI Evaluation",
    "Feedback Generated",
    "Report Ready"
  ];
  
  return (
    <div className="w-full py-4 px-2 select-none">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-slate-100 -z-10" />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-emerald-500/80 -z-10 origin-left"
        />

        {steps.map((step, idx) => (
          <div key={step} className="flex flex-col items-center text-center relative z-10">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.45, type: "spring", stiffness: 300, damping: 15 }}
              className="w-7 h-7 rounded-full bg-white border-2 border-emerald-500 shadow-sm flex items-center justify-center"
            >
              <span className="text-[10px] font-bold text-emerald-600">✓</span>
            </motion.div>
            <span className="text-[9px] font-bold text-slate-500 mt-2 whitespace-nowrap hidden sm:block">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeedbackScorePill({ score }: { score: number }) {
  const getColors = (s: number) => {
    if (s >= 90) return "bg-emerald-100 text-emerald-800 border-emerald-200/60";
    if (s >= 80) return "bg-cyan-100 text-cyan-800 border-cyan-200/60";
    return "bg-amber-100 text-amber-800 border-amber-200/60";
  };

  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getColors(score)}`}>
      {score}
    </span>
  );
}

export default function EzPrepShowcase() {
  const scores = [
    {
      label: "Confidence",
      value: 87,
    },
    {
      label: "Communication",
      value: 82,
    },
    {
      label: "Technical Depth",
      value: 91,
    },
  ];

  const feedbackItems = [
    { text: "Strong JWT Understanding", score: 92, isSuccess: true },
    { text: "Good Security Awareness", score: 88, isSuccess: true },
    { text: "Clear Communication", score: 90, isSuccess: true },
    { text: "Improve Refresh Token Strategy", score: 71, isSuccess: false },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-1/4 w-[350px] h-[350px] rounded-full bg-emerald-400/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-1/4 w-[300px] h-[300px] rounded-full bg-yellow-400/8 opacity-80 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-10 w-[280px] h-[280px] rounded-full bg-cyan-400/10 blur-[120px]"
        />
        {/* Soft grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.25] pointer-events-none" />
      </div>

      {/* Mobile-only Horizontal Scroll Chips */}
      <div className="w-full flex lg:hidden overflow-x-auto gap-3.5 pb-5 px-2 mb-4 scrollbar-none select-none">
        {[
          { label: "Voice Analysis", icon: "🎤" },
          { label: "Technical Evaluation", icon: "🧠" },
          { label: "Performance Reports", icon: "📊" },
          { label: "Personalized Feedback", icon: "🎯" }
        ].map((item) => (
          <div
            key={item.label}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/40 bg-white/70 backdrop-blur-md shadow-sm text-slate-700 font-semibold text-xs whitespace-nowrap"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Floating Features (Desktop only) */}
      <FeatureBadge
        icon={<Mic size={18} />}
        title="Voice Analysis"
        className="top-10 left-10"
        delay={0}
        duration={4.2}
      />

      <FeatureBadge
        icon={<BrainCircuit size={18} />}
        title="Technical Evaluation"
        className="top-10 right-10"
        delay={0.5}
        duration={4.6}
      />

      <FeatureBadge
        icon={<BarChart3 size={18} />}
        title="Performance Reports"
        className="bottom-24 left-10"
        delay={0.8}
        duration={4.4}
      />

      <FeatureBadge
        icon={<Target size={18} />}
        title="Personalized Feedback"
        className="bottom-24 right-10"
        delay={0.3}
        duration={4.8}
      />

      {/* Main Interview Window Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="
          max-w-[760px]
          w-full
          rounded-[36px]
          overflow-hidden
          border
          border-emerald-200
          bg-gradient-to-br
          from-[#FFFDF2]/90
          via-[#F7FFF9]/90
          to-[#F0FBFF]/90
          backdrop-blur-md
          shadow-[0_30px_80px_rgba(0,0,0,0.06)]
          transition-all
          duration-300
        "
      >
        {/* Header */}
        <div className="px-8 py-6 border-b border-emerald-100 bg-white/60 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-600">
              SmartStudent
            </div>
            <h2 className="mt-1.5 text-3xl font-black text-slate-900 tracking-tight">
              ezPrep
            </h2>
            <p className="text-xs text-slate-500 font-semibold mt-0.5 uppercase tracking-wider">
              AI Interview Simulator
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/15">
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 rounded-full bg-emerald-500"
            />
            <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider select-none animate-pulse">
              AI Active
            </span>
          </div>
        </div>

        {/* Video feeds grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 mt-6">
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <CandidateWebcam />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <AuraAIAvatar />
          </motion.div>
        </div>

        {/* Metadata & Progress Header */}
        <div className="px-8 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold text-emerald-600 uppercase tracking-widest leading-none">
            <span className="bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/15">
              Frontend Developer Interview
            </span>
            <div className="flex items-center gap-3">
              <span>Question 3 / 10</span>
              <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-extrabold select-none">
                Medium
              </span>
            </div>
          </div>
          
          {/* Question progress indicator bar */}
          <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100/60 border border-zinc-200/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "30%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full bg-emerald-500 rounded-full"
            />
          </div>

          <h3 className="mt-5 text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
            Explain JWT authentication and token validation flow.
          </h3>
        </div>

        {/* Recording Waveform */}
        <div className="px-8 mt-6">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2.5 h-2.5 rounded-full bg-red-500"
            />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Recording...
            </span>
          </div>

          {/* Audio Wave */}
          <div className="mt-4 flex items-end gap-1.5 h-10 select-none">
            {[1.2, 1.5, 2.1, 1.1, 2.4, 1.6, 1.9, 1.3, 2.2, 1.4, 1.8, 1.2, 2.5, 1.5, 1.7].map(
              (duration, index) => (
                <motion.div
                  key={index}
                  animate={{
                    height: [8, 32, 12, 38, 8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration,
                  }}
                  className="
                    flex-1
                    w-1.5
                    rounded-full
                    bg-gradient-to-t
                    from-emerald-500
                    to-cyan-400
                  "
                />
              )
            )}
          </div>
        </div>

        {/* Live Transcript Panel */}
        <div className="px-8 mt-6">
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-3xl p-5 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider select-none">
              <Activity size={14} className="animate-pulse" />
              Live Transcript
            </div>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-zinc-100 flex-shrink-0 flex items-center justify-center font-black text-[10px] text-zinc-600 border border-zinc-200/60 select-none">
                  You
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/15 text-slate-700 p-3 rounded-2xl rounded-tl-none leading-relaxed max-w-[85%] font-medium">
                  JWT contains three parts: Header, Payload, and Signature. It is stateless and self-contained, allowing secure verification of claims...
                </div>
              </div>

              <div className="flex items-start gap-2.5 justify-end">
                <div className="bg-white/90 border border-zinc-200/50 text-slate-700 p-3 rounded-2xl rounded-tr-none leading-relaxed max-w-[85%] shadow-sm font-medium">
                  <div className="text-[9px] text-zinc-400 font-bold mb-1 text-right select-none uppercase tracking-wide">Aura AI</div>
                  Good explanation. How would you secure refresh tokens to prevent replay attacks?
                </div>
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex-shrink-0 flex items-center justify-center font-black text-[10px] text-white shadow-sm select-none">
                  AI
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-200/50 pt-4 mt-2">
              <WorkflowTimeline />
            </div>
          </motion.div>
        </div>

        {/* Evaluation & Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mt-6">
          <div className="md:col-span-2 space-y-4">
            {scores.map((item) => (
              <ScoreRow
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
          
          <div className="flex flex-row md:flex-col gap-4 items-stretch justify-between">
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="flex-1"
            >
              <CircularScoreRing score={89} />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="flex-1"
            >
              <ConfidenceTrendChart />
            </motion.div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="px-8 mt-6">
          <motion.div
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-3xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4 select-none">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 size={16} />
                AI Evaluation Report
              </div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-800 font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-emerald-500/15">
                Completed
              </span>
            </div>

            <div className="space-y-2.5">
              {feedbackItems.map((feedback, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all hover:translate-x-1 ${
                    feedback.isSuccess
                      ? "bg-emerald-500/5 border-emerald-500/10 text-emerald-800"
                      : "bg-amber-500/5 border-amber-500/10 text-amber-800"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={feedback.isSuccess ? "text-emerald-500 font-bold" : "text-amber-500 font-bold"}>
                      {feedback.isSuccess ? "✓" : "⚠"}
                    </span>
                    <span>{feedback.text}</span>
                  </div>
                  <FeedbackScorePill score={feedback.score} />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-zinc-200/50 pt-4 mt-4 select-none">
              <AIThinkingState />
              <span className="text-[9px] text-zinc-400 font-bold italic uppercase tracking-wider">Evaluation Complete</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-8 py-8">
          <StatCard
            value="87"
            label="Confidence"
          />

          <StatCard
            value="82"
            label="Communication"
          />

          <StatCard
            value="91"
            label="Tech Depth"
          />

          <StatCard
            value="A+"
            label="Overall Rating"
            isString
          />
        </div>

      </motion.div>
    </div>
  );
}