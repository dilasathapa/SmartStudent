import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo_img from "../assets/logo-smartstudent.png"

type ProductKey =
  | "edustudio"
  | "gurukul"
  | "smartpapers"
  | "ezprep"
  | "smartdeck";

const productRoutes = {
  edustudio: "/product/edustudio",
  gurukul: "/product/gurukul",
  smartpapers: "/product/smartpapers",
  ezprep: "/product/ezprep",
  smartdeck: "/product/smartdeck",
};

export default function LandingNavbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeProduct, setActiveProduct] =
    useState<ProductKey>("edustudio");

  const products = {
    edustudio: {
      title: "EduStudio",
      subtitle: "AI Learning Videos",
      description:
        "Turn curriculum into immersive learning experiences. EduStudio combines AI-generated visuals, narration, and explanations to make complex concepts easier to understand.",
      accent: "from-yellow-100 via-green-50 to-cyan-50",
    },

    gurukul: {
      title: "AI Gurukul",
      subtitle: "Learning Management Platform",
      description:
        "Deliver seamless learning experiences beyond the classroom. AI Gurukul helps institutions organize content, engage students, and measure learning outcomes.",
      accent: "from-green-100 via-white to-cyan-50",
    },

    smartpapers: {
      title: "SmartPapers",
      subtitle: "AI Question Generation",
      description:
        "Generate question papers, worksheets and assessments instantly.Generate question papers, worksheets and assessments instantly.",
      accent: "from-yellow-50 via-white to-green-50",
    },

    ezprep: {
      title: "ezPrep",
      subtitle: "AI Interview Preparation",
      description:
        "Turn interview preparation into measurable progress. EzPrep evaluates every response and provides detailed feedback to help students perform at their best.",
      accent: "from-cyan-50 via-white to-green-50",
    },
    smartdeck: {
      title: "SmartDeck",
      subtitle: "AI Presentation Builder",
      description:
        "Turn documents and ideas into presentation-ready decks in minutes. From content to presentation—automatically structured, designed, and ready to present.",
      accent: "from-cyan-50 via-white to-green-50",
    },
  };

  return (
    <>
      {/* OVERLAY */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/5 backdrop-blur-[2px] z-40"
          />
        )}
      </AnimatePresence>

      <header
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200"
      >
        <div
          className="relative"
          onMouseLeave={() => setMenuOpen(false)}
        >
          {/* NAVBAR */}

          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

            {/* LOGO */}

            <div
              className="cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                alt="SmartStudent"
                src={logo_img}
                className="h-14 w-auto object-contain"
              />
            </div>

            {/* NAV */}

            <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-700">

               <a
                href="#workflow"
                className="hover:text-emerald-600 transition"
              >
                About
              </a>

              <div
                className="cursor-pointer hover:text-emerald-600 transition"
                onMouseEnter={() => setMenuOpen(true)}
              >
                Product
              </div>

             

              <a
                href="#technology"
                className="hover:text-emerald-600 transition"
              >
                Blogs
              </a>
              <a
                href="#vision"
                className="hover:text-emerald-600 transition"
              >
                Partners
              </a>

              <a
                href="#vision"
                className="hover:text-emerald-600 transition"
              >
                FAQ
              </a>
              <a
                href="#vision"
                className="hover:text-emerald-600 transition"
              >
                Contact
              </a>
            </nav>

            {/* ACTIONS */}

            <div className="flex items-center gap-4">
              <button className="hidden md:block text-sm text-zinc-600 hover:text-zinc-900">
                Login
              </button>

              <button className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">
                Book Demo
              </button>
            </div>
          </div>

          {/* HARVEY STYLE PANEL */}

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: 300,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  absolute
                  top-full
                  left-0
                  w-full
                  bg-white
                  border-b
                  border-zinc-200
                  overflow-hidden
                  z-50
                "
              >
                <div className=" mx-auto h-full">

                    <div className="col-span-10 p-12 ">

                      <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-10">
                        Products {" "}
                        <span>overview</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">

                

                      {(
                        Object.keys(products) as ProductKey[]
                      ).map((key) => (
                        <div
                          key={key}
                          onClick={() => navigate(productRoutes[key])}
                          onMouseEnter={() =>
                            setActiveProduct(key)
                          }
                          className={`
                            cursor-pointer
                            transition-all
                            duration-300
                            pb-4
                            
                          `}
                        >
                          <h3 className={`text-[1rem] font-bold text-slate-900 
                          
                          `}>
                            {products[key].title}
                          </h3>

                          <p className="mt-2 text-zinc-500 text-[0.7rem]">
                            {products[key].description}
                          </p>
                        </div>
                      ))}
                      </div>
                    </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </header>
    </>
  );
}