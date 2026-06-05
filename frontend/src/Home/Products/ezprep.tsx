import {
  ArrowRight,
  Mic,
  Brain,
  Briefcase,
  BarChart3,
  MessageSquare,
  Trophy,
} from "lucide-react";
import LandingNavbar from "../LandingNavbar";
import { Footer } from "../Footer";

export default function EZPrepPage() {
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

  const workflow = [
    "Start Interview",
    "Answer Questions",
    "AI Evaluation",
    "Feedback Report",
    "Improve Skills",
  ];

  return (
    <>
    <LandingNavbar />
    <div className="bg-white text-black overflow-hidden">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">

        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-600/20 blur-[180px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2">
            <span className="text-sm text-orange-300">
              AI-Powered Interview Preparation Platform
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">

            {/* Left */}
            <div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Practice Interviews Before They Matter
              </h1>

              <p className="mt-6 text-xl text-zinc-400">
                Prepare for placements, internships, and career
                opportunities through realistic AI-powered mock
                interviews and instant feedback.
              </p>

              <div className="mt-10 flex gap-4">

                <button className="bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-xl flex items-center gap-2">
                  Start Practicing
                  <ArrowRight size={18} />
                </button>

                <button className="border border-white/10 px-8 py-4 rounded-xl">
                  Watch Demo
                </button>

              </div>

            </div>

            {/* Mock Interview Screen */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold">
                  Live Mock Interview
                </h3>

                <span className="text-orange-400">
                  Recording...
                </span>
              </div>

              <div className="bg-black/40 rounded-2xl p-6">

                <p className="text-zinc-400 mb-3">
                  Current Question
                </p>

                <h4 className="text-xl font-medium">
                  Explain JWT Authentication and its benefits.
                </h4>

              </div>

              <div className="mt-8">

                <div className="flex items-center justify-center">

                  <div className="w-24 h-24 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Mic size={40} className="text-orange-400" />
                  </div>

                </div>

              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="bg-orange-500/10 rounded-xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-orange-400">
                    88%
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Clarity
                  </p>
                </div>

                <div className="bg-orange-500/10 rounded-xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-orange-400">
                    84%
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Confidence
                  </p>
                </div>

                <div className="bg-orange-500/10 rounded-xl p-4 text-center">
                  <h4 className="text-2xl font-bold text-orange-400">
                    91%
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Concepts
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Problem */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-5xl font-bold">
              Most Students Face Real Interviews Without Practice
            </h2>
          </div>

          <div className="space-y-5 text-zinc-400 text-lg">

            <p>
              Technical interviews test more than knowledge.
            </p>

            <p>
              Confidence, communication, and structured thinking
              play a major role in success.
            </p>

            <p>
              EZPrep helps students build these skills before
              the actual interview.
            </p>

          </div>

        </div>

      </section>

      {/* Workflow */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            How EZPrep Works
          </h2>

        </div>

        <div className="grid md:grid-cols-5 gap-6 mt-16">

          {workflow.map((step, index) => (
            <div
              key={step}
              className="bg-orange-500/10 border border-orange-500/20 rounded-3xl p-6 text-center"
            >
              <div className="text-orange-400 text-sm mb-3">
                0{index + 1}
              </div>

              <h3>{step}</h3>
            </div>
          ))}

        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Built for Placement Success
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="text-orange-400">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center">
            <h3 className="text-6xl font-bold text-orange-400">
              100K+
            </h3>
            <p className="mt-3 text-zinc-400">
              Interview Questions
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl font-bold text-orange-400">
              90%
            </h3>
            <p className="mt-3 text-zinc-400">
              Confidence Improvement
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl font-bold text-orange-400">
              24/7
            </h3>
            <p className="mt-3 text-zinc-400">
              Practice Availability
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="rounded-[40px] bg-gradient-to-r from-orange-600 to-amber-500 p-12 md:p-20 text-center">

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