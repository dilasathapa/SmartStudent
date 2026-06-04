import { ArrowRight, Play, Sparkles } from "lucide-react";
import LandingNavbar from "../LandingNavbar";

export default function EduStudioPage() {
  const features = [
    {
      title: "AI Script Generation",
      description:
        "Generate structured educational scripts instantly from any topic.",
    },
    {
      title: "Visual Scene Creation",
      description:
        "Automatically create engaging visuals and animations for concepts.",
    },
    {
      title: "AI Narration",
      description:
        "Natural-sounding voiceovers designed for educational content.",
    },
    {
      title: "Educational Storytelling",
      description:
        "Transform complex concepts into engaging learning experiences.",
    },
    {
      title: "Multi-language Support",
      description:
        "Create videos in multiple languages for wider accessibility.",
    },
    {
      title: "Curriculum Alignment",
      description:
        "Generate content aligned with academic standards and objectives.",
    },
  ];

  const workflow = [
    "Enter Topic",
    "Generate Script",
    "Create Visuals",
    "Add Narration",
    "Export Video",
  ];

  return (
    <>

    <LandingNavbar />
   
    <div className="bg-white text-black overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 flex items-center">
        

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-100">
            <Sparkles className="w-4 h-4 text-emerald-800" />
            <span className="text-sm text-emerald-800">
              AI-Powered Educational Video Generation
            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            <span className=" text-[#EECD42]">Turn Any</span>{" "}
             Lesson{" "}
             <span className="text-[#EECD42]">Into an</span>{" "}
               Engaging Learning Experience
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-3xl">
            Create educational videos with AI-generated scripts, visuals,
            narration, and animations in minutes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-[#069668] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2">
              Request Demo
              <ArrowRight size={18} />
            </button>

            <button className="border border-[#069668] text-emerald-700 px-8 py-4 rounded-xl flex items-center gap-2">
              <Play size={18} />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Product Flow */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Create Educational Videos in Minutes
          </h2>

          <p className="text-zinc-400 mt-4">
            A complete AI-powered workflow from idea to final video.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-5 gap-6">
          {workflow.map((step, index) => (
            <div
              key={step}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center"
            >
              <div className="text-purple-400 text-sm mb-3">
                0{index + 1}
              </div>

              <h3 className="font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Creating Educational Content Shouldn't Take Weeks
            </h2>
          </div>

          <div className="space-y-5 text-zinc-400 text-lg">
            <p>• Recording educational videos is expensive</p>
            <p>• Editing requires specialized skills</p>
            <p>• Scaling content creation is difficult</p>
            <p>• Maintaining quality across subjects is challenging</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold">How EduStudio Works</h2>
        </div>

        <div className="mt-16 grid md:grid-cols-5 gap-6">
          {[
            "Enter Topic",
            "AI Creates Script",
            "Generate Visuals",
            "AI Narration",
            "Final Video",
          ].map((item, index) => (
            <div
              key={item}
              className="bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20 rounded-3xl p-6"
            >
              <div className="text-purple-400 text-sm mb-4">
                Step {index + 1}
              </div>

              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Built for Modern Learning</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-zinc-400 mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Preview */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/10 border border-purple-500/20 rounded-[40px] p-10 md:p-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Experience AI-Powered Video Creation
            </h2>

            <p className="text-zinc-400 mt-4">
              From concept to educational video in just a few clicks.
            </p>
          </div>

          <div className="mt-12 h-[400px] rounded-3xl border border-white/10 bg-black/40 flex items-center justify-center">
            <Play size={70} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-6xl font-bold text-purple-400">90%</h3>
            <p className="text-zinc-400 mt-3">
              Faster Content Creation
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl font-bold text-purple-400">10x</h3>
            <p className="text-zinc-400 mt-3">
              More Learning Content
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-6xl font-bold text-purple-400">24/7</h3>
            <p className="text-zinc-400 mt-3">
              Instant Video Generation
            </p>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold text-center">
          Explore the SmartStudent Ecosystem
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            "AI Gurukul",
            "SmartPapers",
            "EZPrep",
            "SmartStudent",
          ].map((item) => (
            <div
              key={item}
              className="border border-white/10 bg-white/5 rounded-3xl p-8 hover:border-purple-500/30 transition"
            >
              <h3 className="font-semibold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="rounded-[40px] bg-gradient-to-r from-purple-600 to-violet-700 p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            Create Educational Videos Without Production Teams
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
            Transform lessons into engaging learning experiences with
            AI-powered video generation.
          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold">
            Request Demo
          </button>
        </div>
      </section>
    </div>
     </>
  );
}