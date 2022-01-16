/** @jsxImportSource @emotion/react */

import Particles from "react-particles-js";
import { GapVertical } from "../components/GapVertical";
import { CoreServices } from "../store/coreServices";
import {
  FONT_200,
  FONT_400,
  FONT_175,
  FONT_300,
  FONT_150,
  HEADING_FAMILY,
  PARAGRAPH_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";

const colors = ["#5a88ff", "#ff9898", "#89ff7e"];

export const WhatIDo = () => {
  return (
    <section
      css={mq({
        width: "100%",
        display: "grid",
        gridTemplateColumns: "80%",
        justifyContent: "center",
        padding: "96px 0px",
      })}
    >
      <div css={{ width: "100%", zIndex: 1, height: "100%" }}>
        <GapVertical times={24} />
        <h3
          css={{
            fontFamily: HEADING_FAMILY,
            margin: 0,
            fontSize: "40px",
            color: "#000",
            fontWeight: 800,
          }}
        >
          What I Do
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
          My core abilities as an engineer.
        </p>

        <GapVertical times={15} />
        <div
          css={mq({
            display: "flex",
            flexDirection: ["column", "row", "row"],
            flexWrap: "wrap",
            gap: ["48px", "48px", "64px"],
            width: ["100%", "115%", "115%"],
            marginLeft: ["0%", "-7.5%", "-7.5%"],
            justifyContent: ["unset", "unset", "center"],
            alignItems: ["center", "unset", "unset"],
          })}
        >
          {CoreServices.map((service, index) => (
            <div
              css={mq({
                width: ["100%", "340px", "436px"],
                height: "480px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0px 2px 4px rgba(0, 0, 0, 0.05), 0px 2px 16px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                borderBottom: `4px solid ${colors[index]}`,
              })}
              key={service.title}
            >
              <div
                css={{
                  width: "85%",
                  height: "85%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  css={{ width: "40%", objectFit: "contain" }}
                  src={service.image}
                  loading="lazy"
                />
                <GapVertical times={10} />
                <h4
                  css={{
                    fontSize: "24px",
                    margin: 0,
                    color: "#000",
                    fontFamily: PARAGRAPH_FAMILY,
                    fontWeight: 600,
                  }}
                >
                  {service.title}
                </h4>
                <GapVertical times={4} />
                <p
                  css={{
                    margin: 0,
                    fontWeight: 400,
                    lineHeight: "175%",
                    textAlign: "center",
                    color: "#000",
                    fontFamily: PARAGRAPH_FAMILY,
                    width: "80%",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
