/** @jsx jsx */
import { jsx } from "@emotion/core";
import "glamor/reset";

import { SiteHeader } from "../components/SiteHeader";
import { SocialsPill } from "../components/SocialsPill";
import { MAIN_BG } from "../styles/colors";

export default function Home() {
  return (
    <div
      css={{
        backgroundColor: MAIN_BG,
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <head>
        <title>Adi's Portfolio</title>
      </head>
      <SiteHeader />
      <SocialsPill />
    </div>
  );
}
