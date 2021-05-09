/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { GapHorizontal } from "../components/GapHorizontal";
import { GapVertical } from "../components/GapVertical";
import { FONT_100 } from "../styles/fonts";
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
      }}
    >
      <p
        css={mq({
          fontSize: [FONT_100, "14px", "16px"],
          margin: 0,
          fontWeight: 300,
          textTransform: "uppercase",
        })}
      >
        {skills.title}
      </p>
      <GapVertical times={3} />
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
          >
            <img
              css={mq({
                width: ["24px", "26px", "30px"],
                height: ["24px", "26px", "30px"],
                objectFit: "contain",
              })}
              loading="lazy"
              src={tech.icon}
            />
            <GapHorizontal times={2} />
            <p
              css={mq({
                fontSize: [FONT_100, "14px", "16px"],
                margin: 0,
                fontWeight: 300,
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
