/** @jsxImportSource @emotion/react */

import { Fragment } from "react";
import { GapHorizontal } from "../components/GapHorizontal";
import { GapVertical } from "../components/GapVertical";
import { projects } from "../store/projectInfo";
import {
  FONT_100,
  FONT_150,
  FONT_175,
  FONT_300,
  FONT_400,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { PlaceSkills } from "./PlaceSkills";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const Projects = () => {
  return (
    <section
      css={{
        width: "100%",
        background: "linear-gradient(180deg, #0A0A0A 0%, #181818 100%)",
        display: "grid",
        gridTemplateColumns: "75%",
        justifyContent: "center",
      }}
    >
      <div
        css={{ width: "100%", height: "100%", zIndex: 1, position: "relative" }}
      >
        <GapVertical times={40} />
        <div
          css={{
            position: "relative",
          }}
        >
          <h3 css={{ margin: 0, fontSize: FONT_175, color: "#5A88FF" }}>
            Portfolio
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
          A look at my recent works.
        </h1>
        <GapVertical times={4} />
        <p
          css={mq({
            fontWeight: 300,
            fontSize: [FONT_150, FONT_150, FONT_175],
            margin: 0,
          })}
        >
          Explore the projects I have worked on since Jan 2020 in industry,
          personal and university environments.
        </p>
        <GapVertical times={4} />
        <div css={{ position: "relative" }}>
          <div
            css={mq({
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              overflowX: "hidden",
              paddingTop: "36px",
              scrollBehavior: "smooth",
              paddingBottom: "18px",
              ":scrollbar-color": "red yellow",
              position: "relative",
            })}
            id="projects-row"
          >
            {projects
              .sort((a, b) =>
                a.startDate.getTime() < b.startDate.getTime() ? 1 : -1
              )
              .map((project, index) => (
                <div
                  css={mq({
                    display: "flex",
                    background:
                      "linear-gradient(180deg, #242424 0%, #1D1D1D 100%);",
                    borderRadius: "24px",
                    minWidth: ["100%", "460px", "480px"],
                    height: ["600px", "690px", "800px"],
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    marginRight: ["12px", "60px", "80px"],
                  })}
                  key={index}
                >
                  <div
                    css={mq({
                      position: "absolute",
                      padding: "10px 16px",
                      borderRadius: "24px",
                      background: "rgba(55, 55, 55)",
                      fontSize: [FONT_100, "14px", "14px"],
                      top: "-16px",
                      right: ["50%", "-48px", "-48px"],
                      transform: ["translate(50%, 0%)", "none", "none"],
                    })}
                  >
                    {project.timePeriod}
                  </div>
                  <div
                    css={mq({
                      width: "100%",
                      height: ["160px", "200px", "280px"],
                      borderRadius: "24px 24px 0px 0px",
                    })}
                  >
                    <img
                      src={project.thumbnail}
                      loading="lazy"
                      css={{
                        borderRadius: "24px 24px 0px 0px",
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div css={mq({ marginBottom: ["30px", "30px", "36px"] })} />
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      width: "85%",
                    }}
                  >
                    <div
                      css={mq({
                        display: "flex",
                        flexDirection: ["column", "row", "row"],
                        width: "100%",
                        alignItems: ["flex-start", "center", "center"],
                        justifyContent: "space-between",
                        marginBottom: ["-12px", "0px", "0px"],
                      })}
                    >
                      <h2
                        css={mq({
                          margin: 0,
                          fontSize: ["18px", "24px", "24px"],
                        })}
                      >
                        {project.title}
                      </h2>
                      <p
                        css={{
                          fontWeight: 300,
                          fontSize: FONT_100,
                          color: "#A9A9A9",
                        }}
                      >
                        {project.roles.join(", ")}
                      </p>
                    </div>
                    <GapVertical times={2} />
                    <p
                      css={mq({
                        margin: 0,
                        fontSize: ["13px", "16px", "16px"],
                      })}
                    >
                      {project.subtitle}
                    </p>
                    <div css={mq({ marginBottom: ["12px", "18px", "24px"] })} />
                    <p
                      css={mq({
                        margin: 0,
                        fontWeight: 300,
                        lineHeight: "180%",
                        fontSize: ["13px", "16px", "16px"],
                      })}
                    >
                      {project.desc}
                    </p>
                    <GapVertical times={6} />
                    <div
                      css={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        width: "100%",
                      }}
                    >
                      <PlaceSkills skills={project.skills[0]} />
                      {project.skills.length > 1 && (
                        <Fragment>
                          <div
                            css={mq({
                              marginRight: ["0px", "16px", "24px"],
                              marginBottom: ["24px", "0px", "0px"],
                            })}
                          />
                          <PlaceSkills skills={project.skills[1]} />
                        </Fragment>
                      )}
                    </div>
                    <GapVertical times={6} />
                    <div
                      css={mq({
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        position: "absolute",
                        bottom: ["16px", "36px", "36px"],
                        right: ["16px", "36px", "36px"],
                      })}
                    >
                      {project.links.map((link, index) => (
                        <Fragment key={index}>
                          <div
                            css={mq({
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              padding: ["4.5px 7px", "6px 9px", "8px 12px"],
                              background: !link.title.includes("demo")
                                ? "white"
                                : "#5A88FF",
                              color: !link.title.includes("demo")
                                ? "black"
                                : "white",
                              borderRadius: "8px",
                              transition: "0.4s",
                              ":hover": {
                                background: !link.title.includes("demo")
                                  ? "rgba(210, 210, 210)"
                                  : "rgba(41, 101, 255)",
                              },
                            })}
                          >
                            <img
                              src={link.icon}
                              loading="lazy"
                              css={{
                                width: "14px",
                                height: "14px",
                                filter: link.title.includes("demo")
                                  ? "invert(1)"
                                  : "",
                              }}
                            />
                            <GapHorizontal times={2} />
                            <a
                              css={mq({
                                fontSize: ["10px", FONT_100, FONT_100],
                                fontWeight: 600,
                                textTransform: "uppercase",
                                textDecoration: "none",
                                color: "inherit",
                              })}
                              href={link?.disable ? null : link.link}
                              target={"_blank"}
                            >
                              {link.title}
                            </a>
                          </div>
                          {index !== project.links.length - 1 ? (
                            <GapHorizontal times={2} />
                          ) : null}
                        </Fragment>
                      ))}
                    </div>
                    <GapVertical times={10} />
                  </div>
                </div>
              ))}
          </div>
          <GapVertical times={5} />
          <div
            css={mq({
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: ["95vw", "95vw", "85vw"],
              position: "absolute",
              left: ["-11vw", "-10vw", "-5vw"],
              top: "50%",
            })}
          >
            <BsArrowLeft
              color="white"
              size={40}
              onClick={() => {
                var transition = window.innerWidth / 2.5;
                if (window.innerWidth < 720) {
                  transition = window.innerWidth * 0.75 + 12;
                }
                document
                  .getElementById("projects-row")
                  .scrollBy({ left: -transition });
              }}
              css={mq({ cursor: "pointer", width: ["28px", "40px", "40px"] })}
            />
            <GapHorizontal times={3} />
            <BsArrowRight
              color="white"
              size={40}
              onClick={() => {
                var transition = window.innerWidth / 2.5;
                if (window.innerWidth < 720) {
                  transition = window.innerWidth * 0.75 + 12;
                }
                document
                  .getElementById("projects-row")
                  .scrollBy({ left: transition });
              }}
              css={mq({ cursor: "pointer", width: ["28px", "40px", "40px"] })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
