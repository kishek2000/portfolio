/** @jsx jsx */
import { jsx } from "@emotion/core";
import { PROJECTS_BG } from "../styles/colors";

export function TimeLine({ months }) {
  return (
    <div
      css={{
        height: `${months * ((85 + 34) * 4)}px`,
        width: "1px",
        margin: "0 auto",
        background: PROJECTS_BG,
        position: "relative",
      }}
    />
  );
}
