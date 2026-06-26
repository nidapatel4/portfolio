// // "use client";

// // import { useState, useEffect } from "react";

// // const links = [
// //   { href: "#about", label: "about" },
// //   { href: "#skills", label: "skills" },
// //   { href: "#projects", label: "projects" },
// //   { href: "#contact", label: "contact" },
// // ];

// // export default function Navbar() {
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 20);
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// //         scrolled ? "bg-[#0a1414]/90 backdrop-blur-md border-b border-[#1c2e2e]" : "bg-transparent"
// //       }`}
// //     >
// //       <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
// //         <a href="#hero" className="font-mono text-sm text-[#e6f4f1]">
// //           <span className="text-[#2dd4bf]">~/</span>nida-patel
// //         </a>
// //         <ul className="hidden sm:flex items-center gap-8 font-mono text-sm">
// //           {links.map((link) => (
// //             <li key={link.href}>
// //               <a
// //                 href={link.href}
// //                 className="text-[#5a6b6e] hover:text-[#2dd4bf] transition-colors"
// //               >
// //                 <span className="text-[#2dd4bf]/50">./</span>{link.label}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //         <a
// //           href="https://github.com/nidapatel4"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="font-mono text-xs px-3 py-1.5 border border-[#2dd4bf]/30 rounded text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-colors"
// //         >
// //           GitHub ↗
// //         </a>
// //       </nav>
// //     </header>
// //   );
// // }
// // "use client";

// // import { useState, useEffect } from "react";

// // const links = [
// //   { href: "#about", label: "About" },
// //   { href: "#skills", label: "Skills" },
// //   { href: "#projects", label: "Projects" },
// //   { href: "#contact", label: "Contact" },
// // ];

// // export default function Navbar() {
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const onScroll = () => setScrolled(window.scrollY > 20);
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// //         scrolled
// //           ? "bg-[#0a0f0f]/90 backdrop-blur-md border-b border-[#1f2b2b]"
// //           : "bg-transparent"
// //       }`}
// //     >
// //       <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
// //         <a href="#hero" className="font-display text-lg font-semibold text-[#f1f5f4]">
// //           Nida Patel
// //         </a>

// //         <ul className="hidden sm:flex items-center gap-8 text-sm">
// //           {links.map((link) => (
// //             <li key={link.href}>
// //               <a
// //                 href={link.href}
// //                 className="text-[#8b9a9a] hover:text-[#2dd4bf] transition-colors"
// //               >
// //                 {link.label}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>

// //         <a
// //           href="https://github.com/nidapatel4"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="text-sm px-4 py-2 border border-[#2dd4bf]/30 rounded-full text-[#2dd4bf] hover:bg-[#2dd4bf]/10 transition-colors"
// //         >
// //           GitHub
// //         </a>
// //       </nav>
// //     </header>
// //   );
// // }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const links = [
//   { href: "#about",    label: "About" },
//   { href: "#skills",   label: "Skills" },
//   { href: "#projects", label: "Projects" },
//   { href: "#contact",  label: "Contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden]     = useState(false);
//   const lastY = useRef(0);
//   const navRef = useRef(null);

//   useEffect(() => {
//     // entrance animation
//     gsap.fromTo(navRef.current,
//       { y: -60, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
//     );

//     const onScroll = () => {
//       const y = window.scrollY;
//       setScrolled(y > 20);
//       setHidden(y > lastY.current && y > 80);
//       lastY.current = y;
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       ref={navRef}
//       style={{ opacity: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         hidden ? "-translate-y-full" : "translate-y-0"
//       }`}
//     >
//       <nav
//         className={`max-w-5xl mx-auto mt-4 mx-6 px-6 h-14 flex items-center justify-between rounded-2xl transition-all duration-300 ${
//           scrolled
//             ? "glass shadow-lg shadow-black/20"
//             : "bg-transparent"
//         }`}
//         style={{ margin: "1rem auto", maxWidth: "64rem" }}
//       >
//         <a href="#hero" className="font-display text-lg font-semibold">
//           <span className="gradient-text">Nida.</span>
//         </a>

//         <ul className="hidden sm:flex items-center gap-8 text-sm">
//           {links.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="text-[#64748b] hover:text-white transition-colors duration-200"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <a
//           href="https://github.com/nidapatel4"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-sm px-4 py-2 rounded-full text-white transition-all duration-200 hover:scale-105"
//           style={{
//             background: "linear-gradient(135deg, #22d3ee22, #a855f722)",
//             border: "1px solid rgba(168,85,247,0.3)"
//           }}
//         >
//           GitHub ↗
//         </a>
//       </nav>
//     </header>
//   );
// }



// "use client";
// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const links = [
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#projects", label: "Projects" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const lastY = useRef(0);
//   const navRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(navRef.current,
//       { y: -60, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
//     );
//     const onScroll = () => {
//       const y = window.scrollY;
//       setScrolled(y > 20);
//       setHidden(y > lastY.current && y > 100);
//       lastY.current = y;
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header ref={navRef} style={{ opacity: 0, position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "transform 0.3s", transform: hidden ? "translateY(-100%)" : "translateY(0)" }}>
//       <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem" }}>
//         <nav style={{
//           padding: "0 1.5rem",
//           height: "56px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           borderRadius: "16px",
//           background: scrolled ? "rgba(255,255,255,0.04)" : "transparent",
//           backdropFilter: scrolled ? "blur(16px)" : "none",
//           border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
//           transition: "all 0.3s",
//         }}>
//           <a href="#hero" style={{ fontFamily: "Space Grotesk", fontSize: "1.3rem", fontWeight: 700, background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//             Nida.
//           </a>
//           <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
//             {links.map(link => (
//               <li key={link.href}>
//                 <a href={link.href} style={{ color: "#64748b", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
//                   onMouseOver={e => e.target.style.color = "#fff"}
//                   onMouseOut={e => e.target.style.color = "#64748b"}>
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <a href="https://github.com/nidapatel4" target="_blank" rel="noopener noreferrer"
//             style={{ fontSize: "0.85rem", padding: "0.4rem 1rem", borderRadius: "999px", color: "white", textDecoration: "none", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,85,247,0.3)", transition: "all 0.2s" }}>
//             GitHub ↗
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }





"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 100);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header ref={navRef} style={{ opacity: 0, position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "transform 0.3s", transform: hidden ? "translateY(-100%)" : "translateY(0)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 1.5rem" }}>
          <nav style={{
            padding: "0 1.5rem",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "16px",
            background: scrolled ? "rgba(255,255,255,0.04)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "none",
            border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
            transition: "all 0.3s",
          }}>
            <a href="#hero" style={{ fontFamily: "Space Grotesk", fontSize: "1.3rem", fontWeight: 700, background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textDecoration: "none" }}>
              Nida.
            </a>

            {/* Desktop links */}
            <ul className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
              {links.map(link => (
                <li key={link.href}>
                  <a href={link.href} style={{ color: "#64748b", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseOver={e => e.target.style.color = "#fff"}
                    onMouseOut={e => e.target.style.color = "#64748b"}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop GitHub */}
            <a href="https://github.com/nidapatel4" target="_blank" rel="noopener noreferrer"
              className="nav-github"
              style={{ fontSize: "0.85rem", padding: "0.4rem 1rem", borderRadius: "999px", color: "white", textDecoration: "none", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,85,247,0.3)" }}>
              GitHub ↗
            </a>

            {/* Mobile hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#94a3b8", fontSize: "1.5rem", padding: "0.25rem" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: "80px", left: "1.5rem", right: "1.5rem", zIndex: 49, background: "rgba(6,11,24,0.97)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {links.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#94a3b8", textDecoration: "none", fontSize: "1rem", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {link.label}
            </a>
          ))}
          <a href="https://github.com/nidapatel4" target="_blank" rel="noopener noreferrer"
            style={{ color: "#a855f7", textDecoration: "none", fontSize: "0.9rem", marginTop: "0.5rem" }}>
            GitHub ↗
          </a>
        </div>
      )}
    </>
  );
}