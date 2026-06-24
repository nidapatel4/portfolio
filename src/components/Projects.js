// // import { ExternalLink } from "lucide-react";

// // function GithubIcon(props) {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
// //       <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
// //     </svg>
// //   );
// // }

// // const projects = [
// //   {
// //     path: "~/projects/hireready",
// //     name: "HireReady",
// //     description:
// //       "AI-powered resume analyzer. Upload a PDF resume and get an instant score out of 100, section-wise feedback, strengths, weaknesses, and actionable suggestions — powered by Google Gemini.",
// //     tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini AI", "Framer Motion"],
// //     live: "https://hire-ready-vert.vercel.app/",
// //     github: "https://github.com/nidapatel4/HireReady",
// //     featured: true,
// //   },
// //   {
// //     path: "~/projects/bookbridge",
// //     name: "BookBridge",
// //     description:
// //       "An online book marketplace for college students to buy, sell, and rent textbooks and notes. Built the complete admin panel — managing listings, transactions, and users — alongside a teammate-built user-facing storefront.",
// //     tags: ["React", "Node.js", "MongoDB", "JWT Auth", "Middleware"],
// //     live: null,
// //     github: "https://github.com/nidapatel4",
// //     featured: true,
// //   },
// //   {
// //     path: "~/projects/movie-app",
// //     name: "Movie Discovery App",
// //     description:
// //       "A movie search and discovery app with persistent favorites. Global state managed via Context API, favorites saved to localStorage so they survive a refresh, and a clean services layer for API calls.",
// //     tags: ["React", "Vite", "Context API", "Local Storage"],
// //     live: null,
// //     github: "https://github.com/nidapatel4",
// //     featured: false,
// //   },
// //   {
// //     path: "~/projects/amazon-clone",
// //     name: "Amazon Clone",
// //     description:
// //       "A frontend clone of Amazon's core shopping experience — product listings, cart, and a responsive layout built to practice component architecture and state management.",
// //     tags: ["React", "JavaScript", "CSS"],
// //     live: null,
// //     github: "https://github.com/nidapatel4",
// //     featured: false,
// //   },
// // ];

// // function ProjectCard({ project }) {
// //   return (
// //     <div className="border border-[#1c2e2e] rounded-xl bg-[#0f1c1c] overflow-hidden hover:border-[#2dd4bf]/30 transition-colors group">
// //       <div className="flex items-center justify-between px-5 py-3 border-b border-[#1c2e2e] bg-[#0c1818]">
// //         <span className="font-mono text-xs text-[#5a6b6e]">{project.path}</span>
// //         <div className="flex items-center gap-3">
// //           {project.github && (
// //             <a
// //               href={project.github}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-[#5a6b6e] hover:text-[#2dd4bf] transition-colors"
// //               aria-label={`${project.name} GitHub repository`}
// //             >
// //               <GithubIcon className="w-[15px] h-[15px]" />
// //             </a>
// //           )}
// //           {project.live && (
// //             <a
// //               href={project.live}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-[#5a6b6e] hover:text-[#2dd4bf] transition-colors"
// //               aria-label={`${project.name} live demo`}
// //             >
// //               <ExternalLink size={15} />
// //             </a>
// //           )}
// //         </div>
// //       </div>

// //       <div className="p-6 sm:p-8">
// //         <div className="flex items-center gap-3 mb-3">
// //           <h3 className="font-display text-xl sm:text-2xl font-semibold">{project.name}</h3>
// //           {project.live && (
// //             <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-[#2dd4bf]/30 text-[#2dd4bf]">
// //               live
// //             </span>
// //           )}
// //         </div>

// //         <p className="text-[#a8bcbc] text-sm sm:text-base leading-relaxed mb-5">
// //           {project.description}
// //         </p>

// //         <div className="flex flex-wrap gap-2 mb-5">
// //           {project.tags.map((tag) => (
// //             <span
// //               key={tag}
// //               className="font-mono text-xs px-2.5 py-1 rounded bg-[#0a1414] text-[#5a6b6e] border border-[#1c2e2e]"
// //             >
// //               {tag}
// //             </span>
// //           ))}
// //         </div>

// //         <div className="flex gap-4 font-mono text-sm">
// //           {project.live && (
// //             <a
// //               href={project.live}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-[#2dd4bf] hover:underline"
// //             >
// //               View live →
// //             </a>
// //           )}
// //           {project.github && (
// //             <a
// //               href={project.github}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-[#5a6b6e] hover:text-[#e6f4f1] transition-colors"
// //             >
// //               Source code →
// //             </a>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function Projects() {
// //   return (
// //     <section id="projects" className="px-6 py-24 sm:py-32 border-t border-[#1c2e2e]">
// //       <div className="max-w-5xl mx-auto">
// //         <div className="flex items-baseline gap-3 mb-10">
// //           <span className="font-mono text-sm text-[#2dd4bf]">$</span>
// //           <span className="font-mono text-sm text-[#5a6b6e]">ls ~/projects</span>
// //         </div>

// //         <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
// //           Things I&apos;ve built
// //         </h2>

// //         <div className="grid gap-6">
// //           {projects.map((project) => (
// //             <ProjectCard key={project.name} project={project} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // import { ExternalLink } from "lucide-react";

// // function GithubIcon(props) {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
// //       <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
// //     </svg>
// //   );
// // }

// // const projects = [
// //   {
// //     name: "HireReady",
// //     description:
// //       "AI-powered resume analyzer. Upload a PDF resume and get an instant score out of 100, section-wise feedback, strengths, weaknesses, and actionable suggestions — powered by Google Gemini.",
// //     tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini AI"],
// //     live: "https://hire-ready-vert.vercel.app/",
// //     github: "https://github.com/nidapatel4/HireReady",
// //     featured: true,
// //   },
// //   {
// //     name: "BookBridge",
// //     description:
// //       "An online book marketplace for college students to buy, sell, and rent textbooks and notes. Built the complete admin panel — managing listings, transactions, and users — alongside a teammate-built user-facing storefront.",
// //     tags: ["React", "Node.js", "MongoDB", "JWT Auth", "Middleware"],
// //     live: null,
// //     github: "https://github.com/nidapatel4",
// //     featured: true,
// //   },
// //   {
// //     name: "Movie Discovery App",
// //     description:
// //       "A movie search and discovery app with persistent favorites. Global state managed via Context API, favorites saved to localStorage so they survive a refresh, and a clean services layer for API calls.",
// //     tags: ["React", "Vite", "Context API", "Local Storage"],
// //     live: null,
// //     github: "https://github.com/nidapatel4",
// //     featured: false,
// //   },
// //   {
// //     name: "Amazon Clone",
// //     description:
// //       "A frontend clone of Amazon's core shopping experience — product listings, cart, and a responsive layout built to practice component architecture and state management.",
// //     tags: ["React", "JavaScript", "CSS"],
// //     live: null,
// //     github: "https://github.com/nidapatel4",
// //     featured: false,
// //   },
// // ];

// // function ProjectCard({ project }) {
// //   return (
// //     <div className="border border-[#1f2b2b] rounded-2xl bg-[#121a1a] p-6 sm:p-8 hover:border-[#2dd4bf]/30 transition-colors">
// //       <div className="flex items-center gap-3 mb-3">
// //         <h3 className="font-display text-xl sm:text-2xl font-semibold">
// //           {project.name}
// //         </h3>

// //         {project.live && (
// //           <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-[#2dd4bf]/10 text-[#2dd4bf] font-medium">
// //             Live
// //           </span>
// //         )}
// //       </div>

// //       <p className="text-[#a8bcbc] text-sm sm:text-base leading-relaxed mb-5">
// //         {project.description}
// //       </p>

// //       <div className="flex flex-wrap gap-2 mb-5">
// //         {project.tags.map((tag) => (
// //           <span
// //             key={tag}
// //             className="text-xs px-2.5 py-1 rounded-full bg-[#0a0f0f] text-[#8b9a9a] border border-[#1f2b2b]"
// //           >
// //             {tag}
// //           </span>
// //         ))}
// //       </div>

// //       <div className="flex gap-5 text-sm">
// //         {project.live && (
// //           <a
// //             href={project.live}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-1.5 text-[#2dd4bf] hover:underline"
// //           >
// //             <ExternalLink size={14} />
// //             Live demo
// //           </a>
// //         )}

// //         {project.github && (
// //           <a
// //             href={project.github}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center gap-1.5 text-[#8b9a9a] hover:text-[#f1f5f4] transition-colors"
// //           >
// //             <GithubIcon className="w-[14px] h-[14px]" />
// //             Source code
// //           </a>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default function Projects() {
// //   return (
// //     <section
// //       id="projects"
// //       className="px-6 py-24 sm:py-32 border-t border-[#1f2b2b]"
// //     >
// //       <div className="max-w-5xl mx-auto">
// //         <p className="text-[#2dd4bf] text-sm font-medium mb-3">Projects</p>

// //         <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-12">
// //           Things I&apos;ve built
// //         </h2>

// //         <div className="grid gap-6">
// //           {projects.map((project) => (
// //             <ProjectCard key={project.name} project={project} />
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
// import { ExternalLink } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// function GithubIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//       <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
//     </svg>
//   );
// }

// const projects = [
//   {
//     name: "HireReady",
//     description: "AI-powered resume analyzer. Upload a PDF and get an instant score out of 100, section-wise feedback, strengths, weaknesses, and actionable suggestions powered by Google Gemini.",
//     tags: ["React", "Node.js", "MongoDB", "JWT", "Gemini AI", "Framer Motion"],
//     live: "https://hire-ready-vert.vercel.app/",
//     github: "https://github.com/nidapatel4/HireReady",
//     gradient: "linear-gradient(135deg, #22d3ee22, #a855f722)",
//     accent: "#22d3ee",
//     glow: "rgba(34,211,238,0.2)",
//   },
//   {
//     name: "BookBridge",
//     description: "Online book marketplace for college students to buy, sell, and rent textbooks and notes. Built the complete admin panel managing listings, transactions, and users.",
//     tags: ["React", "Node.js", "MongoDB", "JWT Auth", "Middleware"],
//     live: null,
//     github: "https://github.com/nidapatel4",
//     gradient: "linear-gradient(135deg, #a855f722, #ec489922)",
//     accent: "#a855f7",
//     glow: "rgba(168,85,247,0.2)",
//   },
//   {
//     name: "Movie Discovery App",
//     description: "Movie search and discovery app with persistent favorites. Global state via Context API, favorites saved to localStorage, and a clean services layer for API calls.",
//     tags: ["React", "Vite", "Context API", "Local Storage", "TMDB API"],
//     live: null,
//     github: "https://github.com/nidapatel4",
//     gradient: "linear-gradient(135deg, #ec489922, #22d3ee22)",
//     accent: "#ec4899",
//     glow: "rgba(236,72,153,0.2)",
//   },
//   {
//     name: "Amazon Clone",
//     description: "Frontend clone of Amazon's core shopping experience — product listings, cart, and responsive layout built to practice component architecture and state management.",
//     tags: ["React", "JavaScript", "CSS"],
//     live: null,
//     github: "https://github.com/nidapatel4",
//     gradient: "linear-gradient(135deg, #22d3ee22, #ec489922)",
//     accent: "#22d3ee",
//     glow: "rgba(34,211,238,0.2)",
//   },
// ];

// function ProjectCard({ project, index, cardRef }) {
//   const cardInnerRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const rect = cardInnerRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
//     gsap.to(cardInnerRef.current, {
//       rotateX: y, rotateY: x,
//       duration: 0.3, ease: "power2.out",
//       transformPerspective: 800,
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(cardInnerRef.current, {
//       rotateX: 0, rotateY: 0,
//       duration: 0.5, ease: "power3.out",
//     });
//   };

//   return (
//     <div
//       ref={cardRef}
//       style={{ opacity: 0 }}
//       className="group"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         ref={cardInnerRef}
//         className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 h-full"
//         style={{
//           background: project.gradient,
//           border: `1px solid ${project.accent}30`,
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {/* hover glow */}
//         <div
//           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
//           style={{ boxShadow: `inset 0 0 80px ${project.glow}` }}
//         />
//         {/* top line */}
//         <div
//           className="absolute top-0 left-0 right-0 h-px opacity-60"
//           style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
//         />

//         <div className="relative z-10">
//           <div className="flex items-start justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <h3 className="font-display text-xl font-bold">{project.name}</h3>
//               {project.live && (
//                 <span
//                   className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-medium"
//                   style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}30` }}
//                 >
//                   Live
//                 </span>
//               )}
//             </div>
//             <div className="flex items-center gap-2">
//               {project.github && (
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#64748b] hover:text-white transition-colors p-1"
//                 >
//                   <GithubIcon className="w-4 h-4" />
//                 </a>
//               )}
//               {project.live && (
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="transition-colors p-1"
//                   style={{ color: project.accent }}
//                 >
//                   <ExternalLink size={16} />
//                 </a>
//               )}
//             </div>
//           </div>

//           <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
//             {project.description}
//           </p>

//           <div className="flex flex-wrap gap-2 mb-5">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="text-xs px-2.5 py-1 rounded-full text-[#94a3b8]"
//                 style={{
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.08)"
//                 }}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {project.live && (
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:underline"
//               style={{ color: project.accent }}
//             >
//               View live demo <ExternalLink size={13} />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Projects() {
//   const sectionRef = useRef(null);
//   const cardsRef   = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       cardsRef.current.forEach((card, i) => {
//         gsap.fromTo(card,
//           { y: 60, opacity: 0 },
//           {
//             y: 0, opacity: 1,
//             duration: 0.7, ease: "power3.out",
//             delay: i * 0.12,
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
//       id="projects"
//       ref={sectionRef}
//       className="px-6 py-28 sm:py-36"
//     >
//       <div className="max-w-5xl mx-auto">
//         <p className="gradient-text text-sm font-semibold tracking-widest uppercase mb-4">
//           Projects
//         </p>
//         <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12">
//           Things I&apos;ve built
//         </h2>

//         <div className="grid sm:grid-cols-2 gap-5">
//           {projects.map((project, i) => (
//             <ProjectCard
//               key={project.name}
//               project={project}
//               index={i}
//               cardRef={(el) => (cardsRef.current[i] = el)}
//             />
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
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

const projects = [
  { name: "HireReady", description: "AI-powered resume analyzer. Upload a PDF and get an instant score out of 100, section-wise feedback, strengths, weaknesses, and actionable suggestions powered by Google Gemini.", tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Google Gemini API", "JWT", "Zod", "bcrypt", "Multer", "express-rate-limit", "Winston", "Helmet", "Framer Motion", "Recharts", "Vercel", "Render", "MongoDB Atlas"], live: "https://hire-ready-vert.vercel.app/", github: "https://github.com/nidapatel4/HireReady", accent: "#22d3ee" },
  { name: "BookBridge", description: "Online book marketplace for college students to buy, sell, and rent textbooks and notes. Built the complete admin panel managing listings, transactions, and users.", tags: ["React", "Node.js", "MongoDB", "JWT Auth", "Middleware"], live: null, github: "https://github.com/nidapatel4", accent: "#a855f7" },
  { name: "Movie Discovery App", description: "Movie search and discovery app with persistent favorites. Global state via Context API, favorites saved to localStorage, and a clean services layer for API calls.", tags: ["React", "Vite", "Context API", "Local Storage", "TMDB API"], live: "vercel-movie-app-react-q848.vercel.app", github: "https://github.com/nidapatel4", accent: "#ec4899" },
  // { name: "Amazon Clone", description: "Frontend clone of Amazon's core shopping experience — product listings, cart, and responsive layout built to practice component architecture and state management.", tags: ["React", "JavaScript", "CSS"], live: null, github: "https://github.com/nidapatel4", accent: "#22d3ee" },
];

function Card({ project, cardRef }) {
  const innerRef = useRef(null);

  const onMove = e => {
    const r = innerRef.current.getBoundingClientRect();
    gsap.to(innerRef.current, { rotateX: ((e.clientY - r.top) / r.height - 0.5) * -8, rotateY: ((e.clientX - r.left) / r.width - 0.5) * 8, duration: 0.3, ease: "power2.out", transformPerspective: 900 });
  };
  const onLeave = () => gsap.to(innerRef.current, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power3.out" });

  return (
    <div ref={cardRef} style={{ opacity: 0 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={innerRef} style={{ background: `linear-gradient(135deg, ${project.accent}08, rgba(168,85,247,0.06))`, border: `1px solid ${project.accent}25`, borderRadius: "20px", padding: "1.75rem", position: "relative", overflow: "hidden", transformStyle: "preserve-3d", height: "100%", transition: "box-shadow 0.3s" }}
        onMouseOver={e => e.currentTarget.style.boxShadow = `0 0 60px ${project.accent}15`}
        onMouseOut={e => e.currentTarget.style.boxShadow = "none"}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`, opacity: 0.5 }} />

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: "1.1rem", color: "#f8fafc" }}>{project.name}</h3>
            {project.live && <span style={{ fontSize: "0.7rem", padding: "0.2rem 0.6rem", borderRadius: "999px", background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}30`, fontWeight: 600 }}>LIVE</span>}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", color: "#64748b" }}>
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#fff"} onMouseOut={e => e.currentTarget.style.color = "#64748b"}><GithubIcon /></a>}
            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: project.accent }}><ExternalLink size={16} /></a>}
          </div>
        </div>

        <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>{project.description}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
          {project.tags.map(tag => <span key={tag} style={{ fontSize: "0.75rem", padding: "0.25rem 0.7rem", borderRadius: "999px", color: "#94a3b8", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>{tag}</span>)}
        </div>

        {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: project.accent, textDecoration: "none", fontWeight: 500 }}>View live demo <ExternalLink size={13} /></a>}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: i * 0.12, scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>Projects</p>
        <h2 style={{ fontFamily: "Space Grotesk", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, textAlign: "center", marginBottom: "3rem", color: "#f8fafc" }}>Things I&apos;ve built</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {projects.map((project, i) => <Card key={project.name} project={project} cardRef={el => cardsRef.current[i] = el} />)}
        </div>
      </div>
    </section>
  );
}