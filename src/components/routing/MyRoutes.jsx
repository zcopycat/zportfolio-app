// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./NavBar";
// import HomePage from "../../pages/HomePage";
// import SkillsPlusExperience from "../../pages/SkillsPlusExperience";
// import Contact from "../../pages/Contact";
// import About from "../../pages/About";
// import ExtrasPage from "../../pages/ExtrasPage";

// const MyRoutes = () => {
//   return (
//     <>
//       <Router>
//         <div className="fixed-navbar">
//           <NavBar />
//         </div>
//         <main className="portfolio-wrapper">
//           <Routes>
//             <section className="portfolio-section">
//               <Route path="/" element={<HomePage />} />
//             </section>
//             <section className="portfolio-section">
//               <Route
//                 path="/SkillsPlusExperience"
//                 element={<SkillsPlusExperience />}
//               />
//             </section>
//             <section className="portfolio-section">
//               <Route path="/Contact" element={<Contact />} />
//             </section>
//             <section className="portfolio-section">
//               <Route path="/About" element={<About />} />
//             </section>
//             <section className="portfolio-section">
//               <Route path="/ExtrasPage" element={<ExtrasPage />} />
//             </section>
//           </Routes>
//         </main>
//       </Router>
//     </>
//   );
// };

// export default MyRoutes;

import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SkillsPlusExperience from "../../pages/SkillsPlusExperience";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import ExtrasPage from "../../pages/ExtrasPage";
import NavBar from "./NavBar";

const MyRoutes = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const extrasRef = useRef(null);

  const scrollToSection = (ref) => {
    console.log("scrollToSection called with ref:", ref); // Debugging log
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log("scrollToSection in MyRoutes:", scrollToSection); // Debugging log

  return (
    <Router>
      <div className="fixed-navbar">
        <NavBar
          homeRef={homeRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
          aboutRef={aboutRef}
          extrasRef={extrasRef}
          scrollToSection={scrollToSection}
        />
      </div>
      <main className="portfolio-wrapper">
        <section ref={homeRef} className="portfolio-section">
          <HomePage aboutRef={aboutRef} scrollToSection={scrollToSection} />
        </section>
        <section ref={skillsRef} className="portfolio-section">
          <SkillsPlusExperience />
        </section>
        <section ref={aboutRef} className="portfolio-section">
          <About />
        </section>
        <section ref={extrasRef} className="portfolio-section">
          <ExtrasPage />
        </section>
        <section ref={contactRef} className="portfolio-section">
          <Contact />
        </section>
      </main>
    </Router>
  );
};

export default MyRoutes;
