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
          maxWidth: [computeGridSize(60), "none"],
        })}
      >
        <p
          css={mq({
            fontSize: [FONT_300, FONT_400, FONT_500],
            fontFamily: "WorkSans-Bold",
            letterSpacing: ["3px", "5px"],
            color: "#DCE6FF",
            margin: 0,
            textAlign: "center",
            width: ["95%", "100%"],
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
            fontFamily: "Rubik-Regular",
            fontSize: [FONT_100, FONT_150, FONT_200],
            color: "white",
            margin: 0,
            textAlign: "center",
            width: ["95%", "100%"],
            lineHeight: "1.5em",
          })}
        >
          Since the beginning of 2020, I have worked in personal
          <br />
          and collaborative projects to produce impactful
          <br />
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
        <GapVertical times={24} />
      </div>
    </div>
  );
}
