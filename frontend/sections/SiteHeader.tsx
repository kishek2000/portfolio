/** @jsxImportSource @emotion/react */

import { GapVertical } from "../components/GapVertical";
import {
  FONT_150,
  FONT_175,
  FONT_200,
  FONT_250,
  FONT_300,
  FONT_400,
  FONT_500,
  FONT_600,
  HEADING_FAMILY,
  PARAGRAPH_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { useEffect, useState } from "react";

export const SiteHeader = () => {
  return (
    <header
      css={mq({
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: ["center", "center", "center"],
        position: "relative",
        // padding: ["48px 0px", "0px", "0px"],
        overflowY: "auto",
      })}
    >
      <div
        css={mq({
          display: "flex",
          flexDirection: ["column"],
          alignItems: "center",
          justifyContent: "center",
          width: "85%",
          gap: ["36px", "64px", "200px"],
        })}
      >
        <div
          css={mq({
            display: "flex",
            flexDirection: ["column-reverse", "row", "row"],
            alignItems: "center",
            justifyContent: "center",
            gap: ["36px", "64px", "72px"],
          })}
        >
          <div
            css={mq({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: ["100%", "45%", "35%"],
            })}
          >
            <p
              css={mq({
                margin: 0,
                fontSize: ["24px", "32px", FONT_400],
                fontWeight: 400,
                fontFamily: HEADING_FAMILY,
                color: "#000",
              })}
            >
              Hey! 👋
            </p>
            <GapVertical times={1} />
            <h1
              css={mq({
                margin: 0,
                fontSize: ["36px", FONT_500, FONT_600],
                fontFamily: HEADING_FAMILY,
                color: "#000",
                fontWeight: 800,
              })}
            >
              I'm <span css={{ color: "#003cd7" }}>Adi Kishore.</span>
            </h1>
            <GapVertical times={8} />
            <p
              css={mq({
                margin: 0,
                fontSize: ["14px", "16px", "20px"],
                fontWeight: 300,
                color: "#222",
                fontFamily: PARAGRAPH_FAMILY,
                lineHeight: "175%",
              })}
            >
              I’m a Junior Full Stack Developer and UI/UX Designer looking to
              create world class products.
              <br />
              <br />
              In the last 2 years, I have worked on a variety of problems with a
              customer-centric mindset, forming strong foundations in{" "}
              <span css={{ color: "#5a88ff", fontWeight: 700 }}>
                Full Stack Development
              </span>
              ,{" "}
              <span css={{ color: "#ff9898", fontWeight: 700 }}>
                UI/UX Design
              </span>{" "}
              and{" "}
              <span css={{ color: "#89ff7e", fontWeight: 700 }}>DevOps</span>.
            </p>
          </div>
          <div
            css={mq({
              position: "relative",
              width: ["216px", "360px", "476px"],
              height: ["216px", "360px", "476px"],
            })}
          >
            <img
              src="/profile.png"
              css={mq({
                width: ["216px", "360px", "476px"],
                height: ["216px", "360px", "476px"],
                borderRadius: "50%",
              })}
            />
            <div
              css={mq({
                position: "absolute",
                zIndex: -1,
                background: "#FFEBC5",
                width: ["216px", "360px", "476px"],
                height: ["216px", "360px", "476px"],
                top: "-8px",
                right: "-16px",
                borderRadius: "50%",
              })}
            />
          </div>
        </div>
        <div
          css={mq({
            display: ["none", "flex", "flex"],
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: ["180px", "90px", "120px"],
            gap: "8px",
            cursor: "pointer",
          })}
          onClick={() => {
            window.scrollBy({ top: window.outerHeight, behavior: "smooth" });
          }}
        >
          <p
            css={mq({
              margin: 0,
              fontFamily: PARAGRAPH_FAMILY,
              color: "#000",
              fontWeight: 600,
              fontSize: ["16px", "20px", "24px"],
            })}
          >
            Explore
          </p>
          <img
            src="/explore.svg"
            css={mq({ width: ["16px", "16px", "16px"] })}
          />
        </div>
      </div>
    </header>
  );
};
