// // export default function About() {
// //   return (
// //     <section id="about" className="px-6 py-24 sm:py-32 border-t border-[#1c2e2e]">
// //       <div className="max-w-5xl mx-auto">
// //         <div className="flex items-baseline gap-3 mb-10">
// //           <span className="font-mono text-sm text-[#2dd4bf]">$</span>
// //           <span className="font-mono text-sm text-[#5a6b6e]">cat about.md</span>
// //         </div>

// //         <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
// //           <div>
// //             <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
// //               About me
// //             </h2>
// //             <div className="space-y-5 text-[#a8bcbc] text-base sm:text-lg leading-relaxed">
// //               <p>
// //                 I&apos;m a final-year Computer Science student at{" "}
// //                 <span className="text-[#e6f4f1]">MCT&apos;s Rajiv Gandhi Institute of Technology</span>,
// //                 spending most of my time building full stack applications and exploring
// //                 how AI fits into everyday software.
// //               </p>
// //               <p>
// //                 My focus right now is on{" "}
// //                 <span className="text-[#2dd4bf]">Machine Learning and AI</span> — understanding
// //                 how to actually use it in real products, not just as a buzzword. I like
// //                 taking an idea from a blank file to a deployed, working application,
// //                 debugging every error along the way.
// //               </p>
// //               <p>
// //                 I&apos;m looking to work alongside ambitious people where I can learn fast,
// //                 contribute meaningfully, and grow into a stronger engineer.
// //               </p>
// //             </div>
// //           </div>

// //           {/* side info card */}
// //           <div className="border border-[#1c2e2e] rounded-xl bg-[#0f1c1c] p-6 font-mono text-sm self-start">
// //             <p className="text-[#5a6b6e] mb-4">// currently</p>
// //             <ul className="space-y-3 text-[#a8bcbc]">
// //               <li className="flex gap-2">
// //                 <span className="text-[#2dd4bf]">▸</span> Solving Neetcode 150
// //               </li>
// //               <li className="flex gap-2">
// //                 <span className="text-[#2dd4bf]">▸</span> Exploring RAG &amp; LLM APIs
// //               </li>
// //               <li className="flex gap-2">
// //                 <span className="text-[#2dd4bf]">▸</span> Shipping full stack AI apps
// //               </li>
// //               <li className="flex gap-2">
// //                 <span className="text-[#2dd4bf]">▸</span> Open to internships
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // export default function About() {
// //   return (
// //     <section id="about" className="px-6 py-24 sm:py-32 border-t border-[#1f2b2b]">
// //       <div className="max-w-5xl mx-auto">
// //         <p className="text-[#2dd4bf] text-sm font-medium mb-3">About</p>
// //         <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
// //           A bit about me
// //         </h2>

// //         <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
// //           <div className="space-y-5 text-[#a8bcbc] text-base sm:text-lg leading-relaxed">
// //             <p>
// //               I&apos;m a final-year Computer Science student at{" "}
// //               <span className="text-[#f1f5f4]">MCT&apos;s Rajiv Gandhi Institute of Technology</span>,
// //               spending most of my time building full stack applications and exploring
// //               how AI fits into everyday software.
// //             </p>
// //             <p>
// //               My focus right now is on{" "}
// //               <span className="text-[#2dd4bf]">Machine Learning and AI</span> — understanding
// //               how to actually use it in real products, not just as a buzzword. I like
// //               taking an idea from a blank file to a deployed, working application,
// //               debugging every error along the way.
// //             </p>
// //             <p>
// //               I&apos;m looking to work alongside ambitious people where I can learn fast,
// //               contribute meaningfully, and grow into a stronger engineer.
// //             </p>
// //           </div>

// //           <div className="border border-[#1f2b2b] rounded-2xl bg-[#121a1a] p-6 self-start">
// //             <p className="text-sm text-[#8b9a9a] mb-4 font-medium">Currently</p>
// //             <ul className="space-y-3 text-[#a8bcbc] text-sm">
// //               <li className="flex gap-3">
// //                 <span className="text-[#2dd4bf]">•</span> Solving Neetcode 150
// //               </li>
// //               <li className="flex gap-3">
// //                 <span className="text-[#2dd4bf]">•</span> Exploring RAG &amp; LLM APIs
// //               </li>
// //               <li className="flex gap-3">
// //                 <span className="text-[#2dd4bf]">•</span> Shipping full stack AI apps
// //               </li>
// //               <li className="flex gap-3">
// //                 <span className="text-[#2dd4bf]">•</span> Open to internships
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function About() {
//   const sectionRef = useRef(null);
//   const textRef    = useRef(null);
//   const cardRef    = useRef(null);
//   const orbRef     = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // parallax orb
//       gsap.to(orbRef.current, {
//         y: -120,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         }
//       });

//       // text reveal
//       gsap.fromTo(textRef.current,
//         { x: -50, opacity: 0 },
//         {
//           x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//           }
//         }
//       );

//       // card reveal
//       gsap.fromTo(cardRef.current,
//         { x: 50, opacity: 0 },
//         {
//           x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//           }
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="relative px-6 py-28 sm:py-36 overflow-hidden"
//     >
//       {/* parallax orb */}
//       <div
//         ref={orbRef}
//         className="orb w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-20"
//         style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
//       />

//       <div className="relative z-10 max-w-5xl mx-auto">
//         <p className="gradient-text text-sm font-semibold tracking-widest uppercase mb-4">
//           About me
//         </p>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* text */}
//           <div ref={textRef} style={{ opacity: 0 }}>
//             <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 leading-tight">
//               Building things
//               <br />
//               <span className="gradient-text">I care about.</span>
//             </h2>
//             <div className="space-y-5 text-[#94a3b8] text-base leading-relaxed">
//               <p>
//                 I&apos;m a final-year CS student at{" "}
//                 <span className="text-white font-medium">MCT&apos;s Rajiv Gandhi Institute of Technology</span>,
//                 building full stack apps and exploring how AI fits into everyday software.
//               </p>
//               <p>
//                 My focus is on{" "}
//                 <span className="text-[#22d3ee] font-medium">Machine Learning and AI</span> — understanding
//                 how to use it in real products, not just as a buzzword. I love taking
//                 an idea from a blank file to a deployed, working app.
//               </p>
//               <p>
//                 I want to work with ambitious people, learn fast, contribute
//                 meaningfully, and grow into a stronger engineer.
//               </p>
//             </div>
//           </div>

//           {/* card */}
//           <div ref={cardRef} style={{ opacity: 0 }}>
//             <div
//               className="glass rounded-3xl p-8 relative overflow-hidden"
//               style={{
//                 background: "linear-gradient(135deg, rgba(34,211,238,0.05), rgba(168,85,247,0.05))",
//                 border: "1px solid rgba(168,85,247,0.2)"
//               }}
//             >
//               {/* card glow */}
//               <div
//                 className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-30"
//                 style={{ background: "radial-gradient(circle, #a855f7, transparent)", filter: "blur(30px)" }}
//               />

//               <p className="text-sm text-[#64748b] font-medium mb-6 uppercase tracking-wider">
//                 Currently
//               </p>
//               <ul className="space-y-4">
//                 {[
//                   { icon: "⚡", text: "Solving Neetcode 150" },
//                   { icon: "🤖", text: "Exploring RAG & LLM APIs" },
//                   { icon: "🚀", text: "Shipping full stack AI apps" },
//                   { icon: "🎯", text: "Open to internships" },
//                   { icon: "📍", text: "4th Year, MCT's RGIT" },
//                 ].map(({ icon, text }) => (
//                   <li key={text} className="flex items-center gap-3">
//                     <span className="text-xl">{icon}</span>
//                     <span className="text-[#cbd5e1] text-sm">{text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
      gsap.fromTo(cardRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", filter: "blur(80px)", background: "radial-gradient(circle, #a855f7, transparent)", opacity: 0.1, top: 0, left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>
          About me
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center", marginTop: "2rem" }}>
          <div ref={textRef} style={{ opacity: 0 }}>
            <h2 style={{ fontFamily: "Space Grotesk", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.5rem", color: "#f8fafc" }}>
              Building things<br />
              <span style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                I care about.
              </span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7 }}>
              <p>I&apos;m a final-year CS student at <strong style={{ color: "#f8fafc" }}>MCT&apos;s Rajiv Gandhi Institute of Technology</strong>, building full stack apps and exploring how AI fits into everyday software.</p>
              <p>My focus is on <span style={{ color: "#22d3ee", fontWeight: 600 }}>Machine Learning and AI</span> — understanding how to use it in real products. I love taking an idea from a blank file to a deployed, working app.</p>
              <p>I want to work with ambitious people, learn fast, contribute meaningfully, and grow into a stronger engineer.</p>
            </div>
          </div>

          <div ref={cardRef} style={{ opacity: 0 }}>
            <div style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.05), rgba(168,85,247,0.05))", border: "1px solid rgba(168,85,247,0.2)", borderRadius: "24px", padding: "2rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, #a855f7, transparent)", filter: "blur(25px)", opacity: 0.3 }} />
              <p style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>Currently</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "⚡", text: "Solving Neetcode 150" },
                  { icon: "🤖", text: "Exploring RAG & LLM APIs" },
                  { icon: "🚀", text: "Shipping full stack AI apps" },
                  { icon: "🎯", text: "Open to internships" },
                  { icon: "📍", text: "4th Year, MCT's RGIT" },
                ].map(({ icon, text }) => (
                  <li key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                    <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}