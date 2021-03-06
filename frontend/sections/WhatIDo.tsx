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
} from "../styles/fonts";
import { mq } from "../styles/mq";

export const WhatIDo = () => {
  return (
    <section
      css={{
        width: "100%",
        background: "linear-gradient(180deg, #0A0A0A 0%, #181818 100%);",
        display: "grid",
        gridTemplateColumns: "75%",
        justifyContent: "center",
      }}
    >
      <div css={{ width: "100%", zIndex: 1, height: "100%" }}>
        <GapVertical times={24} />
        <div
          css={{
            position: "relative",
          }}
        >
          <h3 css={{ margin: 0, fontSize: FONT_175, color: "#5A88FF" }}>
            What I Do
          </h3>
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
        </div>
        <GapVertical times={4} />
        <h1 css={mq({ fontSize: [FONT_300, FONT_300, FONT_400], margin: 0 })}>
          I aspire to create world-class,
          <br />
          customer centric user experiences.
        </h1>
        <GapVertical times={4} />
        <p
          css={mq({
            fontWeight: 300,
            fontSize: [FONT_150, FONT_150, FONT_175],
            margin: 0,
          })}
        >
          Since Jan 2020, I have worked on a variety of problems with a
          customer-centric mindset,
          <br />
          forming strong foundations in these key areas:
        </p>
        <GapVertical times={9} />
        <div
          css={mq({
            display: "grid",
            width: "100%",
            gridTemplateColumns: [
              "repeat(auto-fill)",
              "repeat(auto-fill, 30%)",
              "repeat(auto-fill, 30%)",
            ],
            gridGap: ["2%", "5%", "5%"],
          })}
        >
          {CoreServices.map((service) => (
            <div
              css={{
                background:
                  "linear-gradient(180deg, #242424 0%, #1D1D1D 100%);",
                borderRadius: "24px",
                width: "100%",
                height: "480px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
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
                <GapVertical times={9} />
                <h4 css={{ fontSize: FONT_200, margin: 0 }}>{service.title}</h4>
                <GapVertical times={4} />
                <p
                  css={{
                    margin: 0,
                    fontWeight: 300,
                    lineHeight: "200%",
                    textAlign: "center",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <GapVertical times={9} />
      </div>
    </section>
  );
};
