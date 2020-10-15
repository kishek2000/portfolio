/** @jsx jsx */
import { jsx } from "@emotion/core";
import { QualificationData } from "../constants";
import { PROJECTS_BG } from "../styles/colors";
import {
  FONT_100,
  FONT_150,
  FONT_200,
  FONT_300,
  FONT_400,
  FONT_500,
} from "../styles/fonts";
import { computeGridSize, maxWidth } from "../styles/grid";
import { mq } from "../styles/mq";
import { GapHorizontal } from "./GapHorizontal";
import { GapVertical } from "./GapVertical";

export function QualificationsSection() {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "75%",
        minHeight: "100vh",
        margin: "0 auto",
      }}
    >
      <div
        css={mq({ marginBottom: [computeGridSize(50), computeGridSize(20)] })}
      />
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
        Qualifications
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
        Through my growing experiences in group and personal
        <span css={{ marginRight: ["3px", ""] }}>
          <br css={mq({ display: ["none", "inline-block"] })} />
        </span>
        projects, alongside my learnings through University, I
        <span css={{ marginRight: ["3px", ""] }}>
          <br css={mq({ display: ["none", "inline-block"] })} />
        </span>
        have gained the following qualifications.
      </p>
      <div
        css={mq({ marginBottom: [computeGridSize(15), computeGridSize(21)] })}
      />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(180deg, rgba(35, 35, 35) 50%, rgba(22.5, 22.5, 22.5) 100%);",
          width: "100%",
          height: "60%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <div
          css={mq({
            margin: ["48px 36px", "96px 96px"],
            display: "flex",
            flexDirection: "column",
            color: "white",
          })}
        >
          {QualificationData.map((category, index) => (
            <div
              css={{
                display: "flex",
                flexDirection: "column",
              }}
              key={category.id}
            >
              <QualCategoryWall category={category} />
              {index !== QualificationData.length - 1 && (
                <GapVertical times={12} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function QualCategoryWall({ category }) {
  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <p
        css={mq({
          fontFamily: "Rubik",
          fontSize: [FONT_200, FONT_300],
          fontWeight: "bold",
        })}
      >
        {category.title}
      </p>
      <GapVertical times={6} />
      <QualCategoryClasses category={category} />
    </div>
  );
}

export function QualCategoryClasses({ category }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: `-${computeGridSize(6)}`,
      }}
    >
      {category.categories.map((technology, index) => (
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
          key={technology.id}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              css={mq({
                fontFamily: "Rubik",
                fontSize: [FONT_150, FONT_200],
                fontWeight: "bold",
              })}
            >
              {technology.title}
            </p>
            <GapVertical times={3} />
            <CategoryClassTechnologies technology={technology} />
          </div>
          {index !== category.categories.length - 1 && (
            <GapHorizontal times={13} />
          )}
        </div>
      ))}
    </div>
  );
}

export function CategoryClassTechnologies({ technology }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        maxWidth: computeGridSize(160),
      }}
    >
      {technology.technologies.map((techItem) => (
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: computeGridSize(6),
          }}
          key={techItem.id}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src={techItem.icon}
              css={mq({
                maxWidth: [computeGridSize(4), computeGridSize(6)],
                maxHeight: [computeGridSize(4), computeGridSize(6)],
                objectFit: "contain",
              })}
            />
            <GapHorizontal times={1.5} />
            <p
              css={mq({
                fontFamily: "Rubik",
                fontSize: [FONT_100, FONT_150],
              })}
            >
              {techItem.title}
            </p>
          </div>
          <GapHorizontal times={4} />
        </div>
      ))}
    </div>
  );
}
