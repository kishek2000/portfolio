/** @jsx jsx */
import { jsx } from "@emotion/core";
import { computeGridSize } from "../styles/grid";

export function GapVertical({ times }) {
  return <div css={{ marginBottom: computeGridSize(times) }} />;
}
