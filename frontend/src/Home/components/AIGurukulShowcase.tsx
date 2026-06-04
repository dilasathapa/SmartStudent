import { BookOpen, ClipboardList, Trophy, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

function ProgressRow({
  subject,
  value,
}: {
  subject: string;
  value: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-slate-700">
          {subject}
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
            duration: 1.2,
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



export default function AIGurukulShowcase() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Floating Cards */}

      <FeatureBadge
        icon={<BookOpen size={18} />}
        title="Courses"
        className="top-10 left-10"
      />

      <FeatureBadge
        icon={<ClipboardList size={18} />}
        title="Assignments"
        className="top-10 right-10"
      />

      <FeatureBadge
        icon={<BarChart3 size={18} />}
        title="Progress"
        className="bottom-24 left-10"
      />

      <FeatureBadge
        icon={<Trophy size={18} />}
        title="Leaderboards"
        className="bottom-24 right-10"
      />

      {/* Dashboard */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          w-[650px]
          rounded-[36px]
          border
          border-emerald-200
          bg-gradient-to-br
          from-[#FFFBEA]
          via-[#F4FFF8]
          to-[#F1FBFF]
          p-8
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        "
      >
        {/* Header */}

        <h3 className="text-4xl font-black text-slate-900">
          AI Gurukul
        </h3>

        <p className="text-slate-500 mt-2">
          Learning Management Platform
        </p>

        {/* Progress */}

        <div className="mt-10 space-y-6">

          <ProgressRow
            subject="Physics"
            value={82}
          />

          <ProgressRow
            subject="Chemistry"
            value={67}
          />

          <ProgressRow
            subject="Mathematics"
            value={91}
          />
        </div>

        {/* Stats */}

        <div className="grid grid-cols-4 gap-4 mt-10">

          <StatCard
            value="12"
            label="Assignments"
          />

          <StatCard
            value="28"
            label="Courses"
          />

          <StatCard
            value="45"
            label="Day Streak"
          />

          <StatCard
            value="98%"
            label="Attendance"
          />

        </div>
      </motion.div>
    </div>
  );
}