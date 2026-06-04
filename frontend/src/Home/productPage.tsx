import React from 'react'
import { Link } from 'react-router-dom'
import LandingNavbar from './LandingNavbar'


export default function ProductPage() {
  return (
    <div>
        {/* NAVBAR */}
        <LandingNavbar />
        <section className="relative min-h-screen overflow-hidden bg-[#06111f] py-32">

            {/* BACKGROUND GRADIENT */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#e9eef5] via-[#a7ebe3] to-[#d4e8de]" /> */}

            {/* DARK OVERLAY */}
            {/* <div className="absolute inset-0 bg-black/30" /> */}

            {/* GLOWS */}
            {/* <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/20 blur-3xl rounded-full" /> */}

            {/* <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-emerald-500/20 blur-3xl rounded-full" /> */}

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center max-w-4xl mx-auto mb-24">

                <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm tracking-[0.3em] uppercase text-emerald-200 mb-8">
                    PRODUCT EXPERIENCE
                </div>

                <h2 className="
                    text-[48px]
                    md:text-[72px]
                    font-black
                    tracking-tight
                    leading-[0.95]
                    text-white
                ">
                    See how SmartStudent creates
                    <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-white bg-clip-text text-transparent">
                    AI-powered educational videos.
                    </span>
                </h2>

                <p className="mt-8 text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                    From textbooks and lecture notes to fully animated learning experiences —
                    automatically.
                </p>
                </div>

                {/* 3 COLUMN PRODUCT SHOWCASE */}
                <div className="
                grid
                grid-cols-1
                lg:grid-cols-3
                gap-8
                items-stretch
                ">

                {/* LEFT — UPLOAD PANEL */}
                <div className="
                    relative
                    rounded-[32px]
                    border border-white/10
                    bg-white/[0.06]
                    backdrop-blur-2xl
                    p-8
                    min-h-[520px]
                    overflow-hidden
                ">

                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />

                    <div className="relative z-10">
                    
                    <div className="text-sm tracking-[0.25em] uppercase text-cyan-200 mb-6">
                        Upload Content
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#0b1523] p-6">

                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 mb-5" />

                        <div className="text-white font-semibold text-lg">
                        Physics_Chapter_4.pdf
                        </div>

                        <div className="mt-2 text-sm text-white/50">
                        Upload completed
                        </div>

                        {/* PROGRESS */}
                        <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        </div>
                    </div>

                    </div>
                </div>

                {/* CENTER — AI ENGINE */}
                <div className="
                    relative
                    rounded-[32px]
                    border border-white/10
                    bg-white/[0.06]
                    backdrop-blur-2xl
                    p-8
                    min-h-[520px]
                    overflow-hidden
                ">

                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />

                    <div className="relative z-10">

                    <div className="text-sm tracking-[0.25em] uppercase text-emerald-200 mb-8">
                        AI Processing
                    </div>

                    <div className="space-y-6">

                        {[
                        'Analyzing Concepts',
                        'Generating Narration',
                        'Creating Visual Scenes',
                        'Animating Graphics',
                        'Rendering Final Video'
                        ].map((step, i) => (
                        <div
                            key={step}
                            className="
                            flex
                            items-center
                            gap-4
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#0d1726]
                            px-5
                            py-5
                            "
                        >

                            <div className="
                            w-3
                            h-3
                            rounded-full
                            bg-emerald-400
                            shadow-[0_0_20px_rgba(16,185,129,0.8)]
                            " />

                            <div className="text-white/90 font-medium">
                            {step}
                            </div>

                        </div>
                        ))}

                    </div>
                    </div>
                </div>

                {/* RIGHT — VIDEO PREVIEW */}
                <div className="
                    relative
                    rounded-[32px]
                    border border-white/10
                    bg-white/[0.06]
                    backdrop-blur-2xl
                    p-6
                    min-h-[520px]
                    overflow-hidden
                ">

                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />

                    <div className="relative z-10 h-full flex flex-col">

                    <div className="text-sm tracking-[0.25em] uppercase text-cyan-200 mb-6">
                        Generated Video
                    </div>

                    <div className="
                        relative
                        flex-1
                        rounded-[24px]
                        overflow-hidden
                        border
                        border-white/10
                        bg-black
                    ">

                        {/* <video
                        src="/assets/video_landing.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        /> */}

                        {/* VIDEO OVERLAY */}
                        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">

                        <div className="text-white text-sm">
                            Refraction through convex lenses
                        </div>

                        <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-1/2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                        </div>

                        </div>
                    </div>

                    </div>
                </div>

                </div>
            </div>
        </section>
      
    </div>
  )
}


