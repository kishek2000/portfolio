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
} from "../styles/fonts";
import { mq } from "../styles/mq";
import Particles from "react-particles-js";
import { useEffect, useState } from "react";

export const SiteHeader = () => {
  const [particles, setParticles] = useState(70);

  useEffect(() => {
    if (window.innerWidth <= 720) {
      setParticles(40);
    }
  });

  return (
    <header
      css={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(180deg, #181818 0%, #0A0A0A 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "95%",
          textAlign: "center",
        }}
      >
        <p
          css={mq({
            margin: 0,
            fontSize: [FONT_150, FONT_175, FONT_200],
            fontWeight: 200,
          })}
        >
          Hey! I'm
        </p>
        <GapVertical times={1} />
        <h1 css={mq({ margin: 0, fontSize: [FONT_400, FONT_500, FONT_600] })}>
          Adi Kishore.
        </h1>
        <GapVertical times={8} />
        <p
          css={mq({
            margin: 0,
            fontSize: [FONT_150, FONT_200, FONT_300],
            fontWeight: 300,
          })}
        >
          Junior Fullstack Engineer and UI/UX Designer
        </p>
      </div>
      <div
        css={{
          position: "absolute",
          top: "0px",
          left: "0px",
          maxWidth: "100%",
          overflow: "clip",
        }}
      >
        <Particles
          width={"100vw"}
          height={"100vh"}
          params={{
            particles: {
              number: {
                value: particles,
              },
              size: {
                value: 3,
              },
              move: {
                speed: 1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
    </header>
  );
};
