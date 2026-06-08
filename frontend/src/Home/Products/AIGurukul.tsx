import {
  ArrowRight,
  BookOpen,
  Trophy,
  BarChart3,
  Brain,
  ClipboardCheck,
  GraduationCap,
  Atom, FlaskConical, Calculator, Clock3,
  CheckCircle2,
  FileCheck,  Award,
  Flame,
  Star, TrendingUp,
  Target,
  Activity
} from "lucide-react";
import { useRef } from "react";
import LandingNavbar from "../LandingNavbar";
import { Footer } from "../Footer";
import { motion, useScroll, useTransform } from "framer-motion";


export default function GurukulPage() {
  const features = [
    {
      icon: <BookOpen size={28} />,
      title: "Structured Courses",
      description:
        "Access lessons, videos, resources, and learning paths in one place.",
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: "Smart Assessments",
      description:
        "Practice with quizzes, assignments, and exams designed to measure progress.",
    },
    {
      icon: <Trophy size={28} />,
      title: "Student Rankings",
      description:
        "Compete through leaderboards and track your standing among peers.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Learning Analytics",
      description:
        "Understand strengths, weaknesses, and performance trends.",
    },
    {
      icon: <Brain size={28} />,
      title: "AI Recommendations",
      description:
        "Receive personalized suggestions on what to study next.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Progress Tracking",
      description:
        "Monitor growth across subjects and stay focused on goals.",
    },
  ];

  const journey = [
    "Enroll",
    "Learn",
    "Practice",
    "Assess",
    "Compete",
    "Improve",
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );


  return (
    <>
    <LandingNavbar />
    <div className="bg-white text-black overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600/20 blur-[180px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">
            <span className="text-sm text-blue-300">
              AI-Powered Learning Platform
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">
            {/* Left */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Everything Students Need to Learn, Practice and Excel
              </h1>

              <p className="mt-6 text-xl text-zinc-400">
                Access courses, complete assessments, track rankings,
                monitor progress, and receive personalized learning
                recommendations—all from one platform.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-medium flex items-center gap-2">
                  Explore Platform
                  <ArrowRight size={18} />
                </button>

                <button className="border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl">
                  Book Demo
                </button>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-xl">
                  Welcome Back 👋
                </h3>

                <span className="text-blue-400">
                  Rank #12
                </span>
              </div>

              <div className="mt-8 space-y-5">
                {[
                  { subject: "Physics", value: "78%" },
                  { subject: "Chemistry", value: "65%" },
                  { subject: "Mathematics", value: "82%" },
                ].map((item) => (
                  <div key={item.subject}>
                    <div className="flex justify-between mb-2">
                      <span>{item.subject}</span>
                      <span>{item.value}</span>
                    </div>

                    <div className="h-2 bg-white/10 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{
                          width: item.value,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-sm text-blue-300">
                  Upcoming Assessment
                </p>

                <h4 className="mt-2 font-medium">
                  Physics Mock Test
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      


    

          <section className="relative overflow-hidden py-32">
          {/* Background Glows */}

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-10 top-20 w-72 h-72 bg-yellow-200/30 blur-3xl rounded-full" />

            <div className="absolute right-20 bottom-10 w-80 h-80 bg-emerald-200/20 blur-3xl rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                Courses
              </div>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                Learn Through
                <span className="text-[#EECD42]"> Structured Courses</span>
              </h2>

              <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
                Access organized learning paths designed to help students
                understand concepts, build strong fundamentals and progress
                confidently through their curriculum.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Organized curriculum",
                  "Concept-first learning",
                  "Self-paced progression",
                  "Interactive learning modules",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#EECD42]" />

                    <span className="text-zinc-700 text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SHOWCASE */}

            <div className="relative h-[650px] flex items-center justify-center">
              {/* Floating Course Cards */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-0
                  top-14
                  bg-white
                  rounded-2xl
                  shadow-xl
                  p-4
                  border
                "
              >
                <div className="flex items-center gap-3">
                  <Calculator className="text-yellow-500" />

                  <span>Mathematics</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  right-2
                  
                  top-10
                  bg-white
                  rounded-2xl
                  shadow-xl
                  p-4
                  border
                "
              >
                <div className="flex items-center gap-3">
                  <Atom className="text-emerald-500" />

                  <span>Physics</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-0
                  
                  bottom-16
                  bg-white
                  rounded-2xl
                  shadow-xl
                  p-4
                  border
                "
              >
                <div className="flex items-center gap-3">
                  <FlaskConical className="text-orange-500" />

                  <span>Chemistry</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  right-12
                  bottom-24
                  bg-white
                  rounded-2xl
                  shadow-xl
                  p-4
                  border
                "
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="text-cyan-500" />

                  <span>Biology</span>
                </div>
              </motion.div>

              {/* LAPTOP */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="relative"
              >
                {/* Laptop Screen */}

                <div
                  className="
                    w-[600px]
                    h-[380px]
                    bg-zinc-900
                    rounded-[28px]
                    p-3
                    shadow-2xl
                    ml-6
                  "
                >
                  <div className="w-full h-full bg-white rounded-[20px] p-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>

                    <div className="mt-8">
                      <h3 className="font-bold text-xl">
                        Course Library
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {[
                        "Mathematics",
                        "Physics",
                        "Chemistry",
                        "Biology",
                      ].map((course) => (
                        <div
                          key={course}
                          className="
                            p-4
                            rounded-2xl
                            bg-zinc-50
                            border
                          "
                        >
                          <div className="font-medium">
                            {course}
                          </div>

                          <div className="mt-3 h-2 rounded-full bg-zinc-200">
                            <div className="w-3/4 h-full bg-[#EECD42] rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}

                <div
                  className="
                    h-4
                    w-[650px]
                    bg-zinc-300
                    mx-auto
                    rounded-b-full
                  "
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-32 bg-[#FAFAFA]">
          {/* Background Glows */}

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-10 w-80 h-80 bg-orange-200/30 blur-3xl rounded-full" />

            <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-200/20 blur-3xl rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT SHOWCASE */}

            <div className="relative h-[650px] flex items-center justify-center">
              {/* Floating Cards */}

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute left-0 top-16 bg-white rounded-2xl shadow-xl border p-4"
              >
                <div className="flex items-center gap-3">
                  <Clock3 className="text-orange-500" />
                  <span>12:45 Remaining</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute right-0 top-12 bg-white rounded-2xl shadow-xl border p-4"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="text-yellow-500" />
                  <span>82% Accuracy</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
                className="absolute left-10 bottom-16 bg-white rounded-2xl shadow-xl border p-4"
              >
                <div className="flex items-center gap-3">
                  <FileCheck className="text-emerald-500" />
                  <span>Question 8 / 10</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                }}
                className="absolute right-10 bottom-8 bg-white rounded-2xl shadow-xl border p-4"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" />
                  <span>7 Correct Answers</span>
                </div>
              </motion.div>

              {/* Laptop */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                <div className="w-[600px] h-[380px] bg-zinc-900 rounded-[28px] p-3 shadow-2xl ml-6">
                  <div className="w-full h-full bg-white rounded-[20px] p-6">
                    {/* Browser Dots */}

                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>

                    <div className="mt-8">
                      <h3 className="font-bold text-xl">
                        Smart Assessment
                      </h3>
                    </div>

                    {/* Question */}

                    <div className="mt-8 p-5 rounded-2xl border">
                      <p className="font-medium">
                        Which planet is known as the Red Planet?
                      </p>

                      <div className="grid grid-cols-2 gap-3 mt-5">
                        {[
                          "Earth",
                          "Mars",
                          "Jupiter",
                          "Venus",
                        ].map((option) => (
                          <div
                            key={option}
                            className="
                              border
                              rounded-xl
                              p-3
                              text-sm
                              hover:bg-orange-50
                            "
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>

                    
                  </div>
                </div>

                {/* Laptop Base */}

                <div className="h-4 w-[650px] bg-zinc-300 rounded-b-full mx-auto" />
              </motion.div>
            </div>

            {/* RIGHT CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                Assessments
              </div>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                Practice Through
                <span className="text-orange-500">
                  {" "}
                  Smart Assessments
                </span>
              </h2>

              <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
                Reinforce learning through quizzes, assignments and
                adaptive assessments designed to evaluate understanding
                and improve performance.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Chapter-wise assessments",
                  "Instant performance insights",
                  "Adaptive difficulty levels",
                  "Real exam-like experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-orange-500" />

                    <span className="text-lg text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* leaderboard */}
        <section className="relative overflow-hidden py-32 bg-white">
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-20 top-20 w-80 h-80 bg-yellow-200/20 blur-3xl rounded-full" />

            <div className="absolute right-20 bottom-20 w-80 h-80 bg-emerald-200/20 blur-3xl rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                Recognition & Progress
              </div>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                Earn Recognition
                <span className="text-yellow-500">
                  {" "}For Every Milestone
                </span>
              </h2>

              <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
                Celebrate learning achievements through badges,
                rankings, streaks and milestones that keep students
                motivated throughout their journey.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Institute-wide rankings",
                  "Course-wise performance rankings",
                  "Achievement badges & rewards",
                  "Learning streak recognition",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />

                    <span className="text-lg text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SHOWCASE */}

            <div className="relative h-[650px] flex items-center justify-center">
              {/* Floating Cards */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute left-0 top-16 bg-white rounded-2xl border shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="text-yellow-500" />
                  <span>Institute Rank #12</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute right-0 top-10 bg-white rounded-2xl border shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-emerald-500" />
                  <span>Math Rank #3</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
                className="absolute left-10 bottom-16 bg-white rounded-2xl border shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <Award className="text-orange-500" />
                  <span>Course Master</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                }}
                className="absolute right-10 bottom-10 bg-white rounded-2xl border shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <Flame className="text-red-500" />
                  <span>30 Day Streak</span>
                </div>
              </motion.div>

              {/* LAPTOP */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                <div className="w-[600px] h-[380px] bg-zinc-900 rounded-[28px] p-3 shadow-2xl ml-6">
                  <div className="w-full h-full bg-white rounded-[20px] p-6 overflow-hidden">
                    {/* Browser Header */}

                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      Recognition Dashboard
                    </h3>

                    {/* Ranking Cards */}

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="rounded-2xl bg-yellow-50 border border-yellow-100 p-4">
                        <p className="text-sm text-zinc-500">
                          Institute Rank
                        </p>

                        <h4 className="text-4xl font-bold text-yellow-600 mt-2">
                          #12
                        </h4>
                      </div>

                      <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                        <p className="text-sm text-zinc-500">
                          Course Rank
                        </p>

                        <h4 className="text-4xl font-bold text-emerald-600 mt-2">
                          #3
                        </h4>
                      </div>
                    </div>

                    {/* Badges */}

                    <div className="mt-6">
                      <p className="text-sm font-medium text-zinc-500 mb-3">
                        Achievements
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          {
                            icon: Trophy,
                            label: "Top Performer",
                            color: "text-yellow-500",
                          },
                          {
                            icon: Flame,
                            label: "30 Day Streak",
                            color: "text-orange-500",
                          },
                          {
                            icon: Star,
                            label: "Consistent Learner",
                            color: "text-purple-500",
                          },
                          {
                            icon: Award,
                            label: "Course Master",
                            color: "text-emerald-500",
                          },
                        ].map((badge) => (
                          <div
                            key={badge.label}
                            className="flex items-center gap-3 rounded-xl bg-zinc-50 p-3"
                          >
                            <badge.icon
                              className={`w-5 h-5 ${badge.color}`}
                            />

                            <span className="text-sm font-medium">
                              {badge.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}

                <div className="h-4 w-[650px] bg-zinc-300 rounded-b-full mx-auto" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* analytics */}
        <section className="relative overflow-hidden py-32 bg-[#FAFAFA]">
          {/* Background Glows */}

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-20 top-20 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full" />

            <div className="absolute right-10 bottom-20 w-80 h-80 bg-sky-200/20 blur-3xl rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

            {/* SHOWCASE */}

            <div className="relative h-[650px] flex items-center justify-center">

              {/* Floating Cards */}

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute left-0 top-10 bg-white rounded-2xl border shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-cyan-500" />
                  <span>+18% Improvement</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute right-0 top-16 bg-white rounded-2xl border shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <Target className="text-orange-500" />
                  <span>Maths Strength</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute left-10 bottom-8 bg-white rounded-2xl border shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <Activity className="text-emerald-500" />
                  <span>84% Avg Score</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute right-10 bottom-20 bg-white rounded-2xl border shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <Brain className="text-purple-500" />
                  <span>AI Insights Ready</span>
                </div>
              </motion.div>

              {/* LAPTOP */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                <div className="w-[600px] h-[380px] bg-zinc-900 rounded-[28px] p-3 shadow-2xl ml-6">
                  <div className="w-full h-full bg-white rounded-[20px] p-6 overflow-hidden">

                    {/* Browser */}

                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      Performance Analytics
                    </h3>

                    {/* Stats */}

                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <div className="rounded-xl bg-cyan-50 p-3">
                        <p className="text-xs text-zinc-500">
                          Avg Score
                        </p>

                        <h4 className="text-2xl font-bold text-cyan-600">
                          84%
                        </h4>
                      </div>

                      <div className="rounded-xl bg-emerald-50 p-3">
                        <p className="text-xs text-zinc-500">
                          Courses
                        </p>

                        <h4 className="text-2xl font-bold text-emerald-600">
                          12
                        </h4>
                      </div>

                      <div className="rounded-xl bg-orange-50 p-3">
                        <p className="text-xs text-zinc-500">
                          Assessments
                        </p>

                        <h4 className="text-2xl font-bold text-orange-600">
                          48
                        </h4>
                      </div>
                    </div>

                    {/* Subject Progress */}

                    <div className="mt-8 space-y-4">

                      {[
                        {
                          subject: "Mathematics",
                          width: "90%",
                        },
                        {
                          subject: "Science",
                          width: "78%",
                        },
                        {
                          subject: "English",
                          width: "85%",
                        },
                        {
                          subject: "History",
                          width: "62%",
                        },
                      ].map((item) => (
                        <div key={item.subject}>
                          <div className="flex justify-between text-sm mb-2">
                            <span>{item.subject}</span>
                            <span>{item.width}</span>
                          </div>

                          <div className="h-2 rounded-full bg-zinc-100">
                            <div
                              className="h-full rounded-full bg-cyan-500"
                              style={{
                                width: item.width,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Insight */}

                    <div className="mt-6 rounded-2xl bg-cyan-50 border border-cyan-100 p-4">
                      <p className="text-xs text-cyan-700 font-semibold uppercase tracking-wider">
                        AI Insight
                      </p>

                      <p className="mt-2 text-sm text-zinc-700">
                        Your Mathematics performance
                        improved by 18% over the last
                        month. Continue weekly practice
                        to maintain growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}

                <div className="h-4 w-[650px] bg-zinc-300 rounded-b-full mx-auto" />
              </motion.div>
            </div>

            {/* CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="inline-flex px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium">
                Analytics & Insights
              </div>

              <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
                See Your Progress,
                <span className="text-cyan-500">
                  {" "}Not Just Scores
                </span>
              </h2>

              <p className="mt-8 text-xl text-zinc-600 leading-relaxed">
                Transform learning data into actionable insights.
                Understand strengths, identify improvement areas,
                and make smarter learning decisions.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Subject-wise performance tracking",
                  "Progress trend analysis",
                  "Strength & weakness insights",
                  "AI-powered recommendations",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-cyan-500" />

                    <span className="text-lg text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>



      {/* Problem */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Learning Shouldn't Be Scattered Across Multiple Tools
            </h2>
          </div>

          <div className="space-y-5 text-zinc-400 text-lg">
            <p>
              Students often switch between learning platforms,
              assessments, notes, rankings, and analytics.
            </p>

            <p>
              AI Gurukul brings everything together into a single
              seamless learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            A Complete Student Learning Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-6 gap-4 mt-16">
          {journey.map((step, index) => (
            <div
              key={step}
              className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-6 text-center"
            >
              <div className="text-blue-400 text-sm mb-3">
                0{index + 1}
              </div>

              <h3 className="font-medium">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything Needed for Modern Learning
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="text-blue-400">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="mt-4 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

     

      
      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              value: "95%",
              label: "Student Engagement",
            },
            {
              value: "50K+",
              label: "Learning Sessions",
            },
            {
              value: "24/7",
              label: "Access to Learning",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3 className="text-6xl font-bold text-blue-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-600 p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            Deliver a Smarter Learning Experience
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Empower students with personalized learning,
            continuous assessment, and measurable progress.
          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold">
            Book a Demo
          </button>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}