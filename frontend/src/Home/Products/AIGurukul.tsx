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
  FileCheck, Award,
  Flame,
  Star, TrendingUp,
  Target,
  Activity,
  Sparkles,
  Play,
} from "lucide-react";
import { useEffect, useRef, useState, useCallback, MouseEvent } from "react";
import LandingNavbar from "../LandingNavbar";
import { Footer } from "../Footer";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";





export default function GurukulPage() {

  // ─── Journey steps ───────────────────────────────────────
  const journey = [
    "Enroll",
    "Learn",
    "Practice",
    "Assess",
    "Improve",
  ];

  // ─── Refs ────────────────────────────────────────────────
  const sectionRef    = useRef<HTMLElement>(null);  // Existing GSAP pin ref
  const greenOrbRef   = useRef<HTMLDivElement>(null);
  const goldOrbRef    = useRef<HTMLDivElement>(null);
  const stat1Ref      = useRef<HTMLElement>(null);
  const stat2Ref      = useRef<HTMLElement>(null);
  const journeySvgRef = useRef<SVGPathElement>(null);
  const markerRef     = useRef<HTMLDivElement>(null);
  const trophyRef     = useRef<HTMLDivElement>(null);
  const confettiDone  = useRef(false);
  const videoBrowserRef = useRef<HTMLDivElement>(null);
  const reflectRef    = useRef<HTMLDivElement>(null);
  const parallaxContainerRef = useRef<HTMLDivElement>(null);

  // ─── State ───────────────────────────────────────────────
  const [stat1Val, setStat1Val] = useState(0);
  const [stat2Val, setStat2Val] = useState(0);
  const [confettiPieces, setConfettiPieces] = useState<{ id: number; x: number; y: number; color: string; size: number; angle: number }[]>([]);
  const [trophyVisible, setTrophyVisible] = useState(false);

  // ─── Mouse Parallax (analytics section) ─────────────────
  const handleParallaxMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!parallaxContainerRef.current) return;
    const rect = parallaxContainerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;   // -0.5 → 0.5
    const dy = (e.clientY - cy) / rect.height;
    parallaxContainerRef.current.querySelectorAll<HTMLElement>(".parallax-card").forEach((card, i) => {
      const depth = (i % 3 === 1) ? 4 : 2.5; // centre column moves a bit more
      card.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
    });
  }, []);
  const handleParallaxLeave = useCallback(() => {
    parallaxContainerRef.current?.querySelectorAll<HTMLElement>(".parallax-card").forEach(card => {
      card.style.transform = "translate(0px,0px)";
    });
  }, []);

  // ─── Existing GSAP pin effect (UNTOUCHED) ────────────────
  useEffect(() => {
    const screens = gsap.utils.toArray(".feature-screen");
    screens.forEach((screen: any, index) => {
      if (index === 0) return;
      gsap.fromTo(
        screen,
        { yPercent: 100 },
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
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  // ─── Enhancement animations effect ───────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── 1. Global scroll-reveal system ─────────────────────
    if (!prefersReduced) {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 55, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.88,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }

    // ── 2. Hero orbs slow drift ─────────────────────────────
    if (!prefersReduced && greenOrbRef.current && goldOrbRef.current) {
      gsap.to(greenOrbRef.current, {
        x: 40, y: 30, duration: 24, ease: "sine.inOut", repeat: -1, yoyo: true,
      });
      gsap.to(goldOrbRef.current, {
        x: -35, y: -25, duration: 28, ease: "sine.inOut", repeat: -1, yoyo: true,
      });
    }

    // ── 3. Animated counters ───────────────────────────────
    if (!prefersReduced && stat1Ref.current && stat2Ref.current) {
      ScrollTrigger.create({
        trigger: stat1Ref.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          animate(0, 95, {
            duration: 2.2,
            ease: "easeOut",
            onUpdate: (v) => setStat1Val(Math.round(v)),
          });
          animate(0, 50, {
            duration: 2.4,
            ease: "easeOut",
            onUpdate: (v) => setStat2Val(Math.round(v)),
          });
        },
      });
    }

    // ── 4. Journey SVG path draw animation ────────────────
    if (!prefersReduced && journeySvgRef.current) {
      const path = journeySvgRef.current;
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      ScrollTrigger.create({
        trigger: path,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2.4,
            ease: "power2.inOut",
            onUpdate: function () {
              // Move marker along path
              if (!prefersReduced && markerRef.current) {
                const progress = 1 - (parseFloat(path.style.strokeDashoffset || String(length)) / length);
                const pt = path.getPointAtLength(progress * length);
                markerRef.current.style.left = `${pt.x}px`;
                markerRef.current.style.top = `${pt.y}px`;
              }
            },
            onComplete: () => {
              setTrophyVisible(true);
              // Confetti burst
              if (!confettiDone.current) {
                confettiDone.current = true;
                const colors = ["#10b981", "#f0c33e", "#ffffff", "#6ee7b7", "#fde68a"];
                const pieces = Array.from({ length: 12 }, (_, id) => ({
                  id,
                  x: Math.random() * 80 - 40,
                  y: -(Math.random() * 60 + 40),
                  color: colors[id % colors.length],
                  size: Math.random() * 5 + 4,
                  angle: Math.random() * 360,
                }));
                setConfettiPieces(pieces);
                setTimeout(() => setConfettiPieces([]), 2000);
              }
            },
          });
        },
      });
    }

    // ── 5. Reflection sweep on video card (every 8s) ───────
    if (!prefersReduced && reflectRef.current) {
      const runSweep = () => {
        gsap.fromTo(
          reflectRef.current,
          { x: "-110%" },
          { x: "110%", duration: 1.1, ease: "power2.inOut" }
        );
      };
      const interval = setInterval(runSweep, 8000);
      const t = setTimeout(runSweep, 1500);
      return () => { clearInterval(interval); clearTimeout(t); };
    }
  }, []);

  // ─── 3D video card tilt ──────────────────────────────────
  const handleVideoTilt = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!videoBrowserRef.current) return;
    const rect = videoBrowserRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rotY = ((e.clientX - cx) / (rect.width / 2)) * 3;
    const rotX = -((e.clientY - cy) / (rect.height / 2)) * 3;
    videoBrowserRef.current.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }, []);
  const handleVideoTiltReset = useCallback(() => {
    if (videoBrowserRef.current) {
      videoBrowserRef.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  return (
    <>
      <LandingNavbar />
      <div className="bg-white text-black overflow-hidden">
        {/* ═══ Hero ════════════════════════════════════════ */}
        <section className="relative mt-24 flex flex-col items-center mx-8 md:mx-32 mb-4 overflow-hidden">

          {/* Background gradient orbs — drifted by GSAP */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              ref={greenOrbRef}
              className="absolute -top-20 -left-32 w-[520px] h-[520px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)", filter: "blur(120px)" }}
            />
            <div
              ref={goldOrbRef}
              className="absolute bottom-0 -right-24 w-[460px] h-[460px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(240,195,62,0.07) 0%, transparent 70%)", filter: "blur(100px)" }}
            />
            {/* Mesh layer */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.03) 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 pb-24">
            <div className="gap-16 items-center">
              {/* Left */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 38 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl font-bold leading-tight"
                >
                  Everything Students
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 38 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl font-bold leading-tight"
                >
                  need to
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 38 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl font-bold leading-tight"
                >
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2, color: "#10b981" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="text-[#EECD42] cursor-pointer inline-block transition-colors duration-200"
                  >
                    Learn
                  </motion.span>
                  <span className="text-[#EECD42]">, </span>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2, color: "#10b981" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="text-[#EECD42] cursor-pointer inline-block transition-colors duration-200"
                  >
                    Practice
                  </motion.span>{" "}
                  <span className="text-black">and</span>{" "}
                  <motion.span
                    whileHover={{ 
                      scale: 1.08, 
                      y: -3, 
                      filter: "brightness(1.15) drop-shadow(0 4px 12px rgba(57,184,34,0.3))" 
                    }}
                    transition={{ type: "spring", stiffness: 450, damping: 14 }}
                    className="bg-gradient-to-r from-[#dbcc2a] via-[#39b822] to-[#085e20] bg-clip-text text-transparent cursor-pointer inline-block font-extrabold"
                  >
                    Excel
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                  className="mt-6 text-xl text-zinc-400 max-w-5xl"
                >
                  Access courses, complete assessments, track rankings,
                  monitor progress, and receive personalized learning
                  recommendations—all from one platform.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                  className="mt-10 flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(16,185,129,0.35)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-colors"
                    style={{ boxShadow: "0 0 0px rgba(16,185,129,0)" }}
                  >
                    Explore Platform
                    <ArrowRight size={18} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 0 22px rgba(6,150,104,0.18)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="border border-[#069668] text-emerald-700 px-8 py-4 rounded-xl flex items-center gap-2"
                  >
                    <Play size={18} />
                    Book Demo
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Platform tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          >
            <h3 className="max-w-5xl text-center text-3xl font-bold text-zinc-400">
              One Platform for Every Step of the Learning Journey
            </h3>
          </motion.div>
        </section>

        {/* Section divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />


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
                        <span className="text-lg text-zinc-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>


          </div>
        </section>

        {/* Section divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200/60 to-transparent" />

        {/* ═══ Product Demo Showcase ════════════════════════ */}
        <section className="gsap-reveal bg-white py-[60px] md:py-[80px] lg:py-[100px] px-6 w-full flex justify-center">
          <div className="max-w-[1200px] w-full flex flex-col items-center">

            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block text-emerald-600 font-semibold uppercase tracking-wider text-sm"
              >
                PRODUCT DEMO
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-3 text-4xl md:text-5xl font-bold text-zinc-900 leading-tight"
              >
                See The Complete Learning Journey In Action
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto"
              >
                Explore how AI Gurukul helps students learn, practice, assess, and improve through one intelligent learning platform.
              </motion.p>
            </div>

            {/* Browser Mockup Container — 3D tilt wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[1000px] flex justify-center"
              style={{ perspective: "1200px" }}
              onMouseMove={handleVideoTilt}
              onMouseLeave={handleVideoTiltReset}
            >
              {/* Soft background glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-300 to-yellow-200 opacity-[0.1] blur-[120px] rounded-full transform scale-95 pointer-events-none" />

              {/* Browser Card — receives 3D transforms via ref */}
              <div
                ref={videoBrowserRef}
                className="w-full bg-white rounded-[24px] border border-zinc-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.07)] overflow-hidden"
                style={{ transition: "transform 0.2s ease-out", transformStyle: "preserve-3d" }}
              >
                {/* Browser Header Bar */}
                <div className="flex items-center px-4 py-3 bg-zinc-50 border-b border-zinc-200/80 gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-[#FF5F56] rounded-full" />
                    <div className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
                    <div className="w-3 h-3 bg-[#27C93F] rounded-full" />
                  </div>
                  <div className="flex-1 text-center text-xs text-zinc-500 font-medium select-none pr-12">
                    SmartStudent AI Gurukul
                  </div>
                </div>

                {/* Video Showcase Player + reflection sweep */}
                <div className="w-full aspect-video bg-zinc-950 overflow-hidden relative">
                  {/* Reflection sweep — animated by GSAP every 8s */}
                  <div
                    ref={reflectRef}
                    className="absolute inset-y-0 w-[40%] pointer-events-none z-10"
                    style={{
                      background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)",
                      transform: "translateX(-110%)",
                    }}
                  />
                  {/* AI Gurukul Commercial Video */}
                  {/* Replace with final Veo-generated commercial */}
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    defaultMuted
                    loop
                    playsInline
                    preload="metadata"
                    poster={`${import.meta.env.BASE_URL}images/ai-gurukul-video-poster.png`}
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/ai-gurukul-demo.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>

            {/* Feature Chips */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 w-full max-w-[1000px]">
              {[
                { label: "Structured Courses", icon: "📚", bg: "bg-amber-50/60 text-amber-800 border-amber-200/50", glow: "rgba(245,158,11,0.25)" },
                { label: "AI Assessments", icon: "📝", bg: "bg-orange-50/60 text-orange-800 border-orange-200/50", glow: "rgba(249,115,22,0.22)" },
                { label: "Learning Analytics", icon: "📊", bg: "bg-emerald-50/60 text-emerald-800 border-emerald-200/50", glow: "rgba(16,185,129,0.22)" },
                { label: "AI Recommendations", icon: "🤖", bg: "bg-cyan-50/60 text-cyan-800 border-cyan-200/50", glow: "rgba(6,182,212,0.22)" },
              ].map((chip, i) => (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ scale: 1.06, y: -3, boxShadow: `0 8px 24px ${chip.glow}` }}
                  whileTap={{ scale: 0.97 }}
                  style={{ transition: "box-shadow 0.2s ease" }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold shadow-sm select-none cursor-default ${chip.bg}`}
                >
                  <span className="text-base leading-none">{chip.icon}</span>
                  <span>{chip.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Area */}
            <div className="mt-12 flex flex-col items-center gap-6 text-center">
              <p className="text-zinc-600 font-medium text-lg px-4">
                From structured learning to AI-powered assessments and analytics.
              </p>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(6,150,104,0.28)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="border-2 border-[#069668] text-emerald-700 hover:bg-emerald-50/50 transition-colors duration-200 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-sm"
              >
                <Play size={18} className="fill-emerald-700/10" />
                Book Demo
              </motion.button>
            </div>

          </div>
        </section>


        {/* Section divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-300/30 to-transparent" />

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

        {/* Section divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent" />

        {/* ═══ Learning Journey ═════════════════════════════ */}
        <section className="gsap-reveal max-w-7xl mx-auto px-6 py-28">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="text-4xl font-bold"
            >
              A Complete Student Learning Journey
            </motion.h2>
          </div>

          {/* SVG path layer — desktop only */}
          <div className="relative hidden md:block mt-16 mb-0" style={{ height: "24px" }}>
            <svg
              viewBox="0 0 1040 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Faint background track */}
              <path
                d="M 52 12 H 988"
                stroke="#e5e7eb"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Animated fill path */}
              <path
                ref={journeySvgRef}
                d="M 52 12 H 988"
                stroke="url(#journeyGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="journeyGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#f0c33e" />
                </linearGradient>
              </defs>
            </svg>

            {/* Moving student marker */}
            <div
              ref={markerRef}
              className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2"
              style={{ left: "52px", transition: "left 0.05s linear, top 0.05s linear" }}
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white shadow-md shadow-emerald-300/50 flex items-center justify-center">
                <GraduationCap size={12} className="text-white" />
              </div>
            </div>

            {/* Trophy at end */}
            <div
              ref={trophyRef}
              className="absolute right-[48px] -translate-y-1/2 top-1/2 relative"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={trophyVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="relative"
              >
                <Trophy size={22} className="text-yellow-500 drop-shadow-sm" />
                {/* Confetti pieces */}
                {confettiPieces.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                    animate={{ x: p.x, y: p.y, opacity: 0, rotate: p.angle }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
                    style={{
                      width: p.size,
                      height: p.size,
                      background: p.color,
                      marginLeft: -p.size / 2,
                      marginTop: -p.size / 2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mt-4">
            {journey.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: index * 0.18, ease: "easeOut" }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                className="relative h-[240px] overflow-hidden rounded-3xl border border-[#0c376ed9]/10 bg-white shadow-sm flex items-center justify-center cursor-default"
                style={{ transition: "box-shadow 0.25s ease, transform 0.25s ease" }}
              >
                {/* Giant Number */}
                <motion.div
                  initial={{ opacity: 1, scale: 1.8 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: index * 0.18 + 0.15 }}
                  className="absolute inset-0 flex items-center justify-center text-[140px] font-black text-[#f0c33e] select-none pointer-events-none"
                >
                  {`0${index + 1}`}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.18 + 0.45 }}
                  className="relative z-10 text-center px-5"
                >
                  <h3 className="font-semibold text-lg leading-snug">{step}</h3>
                  <p className="mt-3 text-sm text-zinc-500">
                    {index === 0 && "Begin your learning journey with structured courses designed to match your goals and aspirations."}
                    {index === 1 && "Explore concepts through engaging lessons, interactive content, and personalized learning experiences."}
                    {index === 2 && "Strengthen your understanding with exercises, assignments, and hands-on activities."}
                    {index === 3 && "Measure progress through intelligent assessments and gain insights into your performance."}
                    {index === 4 && "Receive actionable feedback and continuously refine your skills to achieve better outcomes."}
                  </p>
                </motion.div>

                {/* Bottom Progress Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.18 + 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-yellow-400"
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

          {/* Parallax grid wrapper */}
          <div
            ref={parallaxContainerRef}
            className="grid lg:grid-cols-3 gap-6"
            onMouseMove={handleParallaxMove}
            onMouseLeave={handleParallaxLeave}
          >

            {/* LEFT COLUMN */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-6 parallax-card"
              style={{ transition: "transform 0.3s ease-out" }}
            >
              {/* Structured Courses */}

              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white border rounded-3xl p-6 h-[500px] cursor-default"
              >
                {/* MOCKUP */}
                <div className="bg-zinc-50 border rounded-2xl p-5 h-64">
                  <div className="font-semibold">Course Library</div>
                  <div className="mt-5 space-y-4">
                    {[
                      { label: "Mathematics", pct: 75 },
                      { label: "Physics", pct: 85 },
                      { label: "Chemistry", pct: 90 },
                    ].map((course) => (
                      <div key={course.label}>
                        <div className="flex justify-between text-sm mb-2">
                          <span>{course.label}</span>
                          <span>{course.pct}%</span>
                        </div>
                        <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${course.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="h-full rounded-full bg-[#EECD42]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="mt-8 text-2xl font-bold">Structured Courses</h3>
                <p className="mt-4 text-zinc-500">
                  Follow organized learning paths designed to help students
                  build strong foundations and progress confidently.
                </p>
              </motion.div>

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
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 parallax-card"
              style={{ transition: "transform 0.3s ease-out" }}
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

              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white border rounded-3xl p-6 h-[500px] cursor-default"
              >
                <div className="bg-zinc-50 border rounded-2xl p-5 h-64">
                  <div className="font-semibold">Learning Analytics</div>
                  <div className="flex items-end gap-3 mt-8 h-32">
                    {[40, 65, 50, 85, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                        className="flex-1 rounded-t-xl bg-emerald-400 self-end"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 mt-4">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                  </div>
                </div>
                <h3 className="mt-8 text-2xl font-bold">Learning Analytics</h3>
                <p className="mt-4 text-zinc-500">
                  Understand strengths, weaknesses and learning
                  patterns through detailed insights.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col gap-6 parallax-card"
              style={{ transition: "transform 0.3s ease-out" }}
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




        {/* Section divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent" />

        {/* ═══ Stats ════════════════════════════════════════ */}
        <section className="gsap-reveal max-w-7xl mx-auto px-6 py-28">
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
                ref={stat1Ref as any}
              >
                {stat1Val}%
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
                ref={stat2Ref as any}
              >
                {stat2Val}k+
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




        {/* Section divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent" />

        {/* ═══ CTA ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden">
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 6 + 3,
                  height: Math.random() * 6 + 3,
                  background: i % 3 === 0 ? "rgba(255,255,255,0.25)" : i % 3 === 1 ? "rgba(240,195,62,0.3)" : "rgba(110,231,183,0.25)",
                  left: `${8 + (i * 7.5) % 84}%`,
                  top: `${15 + (i * 13) % 70}%`,
                }}
                animate={{
                  y: [0, -(8 + (i % 4) * 4), 0],
                  opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                  duration: 3 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#dbcc2a] via-[#358f25] to-[#08842b] text-white p-12 md:p-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Deliver a Smarter Learning Experience
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 text-lg text-white/80 max-w-3xl mx-auto"
            >
              Empower students with personalized learning,
              continuous assessment, and measurable progress.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold"
            >
              Book a Demo
            </motion.button>
          </div>
        </section>

        {/* Footer transition fade */}
        <div className="h-16 bg-gradient-to-b from-white/0 to-white/5 pointer-events-none" />
        <Footer />
      </div>
    </>
  );
}