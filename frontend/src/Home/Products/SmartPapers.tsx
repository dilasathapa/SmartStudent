import {
  ArrowRight,
  TrendingUp,
  FileText,
  Brain,
  Target,
  BarChart3,
  Sparkles,
} from "lucide-react";
import LandingNavbar from "../LandingNavbar";

export default function SmartPapersPage() {
  const features = [
    {
      icon: <FileText size={28} />,
      title: "PYQ Analysis",
      description:
        "Analyze years of previous question papers to identify recurring patterns.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Topic Weightage",
      description:
        "Understand which chapters carry the highest probability and marks weightage.",
    },
    {
      icon: <Brain size={28} />,
      title: "AI Prediction Engine",
      description:
        "Generate likely exam questions using syllabus and trend analysis.",
    },
    {
      icon: <Target size={28} />,
      title: "Focused Revision",
      description:
        "Spend time on the most important topics instead of revising everything equally.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Trend Intelligence",
      description:
        "Track topic frequency and board examination patterns over the years.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Smart Practice Papers",
      description:
        "Practice with AI-generated papers tailored to your board and subject.",
    },
  ];

  return (
    <>
    <LandingNavbar />
    <div className="bg-white text-black overflow-hidden">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">

        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-600/20 blur-[180px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
            <span className="text-sm text-emerald-300">
              AI-Powered Exam Prediction Platform
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">

            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Predict What Matters Most
              </h1>

              <p className="mt-6 text-xl text-zinc-400">
                Powered by previous year papers, syllabus mapping,
                and AI-driven trend analysis, SmartPapers helps
                students focus on the topics most likely to appear
                in upcoming exams.
              </p>

              <div className="mt-10 flex gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-xl flex items-center gap-2">
                  Explore Predictions
                  <ArrowRight size={18} />
                </button>

                <button className="border border-white/10 px-8 py-4 rounded-xl">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Prediction Dashboard */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h3 className="text-xl font-semibold mb-8">
                CBSE Physics Prediction Dashboard
              </h3>

              {[
                {
                  topic: "Electrostatics",
                  width: "95%",
                },
                {
                  topic: "Current Electricity",
                  width: "88%",
                },
                {
                  topic: "Magnetism",
                  width: "82%",
                },
                {
                  topic: "Optics",
                  width: "75%",
                },
              ].map((item) => (
                <div key={item.topic} className="mb-5">
                  <div className="flex justify-between mb-2">
                    <span>{item.topic}</span>
                    <span>{item.width}</span>
                  </div>

                  <div className="h-3 bg-white/10 rounded-full">
                    <div
                      className="h-3 bg-emerald-500 rounded-full"
                      style={{
                        width: item.width,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-5xl font-bold">
              Students Spend Too Much Time Studying Everything
            </h2>
          </div>

          <div className="space-y-5 text-zinc-400 text-lg">
            <p>
              Large syllabi and limited time make it difficult
              to prioritize preparation effectively.
            </p>

            <p>
              SmartPapers identifies high-value topics and helps
              students focus where it matters most.
            </p>
          </div>

        </div>
      </section>

      {/* Workflow */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How SmartPapers Works
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mt-16">

          {[
            "Previous Papers",
            "Pattern Analysis",
            "Weightage Mapping",
            "Prediction Engine",
            "Smart Papers",
          ].map((step, index) => (
            <div
              key={step}
              className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6 text-center"
            >
              <div className="text-emerald-400 text-sm mb-3">
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
            Built for Smarter Exam Preparation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="text-emerald-400">
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

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center">
            <h3 className="text-6xl font-bold text-emerald-400">
              10M+
            </h3>

            <p className="mt-3 text-zinc-400">
              Questions Analyzed
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl font-bold text-emerald-400">
              500+
            </h3>

            <p className="mt-3 text-zinc-400">
              Exam Patterns Studied
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl font-bold text-emerald-400">
              100K+
            </h3>

            <p className="mt-3 text-zinc-400">
              Students Prepared
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="rounded-[40px] bg-gradient-to-r from-emerald-600 to-green-600 p-12 md:p-20 text-center">

          <h2 className="text-4xl md:text-6xl font-bold">
            Study Smarter, Not Harder
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Let AI identify the topics and questions that deserve
            your attention before exam day.
          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold">
            Explore SmartPapers
          </button>

        </div>

      </section>

    </div>
    </>
  );
}