/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FONT_150 } from "../styles/fonts";
import { GapVertical } from "./GapVertical";
import { GapHorizontal } from "./GapHorizontal";
import { titleCase } from "./titleCase";
import { TechnologyElement } from "./TechnologyElement";

export function MapProjectTechnologies({ techCategory, projectInfo }) {
  if (projectInfo[techCategory]) {
    const title = techCategory.includes("end")
      ? `${titleCase(techCategory)} Technologies`
      : "Design and Prototyping";

    return (
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          minWidth: "60%",
        }}
      >
        <p
          css={{
            fontFamily: "Rubik-Bold",
            fontSize: FONT_150,
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </p>
        <GapVertical times={1} />
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "-8px",
          }}
        >
          {projectInfo[techCategory].map((technology, index) => (
            <>
              <TechnologyElement technology={technology} />
              {index !== projectInfo[techCategory].length - 1 && (
                <>
                  <GapHorizontal times={3} />
                </>
              )}
            </>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
