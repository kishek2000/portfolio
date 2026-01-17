/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { GapProps } from "./GapHorizontal";

export const GapVertical: FC<GapProps> = ({ times }) => {
  return <div css={{ minHeight: `${4 * times}px` }} />;
};
