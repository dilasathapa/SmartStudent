import { motion } from "framer-motion";
import {
  Target,
  BookOpen,
  Brain,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function SmartPapersShowcase() {
  const paper = [
  {
    section: "Section A (1 Mark)",
    questions: [
      "State Snell’s Law.",
      "Define focal length of a lens.",
    ],
  },
  {
    section: "Section B (3 Marks)",
    questions: [
      "Explain laws of reflection with diagram.",
      "Differentiate real and virtual images.",
    ],
  },
  {
    section: "Section C (5 Marks)",
    questions: [
      "Draw ray diagram for convex lens and explain image formation.",
    ],
  },
];

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Floating Badges */}

      <FeatureBadge
        icon={<Target size={18} />}
        title="Difficulty Control"
        className="top-24 left-3 z-10"
      />

      <FeatureBadge
        icon={<BookOpen size={18} />}
        title="Syllabus Aligned"
        className="top-10 right-10 z-20"
      />

      <FeatureBadge
        icon={<Brain size={18} />}
        title="Bloom's Taxonomy"
        className="bottom-24 left-10"
      />

      <FeatureBadge
        icon={<CheckCircle2 size={18} />}
        title="Answer Keys"
        className="bottom-24 right-10"
      />

      {/* Main Workspace */}

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
          via-[#F9FFF6]
          to-[#F2FCFF]
          shadow-[0_30px_80px_rgba(0,0,0,0.06)]
        "
      >
        {/* Header */}

        <div className="px-8 py-6 border-b border-emerald-100 bg-white/60 backdrop-blur-sm">

          <div className="text-sm uppercase tracking-widest font-semibold text-emerald-600">
            SmartStudent
          </div>

          <h2 className="text-4xl font-black text-slate-900 mt-2">
            SmartPapers
          </h2>

          <p className="text-slate-500 mt-2">
            Predicted paper based on syllabus & PYQ trends
          </p>

        </div>

        {/* Controls */}

        <div className="px-8 pt-6 flex flex-wrap gap-3">

          <Pill>Physics</Pill>

          <Pill>Class 10</Pill>

          <Pill>Medium Difficulty</Pill>

          <Pill>25 Questions</Pill>

        </div>

        {/* Generate Button */}

        {/* <div className="px-8 mt-5">
          <button
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-emerald-500
              to-cyan-500
              text-white
              font-semibold
              shadow-lg
            "
          >
            <Sparkles size={18} />
            Generate Paper
          </button>
        </div> */}

        {/* Paper Preview */}

        <div className="px-8 py-8">

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-emerald-100
            "
          >
            <div className="flex items-center gap-2 text-emerald-600 font-semibold mb-5">
              <CheckCircle2 size={18} />
              Paper Ready
            </div>

            <div className="space-y-4">

              {paper.map((section) => (
                <div key={section.section} className="mb-6">
                  <h3 className="font-bold text-emerald-700 mb-3">
                    {section.section}
                  </h3>

                  <div className="space-y-2">
                    {section.questions.map((q, i) => (
                      <div key={i} className="text-slate-700">
                        Q{i + 1}. {q}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-4 gap-4 px-8 pb-8">

          <StatCard
            value="25"
            label="Questions"
          />

          <StatCard
            value="5"
            label="Marks Levels"
          />

          <StatCard
            value="100%"
            label="Syllabus Match"
          />

          <StatCard
            value="✓"
            label="Answer Key"
          />

        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------- */
/* Pill */
/* -------------------------- */

function Pill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        px-4
        py-2
        rounded-full
        bg-white
        border
        border-emerald-100
        text-sm
        font-medium
        text-slate-700
      "
    >
      {children}
    </div>
  );
}

/* -------------------------- */
/* Stat Card */
/* -------------------------- */

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        bg-white/80
        rounded-2xl
        border
        border-white
        p-4
        text-center
      "
    >
      <div className="text-3xl font-black text-slate-900">
        {value}
      </div>

      <div className="text-sm text-slate-500 mt-1">
        {label}
      </div>
    </div>
  );
}

/* -------------------------- */
/* Floating Badge */
/* -------------------------- */

function FeatureBadge({
  icon,
  title,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  className: string;
}) {
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
        px-5
        py-3
        bg-white
        rounded-2xl
        border
        border-emerald-100
        shadow-[0_15px_40px_rgba(0,0,0,0.05)]
        flex
        items-center
        gap-3
        ${className}
      `}
    >
      <div className="text-emerald-600">
        {icon}
      </div>

      <span className="font-medium text-slate-700">
        {title}
      </span>
    </motion.div>
  );
}