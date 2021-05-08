/** @jsxImportSource @emotion/react */

import { GapVertical } from "../components/GapVertical";
import { FONT_175, FONT_400 } from "../styles/fonts";

export const Contact = () => {
  return (
    <section
      css={{
        width: "100%",
        height: "30vh",
        background: "#0A0A0A",
        color: "white",
      }}
    >
      {/* <GapVertical times={60} /> */}
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
      >
        <h1 css={{ margin: 0, textAlign: "center", fontSize: FONT_400 }}>
          Interested to work together?
        </h1>
        <GapVertical times={9} />
        <p
          css={{
            fontWeight: 300,
            fontSize: FONT_175,
            margin: 0,
            textAlign: "center",
          }}
        >
          Contact me anytime at kishek12@gmail.com and I'll get back to you as
          soon as I can!
        </p>
      </div>
    </section>
  );
};
