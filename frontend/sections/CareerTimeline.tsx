/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { GapVertical } from "../components/GapVertical";
import {
  FONT_150,
  FONT_175,
  FONT_200,
  FONT_300,
  FONT_400,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { places } from "../store/placesInfo";
import { PlaceInformation } from "./PlaceInformation";

export const CareerTimeline = () => {
  const [selectedPlace, setSelectedPlace] = useState(places[0]);

  return (
    <section
      css={{
        width: "100%",
        background: "linear-gradient(180deg, #181818 0%, #0A0A0A 100%);",
        display: "grid",
        gridTemplateColumns: "75%",
        justifyContent: "center",
        textAlign: "left",
        minHeight: "100vh",
        marginBottom: "-100px",
      }}
    >
      <div
        css={{
          width: "100%",
          height: "100%",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <GapVertical times={40} />
        <h3
          css={{
            margin: 0,
            fontSize: FONT_175,
            color: "#5A88FF",
            position: "relative",
            display: "flex",
          }}
        >
          Experience
          <div
            css={{
              position: "absolute",
              left: "-28px",
              width: "18px",
              height: "4px",
              background: "#5A88FF",
              top: "50%",
              borderRadius: "8px",
            }}
          />
        </h3>
        <GapVertical times={4} />
        <h1 css={mq({ fontSize: [FONT_300, FONT_300, FONT_400], margin: 0 })}>
          A look at the current timeline of my career.
        </h1>
        <GapVertical times={4} />
        <p
          css={mq({
            fontWeight: 300,
            fontSize: [FONT_150, FONT_150, FONT_175],
            margin: 0,
          })}
        >
          View details of my contributions in different industry and
          volunteering environments:
        </p>
        <GapVertical times={12} />
        <div
          css={mq({
            display: "flex",
            flexDirection: ["column", "row", "row"],
            alignItems: "center",
            justifyContent: "center",
            height: "70%",
            width: "100%",
            marginTop: "-24px",
          })}
        >
          <p css={{fontSize: "16px", display: ["flex", "none", "none"]}}>Select from my work areas:<p/>
          <div
            css={mq({
              width: "95%",
              height: "95%",
              display: "flex",
              flexDirection: ["column", "row", "row"],
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <div
              css={mq({
                display: ["flex", "none", "none"],
                width: "100%",
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                color: "white",
                justifyContent: "center",
                borderRadius: "8px",
                cursor: "pointer",
                padding: "8px 0px",
              })}
            >
              <select
                css={mq({
                  display: ["flex", "none", "none"],
                  width: "95%",
                  background: "none",
                  border: "none",
                  maxHeight: "100%",
                  color: "white",
                  outline: "none",
                  cursor: "pointer",
                })}
                onChange={(e) => setSelectedPlace(e.target.value)}
              >
                {places.map((place, index) => (
                  <option value={place} key={index}>
                    {place}
                  </option>
                ))}
              </select>
            </div>
            <div
              css={mq({
                display: ["none", "flex", "flex"],
                flexDirection: ["row", "column", "column"],
                textAlign: "left",
                width: ["", "20%", "17.5%"],
                flexWrap: "wrap",
                justifyContent: ["center", "flex-start", "flex-start"],
              })}
            >
              {places.map((place, index) => (
                <>
                  <div
                    key={index}
                    css={mq({
                      fontSize: [FONT_150, FONT_175, FONT_200],
                      fontWeight: place === selectedPlace ? 600 : 300,
                      position: "relative",
                      cursor: "pointer",
                      lineHeight: ["48px", "100%", "100%"],
                    })}
                    onClick={() => setSelectedPlace(place)}
                  >
                    {place}
                    {place === selectedPlace ? (
                      <div
                        css={mq({
                          width: "6px",
                          background: "white",
                          height: ["80%", "100%", "100%"],
                          position: "absolute",
                          left: "-20px",
                          top: ["10%", "0px", "0px"],
                        })}
                      />
                    ) : null}
                  </div>
                  {index !== places.length - 1 ? (
                    <>
                      <div
                        css={mq({ marginBottom: ["0px", "24px", "24px"] })}
                      />
                      <div css={mq({ marginRight: ["36px", "0", "0"] })} />
                    </>
                  ) : null}
                </>
              ))}
            </div>
            <div css={mq({ marginRight: ["0px", "80px", "80px"] })} />
            <div css={mq({ marginBottom: ["40px", "0px", "0px"] })} />
            <div
              css={mq({
                background:
                  "linear-gradient(180deg, #242424 0%, #1D1D1D 100%);",
                borderRadius: "24px",
                // eight: ["720px", "560px", "560px"],
                width: ["100%", "600px", "800px"],
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                padding: ["24px 0px", "36px 0px", "48px 0px"],
              })}
            >
              <PlaceInformation place={selectedPlace} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
