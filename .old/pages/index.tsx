/** @jsxImportSource @emotion/react */
import { HEADING_FAMILY } from "../styles/fonts";
import { CareerTimeline } from "../sections/CareerTimeline";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { TechnicalSkills } from "../sections/TechnicalSkills";
import { SiteHeader } from "../sections/SiteHeader";
import { WhatIDo } from "../sections/WhatIDo";
import { Career } from "../sections/Career";
import { colors, gradients } from "../styles/theme";
import { FloatingElements } from "../components/FloatingElements";

const Home = () => {
  return (
    <main
      css={{
        maxWidth: "100vw",
        minHeight: "100vh",
        fontFamily: HEADING_FAMILY,
        display: "flex",
        flexDirection: "column",
        background: `
          linear-gradient(135deg, ${colors.dark} 0%, ${colors.gray[900]} 50%, ${colors.dark} 100%)
        `,
        color: colors.light,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Global floating elements */}
      <FloatingElements />

      {/* Animated background gradient */}
      <div
        css={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%)
          `,
          zIndex: -2,
        }}
      />

      <SiteHeader />
      <WhatIDo />
      <Career />
      <Projects />
      <TechnicalSkills />
      <Contact />
    </main>
  );
};

export default Home;
