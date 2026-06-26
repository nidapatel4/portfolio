// // const skillGroups = [
// //   {
// //     label: "frontend",
// //     items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Basic UI/UX"],
// //   },
// //   {
// //     label: "backend",
// //     items: ["Node.js", "Express", "MongoDB", "JWT Auth", "REST APIs"],
// //   },
// //   {
// //     label: "ai-ml",
// //     items: ["Gemini API", "OpenAI API", "Hugging Face", "Basic Python"],
// //   },
// //   {
// //     label: "tools",
// //     items: ["Git & GitHub", "Basic SQL", "DSA (Neetcode)", "Vercel / Render"],
// //   },
// // ];

// // export default function Skills() {
// //   return (
// //     <section id="skills" className="px-6 py-24 sm:py-32 border-t border-[#1c2e2e]">
// //       <div className="max-w-5xl mx-auto">
// //         <div className="flex items-baseline gap-3 mb-10">
// //           <span className="font-mono text-sm text-[#2dd4bf]">$</span>
// //           <span className="font-mono text-sm text-[#5a6b6e]">npm list --depth=0</span>
// //         </div>

// //         <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
// //           Skills &amp; tools
// //         </h2>

// //         <div className="border border-[#1c2e2e] rounded-xl bg-[#0f1c1c] overflow-hidden">
// //           {skillGroups.map((group, gi) => (
// //             <div
// //               key={group.label}
// //               className={`p-6 sm:p-8 ${gi !== skillGroups.length - 1 ? "border-b border-[#1c2e2e]" : ""}`}
// //             >
// //               <p className="font-mono text-xs text-[#5a6b6e] mb-4">
// //                 <span className="text-[#2dd4bf]">├──</span> {group.label}/
// //               </p>
// //               <div className="flex flex-wrap gap-2.5 pl-5">
// //                 {group.items.map((skill) => (
// //                   <span
// //                     key={skill}
// //                     className="font-mono text-sm px-3 py-1.5 rounded-md border border-[#1c2e2e] text-[#a8bcbc] hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf] transition-colors"
// //                   >
// //                     {skill}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // const skillGroups = [
// //   {
// //     label: "Frontend",
// //     items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Basic UI/UX"],
// //   },
// //   {
// //     label: "Backend",
// //     items: ["Node.js", "Express", "MongoDB", "JWT Auth", "REST APIs"],
// //   },
// //   {
// //     label: "AI / ML",
// //     items: ["Gemini API", "OpenAI API", "Hugging Face", "Basic Python"],
// //   },
// //   {
// //     label: "Tools",
// //     items: ["Git & GitHub", "Basic SQL", "DSA (Neetcode)", "Vercel / Render"],
// //   },
// // ];

// // export default function Skills() {
// //   return (
// //     <section id="skills" className="px-6 py-24 sm:py-32 border-t border-[#1f2b2b]">
// //       <div className="max-w-5xl mx-auto">
// //         <p className="text-[#2dd4bf] text-sm font-medium mb-3">Skills</p>
// //         <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
// //           Tools I work with
// //         </h2>

// //         <div className="grid sm:grid-cols-2 gap-6">
// //           {skillGroups.map((group) => (
// //             <div
// //               key={group.label}
// //               className="border border-[#1f2b2b] rounded-2xl bg-[#121a1a] p-6"
// //             >
// //               <p className="text-sm font-medium text-[#f1f5f4] mb-4">{group.label}</p>
// //               <div className="flex flex-wrap gap-2">
// //                 {group.items.map((skill) => (
// //                   <span
// //                     key={skill}
// //                     className="text-sm px-3 py-1.5 rounded-full bg-[#0a0f0f] text-[#a8bcbc] border border-[#1f2b2b]"
// //                   >
// //                     {skill}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
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

// const bento = [
//   {
//     title: "Frontend",
//     items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
//     color: "#22d3ee",
//     glow: "rgba(34,211,238,0.15)",
//     span: "lg:col-span-2",
//     emoji: "🎨",
//   },
//   {
//     title: "Backend",
//     items: ["Node.js", "Express", "MongoDB", "JWT Auth", "REST APIs"],
//     color: "#a855f7",
//     glow: "rgba(168,85,247,0.15)",
//     span: "",
//     emoji: "⚙️",
//   },
//   {
//     title: "AI / ML",
//     items: ["Gemini API", "OpenAI API", "Hugging Face", "Python"],
//     color: "#ec4899",
//     glow: "rgba(236,72,153,0.15)",
//     span: "",
//     emoji: "🤖",
//   },
//   {
//     title: "Tools & More",
//     items: ["Git & GitHub", "SQL", "DSA (Neetcode)", "Vercel", "Render"],
//     color: "#22d3ee",
//     glow: "rgba(34,211,238,0.15)",
//     span: "lg:col-span-2",
//     emoji: "🛠️",
//   },
// ];

// export default function Skills() {
//   const sectionRef = useRef(null);
//   const cardsRef   = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       cardsRef.current.forEach((card, i) => {
//         gsap.fromTo(card,
//           { y: 40, opacity: 0 },
//           {
//             y: 0, opacity: 1,
//             duration: 0.6, ease: "power3.out",
//             delay: i * 0.1,
//             scrollTrigger: {
//               trigger: sectionRef.current,
//               start: "top 70%",
//             }
//           }
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="skills"
//       ref={sectionRef}
//       className="px-6 py-28 sm:py-36"
//     >
//       <div className="max-w-5xl mx-auto">
//         <p className="gradient-text text-sm font-semibold tracking-widest uppercase mb-4">
//           Skills
//         </p>
//         <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12">
//           Tools I work with
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {bento.map((group, i) => (
//             <div
//               key={group.title}
//               ref={(el) => (cardsRef.current[i] = el)}
//               style={{ opacity: 0 }}
//               className={`glass rounded-3xl p-6 relative overflow-hidden group cursor-default transition-all duration-300 hover:scale-[1.02] ${group.span}`}
//             >
//               {/* hover glow */}
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
//                 style={{ boxShadow: `inset 0 0 60px ${group.glow}` }}
//               />
//               {/* top accent line */}
//               <div
//                 className="absolute top-0 left-0 right-0 h-px"
//                 style={{ background: `linear-gradient(90deg, transparent, ${group.color}, transparent)` }}
//               />

//               <div className="relative z-10">
//                 <div className="flex items-center gap-3 mb-4">
//                   <span className="text-2xl">{group.emoji}</span>
//                   <h3
//                     className="font-display font-semibold text-lg"
//                     style={{ color: group.color }}
//                   >
//                     {group.title}
//                   </h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {group.items.map((skill) => (
//                     <span
//                       key={skill}
//                       className="text-xs px-3 py-1.5 rounded-full text-[#cbd5e1]"
//                       style={{
//                         background: `${group.color}15`,
//                         border: `1px solid ${group.color}30`
//                       }}
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
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

const bento = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Framer Motion",
      "Recharts",
      "Context API"
    ],
    color: "#22d3ee",
    emoji: "🎨",
    wide: true
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Middleware Architecture",
      "Zod Validation",
      "Rate Limiting",
      "Centralized Error Handling"
    ],
    color: "#a855f7",
    emoji: "⚙️",
    wide: true
  },
  {
    title: "Database & AI",
    items: [
      "MongoDB",
      "Mongoose",
      "Aggregation Pipelines",
      "Indexing",
      "Google Gemini API",
      "Prompt Engineering",
      "Structured JSON Prompts"
    ],
    color: "#ec4899",
    emoji: "🤖",
    wide: false
  },
  {
    title: "Security",
    items: [
      "bcrypt",
      "Helmet",
      "CORS",
      "RBAC",
      "Input Sanitization",
      "Privilege Escalation Prevention"
    ],
    color: "#f59e0b",
    emoji: "🔒",
    wide: false
  },
  {
    title: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "MongoDB Atlas",
      "Postman",
      "Winston",
      "Morgan"
    ],
    color: "#22c55e",
    emoji: "🛠️",
    wide: true
  },
  {
    title: "Concepts",
    items: [
      "MVC Architecture",
      "Protected Routes",
      "Multi-file Upload",
      "Sequential Async Processing",
      "DRY Refactoring",
      "Axios Interceptors",
      "Public vs Authenticated Routes"
    ],
    color: "#6366f1",
    emoji: "📚",
    wide: true
  }
];

export default function Skills() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: i * 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>Skills</p>
        <h2 style={{ fontFamily: "Space Grotesk", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, textAlign: "center", marginBottom: "3rem", color: "#f8fafc" }}>Tools I work with</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}className="skills-grid">
          {bento.map((group, i) => (
            <div
              key={group.title}
              ref={el => cardsRef.current[i] = el}
              style={{ opacity: 0, gridColumn: group.wide ? "span 2" : "span 1", background: "rgba(255,255,255,0.03)", border: `1px solid ${group.color}25`, borderRadius: "20px", padding: "1.5rem", position: "relative", overflow: "hidden", cursor: "default", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = `0 0 40px ${group.color}20` }}
              onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${group.color}, transparent)` }} />
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{group.emoji}</span>
                <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 600, fontSize: "1rem", color: group.color }}>{group.title}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.items.map(skill => (
                  <span key={skill} style={{ fontSize: "0.8rem", padding: "0.3rem 0.8rem", borderRadius: "999px", color: "#cbd5e1", background: `${group.color}15`, border: `1px solid ${group.color}30` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}