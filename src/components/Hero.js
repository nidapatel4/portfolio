// // "use client";

// // import { useState, useEffect } from "react";
// // import { ArrowDown, MapPin } from "lucide-react";

// // const roles = [
// //   "Full Stack Developer",
// //   "AI/ML Enthusiast",
// //   "DSA Problem Solver",
// //   "Final Year CS Student",
// // ];

// // export default function Hero() {
// //   const [roleIndex, setRoleIndex] = useState(0);
// //   const [text, setText] = useState("");
// //   const [deleting, setDeleting] = useState(false);

// //   useEffect(() => {
// //     const current = roles[roleIndex];
// //     let timeout;

// //     if (!deleting && text.length < current.length) {
// //       timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
// //     } else if (!deleting && text.length === current.length) {
// //       timeout = setTimeout(() => setDeleting(true), 1400);
// //     } else if (deleting && text.length > 0) {
// //       timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
// //     } else if (deleting && text.length === 0) {
// //       setDeleting(false);
// //       setRoleIndex((i) => (i + 1) % roles.length);
// //     }

// //     return () => clearTimeout(timeout);
// //   }, [text, deleting, roleIndex]);

// //   return (
// //     <section
// //       id="hero"
// //       className="grid-bg min-h-screen flex items-center pt-16 px-6 relative overflow-hidden"
// //     >
// //       {/* ambient glow */}
// //       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#2dd4bf]/[0.07] rounded-full blur-3xl pointer-events-none" />

// //       <div className="max-w-5xl mx-auto w-full relative z-10">
// //         {/* Editor window */}
// //         <div className="border border-[#1c2e2e] rounded-xl bg-[#0f1c1c] shadow-2xl overflow-hidden">
// //           {/* tab bar */}
// //           <div className="flex items-center justify-between px-4 py-3 border-b border-[#1c2e2e] bg-[#0c1818]">
// //             <div className="flex items-center gap-2">
// //               <span className="w-3 h-3 rounded-full bg-[#5a6b6e]/40" />
// //               <span className="w-3 h-3 rounded-full bg-[#5a6b6e]/40" />
// //               <span className="w-3 h-3 rounded-full bg-[#2dd4bf]/60" />
// //             </div>
// //             <span className="font-mono text-xs text-[#5a6b6e]">about-nida.js</span>
// //             <span className="w-12" />
// //           </div>

// //           {/* code content */}
// //           <div className="p-6 sm:p-10 font-mono text-sm sm:text-base leading-relaxed">
// //             <p className="text-[#5a6b6e]">
// //               <span className="text-[#2dd4bf]/60">01</span>
// //               <span className="ml-4">// hey, I&apos;m</span>
// //             </p>
// //             <p className="mt-1">
// //               <span className="text-[#5a6b6e]"><span className="text-[#2dd4bf]/60">02</span><span className="ml-4"></span></span>
// //               <span className="text-[#5a6b6e]">const</span>{" "}
// //               <span className="text-[#2dd4bf]">developer</span>{" "}
// //               <span className="text-[#e6f4f1]">=</span>{" "}
// //               <span className="text-[#e6f4f1]">{"{"}</span>
// //             </p>
// //             <p className="mt-1">
// //               <span className="text-[#5a6b6e]"><span className="text-[#2dd4bf]/60">03</span></span>
// //               <span className="ml-10 text-[#e6f4f1]">name:</span>{" "}
// //               <span className="text-amber-300/80">&apos;Nida Patel&apos;</span>
// //               <span className="text-[#e6f4f1]">,</span>
// //             </p>
// //             <p className="mt-1">
// //               <span className="text-[#5a6b6e]"><span className="text-[#2dd4bf]/60">04</span></span>
// //               <span className="ml-10 text-[#e6f4f1]">role:</span>{" "}
// //               <span className="text-amber-300/80">
// //                 &apos;{text}&apos;
// //               </span>
// //               <span className="text-[#2dd4bf] cursor-blink">|</span>
// //             </p>
// //             <p className="mt-1">
// //               <span className="text-[#5a6b6e]"><span className="text-[#2dd4bf]/60">05</span></span>
// //               <span className="ml-10 text-[#e6f4f1]">focus:</span>{" "}
// //               <span className="text-amber-300/80">&apos;AI/ML + Full Stack&apos;</span>
// //               <span className="text-[#e6f4f1]">,</span>
// //             </p>
// //             <p className="mt-1">
// //               <span className="text-[#5a6b6e]"><span className="text-[#2dd4bf]/60">06</span></span>
// //               <span className="ml-10 text-[#e6f4f1]">status:</span>{" "}
// //               <span className="text-[#2dd4bf]">looking_for_internship</span>
// //               <span className="text-[#e6f4f1]">,</span>
// //             </p>
// //             <p className="mt-1 text-[#e6f4f1]">
// //               <span className="text-[#5a6b6e]"><span className="text-[#2dd4bf]/60">07</span></span>
// //               <span className="ml-4">{"}"}</span><span className="text-[#5a6b6e]">;</span>
// //             </p>
// //           </div>
// //         </div>

// //         {/* heading */}
// //         <div className="mt-12 sm:mt-16">
// //           <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
// //             Building things at the
// //             <br />
// //             <span className="text-[#2dd4bf]">intersection of code & AI.</span>
// //           </h1>
// //           <div className="mt-6 flex flex-wrap items-center gap-4 text-[#5a6b6e]">
// //             <span className="flex items-center gap-1.5 font-mono text-sm">
// //               <MapPin size={14} className="text-[#2dd4bf]" />
// //               4th Year CS Student, MCT&apos;s RGIT
// //             </span>
// //           </div>
// //         </div>

// //         {/* CTAs */}
// //         <div className="mt-10 flex flex-wrap items-center gap-4">
// //           <a
// //             href="#projects"
// //             className="px-6 py-3 bg-[#2dd4bf] text-[#0a1414] font-mono text-sm font-medium rounded-lg hover:bg-[#2dd4bf]/90 transition-colors"
// //           >
// //             view projects
// //           </a>
// //           <a
// //             href="#contact"
// //             className="px-6 py-3 border border-[#1c2e2e] text-[#e6f4f1] font-mono text-sm rounded-lg hover:border-[#2dd4bf]/40 transition-colors"
// //           >
// //             get in touch
// //           </a>
// //         </div>

// //         <a
// //           href="#about"
// //           className="mt-16 flex items-center gap-2 font-mono text-xs text-[#5a6b6e] hover:text-[#2dd4bf] transition-colors w-fit"
// //         >
// //           scroll <ArrowDown size={14} />
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";

// // import { useState, useEffect } from "react";
// // import { ArrowDown } from "lucide-react";

// // const roles = [
// //   "Full Stack Developer",
// //   "AI/ML Enthusiast",
// //   "DSA Problem Solver",
// //   "Final Year CS Student",
// // ];

// // export default function Hero() {
// //   const [roleIndex, setRoleIndex] = useState(0);
// //   const [text, setText] = useState("");
// //   const [deleting, setDeleting] = useState(false);

// //   useEffect(() => {
// //     const current = roles[roleIndex];
// //     let timeout;

// //     if (!deleting && text.length < current.length) {
// //       timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
// //     } else if (!deleting && text.length === current.length) {
// //       timeout = setTimeout(() => setDeleting(true), 1400);
// //     } else if (deleting && text.length > 0) {
// //       timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
// //     } else if (deleting && text.length === 0) {
// //       setDeleting(false);
// //       setRoleIndex((i) => (i + 1) % roles.length);
// //     }

// //     return () => clearTimeout(timeout);
// //   }, [text, deleting, roleIndex]);

// //   return (
// //     <section
// //       id="hero"
// //       className="min-h-screen flex items-center px-6 pt-16 relative overflow-hidden"
// //     >
// //       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#2dd4bf]/[0.08] rounded-full blur-3xl pointer-events-none" />
// //       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2dd4bf]/[0.05] rounded-full blur-3xl pointer-events-none" />

// //       <div className="max-w-5xl mx-auto w-full relative z-10">
// //         <p className="text-[#2dd4bf] text-sm font-medium mb-4 tracking-wide">
// //           Hi, I&apos;m
// //         </p>

// //         <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]">
// //           Nida Patel
// //         </h1>

// //         <div className="mt-6 h-10">
// //           <p className="text-xl sm:text-2xl text-[#a8bcbc]">
// //             {text}
// //             <span className="text-[#2dd4bf]">|</span>
// //           </p>
// //         </div>

// //         <p className="mt-6 max-w-xl text-[#8b9a9a] text-base sm:text-lg leading-relaxed">
// //           4th year CS student at MCT&apos;s Rajiv Gandhi Institute of Technology,
// //           building full stack applications and exploring how AI fits into
// //           everyday software.
// //         </p>

// //        <div className="mt-10 flex flex-wrap items-center gap-4">
// //   <a
// //     href="#projects"
// //     className="px-6 py-3 bg-[#2dd4bf] text-[#0a0f0f] text-sm font-medium rounded-full hover:bg-[#2dd4bf]/90 transition-colors"
// //   >
// //     View my work
// //   </a>

// //   <a
// //     href="#contact"
// //     className="px-6 py-3 border border-[#1f2b2b] text-[#f1f5f4] text-sm rounded-full hover:border-[#2dd4bf]/40 transition-colors"
// //   >
// //     Get in touch
// //   </a>
// // </div>

// // <a
// //   href="#about"
// //   className="mt-16 flex items-center gap-2 text-sm text-[#8b9a9a] hover:text-[#2dd4bf] transition-colors w-fit"
// // >
// //   Scroll to explore <ArrowDown size={14} />
// // </a>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export default function Hero() {
//   const containerRef = useRef(null);
//   const headingRef = useRef(null);
//   const subRef = useRef(null);
//   const btnsRef = useRef(null);
//   const orb1Ref = useRef(null);
//   const orb2Ref = useRef(null);
//   const orb3Ref = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // floating orbs
//       gsap.to(orb1Ref.current, {
//         y: -40,
//         x: 20,
//         duration: 6,
//         ease: "sine.inOut",
//         repeat: -1,
//         yoyo: true,
//       });
//       gsap.to(orb2Ref.current, {
//         y: 30,
//         x: -30,
//         duration: 8,
//         ease: "sine.inOut",
//         repeat: -1,
//         yoyo: true,
//         delay: 1,
//       });
//       gsap.to(orb3Ref.current, {
//         y: -20,
//         x: 40,
//         duration: 7,
//         ease: "sine.inOut",
//         repeat: -1,
//         yoyo: true,
//         delay: 2,
//       });

//       // entrance timeline
//       const tl = gsap.timeline({ delay: 0.3 });

//       tl.fromTo(
//         headingRef.current,
//         { y: 60, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
//       )
//         .fromTo(
//           subRef.current,
//           { y: 30, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
//           "-=0.5",
//         )
//         .fromTo(
//           btnsRef.current,
//           { y: 20, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
//           "-=0.4",
//         );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="hero"
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
//     >
//       {/* background orbs
//       <div
//         ref={orb1Ref}
//         className="orb w-[500px] h-[500px] top-[-100px] left-[-100px]"
//         style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }}
//       />
//       <div
//         ref={orb2Ref}
//         className="orb w-[600px] h-[600px] bottom-[-150px] right-[-150px]"
//         style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
//       />
//       <div
//         ref={orb3Ref}
//         className="orb w-[400px] h-[400px] top-[30%] right-[20%]"
//         style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
//       /> */}
//       {/* background orbs — repositioned behind text */}
//       <div
//         ref={orb1Ref}
//         className="orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         style={{
//           background: "radial-gradient(circle, #22d3ee, transparent)",
//           opacity: 0.15,
//         }}
//       />
//       <div
//         ref={orb2Ref}
//         className="orb w-[350px] h-[350px] top-1/4 left-1/4"
//         style={{
//           background: "radial-gradient(circle, #a855f7, transparent)",
//           opacity: 0.12,
//         }}
//       />
//       <div
//         ref={orb3Ref}
//         className="orb w-[300px] h-[300px] bottom-1/4 right-1/4"
//         style={{
//           background: "radial-gradient(circle, #ec4899, transparent)",
//           opacity: 0.12,
//         }}
//       />

//       {/* noise texture overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           backgroundSize: "200px",
//         }}
//       />

//       <div className="relative z-10 max-w-5xl mx-auto w-full text-center pt-20">
//         {/* badge */}
//         {/* <div
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 glass"
//           style={{ border: "1px solid rgba(34,211,238,0.2)" }}
//         >
//           <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
//           <span className="text-[#94a3b8]">
//             Open to internship opportunities
//           </span>
//         </div> */}
//         <div className="flex justify-center mb-8">
//           <div
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm glass"
//             style={{ border: "1px solid rgba(34,211,238,0.2)" }}
//           >
//             <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
//             <span className="text-[#94a3b8]">
//               Open to internship opportunities
//             </span>
//           </div>
//         </div>

//         {/* main heading */}
//         <div ref={headingRef} style={{ opacity: 0 }}>
//           <h1
//             className="font-display font-bold tracking-tight leading-[1.05]"
//             style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
//           >
//             Hi, I&apos;m <span className="gradient-text">Nida Patel</span>
//           </h1>
//           <h2
//             className="font-display font-semibold mt-4 text-[#64748b]"
//             style={{ fontSize: "clamp(1.2rem, 4vw, 2.5rem)" }}
//           >
//             Full Stack Developer &amp; AI Enthusiast
//           </h2>
//         </div>

//         {/* sub text */}
//         <p
//           ref={subRef}
//           style={{ opacity: 0 }}
//           className="mt-6 text-[#64748b] text-lg max-w-2xl mx-auto leading-relaxed"
//         >
//           Final year CS student at MCT&apos;s RGIT, building AI-powered web
//           applications and exploring the intersection of machine learning and
//           full stack development.
//         </p>

//         {/* buttons */}
//         <div
//           ref={btnsRef}
//           style={{ opacity: 0 }}
//           className="mt-10 flex flex-wrap items-center justify-center gap-4"
//         >
//           <a
//             href="#projects"
//             className="px-8 py-3.5 rounded-full font-medium text-[#050508] transition-all duration-200 hover:scale-105 hover:shadow-lg"
//             style={{
//               background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)",
//               boxShadow: "0 0 30px rgba(168,85,247,0.3)",
//             }}
//           >
//             View my work
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3.5 rounded-full font-medium text-white glass transition-all duration-200 hover:scale-105"
//             style={{ border: "1px solid rgba(255,255,255,0.1)" }}
//           >
//             Get in touch
//           </a>
//         </div>

//         {/* scroll indicator */}
//         {/* <div className="mt-20 flex flex-col items-center gap-2 text-[#64748b] text-xs"> */}
//        <div className="mt-20 flex flex-col items-center gap-2 text-[#64748b] text-xs">
//           <span>scroll</span>
//           <div
//             className="w-px h-12"
//             style={{
//               background:
//                 "linear-gradient(to bottom, rgba(168,85,247,0.6), transparent)",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const orb3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orb1.current, { y: -50, x: 30, duration: 7, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(orb2.current, { y: 40, x: -40, duration: 9, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1 });
      gsap.to(orb3.current, { y: -30, x: 50, duration: 8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 2 });
      gsap.fromTo(contentRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15, delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const orbStyle = (bg, top, left, right, bottom, size = "400px") => ({
    position: "absolute", width: size, height: size, borderRadius: "50%",
    filter: "blur(80px)", pointerEvents: "none", opacity: 0.25,
    background: `radial-gradient(circle, ${bg}, transparent)`,
    top, left, right, bottom,
  });

  return (
    <section id="hero" ref={containerRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2rem", overflow: "hidden" }}>
      <div ref={orb1} style={orbStyle("#22d3ee", "10%", "5%", undefined, undefined)} />
      <div ref={orb2} style={orbStyle("#a855f7", undefined, undefined, "5%", "5%", "450px")} />
      <div ref={orb3} style={orbStyle("#ec4899", "40%", undefined, "15%", undefined, "300px")} />

      <div ref={contentRef} style={{ position: "relative", zIndex: 10, maxWidth: "900px", width: "100%", textAlign: "center", paddingTop: "5rem" }}>
        {/* Badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1.2rem", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(34,211,238,0.25)", backdropFilter: "blur(12px)" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22d3ee", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Open to internship opportunities</span>
          </div>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "Space Grotesk", fontWeight: 800, fontSize: "clamp(2.5rem, 9vw, 6.5rem)", lineHeight: 1.05, marginBottom: "1rem", color: "#f8fafc" }}>
          Hi, I&apos;m{" "}
          <span style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Nida Patel
          </span>
        </h1>

        {/* Role */}
        <h2 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "clamp(1rem, 3vw, 1.8rem)", color: "#64748b", marginBottom: "1.5rem" }}>
          Full Stack Developer &amp; AI Enthusiast
        </h2>

        {/* Description */}
        <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Final year CS student at MCT&apos;s RGIT, building AI-powered web applications
          and exploring the intersection of machine learning and full stack development.
        </p>

        {/* Buttons */}
        <div className="hero-buttons" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          <a href="#projects" style={{ padding: "0.85rem 2.5rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.95rem", color: "#060b18", textDecoration: "none", background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", boxShadow: "0 0 40px rgba(168,85,247,0.35)", transition: "transform 0.2s" }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
            View my work
          </a>
          <a href="#contact" style={{ padding: "0.85rem 2.5rem", borderRadius: "999px", fontWeight: 600, fontSize: "0.95rem", color: "white", textDecoration: "none", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", transition: "transform 0.2s" }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
            Get in touch
          </a>
        </div>

        {/* Scroll */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "#64748b", fontSize: "0.75rem" }}>
          <span>scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(168,85,247,0.6), transparent)" }} />
        </div>
      </div>
    </section>
  );
}