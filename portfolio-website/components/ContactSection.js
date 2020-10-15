/** @jsx jsx */
import { jsx } from "@emotion/core";
import { PROJECTS_BG } from "../styles/colors";
import {
  FONT_100,
  FONT_150,
  FONT_200,
  FONT_300,
  FONT_400,
  FONT_500,
} from "../styles/fonts";
import { computeGridSize } from "../styles/grid";
import { mq } from "../styles/mq";
import { GapVertical } from "./GapVertical";

export function ContactSection() {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "85%",
        margin: "0 auto",
      }}
    >
      <GapVertical times={20} />
      <p
        css={mq({
          fontSize: [FONT_300, FONT_400, FONT_500],
          fontFamily: "Work Sans",
          fontWeight: "bold",
          letterSpacing: ["3px", "5px"],
          color: "#DCE6FF",
          margin: 0,
          textAlign: "center",
          width: ["95%", "100%"],
          whiteSpace: ["", "", "nowrap"],
        })}
      >
        Get in touch
      </p>
      <div
        css={mq({ marginBottom: [computeGridSize(3), computeGridSize(6)] })}
      />
      <p
        css={mq({
          fontFamily: "Rubik",
          fontSize: [FONT_100, FONT_150, FONT_200],
          color: "white",
          margin: 0,
          textAlign: "center",
          width: ["95%", "100%"],
          lineHeight: "1.5em",
        })}
      >
        If you’d like to work together on a project or have a new idea that
        you’d love to explore with me, feel free
        <span
          css={mq({
            display: ["none", "inline-block"],
            marginLeft: "2px",
          })}
        >
          to email me at kishek12@gmail.com!
          <GapVertical times={35} />
        </span>
        <span
          css={mq({ display: ["inline-block", "none"], marginLeft: "2px" })}
        >
          to find me anywhere from the socials below:
          <GapVertical times={12} />
        </span>
      </p>
    </div>
  );
}
