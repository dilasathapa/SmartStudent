import { motion } from "framer-motion";
import {
  Mic,
  BrainCircuit,
  BarChart3,
  Target,
  CheckCircle2,
} from "lucide-react";

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
        <span className="font-medium text-slate-700">
          {label}
        </span>

        <span className="font-bold text-emerald-600">
          {value}%
        </span>
      </div>

      <div className="h-3 rounded-full bg-white overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1,
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
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 text-center">
      <div className="text-3xl font-black text-slate-900">
        {value}
      </div>

      <div className="text-sm text-slate-500 mt-1">
        {label}
      </div>
    </div>
  );
}

function FeatureBadge({
  icon,
  title,
  className,
}: any) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`
        absolute
        bg-white
        px-5
        py-3
        rounded-2xl
        border
        border-emerald-100
        shadow-lg
        flex
        items-center
        gap-3
        ${className}
      `}
    >
      <div className="text-emerald-600">
        {icon}
      </div>

      <div className="font-medium text-slate-700">
        {title}
      </div>
    </motion.div>
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

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Floating Features */}

      <FeatureBadge
        icon={<Mic size={18} />}
        title="Voice Analysis"
        className="top-10 left-10"
      />

      <FeatureBadge
        icon={<BrainCircuit size={18} />}
        title="Technical Evaluation"
        className="top-10 right-10"
      />

      <FeatureBadge
        icon={<BarChart3 size={18} />}
        title="Performance Reports"
        className="bottom-24 left-10"
      />

      <FeatureBadge
        icon={<Target size={18} />}
        title="Personalized Feedback"
        className="bottom-24 right-10"
      />

      {/* Main Interview Window */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          w-[720px]
          rounded-[36px]
          overflow-hidden
          border
          border-emerald-200
          bg-gradient-to-br
          from-[#FFFDF2]
          via-[#F7FFF9]
          to-[#F0FBFF]
          shadow-[0_30px_80px_rgba(0,0,0,0.06)]
        "
      >

        {/* Header */}

        <div className="px-8 py-6 border-b border-emerald-100 bg-white/60">
          <div className="text-sm uppercase tracking-widest font-semibold text-emerald-600">
            SmartStudent
          </div>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            ezPrep
          </h2>

          <p className="mt-2 text-slate-500">
            AI Interview Simulator
          </p>
        </div>

        {/* Question */}

        <div className="px-8 pt-8">

          <div className="text-sm font-semibold text-emerald-600">
            Question #3
          </div>

          <h3 className="mt-3 text-3xl font-bold text-slate-900 leading-snug">
            Explain JWT authentication and
            token validation flow.
          </h3>

        </div>

        {/* Recording */}

        <div className="px-8 mt-8">

          <div className="flex items-center gap-3">

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
              }}
              className="
                w-3
                h-3
                rounded-full
                bg-red-500
              "
            />

            <span className="font-medium text-slate-700">
              Recording...
            </span>

          </div>

          {/* Audio Wave */}

          <div className="mt-6 flex items-end gap-1 h-10">

            {[1, 1.5, 2, 1.2, 2.3, 1.4, 1.8].map(
              (duration, index) => (
                <motion.div
                  key={index}
                  animate={{
                    height: [
                      10,
                      35,
                      15,
                      40,
                      10,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration,
                  }}
                  className="
                    w-2
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

        {/* Scores */}

        <div className="px-8 mt-10 space-y-5">

          {scores.map((item) => (
            <ScoreRow
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}

        </div>

        {/* Feedback */}

        <div className="px-8 mt-8">

          <div
            className="
              bg-white
              rounded-3xl
              border
              border-emerald-100
              p-5
            "
          >
            <div className="flex items-center gap-2 text-emerald-600 font-semibold">

              <CheckCircle2 size={18} />

              AI Feedback

            </div>

            <p className="mt-3 text-slate-600 leading-relaxed">
              Excellent explanation of JWT structure.
              Could improve refresh token strategy
              and security considerations.
            </p>
          </div>

        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-4 gap-4 px-8 py-8">

          <StatCard
            value="50+"
            label="Mock Interviews"
          />

          <StatCard
            value="AI"
            label="Evaluation"
          />

          <StatCard
            value="24/7"
            label="Practice"
          />

          <StatCard
            value="✓"
            label="Reports"
          />

        </div>

      </motion.div>
    </div>
  );
}