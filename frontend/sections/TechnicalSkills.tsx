/** @jsxImportSource @emotion/react */

import { Fragment } from "react";
import { GapHorizontal } from "../components/GapHorizontal";
import { GapVertical } from "../components/GapVertical";
import { qualifications } from "../store/qualifications";
import {
  FONT_150,
  FONT_175,
  FONT_200,
  FONT_250,
  FONT_400,
} from "../styles/fonts";
import { mq } from "../styles/mq";

export const TechnicalSkills = () => {
  return (
    <section
      css={{
        width: "100%",
        background: "linear-gradient(180deg, #181818 0%, #0A0A0A 100%)",
        display: "grid",
        gridTemplateColumns: "75%",
        justifyContent: "center",
      }}
    >
      <div css={{ width: "100%", height: "100%", zIndex: 1 }}>
        <GapVertical times={24} />
        <div
          css={{
            position: "relative",
          }}
        >
          <h3 css={{ margin: 0, fontSize: FONT_175, color: "#5A88FF" }}>
            Technical Skills
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
        <h1 css={{ fontSize: FONT_400, margin: 0 }}>
          Technologies learned throughout my career.
        </h1>
        <GapVertical times={4} />
        <p css={{ fontWeight: 300, fontSize: FONT_175, margin: 0 }}>
          These are the key technologies that I have worked with and gained
          proficiency with across my career to this date.
        </p>
      </div>
      <GapVertical times={18} />
      <div
        css={{
          width: "110%",
          background: "linear-gradient(180deg, #242424 0%, #1D1D1D 100%);",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "8px",
          marginLeft: "-5%",
        }}
      >
        <div
          css={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            padding: "68px 0px",
            flexWrap: "wrap",
          }}
        >
          {qualifications.map((category, index) => (
            <div key={index} css={{ display: "flex", flexDirection: "column" }}>
              <p css={{ margin: 0, fontSize: FONT_250, fontWeight: 800 }}>
                {category.title}
              </p>
              <GapVertical times={6} />
              <div
                css={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                {category.categories.map((nestedCategory, nestedIndex) => (
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom: "16px",
                      width: nestedIndex % 2 === 0 ? "55%" : "45%",
                      flexWrap: "wrap",
                    }}
                    key={nestedCategory.id}
                  >
                    <p
                      css={mq({
                        margin: 0,
                        fontWeight: 500,
                        fontSize: [FONT_150, FONT_175, FONT_175],
                      })}
                    >
                      {nestedCategory.title}
                    </p>
                    <GapVertical times={4} />
                    <div
                      css={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "12px",
                        flexWrap: "wrap",
                        width: "100%",
                      }}
                    >
                      {nestedCategory.technologies.map(
                        (technology, techIndex) => (
                          <div
                            css={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              marginRight:
                                techIndex !==
                                nestedCategory.technologies.length - 1
                                  ? "14px"
                                  : "",
                              padding: "4px 0px",
                            }}
                            key={technology.id}
                          >
                            <img
                              loading="lazy"
                              src={technology.icon}
                              css={{
                                width: "28px",
                                height: "28px",
                                objectFit: "contain",
                              }}
                            />
                            <GapHorizontal times={3} />
                            <p
                              css={mq({
                                margin: 0,
                                fontWeight: 400,
                                fontSize: ["14px", FONT_150, FONT_150],
                              })}
                            >
                              {technology.title}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <GapVertical times={15} />
    </section>
  );
};
