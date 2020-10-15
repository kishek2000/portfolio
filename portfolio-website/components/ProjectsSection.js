/** @jsx jsx */
import { jsx } from "@emotion/core";
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
import { Projects } from "../constants";
import { TimelineSection } from "./TimelineSection";

export function ProjectsSection() {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        maxWidth: "100vw",
        margin: "0 auto",
      }}
    >
      <GapVertical times={20} />
      <div
        css={mq({
          display: "flex",
          flexDirection: "column",
          width: "100%",
        })}
      >
        <p
          css={mq({
            fontSize: ["48px", FONT_500],
            fontFamily: "Work Sans",
            fontWeight: "bold",
            letterSpacing: ["3px", "5px"],
            color: "#DCE6FF",
            margin: 0,
            textAlign: "center",
            whiteSpace: ["", "", "nowrap"],
          })}
        >
          Projects
        </p>
        <div
          css={mq({ marginBottom: [computeGridSize(3), computeGridSize(6)] })}
        />
        <p
          css={mq({
            fontFamily: "Rubik",
            fontSize: [FONT_150, FONT_200],
            color: "white",
            margin: 0,
            textAlign: "center",
            lineHeight: "1.5em",
          })}
        >
          Since the beginning of 2020, I have worked in personal
          <span css={{ marginRight: ["3px", ""] }}>
            <br css={mq({ display: ["none", "inline-block"] })} />
          </span>
          and collaborative projects to produce impactful
          <span css={{ marginRight: ["3px", ""] }}>
            <br css={mq({ display: ["none", "inline-block"] })} />
          </span>
          solutions for users.
        </p>
        <GapVertical times={21} />
        {Projects.map((period) => (
          <TimelineSection
            monthString={period.month}
            isParent={period.isParent}
            projects={period.projects}
          />
        ))}
      </div>
    </div>
  );
}
