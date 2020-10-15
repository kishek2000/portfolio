/** @jsx jsx */
import { jsx } from "@emotion/core";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectStatusStyles } from "../constants";
import {
  FONT_100,
  FONT_150,
  FONT_200,
  FONT_300,
  FONT_50,
} from "../styles/fonts";
import { computeGridSize } from "../styles/grid";
import { mq } from "../styles/mq";
import { GapHorizontal } from "./GapHorizontal";
import { GapVertical } from "./GapVertical";
import { MapProjectTechnologies } from "./MapProjectTechnologies";

export function ProjectCard({ flipSide, projNo, isParent, projectInfo, link }) {
  const vertDist = isParent ? 24 : 34;
  const factor = projNo - 1;
  const sameMonthSeparation = 6 + 16 + 85;
  const topCalculation = [
    `calc(${computeGridSize(
      isParent ? 16 : 20
    )} + ${factor} * ${computeGridSize(sameMonthSeparation + 24)})`,
    `calc(${computeGridSize(vertDist)} + ${factor} * ${computeGridSize(
      sameMonthSeparation
    )})`,
  ];

  const projectStatusStyle = ProjectStatusStyles.filter((status) => {
    return status.id === projectInfo.status;
  })[0];

  return (
    <div
      css={mq({
        position: "absolute",
        right: ["", flipSide ? "" : `calc(50% + ${computeGridSize(12)})`],
        left: ["", flipSide ? `calc(50% + ${computeGridSize(12)})` : ""],
        top: topCalculation,
        maxWidth: [computeGridSize(220), computeGridSize(220)],
        width: ["80%", "50%"],
        margin: ["0 auto", ""],
      })}
    >
      <div
        css={mq({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background:
            "linear-gradient(180deg, rgba(35, 35, 35) 50%, rgba(22.5, 22.5, 22.5) 100%);",

          borderRadius: 8,
          color: "white",
        })}
      >
        <div
          css={mq({
            padding: ["32px 35px", "8% 8%"],
            display: "flex",
            flexDirection: "column",
            margin: ["0 auto", "none"],
          })}
        >
          <ProjectCardHeader
            projectStatusStyle={projectStatusStyle}
            projectInfo={projectInfo}
          />
          <GapVertical times={4.5} />
          <p
            css={mq({
              fontFamily: "Rubik",
              fontSize: [FONT_100, FONT_150],
            })}
          >
            {projectInfo.description}
          </p>
          <GapVertical times={9} />
          <ProjectTechnologies projectInfo={projectInfo} />
        </div>
      </div>
      {link && (
        <div css={{ width: "100%", textAlign: "right" }}>
          <GapVertical times={2} />
          <a
            href={link.url}
            css={{ color: "white", textDecoration: "none" }}
            target="_blank"
          >
            <p
              css={mq({
                fontFamily: "Rubik",
                fontSize: [FONT_100, FONT_150],
              })}
            >
              {link.title}
            </p>
          </a>
        </div>
      )}
    </div>
  );
}

export function ProjectCardHeader({ projectStatusStyle, projectInfo }) {
  return (
    <>
      <div
        css={mq({
          display: "flex",
          flexDirection: ["column", "row"],
          alignItems: ["flex-start", "center"],
        })}
      >
        <p
          css={mq({
            fontFamily: "Rubik",
            fontSize: [FONT_200, FONT_200, FONT_300],
            fontWeight: "bold",
          })}
        >
          {projectInfo.name}
        </p>
        <div
          css={mq({
            display: ["none", "flex"],
            marginRight: computeGridSize(6),
          })}
        />
        <div
          css={mq({
            display: ["flex", "none"],
            marginBottom: computeGridSize(2),
          })}
        />
        <ProjectStatusPill style={projectStatusStyle} />
      </div>
      {projectInfo.slogan && (
        <>
          <div
            css={mq({
              display: ["none", "flex"],
              marginBottom: computeGridSize(-1),
            })}
          />
          <div
            css={mq({
              display: ["flex", "none"],
              marginBottom: computeGridSize(2),
            })}
          />
          <p
            css={mq({
              fontFamily: "Rubik",
              fontSize: [FONT_150, FONT_150, FONT_200],
            })}
          >
            {projectInfo.slogan}
          </p>
        </>
      )}
      <GapVertical times={2} />
      <p
        css={{
          fontFamily: "Rubik",
          fontSize: FONT_50,
        }}
      >
        ROLE{projectInfo.roles.length >= 2 ? "S" : ""} -{" "}
        {projectInfo.roles.join(", ")}
      </p>
    </>
  );
}

export function ProjectStatusPill({ style }) {
  return (
    <div
      css={mq({
        background: style.color,
        fontFamily: "Rubik",
        fontWeight: "bold",
        fontSize: ["7.5px", FONT_50],
        padding: "3px 12px",
        borderRadius: "8px",
        textAlign: "center",
      })}
    >
      {style.title}
    </div>
  );
}

export function ProjectTechnologies({ projectInfo }) {
  return (
    <div
      css={mq({
        display: "flex",
        flexDirection: ["column", "row"],
        width: "85%",
        justifyContent: "space-between",
        color: "white",
      })}
    >
      <MapProjectTechnologies
        techCategory="frontend"
        projectInfo={projectInfo}
      />
      <div
        css={mq({
          display: ["flex", "none"],
          marginBottom: computeGridSize(4),
        })}
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
