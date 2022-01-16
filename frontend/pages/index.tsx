/** @jsxImportSource @emotion/react */
import { HEADING_FAMILY } from "../styles/fonts";
import { CareerTimeline } from "../sections/CareerTimeline";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { TechnicalSkills } from "../sections/TechnicalSkills";
import { SiteHeader } from "../sections/SiteHeader";
import { WhatIDo } from "../sections/WhatIDo";
import { Career } from "../sections/Career";

const Home = () => {
  return (
    <main
      css={{
        maxWidth: "100vw",
        minHeight: "100vh",
        fontFamily: HEADING_FAMILY,
        display: "flex",
        flexDirection: "column",
        color: "white",
      }}
    >
      <SiteHeader />
      <WhatIDo />
      <Career />
      <Projects />
      {/* 
      <CareerTimeline />
      <TechnicalSkills />
    */}
      <Contact />
    </main>
  );
};

export default Home;
