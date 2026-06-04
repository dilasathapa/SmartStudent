import { Mic, Sparkles, BrainCircuit, FileText, Play } from "lucide-react";
import { motion } from "framer-motion";

function FeatureNode({
  icon,
  title,
  subtitle,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`
        absolute
        w-[180px]
        rounded-3xl
        border
        border-white
        bg-white
        p-4
        shadow-[0_15px_40px_rgba(0,0,0,0.06)]
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
          {icon}
        </div>

        <div>
          <div className="font-semibold text-slate-900">
            {title}
          </div>

          <div className="text-xs text-slate-500">
            {subtitle}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EduStudioShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        w-full
        h-full
        flex
        items-center
        justify-center
      "
    >
      {/* CENTER ENGINE */}

      <div
        className="
          relative
          w-[280px]
          h-[280px]
          rounded-[42px]
          border
          border-emerald-200
          bg-gradient-to-br
          from-[#FFF8D6]
          via-[#E8FFF3]
          to-[#E7FAFF]
          shadow-[0_30px_80px_rgba(16,185,129,0.15)]
          flex
          flex-col
          items-center
          justify-center
          z-20
        "
      >
        <div className="text-sm font-semibold text-emerald-700 tracking-wider uppercase">
          SmartStudent
        </div>

        <h3 className="mt-3 text-4xl font-black text-slate-900">
          EduStudio
        </h3>

        <p className="mt-4 text-center text-slate-600 px-6">
          AI Video Generation Engine
        </p>
      </div>

      {/* TOP NODE */}

      <FeatureNode
        icon={<Mic size={22} />}
        title="AI Narration"
        subtitle="Natural voice explanations"
        className="-top-2 left-1/2 -translate-x-1/2"
      />

      {/* LEFT NODE */}

      <FeatureNode
        icon={<Sparkles size={22} />}
        title="Visuals"
        subtitle="Animated educational content"
        className="left-8 top-1/2 -translate-y-1/2"
      />

      {/* RIGHT NODE */}

      <FeatureNode
        icon={<BrainCircuit size={22} />}
        title="Concept Mapping"
        subtitle="Break complex topics"
        className="right-8 top-1/2 -translate-y-1/2"
      />

      {/* BOTTOM NODE */}

      {/* <FeatureNode
        icon={<FileText size={22} />}
        title="Assessments"
        subtitle="AI-generated questions"
        className="bottom-20 left-1/2 -translate-x-1/2"
      /> */}

      {/* OUTPUT */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[340px]
          rounded-3xl
          border
          border-cyan-200
          bg-white
          p-5
          shadow-lg
        "
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <Play className="w-5 h-5 text-emerald-600" />
          </div>

          <div>
            <div className="font-bold text-slate-900">
              Interactive Learning Video
            </div>

            <div className="text-sm text-slate-500">
              Ready for students
            </div>
          </div>
        </div>
      </motion.div>

      {/* CONNECTORS */}

      <div className="absolute top-[110px] left-1/2 h-[80px] w-px bg-emerald-200" />

      <div className="absolute left-[180px] top-1/2 w-[120px] h-px bg-emerald-200" />

      <div className="absolute right-[180px] top-1/2 w-[120px] h-px bg-emerald-200" />

      <div className="absolute bottom-[140px] left-1/2 h-[70px] w-px bg-emerald-200" />
    </motion.div>
  );
}