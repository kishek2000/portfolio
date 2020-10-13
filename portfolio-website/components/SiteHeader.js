/** @jsx jsx */
import { jsx } from "@emotion/core";

import { FONT_200, FONT_500 } from "../styles/fonts";
import { computeGridSize } from "../styles/grid";
import { GapHorizontal } from "./GapHorizontal";
import { GapVertical } from "./GapVertical";

export function SiteHeader() {
  return (
    <div
      css={{
        display: "flex",
        width: "100%",
        height: "100vh",
        margin: "0 auto",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <img
        src="/folio-image.png"
        css={{ maxWidth: computeGridSize(120), width: "85%" }}
      />
      <GapHorizontal times={18} />
      <div css={{ display: "flex", flexDirection: "column" }}>
        <p
          css={{
            fontSize: FONT_500,
            fontFamily: "WorkSans-Bold",
            letterSpacing: "5px",
            color: "#DCE6FF",
            margin: 0,
          }}
        >
          Hello, I'm
          <br />
          Adi Kishore.
        </p>
        <GapVertical times={6} />
        <p
          css={{
            fontFamily: "Rubik-Regular",
            fontSize: FONT_200,
            color: "white",
            margin: 0,
          }}
        >
          I'm a Junior Developer and UI Designer looking to make a<br />
          genuine impact in the world!
        </p>
      </div>
    </div>
  );
}
