/** @jsxImportSource @emotion/react */

import { Fragment, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
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
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { colors, gradients, shadows, glassEffect } from "../styles/theme";
import { AnimatedSection } from "../components/AnimatedSection";

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
      data-section="projects"
      css={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "80%",
        justifyContent: "center",
        padding: "120px 0px",
        position: "relative",
      }}
    >
      <div
        css={{ width: "100%", height: "100%", zIndex: 1, position: "relative" }}
      >
        <AnimatedSection>
          <motion.h3
            css={{
              fontFamily: HEADING_FAMILY,
              margin: 0,
              fontSize: "48px",
              color: colors.light,
              fontWeight: 800,
              textAlign: "center",
              marginBottom: "16px",
              background: gradients.primary,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Featured Projects
          </motion.h3>

          <motion.div
            css={{
              width: "60px",
              height: "4px",
              background: gradients.primary,
              borderRadius: "2px",
              margin: "0 auto 48px",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            css={mq({
              display: "flex",
              flexDirection: ["column", "row", "row"],
              alignItems: ["unset", "center", "center"],
              justifyContent: "space-between",
              gap: "36px",
              marginBottom: "64px",
            })}
          >
            <p
              css={mq({
                fontSize: ["16px", "18px", "20px"],
                margin: 0,
                color: colors.gray[300],
                fontFamily: PARAGRAPH_FAMILY,
                fontWeight: 400,
                maxWidth: "600px",
              })}
            >
              A collection of industry, personal, and university projects
              showcasing my expertise in full-stack development, UI/UX design,
              and modern technologies.
            </p>

            <div
              css={mq({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                alignSelf: "center",
                flexWrap: "wrap",
              })}
            >
              <ProjectTypeIndicator color="#0235ec" label="Industry" />
              <ProjectTypeIndicator color="#ea9802" label="University" />
              <ProjectTypeIndicator color="#ffc04b" label="Personal" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div
            css={mq({
              display: "grid",
              gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"],
              gap: "32px",
              position: "relative",
            })}
          >
            {sortedProjects
              ? sortedProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    index={index}
                    project={project}
                  />
                ))
              : null}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ProjectTypeIndicator = ({
  color,
  label,
}: {
  color: string;
  label: string;
}) => (
  <motion.div
    css={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      padding: "8px 16px",
      background: glassEffect.background,
      backdropFilter: glassEffect.backdropFilter,
      border: glassEffect.border,
      borderRadius: "20px",
    }}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    <div
      css={{
        width: "12px",
        height: "12px",
        background: color,
        borderRadius: "50%",
        boxShadow: `0 0 10px ${color}50`,
      }}
    />
    <span
      css={{
        fontFamily: PARAGRAPH_FAMILY,
        color: colors.light,
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  </motion.div>
);

function ProjectCard({
  index,
  project,
}: {
  index: number;
  project: ProjectModel;
}) {
  const bg = {
    industry: "#0235ec",
    university: "#ea9802",
    personal: "#ffc04b",
  };

  return (
    <motion.div
      css={{
        position: "relative",
        background: glassEffect.background,
        backdropFilter: glassEffect.backdropFilter,
        border: glassEffect.border,
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -10,
        boxShadow: shadows["2xl"],
      }}
    >
      {/* Project type indicator */}
      <div
        css={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "12px",
          height: "12px",
          background: bg[project.type],
          borderRadius: "50%",
          zIndex: 2,
          boxShadow: `0 0 15px ${bg[project.type]}80`,
        }}
      />

      {/* Project Image */}
      <div
        css={{
          position: "relative",
          width: "100%",
          height: "200px",
          overflow: "hidden",
          borderRadius: "16px 16px 0 0",
        }}
      >
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          css={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          whileHover={{ scale: 1.1 }}
        />

        {/* Overlay gradient */}
        <div
          css={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          }}
        />
      </div>

      {/* Content */}
      <div
        css={{
          padding: "24px",
        }}
      >
        <motion.h4
          css={{
            fontFamily: HEADING_FAMILY,
            fontSize: "20px",
            fontWeight: 700,
            color: colors.light,
            margin: "0 0 8px 0",
            lineHeight: 1.2,
          }}
          whileHover={{ color: colors.primary[400] }}
        >
          {project.title}
        </motion.h4>

        <p
          css={{
            fontFamily: PARAGRAPH_FAMILY,
            fontSize: "12px",
            color: colors.gray[500],
            margin: "0 0 12px 0",
            fontWeight: 500,
          }}
        >
          {project.timePeriod}
        </p>

        <p
          css={{
            fontFamily: PARAGRAPH_FAMILY,
            fontSize: "14px",
            color: colors.gray[400],
            lineHeight: 1.6,
            margin: "0 0 16px 0",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          {project.skills[0]?.technologies
            .slice(0, 4)
            .map((tech, techIndex: number) => (
              <span
                key={techIndex}
                css={{
                  fontSize: "11px",
                  fontFamily: PARAGRAPH_FAMILY,
                  background: `${colors.primary[600]}30`,
                  color: colors.primary[300],
                  padding: "4px 8px",
                  borderRadius: "12px",
                  fontWeight: 500,
                  border: `1px solid ${colors.primary[600]}50`,
                }}
              >
                {tech.title}
              </span>
            ))}
          {project.skills[0]?.technologies.length > 4 && (
            <span
              css={{
                fontSize: "11px",
                fontFamily: PARAGRAPH_FAMILY,
                color: colors.gray[400],
                padding: "4px 8px",
                fontWeight: 500,
              }}
            >
              +{project.skills[0].technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div
          css={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {project.links?.find((link) =>
            link.title.toLowerCase().includes("github")
          ) && (
            <motion.a
              href={
                project.links.find((link) =>
                  link.title.toLowerCase().includes("github")
                )?.link
              }
              target="_blank"
              rel="noopener noreferrer"
              css={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                background: colors.gray[800],
                color: colors.light,
                fontSize: "12px",
                fontFamily: PARAGRAPH_FAMILY,
                fontWeight: 500,
                borderRadius: "8px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                border: `1px solid ${colors.gray[700]}`,
              }}
              whileHover={{
                background: colors.gray[700],
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={14} />
              Code
            </motion.a>
          )}

          {project.links?.find(
            (link) =>
              link.title.toLowerCase().includes("demo") ||
              link.title.toLowerCase().includes("live")
          ) && (
            <motion.a
              href={
                project.links.find(
                  (link) =>
                    link.title.toLowerCase().includes("demo") ||
                    link.title.toLowerCase().includes("live")
                )?.link
              }
              target="_blank"
              rel="noopener noreferrer"
              css={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                background: gradients.primary,
                color: colors.light,
                fontSize: "12px",
                fontFamily: PARAGRAPH_FAMILY,
                fontWeight: 500,
                borderRadius: "8px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: shadows.glow,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt size={14} />
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
