/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { GapVertical } from "../components/GapVertical";
import { HEADING_FAMILY, PARAGRAPH_FAMILY } from "../styles/fonts";
import { mq } from "../styles/mq";
import { PlaceInformation } from "./PlaceInformation";

const places = [
  "Sadafal Education",
  "Optus",
  "Accenture & Autism Awareness",
  "Vihangam Yoga",
  "Evergrowing",
  "Kumbh Sukrit",
];

const volunteering = ["Vihangam Yoga", "Evergrowing", "Kumbh Sukrit"];

export const Career = () => {
  const [active, setActive] = useState(0);
  return (
    <section
      css={mq({
        width: "100%",
        display: "grid",
        gridTemplateColumns: "80%",
        justifyContent: "center",
        height: "100%",
        padding: "96px 0px 200px 0px",
      })}
    >
      <div
        css={{
          width: "100%",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3
          css={{
            fontFamily: HEADING_FAMILY,
            margin: 0,
            fontSize: "40px",
            color: "#000",
            fontWeight: 800,
          }}
        >
          Career
        </h3>
        <GapVertical times={3} />
        <p
          css={mq({
            fontSize: ["16px", "18px", "20px"],
            margin: 0,
            color: "#000",
            fontFamily: PARAGRAPH_FAMILY,
            fontWeight: 400,
          })}
        >
          Industry and Volunteering Experience.
        </p>
        <GapVertical times={12} />
        <div
          css={mq({
            display: "flex",
            flexDirection: ["column-reverse", "column", "column"],
            gap: ["0px", "48px", "48px"],
            position: "relative",
          })}
        >
          <div css={mq({ display: ["none", "flex", "flex"] })}>{Legend()}</div>
          <div
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transition: "0.4s",
              overflow: "hidden",
              width: "100%",
              padding: "12px",
              marginLeft: "-12px",
              marginTop: "-12px",
            }}
          >
            {active > 0 ? (
              <div
                css={mq({
                  position: "absolute",
                  opacity: 0.6,
                  right: "55%",
                  transform: "scale(0.65)",
                  zIndex: -1,
                  transition: "0.4s",
                  display: ["none", "flex", "flex"],
                })}
              >
                <PlaceInformation place={places[active - 1]} />
              </div>
            ) : null}
            <PlaceInformation place={places[active]} />
            {active <= places.length - 1 ? (
              <div
                css={mq({
                  position: "absolute",
                  opacity: 0.6,
                  left: "55%",
                  transform: "scale(0.65)",
                  zIndex: -1,
                  transition: "0.4s",
                  display: ["none", "flex", "flex"],
                })}
              >
                <PlaceInformation place={places[active + 1]} />
              </div>
            ) : null}
          </div>
          {
            <div css={mq({ display: ["flex", "none", "none"] })}>
              <GapVertical times={10} />{" "}
            </div>
          }
          <div
            css={mq({
              display: ["flex", "none", "none"],
              alignSelf: "center",
            })}
          >
            {Stepper(active, setActive)}
          </div>
          {
            <div css={mq({ display: ["flex", "none", "none"] })}>
              <GapVertical times={4} />
            </div>
          }
          {CareerCardsControls(setActive, active)}
          {
            <div css={mq({ display: ["flex", "none", "none"] })}>
              <GapVertical times={8} />
            </div>
          }
          <div
            css={mq({
              display: ["flex", "none", "none"],
              position: "relative",
              alignSelf: "center",
            })}
          >
            {Legend()}
          </div>
        </div>
      </div>
    </section>
  );
};

function Legend() {
  return (
    <div
      css={mq({
        display: "flex",
        flexDirection: ["row", "column", "column"],
        position: ["relative", "absolute", "absolute"],
        top: ["0px", "-64px", "-64px"],
        right: "0px",
        gap: "12px",
      })}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          css={{
            width: "20px",
            height: "20px",
            background: "#0235ec",
            borderRadius: "50%",
          }}
        />
        <span
          css={{ fontFamily: PARAGRAPH_FAMILY, color: "#000", lineHeight: 1 }}
        >
          Industry
        </span>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          css={{
            width: "20px",
            height: "20px",
            background: "#ea9802",
            borderRadius: "50%",
          }}
        />
        <span
          css={{ fontFamily: PARAGRAPH_FAMILY, color: "#000", lineHeight: 1 }}
        >
          Volunteering
        </span>
      </div>
    </div>
  );
}

function CareerCardsControls(setActive, active: number) {
  return (
    <div
      css={mq({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        alignSelf: "center",
        position: "relative",
      })}
    >
      <span
        css={{
          color: "black",
          cursor: "pointer",
          textAlign: "left",
          fontWeight: 600,
          fontFamily: PARAGRAPH_FAMILY,
          maxWidth: "180px",
          height: "40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onClick={() => setActive(Math.max(active - 1, 0))}
      >
        {active > 0 ? (
          <>
            {"<"} {places[active - 1]}
          </>
        ) : null}
      </span>
      <div
        css={mq({
          display: ["none", "flex", "flex"],
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        })}
      >
        {Stepper(active, setActive)}
      </div>
      <span
        css={{
          color: "black",
          cursor: "pointer",
          textAlign: "right",
          fontWeight: 600,
          fontFamily: PARAGRAPH_FAMILY,
          maxWidth: "180px",
          height: "40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onClick={() => setActive(Math.min(active + 1, places.length - 1))}
      >
        {active < places.length - 1 ? (
          <>
            {places[active + 1]} {">"}
          </>
        ) : null}
      </span>
    </div>
  );
}

function Stepper(active: number, setActive: any) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {places.map((_, index) => (
        <div
          css={{
            width: "20px",
            height: "20px",
            background: volunteering.includes(places[index])
              ? "#ea9802"
              : "#0235ec",
            borderRadius: "50%",
            opacity: index <= active ? 1 : 0.4,
            position: "relative",
            cursor: "pointer",
            transition: "0.4s",
          }}
          onClick={() => setActive(index)}
          key={index}
        >
          {index < places.length - 1 ? (
            <div
              css={{
                position: "absolute",
                width: "20px",
                height: "2px",
                background:
                  index <= active
                    ? volunteering.includes(places[index])
                      ? "#ea9802"
                      : "#0235ec"
                    : "#ccc",
                left: "100%",
                top: "50%",
                transition: "0.4s",
              }}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
