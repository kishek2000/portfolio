/** @jsxImportSource @emotion/react */

import { GapVertical } from "../components/GapVertical";
import {
  FONT_150,
  FONT_175,
  FONT_250,
  FONT_300,
  FONT_400,
} from "../styles/fonts";
import { mq } from "../styles/mq";

export const Contact = () => {
  return (
    <section
      css={{
        width: "100%",
        height: "30vh",
        background: "#0A0A0A",
        color: "white",
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
          })}
        >
          Contact me anytime at kishek12@gmail.com and I'll get back to you as
          soon as I can!
        </p>
      </div>
    </section>
  );
};
