/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ProjectStatusStyles } from "../constants";
import {
  FONT_100,
  FONT_150,
  FONT_200,
  FONT_300,
  FONT_50,
} from "../styles/fonts";
import { computeGridSize } from "../styles/grid";
import { GapHorizontal } from "./GapHorizontal";
import { GapVertical } from "./GapVertical";
import { MapProjectTechnologies } from "./MapProjectTechnologies";

export function ProjectCard({ flipSide, projNo, isParent, projectInfo }) {
  const vertDist = isParent ? 28 : 34;
  const factor = projNo - 1;
  const sameMonthSeparation = 6 + 16 + 85;
  const topCalculation = `calc(${computeGridSize(
    vertDist
  )} + ${factor} * ${computeGridSize(sameMonthSeparation)})`;

  const projectStatusStyle = ProjectStatusStyles.filter((status) => {
    return status.id === projectInfo.status;
  })[0];

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:
          "linear-gradient(180deg, rgba(40, 40, 40) 50%, rgba(20, 20, 20) 100%);",
        width: computeGridSize(177),
        position: "absolute",
        right: flipSide ? "" : `calc(50% + ${computeGridSize(12)})`,
        left: flipSide ? `calc(50% + ${computeGridSize(12)})` : "",
        top: topCalculation,
        borderRadius: 8,
        color: "white",
      }}
    >
      <div
        css={{ margin: "64px 70px", display: "flex", flexDirection: "column" }}
      >
        <ProjectCardHeader
          projectStatusStyle={projectStatusStyle}
          projectInfo={projectInfo}
        />
        <GapVertical times={4.5} />
        <p css={{ fontFamily: "Rubik-Regular", fontSize: FONT_150 }}>
          {projectInfo.description}
        </p>
        <GapVertical times={9} />
        <ProjectTechnologies projectInfo={projectInfo} />
      </div>
    </div>
  );
}

export function ProjectCardHeader({ projectStatusStyle, projectInfo }) {
  return (
    <>
      <div
        css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <p css={{ fontFamily: "Rubik-Bold", fontSize: FONT_300 }}>
          {projectInfo.name}
        </p>
        <GapHorizontal times={6} />
        <ProjectStatusPill style={projectStatusStyle} />
      </div>
      {projectInfo.slogan && (
        <>
          <GapVertical times={-1} />
          <p css={{ fontFamily: "Rubik-Regular", fontSize: FONT_200 }}>
            {projectInfo.slogan}
          </p>
        </>
      )}
      <GapVertical times={2} />
      <p
        css={{
          fontFamily: "Rubik-Regular",
          fontSize: FONT_50,
          // opacity: "0.6",
        }}
      >
        {console.log(projectInfo.roles.length)}
        ROLE{projectInfo.roles.length >= 2 ? "S" : ""} -{" "}
        {projectInfo.roles.join(", ")}
      </p>
    </>
  );
}

export function ProjectStatusPill({ style }) {
  return (
    <div
      css={{
        background: style.color,
        fontFamily: "Rubik-Bold",
        fontSize: FONT_50,
        padding: "3px 12px",
        borderRadius: "8px",
      }}
    >
      {style.title}
    </div>
  );
}

export function ProjectTechnologies({ projectInfo }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <MapProjectTechnologies
        techCategory="frontend"
        projectInfo={projectInfo}
      />
      <MapProjectTechnologies
        techCategory="backend"
        projectInfo={projectInfo}
      />
      <MapProjectTechnologies
        techCategory="designAndPrototyping"
        projectInfo={projectInfo}
      />
    </div>
  );
}
