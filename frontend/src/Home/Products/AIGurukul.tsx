import {
  ArrowRight,
  BookOpen,
  Trophy,
  BarChart3,
  Brain,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";
import LandingNavbar from "../LandingNavbar";
import { Footer } from "../Footer";

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

      {/* Leaderboard */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold">
              Healthy Competition Drives Better Outcomes
            </h2>

            <p className="mt-6 text-zinc-400 text-lg">
              Encourage students through rankings, achievements,
              and performance tracking.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">
              🏆 Leaderboard
            </h3>

            {[
              "Priya Sharma",
              "Aditya Verma",
              "Arjun Singh",
              "You",
            ].map((name, index) => (
              <div
                key={name}
                className="flex justify-between py-3 border-b border-white/5"
              >
                <span>
                  {index + 1}. {name}
                </span>

                <span>
                  {980 - index * 25}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Know Exactly Where You Stand
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Physics", score: "85%" },
            { label: "Chemistry", score: "72%" },
            { label: "Mathematics", score: "90%" },
            { label: "Overall", score: "82%" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-400">
                {item.score}
              </h3>

              <p className="mt-3 text-zinc-400">
                {item.label}
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