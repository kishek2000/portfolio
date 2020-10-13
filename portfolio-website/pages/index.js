/** @jsx jsx */
import { jsx } from "@emotion/core";
import "glamor/reset";

import { SiteHeader } from "../components/SiteHeader";

export default function Home() {
  return (
    <div css={{ backgroundColor: "#0E0E0E", width: "100vw" }}>
      <head>
        <title>Adi's Portfolio</title>
      </head>
      <SiteHeader />
    </div>
  );
}
