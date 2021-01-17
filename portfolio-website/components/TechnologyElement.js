/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FONT_100, FONT_50 } from "../styles/fonts";
import { GapHorizontal } from "./GapHorizontal";
import { TechnologyData } from "../constants/index";
import { computeGridSize } from "../styles/grid";
import { mq } from "../styles/mq";

export function TechnologyElement({ technology }) {
  console.log(technology);
  const data = TechnologyData.filter((item) => {
    return item.id === technology;
  })[0];
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      {data && data.icon !== "" && (
        <>
          <img
            src={data.icon}
            css={{
              maxWidth: computeGridSize(6),
              maxHeight: computeGridSize(6),
              objectFit: "contain",
            }}
          />
          <GapHorizontal times={1.5} />
        </>
      )}
      <p
        css={mq({
          fontFamily: "Rubik",
          fontSize: [FONT_50, FONT_100],
        })}
      >
        {data && data.title}
      </p>
    </div>
  );
}
