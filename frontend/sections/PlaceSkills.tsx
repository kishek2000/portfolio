/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { GapHorizontal } from "../components/GapHorizontal";
import { GapVertical } from "../components/GapVertical";
import { FONT_100, PARAGRAPH_FAMILY } from "../styles/fonts";
import { mq } from "../styles/mq";
import { SkillsModel } from "../store/placesInfo";

interface PlaceSkillsProps {
  skills: SkillsModel;
}

export const PlaceSkills: FC<PlaceSkillsProps> = ({ skills }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        fontFamily: PARAGRAPH_FAMILY,
      }}
    >
      <p
        css={mq({
          fontSize: [FONT_100, "12px", "14px"],
          margin: 0,
          fontWeight: 500,
          textTransform: "uppercase",
          color: "#666",
          letterSpacing: "0.5px",
        })}
      >
        {skills.title}
      </p>
      <GapVertical times={2} />
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {skills.technologies.map((tech) => (
          <div
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "4px",
              marginRight: "12px",
            }}
            key={tech.title}
          >
            <img
              css={mq({
                width: ["24px", "24px", "24px"],
                height: ["24px", "24px", "24px"],
                objectFit: "contain",
              })}
              loading="lazy"
              src={tech.icon}
            />
            <GapHorizontal times={2} />
            <p
              css={mq({
                fontSize: ["14px", "14px", "16px"],
                margin: 0,
                fontWeight: 300,
                color: "#000",
                fontFamily: PARAGRAPH_FAMILY,
              })}
            >
              {tech.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
