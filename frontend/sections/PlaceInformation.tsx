/** @jsxImportSource @emotion/react */
import { FC, Fragment } from "react";
import { GapVertical } from "../components/GapVertical";
import {
  FONT_100,
  FONT_150,
  FONT_175,
  FONT_200,
  FONT_250,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { placesInfo } from "../store/placesInfo";
import { PlaceSkills } from "./PlaceSkills";
import { GapHorizontal } from "../components/GapHorizontal";

interface PlaceInformationProps {
  place: string;
}

export const PlaceInformation: FC<PlaceInformationProps> = ({ place }) => {
  const information = placesInfo.filter((placeInfo) => {
    return placeInfo.place === place;
  });
  if (information.length > 0) {
    return (
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
          width: "87.5%",
        }}
      >
        <GapVertical times={10} />
        <div
          css={mq({
            position: "absolute",
            top: ["12px", "24px", "36px"],
            right: ["12px", "24px", "36px"],
            fontWeight: 400,
            fontSize: [FONT_100, FONT_150, FONT_200],
            color: "rgba(120,120,120)",
          })}
        >
          {information[0].timePeriod}
        </div>
        <p
          css={mq({
            fontSize: [FONT_175, FONT_200, FONT_250],
            margin: 0,
            fontWeight: 600,
          })}
        >
          {information[0].role}
        </p>
        <GapVertical times={6} />
        <p
          css={mq({
            fontSize: [FONT_150, "18px", FONT_175],
            margin: 0,
            fontWeight: 300,
            lineHeight: "150%",
          })}
        >
          {information[0].desc}
        </p>
        <GapVertical times={9} />
        <p
          css={mq({
            fontSize: [FONT_150, "18px", FONT_200],
            margin: 0,
            fontWeight: 600,
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
            justifyContent: "space-between",
          })}
        >
          <PlaceSkills skills={information[0].skills[0]} />
          {information[0].skills.length > 1 && (
            <Fragment>
              <div
                css={mq({
                  marginRight: ["0px", "16px", "24px"],
                  marginBottom: ["24px", "0px", "0px"],
                })}
              />
              <PlaceSkills skills={information[0].skills[1]} />
            </Fragment>
          )}
        </div>
      </div>
    );
  }
  return null;
};
