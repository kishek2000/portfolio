/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ProjectsSection } from "../components/ProjectsSection";
import { QualificationsSection } from "../components/QualificationsSection";
import { ContactSection } from "../components/ContactSection";

import { SiteHeader } from "../components/SiteHeader";
import { SocialsPill } from "../components/SocialsPill";

export default function Home() {
  return (
    <div
      css={{
        background: "url(/main-bg.jpg)",
        backgroundBlendMode: "darken",
        // width: "100vw",
        position: "relative",
      }}
    >
      <head>
        <title>Adi's Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&family=Work+Sans:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script src={"/scripts/scrollAnimation.js"} />
      </head>
      <SiteHeader />
      <ProjectsSection />
      <QualificationsSection />
      <ContactSection />
      <SocialsPill />
    </div>
  );
}
