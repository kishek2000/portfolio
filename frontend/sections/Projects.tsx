/** @jsxImportSource @emotion/react */

import { Fragment, useEffect, useMemo, useState } from "react";
import { GapHorizontal } from "../components/GapHorizontal";
import { GapVertical } from "../components/GapVertical";
import { ProjectModel, projects } from "../store/projectInfo";
import {
  FONT_100,
  FONT_150,
  FONT_175,
  FONT_300,
  FONT_400,
  HEADING_FAMILY,
  PARAGRAPH_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { PlaceSkills } from "./PlaceSkills";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const Projects = () => {
  const [sortedProjects, setSortedProjects] = useState<ProjectModel[] | null>(
    null
  );

  useEffect(() => {
    setSortedProjects(
      projects.sort((a, b) =>
        a.startDate.getTime() < b.startDate.getTime() ? 1 : -1
      )
    );
  }, []);

  return (
    <section
      css={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "80%",
        justifyContent: "center",
        padding: "120px 0px",
      }}
    >
      <div
        css={{ width: "100%", height: "100%", zIndex: 1, position: "relative" }}
      >
        <h3
          css={{
            fontFamily: HEADING_FAMILY,
            margin: 0,
            fontSize: "40px",
            color: "#000",
            fontWeight: 800,
          }}
        >
          Projects
        </h3>
        <GapVertical times={3} />
        <div
          css={mq({
            display: "flex",
            flexDirection: ["column", "row", "row"],
            alignItems: ["unset", "center", "center"],
            justifyContent: "space-between",
            gap: "36px",
          })}
        >
          <p
            css={mq({
              fontSize: ["16px", "18px", "20px"],
              margin: 0,
              color: "#000",
              fontFamily: PARAGRAPH_FAMILY,
              fontWeight: 400,
            })}
          >
            Industry, Personal and University projects.
          </p>
          <div
            css={mq({
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
              alignSelf: "center",
              marginBottom: ["-24px", "0px", "0px"],
              flexWrap: "wrap",
            })}
          >
            <div
              css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                css={{
                  width: "20px",
                  height: "20px",
                  background: "#0235ec",
                  borderRadius: "50%",
                }}
              />
              <span
                css={{
                  fontFamily: PARAGRAPH_FAMILY,
                  color: "#000",
                  lineHeight: 1,
                }}
              >
                Industry
              </span>
            </div>
            <div
              css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                css={{
                  width: "20px",
                  height: "20px",
                  background: "#ea9802",
                  borderRadius: "50%",
                }}
              />
              <span
                css={{
                  fontFamily: PARAGRAPH_FAMILY,
                  color: "#000",
                  lineHeight: 1,
                }}
              >
                University
              </span>
            </div>
            <div
              css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                css={{
                  width: "20px",
                  height: "20px",
                  background: "#ffc04b",
                  borderRadius: "50%",
                }}
              />
              <span
                css={{
                  fontFamily: PARAGRAPH_FAMILY,
                  color: "#000",
                  lineHeight: 1,
                }}
              >
                Personal
              </span>
            </div>
          </div>
        </div>
        <GapVertical times={12} />
        <div css={{ position: "relative" }}>
          <div
            css={mq({
              display: "flex",
              flexDirection: "row",
              width: "120%",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "36px",
              scrollBehavior: "smooth",
              position: "relative",
              gap: "64px 52px",
              marginLeft: "-10%",
              flexWrap: "wrap",
            })}
          >
            {sortedProjects
              ? sortedProjects.map((project, index) =>
                  ProjectCard(index, project)
                )
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard(index: number, project: ProjectModel) {
  const bg = {
    industry: "#0235ec",
    personal: "#ffc04b",
    university: "#ea9802",
  };
  return (
    <div
      css={mq({
        display: "flex",
        borderRadius: "12px",
        minWidth: ["90%", "460px", "544px"],
        maxWidth: ["90%", "460px", "544px"],
        height: ["640px", "660px", "720px"],
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        color: "black",
        boxShadow:
          "0px 2px 4px rgba(0, 0, 0, 0.05), 0px 2px 16px rgba(0, 0, 0, 0.1)",
        fontFamily: PARAGRAPH_FAMILY,
        borderBottom: `4px solid ${bg[project.type]}`,
      })}
      key={index}
    >
      <div
        css={mq({
          position: "absolute",
          padding: "10px 16px",
          borderRadius: "24px",
          background: "white",
          fontSize: [FONT_100, "14px", "14px"],
          top: "-16px",
          right: "50%",
          transform: "translate(50%, 0%)",
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
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
            borderRadius: "12px 12px 0px 0px",
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
              fontWeight: 700,
              lineHeight: 1,
            })}
          >
            {project.title}
          </h2>
          <p
            css={{
              fontWeight: 500,
              fontSize: FONT_100,
              color: "#777",
            }}
          >
            {project.roles.join(", ")}
          </p>
        </div>
        <GapVertical times={2} />
        <p
          css={mq({
            margin: 0,
            fontSize: ["14px", "16px", "16px"],
            color: "#333",
            lineHeight: 1,
          })}
        >
          {project.subtitle}
        </p>
        <div css={mq({ marginBottom: ["14px", "16px", "20px"] })} />
        <p
          css={mq({
            margin: 0,
            fontWeight: 400,
            lineHeight: "180%",
            fontSize: ["14px", "14px", "14px"],
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
            gap: "12px",
          })}
        >
          {project.links
            ? project.links.map((link, index) => (
                <div
                  css={mq({
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: ["4.5px 7px", "6px 9px", "8px 12px"],
                    background: !link.title.toLowerCase().includes("demo")
                      ? "white"
                      : "#5A88FF",
                    color: !link.title.toLowerCase().includes("demo")
                      ? "black"
                      : "white",
                    borderRadius: "8px",
                    transition: "0.4s",
                    ":hover": {
                      background: !link.title.toLowerCase().includes("demo")
                        ? [
                            !link.title.toLowerCase().includes("demo")
                              ? "white"
                              : "#5A88FF",
                            "rgba(210, 210, 210)",
                            "rgba(210, 210, 210)",
                          ]
                        : [
                            !link.title.toLowerCase().includes("demo")
                              ? "white"
                              : "#5A88FF",
                            "rgba(41, 101, 255)",
                            "rgba(41, 101, 255)",
                          ],
                    },
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
                  })}
                  key={index}
                >
                  <img
                    src={link.icon}
                    loading="lazy"
                    css={{
                      width: "14px",
                      height: "14px",
                      filter: link.title.toLowerCase().includes("demo")
                        ? "invert(1)"
                        : "",
                    }}
                  />
                  <GapHorizontal times={2} />
                  <a
                    css={mq({
                      fontSize: ["10px", FONT_100, FONT_100],
                      fontWeight: 600,
                      // textTransform: "uppercase",
                      textDecoration: "none",
                      color: "inherit",
                    })}
                    href={link?.disable ? null : link.link}
                    target={"_blank"}
                  >
                    {link.title}
                  </a>
                </div>
              ))
            : null}
        </div>
        {project.links ? <GapVertical times={10} /> : null}
      </div>
    </div>
  );
}
