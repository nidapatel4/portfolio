// // import { Mail } from "lucide-react";

// // function GithubIcon(props) {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
// //       <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
// //     </svg>
// //   );
// // }

// // function LinkedinIcon(props) {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
// //       <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
// //     </svg>
// //   );
// // }

// // const contacts = [
// //   {
// //     label: "Email",
// //     value: "nidapatel1233@gmail.com",
// //     href: "mailto:nidapatel1233@gmail.com",
// //     icon: Mail,
// //   },
// //   {
// //     label: "LinkedIn",
// //     value: "linkedin.com/in/nida-patel8",
// //     href: "https://linkedin.com/in/nida-patel8",
// //     icon: LinkedinIcon,
// //   },
// //   {
// //     label: "GitHub",
// //     value: "github.com/nidapatel4",
// //     href: "https://github.com/nidapatel4",
// //     icon: GithubIcon,
// //   },
// // ];

// // export default function Contact() {
// //   return (
// //     <section id="contact" className="px-6 py-24 sm:py-32 border-t border-[#1c2e2e]">
// //       <div className="max-w-5xl mx-auto">
// //         <div className="flex items-baseline gap-3 mb-10">
// //           <span className="font-mono text-sm text-[#2dd4bf]">$</span>
// //           <span className="font-mono text-sm text-[#5a6b6e]">./connect --with=nida</span>
// //         </div>

// //         <h2 className="font-display text-3xl sm:text-5xl font-semibold mb-6 max-w-2xl">
// //           Let&apos;s build something together.
// //         </h2>
// //         <p className="text-[#a8bcbc] text-base sm:text-lg max-w-xl mb-12">
// //           I&apos;m actively looking for internship opportunities where I can learn,
// //           contribute, and grow. Reach out — I reply fast.
// //         </p>

// //         <div className="grid sm:grid-cols-3 gap-4">
// //           {contacts.map(({ label, value, href, icon: Icon }) => (
// //             <a
// //               key={label}
// //               href={href}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="group border border-[#1c2e2e] rounded-xl bg-[#0f1c1c] p-6 hover:border-[#2dd4bf]/40 transition-colors"
// //             >
// //               <Icon size={20} className="text-[#2dd4bf] mb-4" />
// //               <p className="font-mono text-xs text-[#5a6b6e] mb-1">{label}</p>
// //               <p className="text-sm text-[#e6f4f1] group-hover:text-[#2dd4bf] transition-colors break-all">
// //                 {value}
// //               </p>
// //             </a>
// //           ))}
// //         </div>

// //         <footer className="mt-24 pt-8 border-t border-[#1c2e2e] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#5a6b6e]">
// //           <p>© {new Date().getFullYear()} Nida Patel. Built with Next.js &amp; Tailwind.</p>
// //           <p>designed &amp; coded from scratch</p>
// //         </footer>
// //       </div>
// //     </section>
// //   );
// // }
// // import { Mail } from "lucide-react";

// // function GithubIcon(props) {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
// //       <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
// //     </svg>
// //   );
// // }

// // function LinkedinIcon(props) {
// //   return (
// //     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
// //       <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
// //     </svg>
// //   );
// // }

// // const contacts = [
// //   {
// //     label: "Email",
// //     value: "nidapatel1233@gmail.com",
// //     href: "mailto:nidapatel1233@gmail.com",
// //     icon: Mail,
// //   },
// //   {
// //     label: "LinkedIn",
// //     value: "linkedin.com/in/nida-patel8",
// //     href: "https://linkedin.com/in/nida-patel8",
// //     icon: LinkedinIcon,
// //   },
// //   {
// //     label: "GitHub",
// //     value: "github.com/nidapatel4",
// //     href: "https://github.com/nidapatel4",
// //     icon: GithubIcon,
// //   },
// // ];

// // export default function Contact() {
// //   return (
// //     <section
// //       id="contact"
// //       className="px-6 py-24 sm:py-32 border-t border-[#1f2b2b]"
// //     >
// //       <div className="max-w-5xl mx-auto">
// //         <p className="text-[#2dd4bf] text-sm font-medium mb-3">Contact</p>

// //         <h2 className="font-display text-3xl sm:text-5xl font-semibold mb-6 max-w-2xl">
// //           Let&apos;s build something together.
// //         </h2>

// //         <p className="text-[#a8bcbc] text-base sm:text-lg max-w-xl mb-12">
// //           I&apos;m actively looking for internship opportunities where I can
// //           learn, contribute, and grow. Reach out — I reply fast.
// //         </p>

// //         <div className="grid sm:grid-cols-3 gap-4">
// //           {contacts.map(({ label, value, href, icon: Icon }) => (
// //             <a
// //               key={label}
// //               href={href}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="group border border-[#1f2b2b] rounded-2xl bg-[#121a1a] p-6 hover:border-[#2dd4bf]/40 transition-colors"
// //             >
// //               <Icon size={20} className="text-[#2dd4bf] mb-4" />
// //               <p className="text-xs text-[#8b9a9a] mb-1">{label}</p>
// //               <p className="text-sm text-[#f1f5f4] group-hover:text-[#2dd4bf] transition-colors break-all">
// //                 {value}
// //               </p>
// //             </a>
// //           ))}
// //         </div>

// //         <footer className="mt-24 pt-8 border-t border-[#1f2b2b] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8b9a9a]">
// //           <p>
// //             © {new Date().getFullYear()} Nida Patel. Built with Next.js &amp;
// //             Tailwind.
// //           </p>
// //         </footer>
// //       </div>
// //     </section>
// //   );
// // }






// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Mail } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// function GithubIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//       <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
//     </svg>
//   );
// }

// function LinkedinIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//       <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
//     </svg>
//   );
// }

// const contacts = [
//   { label: "Email", value: "nidapatel1233@gmail.com", href: "mailto:nidapatel1233@gmail.com", icon: Mail, color: "#22d3ee" },
//   { label: "LinkedIn", value: "linkedin.com/in/nida-patel8", href: "https://linkedin.com/in/nida-patel8", icon: LinkedinIcon, color: "#a855f7" },
//   { label: "GitHub", value: "github.com/nidapatel4", href: "https://github.com/nidapatel4", icon: GithubIcon, color: "#ec4899" },
// ];

// export default function Contact() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const cardsRef   = useRef([]);
//   const orb1Ref    = useRef(null);
//   const orb2Ref    = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // floating orbs
//       gsap.to(orb1Ref.current, {
//         y: -30, x: 20,
//         duration: 5, ease: "sine.inOut",
//         repeat: -1, yoyo: true
//       });
//       gsap.to(orb2Ref.current, {
//         y: 25, x: -15,
//         duration: 7, ease: "sine.inOut",
//         repeat: -1, yoyo: true, delay: 1
//       });

//       gsap.fromTo(headingRef.current,
//         { y: 40, opacity: 0 },
//         {
//           y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
//           scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
//         }
//       );

//       cardsRef.current.forEach((card, i) => {
//         gsap.fromTo(card,
//           { y: 30, opacity: 0 },
//           {
//             y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: i * 0.1,
//             scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
//           }
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="contact"
//       ref={sectionRef}
//       className="relative px-6 py-28 sm:py-36 overflow-hidden"
//     >
//       {/* floating orbs */}
//       <div
//         ref={orb1Ref}
//         className="orb w-80 h-80 bottom-0 left-0 opacity-25"
//         style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
//       />
//       <div
//         ref={orb2Ref}
//         className="orb w-96 h-96 top-0 right-0 opacity-20"
//         style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
//       />

//       <div className="relative z-10 max-w-5xl mx-auto">
//         <div ref={headingRef} style={{ opacity: 0 }} className="text-center mb-16">
//           <p className="gradient-text text-sm font-semibold tracking-widest uppercase mb-4">
//             Contact
//           </p>
//           <h2 className="font-display text-4xl sm:text-6xl font-bold mb-6">
//             Let&apos;s build something
//             <br />
//             <span className="gradient-text">together.</span>
//           </h2>
//           <p className="text-[#64748b] text-lg max-w-lg mx-auto">
//             I&apos;m actively looking for internship opportunities. Reach out — I reply fast.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
//           {contacts.map(({ label, value, href, icon: Icon, color }, i) => (
//             <a
//               key={label}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               ref={(el) => (cardsRef.current[i] = el)}
//               style={{ opacity: 0 }}
//               className="glass rounded-3xl p-6 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
//             >
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
//                 style={{ boxShadow: `inset 0 0 50px ${color}20` }}
//               />
//               <div
//                 className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-60 transition-opacity"
//                 style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
//               />
//               <div className="relative z-10">
//                 <Icon
//                   size={22}
//                   className="mb-4 transition-colors duration-200"
//                   style={{ color }}
//                 />
//                 <p className="text-xs text-[#64748b] mb-1 font-medium">{label}</p>
//                 <p className="text-sm text-[#cbd5e1] break-all group-hover:text-white transition-colors">
//                   {value}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>

//         <footer className="mt-24 text-center text-xs text-[#374151]">
//           <p>© {new Date().getFullYear()} Nida Patel — designed &amp; coded from scratch</p>
//         </footer>
//       </div>
//     </section>
//   );
// }










"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function GithubIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" /></svg>;
}

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" /></svg>;
}

const contacts = [
  { label: "Email", value: "nidapatel1233@gmail.com", href: "mailto:nidapatel1233@gmail.com", icon: <Mail size={22} />, color: "#22d3ee" },
  { label: "LinkedIn", value: "linkedin.com/in/nida-patel8", href: "https://linkedin.com/in/nida-patel8", icon: <LinkedinIcon />, color: "#a855f7" },
  { label: "GitHub", value: "github.com/nidapatel4", href: "https://github.com/nidapatel4", icon: <GithubIcon />, color: "#ec4899" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } });
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: i * 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} style={{ padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: "350px", height: "350px", borderRadius: "50%", filter: "blur(80px)", background: "radial-gradient(circle, #ec4899, transparent)", opacity: 0.12, bottom: 0, left: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", filter: "blur(80px)", background: "radial-gradient(circle, #a855f7, transparent)", opacity: 0.1, top: 0, right: 0, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div ref={headingRef} style={{ opacity: 0, textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>Contact</p>
          <h2 style={{ fontFamily: "Space Grotesk", fontWeight: 800, fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1.1, marginBottom: "1rem", color: "#f8fafc" }}>
            Let&apos;s build something{" "}
            <span style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>together.</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            {/* I&apos;m actively looking for internship opportunities. Reach out — I reply fast. */}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", maxWidth: "800px", margin: "0 auto" }}>
          {contacts.map(({ label, value, href, icon, color }, i) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              ref={el => cardsRef.current[i] = el}
              style={{ opacity: 0, background: "rgba(255,255,255,0.03)", border: `1px solid rgba(255,255,255,0.08)`, borderRadius: "20px", padding: "1.5rem", textDecoration: "none", display: "block", transition: "all 0.3s", position: "relative", overflow: "hidden" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = `0 0 40px ${color}15` }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none" }}
            >
              <div style={{ color, marginBottom: "1rem" }}>{icon}</div>
              <p style={{ fontSize: "0.75rem", color: "#64748b", marginBottom: "0.25rem", fontWeight: 600 }}>{label}</p>
              <p style={{ fontSize: "0.85rem", color: "#cbd5e1", wordBreak: "break-all" }}>{value}</p>
            </a>
          ))}
        </div>

        <footer style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center", color: "#374151", fontSize: "0.75rem" }}>
          © {new Date().getFullYear()} Nida Patel 
        </footer>
      </div>
    </section>
  );
}