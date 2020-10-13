/** @jsx jsx */
import { jsx } from "@emotion/core";
import { computeGridSize } from "../styles/grid";

export function GapHorizontal({ times }) {
  return <div css={{ marginRight: computeGridSize(times) }} />;
}
