import { ArrowRight, ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react";
import LandingNavbar from "../LandingNavbar";
import { Footer } from "../Footer";
import { AnimatePresence, motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workflow = [
    "Enter Topic",
    "Generate Script",
    "Create Visuals",
    "Add Narration",
    "Export Video",
  ];

  const workflowSteps = [
  {
    title: "ENTER ANY TOPIC",
    description:
      "Start with a chapter, concept, lesson, or learning objective.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "AI CREATES A STRUCTURED LESSON",
    description:
      "Our AI transforms your topic into an engaging educational script.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    title: "VISUALS ARE GENERATED AUTOMATICALLY",
    description:
      "Animations, illustrations, and educational visuals are created instantly.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
  },
  {
    title: "NARRATION BRINGS CONCEPTS TO LIFE",
    description:
      "Natural AI voiceovers transform lessons into immersive experiences.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "EXPORT A COMPLETE EDUCATIONAL VIDEO",
    description:
      "Publish and share educational videos with students in minutes.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
];




export default function EduStudioPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
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

  

  useEffect(() => {
      const panels = gsap.utils.toArray(".story-panel");

      panels.forEach((panel: any, index) => {
        if (index === 0) return;

        gsap.fromTo(
          panel,
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${index * 20}% top`,
              end: `${(index + 1) * 20}% top`,
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight}`,
        pin: true,
        scrub: true,
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, []);



  const [activeStep, setActiveStep] = useState(0);

  // Auto-advance loop to give it live motion without forcing user scroll actions
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 5000); // Transitions to the next overlay panel automatically every 5 seconds
    return () => clearInterval(interval);
  }, [workflowSteps.length]);

  return (
    <>

    <LandingNavbar />
   
    <div className="bg-white text-black overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 flex items-center">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-zinc-100">
            <Sparkles className="w-4 h-4 text-zinc-800" />
            <span className="text-sm text-zinc-800">
              AI-Powered Educational Video Generation
            </span>
          </div>

          {/* <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
            <span className=" text-[#EECD42]">Turn Any</span>{" "}
             Lesson{" "}
             <span className="text-[#EECD42]">Into an</span>{" "}
               Engaging Learning Experience
          </h1> */}

          <h1 className="mt-8 text-6xl md:text-7xl font-bold leading-tight max-w-5xl">
            Turn Any Lesson Into an{" "}
            <span className="text-[#EECD42]">
              Engaging Learning <span className="bg-gradient-to-r from-[#dbcc2a] via-[#39b822] to-[#085e20] bg-clip-text 
                    text-transparent ">Experience</span> 
            </span>
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
          <h2 className="text-4xl font-bold text-zinc-400">
            Create Educational <span className="text-emerald-600"> Videos</span>  in Minutes
          </h2>

          <p className="text-zinc-400 mt-4">
            A complete AI-powered workflow from idea to final video.
          </p>
        </div>

        
      </section>


        {/* Unified Overlapping Viewport Canvas (Zero Scroll Height Impact) */}
        <section
          ref={sectionRef}
          className="relative h-screen overflow-hidden bg-black"
        >
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="story-panel absolute inset-0"
              style={{
                zIndex: index + 1,
              }}
            >
              {/* Background Image */}
              <img
                src={step.image}
                alt={step.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
                <div className="mb-6 text-emerald-400 uppercase tracking-[0.4em]">
                  Step 0{index + 1}
                </div>

                <h2
                  className="
                    text-[12vw]
                    md:text-[8vw]
                    font-black
                    leading-[0.85]
                    uppercase
                    text-white
                    max-w-6xl
                  "
                >
                  {step.title}
                </h2>

                <p className="mt-8 max-w-3xl text-lg md:text-2xl text-zinc-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl font-bold leading-tight text-emerald-700 pt-10">
              Creating Educational Content Shouldn't Take Days
            </h2>
          </div>
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
            <p> Recording educational videos is expensive</p>
            <p> Editing requires specialized skills</p>
            <p> Scaling content creation is difficult</p>
            <p> Maintaining quality across subjects is challenging</p>
          </motion.div>

        </div>
      </section>

          {/* Demo Preview */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="bg-gradient-to-br from-zinc-600/20 to-zinc-900/10 border border-purple-500/20 rounded-[40px] p-10 md:p-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Experience AI-Powered Video Creation
            </h2>

            <p className="text-zinc-400 mt-4">
              From concept to educational video in just a few clicks.
            </p>
          </div>

          <div className="mt-12 h-[400px] rounded-3xl border border-white/10 bg-black flex items-center justify-center">
            <Play className="text-white" size={70} />
          </div>
        </div>
      </section>
      

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold">
            Everything Needed To Create
            <span className="text-[#EECD42]">
              {" "}Engaging Learning Content
            </span>
          </h2>

          <p className="mt-6 text-xl text-zinc-500 max-w-3xl mx-auto">
            From script generation to narration and curriculum alignment,
            EduStudio automates every step of educational content creation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* COLUMN 1 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
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
            {/* AI Script */}

            <div className="bg-white border rounded-3xl p-8 h-[220px]">
              <h3 className="text-2xl font-bold">
                AI Script Generation
              </h3>

              <p className="mt-4 text-zinc-500">
                Instantly transform any topic into structured educational
                scripts designed for effective learning.
              </p>
            </div>

            {/* Visual Creation */}

            <div className="bg-white border rounded-3xl p-6 h-[470px]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt=""
                className="w-full h-64 object-cover rounded-2xl"
              />

              <h3 className="mt-6 text-2xl font-bold">
                Visual Scene Creation
              </h3>

              <p className="mt-4 text-zinc-500">
                Generate educational illustrations, animations and visual
                explanations automatically for every lesson.
              </p>
            </div>
          </motion.div>

          {/* COLUMN 2 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="flex flex-col gap-6"
          >
            {/* Narration */}

            <div className="bg-white border rounded-3xl p-6 h-[470px]">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt=""
                className="w-full h-64 object-cover rounded-2xl"
              />

              <h3 className="mt-6 text-2xl font-bold">
                AI Narration
              </h3>

              <p className="mt-4 text-zinc-500">
                Bring lessons to life using natural AI voices that make
                educational content more engaging and accessible.
              </p>
            </div>

            {/* Storytelling */}

            <div className="bg-white border rounded-3xl p-8 h-[220px]">
              <h3 className="text-2xl font-bold">
                Educational Storytelling
              </h3>

              <p className="mt-4 text-zinc-500">
                Convert complex concepts into memorable learning journeys
                through narrative-driven explanations.
              </p>
            </div>
          </motion.div>

          {/* COLUMN 3 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="flex flex-col gap-6"
          >

            

            <div className="bg-white border rounded-3xl p-8 h-[220px]">
              <h3 className="text-2xl font-bold">
                Multi-Language Support
              </h3>

              <p className="mt-4 text-zinc-500">
                Create educational videos in multiple languages to reach
                diverse learners across regions.
              </p>
            </div>
            {/* Curriculum */}

            <div className="bg-white border rounded-3xl p-6 h-[470px]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt=""
                className="w-full h-64 object-cover rounded-2xl"
              />

              <h3 className="mt-6 text-2xl font-bold">
                Curriculum Alignment
              </h3>

              <p className="mt-4 text-zinc-500">
                Ensure every lesson aligns with learning objectives,
                standards and curriculum requirements.
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
              90%
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
                Better Content Creation
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Reduce hours of manual work by generating lessons, assessments, presentations, and learning resources in minutes.
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
              10x
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
                More Learning Content
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Create and deliver a greater variety of engaging educational materials without increasing workload.
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
                Always Available 
              </h4>

              <p className="mt-4 text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Generate content, assessments, presentations, and learning experiences anytime, without waiting on teams or production cycles.
              </p>
            </motion.div>
          </motion.div>

          

        

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
              className="border border-white/10 bg-[#A6B828] rounded-3xl p-8 text-white transition text-center tracking-widest"
            >
              <h3 className="font-semibold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className=" mx-auto ">
        <div className=" bg-gradient-to-r from-[#dbcc2a] via-[#358f25] to-[#08842b] text-white p-12 md:p-20 text-center">
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
      <Footer />
    </div>
     </>
  );
}