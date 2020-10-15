/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FONT_150, FONT_200 } from "../styles/fonts";
import { computeGridSize, maxWidth } from "../styles/grid";
import { mq } from "../styles/mq";
import { GapVertical } from "./GapVertical";
import { ProjectCard } from "./ProjectCard";
import { TimeLine } from "./TimeLine";

export function TimelineSection({ monthString, isParent, projects }) {
  return (
    <div
      css={{
        position: "relative",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        maxWidth: maxWidth(),
      }}
    >
      {!isParent && <GapVertical times={6} />}
      <p
        css={mq({
          fontFamily: "Rubik",
          fontSize: [FONT_150, FONT_200],
          color: "white",
          margin: "0 auto",
          height: computeGridSize(6),
        })}
      >
        {monthString}
      </p>
      <GapVertical times={6} />
      <TimeLine months={projects.length} />
      {projects.map((project) => (
        <ProjectCard
          flipSide={project.flipSide}
          projNo={project.projNo}
          isParent={isParent}
          projectInfo={project.projectInfo}
        />
      ))}
    </div>
  );
}
