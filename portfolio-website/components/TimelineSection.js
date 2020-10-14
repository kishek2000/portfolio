/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FONT_200 } from "../styles/fonts";
import { computeGridSize } from "../styles/grid";
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
      }}
    >
      {!isParent && <GapVertical times={6} />}
      <p
        css={{
          fontFamily: "Rubik",
          fontSize: FONT_200,
          color: "white",
          margin: "0 auto",
          height: computeGridSize(6),
        }}
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
