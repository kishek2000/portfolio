/** @jsxImportSource @emotion/react */
import { FC, Fragment } from "react";
import { GapVertical } from "../components/GapVertical";
import {
  FONT_100,
  FONT_150,
  FONT_175,
  FONT_200,
  FONT_250,
  PARAGRAPH_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { placesInfo } from "../store/placesInfo";
import { PlaceSkills } from "./PlaceSkills";
import { GapHorizontal } from "../components/GapHorizontal";

interface PlaceInformationProps {
  place: string;
  isIndustry?: boolean;
}

const industry = "#0235ec";
const volunteering = "#ea9802";

export const PlaceInformation: FC<PlaceInformationProps> = ({
  place,
  isIndustry,
}) => {
  const information = placesInfo.filter((placeInfo) => {
    return placeInfo.place === place;
  });
  if (information.length > 0) {
    const isVolunteering = information[0].role.includes("Volunteer");
    return (
      <div
        css={mq({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
          width: [
            "calc(100% - 104px)",
            "calc(740px - 104px)",
            "calc(826px - 104px)",
          ],
          height: [
            "calc(100% - 176px)",
            "calc(572px - 176px)",
            "calc(530px - 176px)",
          ],
          background: "white",
          boxShadow:
            "0px 2px 4px rgba(0, 0, 0, 0.05), 0px 2px 16px rgba(0, 0, 0, 0.1)",
          borderBottom: `4px solid ${isVolunteering ? volunteering : industry}`,
          borderRadius: "8px",
          padding: ["88px 52px", "64px 52px", "88px 52px"],
          fontFamily: PARAGRAPH_FAMILY,
          transition: "0.4s",
        })}
      >
        <span
          css={mq({
            color: "#777",
            fontWeight: 500,
            fontSize: ["16px", "18px", "20px"],
          })}
        >
          {information[0].place}
        </span>
        <GapVertical times={5} />
        <h1
          css={mq({
            color: "#000",
            fontSize: ["24px", "28px", "36px"],
            fontWeight: 700,
            margin: 0,
          })}
        >
          {information[0].role}
        </h1>
        <GapVertical times={2} />
        <span css={{ color: "#333", fontWeight: 400 }}>
          {information[0].timePeriod}
        </span>
        <GapVertical times={5} />
        <p
          css={mq({
            margin: 0,
            fontWeight: 400,
            lineHeight: "150%",
            color: "#000",
            fontFamily: PARAGRAPH_FAMILY,
            fontSize: ["14px", "14px", "16px"],
          })}
        >
          {information[0].desc}
        </p>
        <GapVertical times={8} />
        <p
          css={mq({
            fontSize: ["14px", "14px", "16px"],
            margin: 0,
            fontWeight: 700,
            color: "#333",
            fontFamily: PARAGRAPH_FAMILY,
          })}
        >
          Skills and Technologies
        </p>
        <GapVertical times={3} />
        <div
          css={mq({
            display: "flex",
            width: "100%",
            alignItems: "flex-start",
            flexDirection: ["column", "row", "row"],
            gap: "16px",
          })}
        >
          {information[0].skills.map((skill, index) => (
            <PlaceSkills key={index} skills={skill} />
          ))}
        </div>
      </div>
    );
  }
  return null;
};
