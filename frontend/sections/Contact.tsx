/** @jsxImportSource @emotion/react */

import { SocialIcon } from "react-social-icons";
import { GapVertical } from "../components/GapVertical";
import {
  FONT_150,
  FONT_175,
  FONT_250,
  FONT_300,
  FONT_400,
  HEADING_FAMILY,
  PARAGRAPH_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";

export const Contact = () => {
  return (
    <section
      css={{
        width: "100%",
        height: "30vh",
        color: "black",
        paddingBottom: "72px",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
      >
        <h1
          css={mq({
            margin: 0,
            textAlign: "center",
            fontSize: [FONT_250, FONT_250, FONT_400],
            fontFamily: HEADING_FAMILY,
          })}
        >
          Interested in working together?
        </h1>
        <GapVertical times={4} />
        <p
          css={mq({
            fontWeight: 300,
            fontSize: [FONT_150, FONT_175, FONT_175],
            margin: 0,
            textAlign: "center",
            width: "95%",
            fontFamily: PARAGRAPH_FAMILY,
            color: "#333",
          })}
        >
          Contact me anytime at{" "}
          <span
            css={{
              textDecoration: "none",
              color: "#333",
              fontWeight: 500,
            }}
          >
            kishek12@gmail.com
          </span>{" "}
          and I'll get back to you as soon as I can!
        </p>
        <GapVertical times={12} />
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <SocialIcon
            css={mq({
              ":hover": {
                transform: ["scale(1)", "scale(1.05)", "scale(1.05)"],
              },
            })}
            url="https://www.github.com/kishek2000/"
          />
          <SocialIcon
            css={mq({
              ":hover": {
                transform: ["scale(1)", "scale(1.05)", "scale(1.05)"],
              },
            })}
            url="https://www.linkedin.com/in/adi-kishore/"
          />
          <SocialIcon
            css={mq({
              ":hover": {
                transform: ["scale(1)", "scale(1.05)", "scale(1.05)"],
              },
            })}
            url="https://soundcloud.com/adi-kishore/"
          />
        </div>
      </div>
    </section>
  );
};
