/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FONT_100 } from "../styles/fonts";
import { GapHorizontal } from "./GapHorizontal";
import { TechnologyData } from "../constants/index";
import { computeGridSize } from "../styles/grid";

export function TechnologyElement({ technology }) {
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
      {data.icon !== "" && (
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
        css={{
          fontFamily: "Rubik",
          fontSize: FONT_100,
        }}
      >
        {data.title}
      </p>
    </div>
  );
}
