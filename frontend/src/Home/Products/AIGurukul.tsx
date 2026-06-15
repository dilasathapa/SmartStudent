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
  Activity,
  Sparkles,
  Play,
} from "lucide-react";
import { useEffect, useRef } from "react";
import LandingNavbar from "../LandingNavbar";
import { Footer } from "../Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";





export default function GurukulPage() {
 

  const journey = [
    "Enroll",
    "Learn",
    "Practice",
    "Assess",
    "Improve",
  ];

 

  const sectionRef = useRef(null);

  useEffect(() => {
    const screens = gsap.utils.toArray(".feature-screen");

    screens.forEach((screen: any, index) => {
      if (index === 0) return;

      gsap.fromTo(
        screen,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${index * 25}% top`,
            end: `${(index + 1) * 25}% top`,
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "",
      pin: true,
      scrub: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
    <LandingNavbar />
    <div className="bg-white text-black overflow-hidden">
      {/* Hero */}
      <section className="relative mt-24 flex flex-col items-center m-32  mb-4">
        {/* <div className="absolute inset-0">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-600/20 blur-[180px]" />
        </div> */}

        <div className="relative max-w-7xl mx-auto px-6 pb-24">
          

          <div className="gap-16 items-center">
            {/* Left */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Everything Students
                
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">need to</h1>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">Learn, Practice and Excel</h1>

              <p className="mt-6 text-xl text-zinc-400 max-w-5xl">
                Access courses, complete assessments, track rankings,
                monitor progress, and receive personalized learning
                recommendations—all from one platform.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2">
                  Explore Platform
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
            One Platform for Every Step of the Learning Journey
          </h3>
          
        </div>
      </section>

      {/* features  */}
      <section
          ref={sectionRef}
          className="relative "
        >
          <div className="sticky top-0 h-screen overflow-hidden">


            

                  <div
          className="
            feature-screen
            absolute
            inset-0
            bg-white
            z-[1]
          "
        >
                  {/* Background Glows */}

                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-10 top-20 w-72 h-72 bg-yellow-200/30 blur-3xl rounded-full" />

                    <div className="absolute right-20 bottom-10 w-80 h-80 bg-emerald-200/20 blur-3xl rounded-full" />
                  </div>

                  <div
          className="
            max-w-7xl
            mx-auto
            px-6
            grid
            lg:grid-cols-2
            gap-20
            items-center
            pt-16
          "
        >
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
                </div>

                <div
                  className="
                    feature-screen
                    absolute
                    inset-0
                    bg-white
                    z-[1]
                  "
                >
                  {/* Background Glows */}

                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 right-10 w-80 h-80 bg-orange-200/30 blur-3xl rounded-full" />

                    <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-200/20 blur-3xl rounded-full" />
                  </div>

                  <div
          className="
            h-full
            max-w-7xl
            mx-auto
            px-6
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >
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
                </div>

                {/* leaderboard */}
                <div
                  className="
                    feature-screen
                    absolute
                    inset-0
                    bg-white
                    z-[1]
                  "
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-20 top-20 w-80 h-80 bg-yellow-200/20 blur-3xl rounded-full" />

                    <div className="absolute right-20 bottom-20 w-80 h-80 bg-emerald-200/20 blur-3xl rounded-full" />
                  </div>

                  <div
          className="
            h-full
            max-w-7xl
            mx-auto
            px-6
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >
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
                </div>

                {/* analytics */}
                <div
                  className="
                    feature-screen
                    absolute
                    inset-0
                    bg-white
                    z-[1]
                  "
                >
                  {/* Background Glows */}

                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-20 top-20 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full" />

                    <div className="absolute right-10 bottom-20 w-80 h-80 bg-sky-200/20 blur-3xl rounded-full" />
                  </div>

                  <div
          className="
            h-full
            max-w-7xl
            mx-auto
            px-6
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >

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
                </div>


        </div>
      </section>


      {/* Problem */}
 
      <section className="mx-auto px-16 py-28 bg-gradient-to-r from-orange-400 to-yellow-300 my-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start ">

          {/* LEFT SIDE - Static */}
          <div>
            <h2 className="text-6xl font-bold leading-tight text-white">
              Learning Shouldn't Be Scattered Across Multiple Tools
            </h2>
          </div>

          {/* RIGHT SIDE - Animated */}
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
            className="space-y-6 text-zinc-700 font-semibold text-lg pt-10"
          >
            <p>
              Students often switch between learning platforms,
              assessments, notes, rankings, and analytics.
            </p>

            <p>
              AI Gurukul brings everything together into a single
              seamless learning experience.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Learning Journey */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            A Complete Student Learning Journey
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
                    "Begin your learning journey with structured courses designed to match your goals and aspirations."}

                  {index === 1 &&
                    "Explore concepts through engaging lessons, interactive content, and personalized learning experiences."}

                  {index === 2 &&
                    "Strengthen your understanding with exercises, assignments, and hands-on activities."}

                  {index === 3 &&
                    "Measure progress through intelligent assessments and gain insights into your performance."}

                  {index === 4 &&
                    "Receive actionable feedback and continuously refine your skills to achieve better outcomes."}
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

      {/* general Features cards */}
      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold">
            Everything Students Need
            <span className="text-[#EECD42]">
              {" "}In One Place
            </span>
          </h2>

          <p className="mt-6 text-xl text-zinc-500 max-w-3xl mx-auto">
            From learning and assessments to rankings and analytics,
            AI Gurukul brings the entire learning journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="flex flex-col gap-6"
          >
            {/* Structured Courses */}

            <div className="bg-white border rounded-3xl p-6 h-[500px]">

              {/* MOCKUP */}

              <div className="bg-zinc-50 border rounded-2xl p-5 h-64">
                <div className="font-semibold">
                  Course Library
                </div>

                <div className="mt-5 space-y-4">

                  {[
                    "Mathematics",
                    "Physics",
                    "Chemistry",
                  ].map((course) => (
                    <div key={course}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{course}</span>
                        <span>75%</span>
                      </div>

                      <div className="h-2 bg-zinc-200 rounded-full">
                        <div className="h-full w-3/4 rounded-full bg-[#EECD42]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Structured Courses
              </h3>

              <p className="mt-4 text-zinc-500">
                Follow organized learning paths designed to help students
                build strong foundations and progress confidently.
              </p>
            </div>

            {/* Assessments */}

            <div className="bg-white border rounded-3xl p-8 h-[220px]">

              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                📝
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Smart Assessments
              </h3>

              <p className="mt-4 text-zinc-500">
                Practice through adaptive quizzes
                designed to strengthen understanding.
              </p>

            </div>
          </motion.div>

          {/* CENTER COLUMN */}

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
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
            {/* Rankings */}

            <div className="bg-white border rounded-3xl p-8 h-[220px]">

              <div className="text-5xl">
                🏆
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Student Rankings
              </h3>

              <p className="mt-4 text-zinc-500">
                View your course and institute rankings while
                earning badges for achievements.
              </p>

            </div>

            {/* Analytics */}

            <div className="bg-white border rounded-3xl p-6 h-[500px]">

              <div className="bg-zinc-50 border rounded-2xl p-5 h-64">

                <div className="font-semibold">
                  Learning Analytics
                </div>

                <div className="flex items-end gap-3 mt-8 h-32">

                  {[40, 65, 50, 85, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-xl bg-emerald-400"
                      style={{
                        height: `${h}%`,
                      }}
                    />
                  ))}

                </div>

                <div className="flex justify-between text-xs text-zinc-500 mt-4">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                </div>

              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Learning Analytics
              </h3>

              <p className="mt-4 text-zinc-500">
                Understand strengths, weaknesses and learning
                patterns through detailed insights.
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="flex flex-col gap-6"
          >
            {/* Progress Tracking */}

            <div className="bg-white border rounded-3xl p-6 h-[500px]">

              <div className="bg-zinc-50 border rounded-2xl p-5 h-64">

                <div className="font-semibold">
                  Progress Overview
                </div>

                <div className="mt-8 flex justify-center">

                  <div className="relative w-36 h-36 rounded-full border-[12px] border-zinc-200">

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        border-[12px]
                        border-transparent
                        border-t-[#EECD42]
                        rotate-45
                      "
                    />

                    <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl">
                      78%
                    </div>

                  </div>

                </div>

              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Progress Tracking
              </h3>

              <p className="mt-4 text-zinc-500">
                Monitor completion rates, learning consistency
                and academic growth over time.
              </p>

            </div>

            {/* AI Recommendations */}

            <div className="bg-white border rounded-3xl p-8 h-[220px]">

              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
                ✨
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                AI Recommendations
              </h3>

              <p className="mt-4 text-zinc-500">
                Get personalized suggestions on what to learn,
                revise and practice next.
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
              95%
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
                Student Engagement
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Active participation across courses, assessments and learning activities.
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
              50k+
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
                Learning Sessions
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Thousands of learning interactions completed by students.
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
              24/7
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
                Access to learning
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Students can learn, practice and revise anytime they choose.
              </p>
            </motion.div>
          </motion.div>

          

        

        </div>
      </section>


      

      {/* CTA */}
      <section className="">
        <div className=" bg-gradient-to-r from-[#dbcc2a] via-[#358f25] to-[#08842b] text-white p-12 md:p-20 text-center">
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