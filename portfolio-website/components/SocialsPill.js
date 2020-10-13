/** @jsx jsx */
import { jsx } from "@emotion/core";
import { computeGridSize } from "../styles/grid";
import { SOCIALS_BG } from "../styles/colors";
import { GapHorizontal } from "./GapHorizontal";
import { mq } from "../styles/mq";

export const socialsIcons = [
  {
    url: "https://www.linkedin.com/in/adi-kishore-779634190/",
    icon: "/linkedin.png",
  },
  {
    url: "http://github.com/kishek2000",
    icon: "/github.png",
  },
  {
    url: "mailto:kishek12@gmail.com",
    icon: "/gmail.png",
  },
  {
    url: "http://soundcloud.com/adi-kishore",
    icon: "/soundcloud.png",
  },
];

export function SocialsPill() {
  return (
    <div
      css={mq({
        display: ["none", "flex"],
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: [computeGridSize(6), computeGridSize(9)],
        bottom: [computeGridSize(6), computeGridSize(9)],
        backgroundColor: SOCIALS_BG,
        borderRadius: "48px",
        maxWidth: computeGridSize(54),
        width: "100%",
        maxHeight: computeGridSize(14),
        height: "100%",
      })}
    >
      <GapHorizontal times={6} />
      {socialsIcons.map((item, index) => (
        <div
          css={{ display: "flex", flexDirection: "row" }}
          key={`${index * 2}`}
        >
          <a href={item.url} target="_blank" key={index}>
            <img
              css={mq({
                maxWidth: computeGridSize(7.5),
                maxHeight: computeGridSize(7.5),
                objectFit: "contain",
                "&:hover": [
                  {
                    maxWidth: ["", computeGridSize(8.5)],
                    maxHeight: ["", computeGridSize(8.5)],
                    width: ["", computeGridSize(8.5)],
                    height: ["", computeGridSize(8.5)],
                    marginRight: ["", "-2px"],
                    marginLeft: ["", "-2px"],
                  },
                ],
                transition: ".2s",
              })}
              src={item.icon}
              key={item.url}
            />
          </a>
          {index !== socialsIcons.length - 1 && (
            <GapHorizontal times={4} key={`${item.url}${index}`} />
          )}
        </div>
      ))}
      <GapHorizontal times={6} />
    </div>
  );
}
