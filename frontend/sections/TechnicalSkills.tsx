/** @jsxImportSource @emotion/react */

import { Fragment } from "react";
import { motion } from "framer-motion";
import { GapHorizontal } from "../components/GapHorizontal";
import { GapVertical } from "../components/GapVertical";
import { qualifications } from "../store/qualifications";
import {
  FONT_150,
  FONT_175,
  FONT_200,
  FONT_250,
  FONT_300,
  FONT_400,
  HEADING_FAMILY,
  PARAGRAPH_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { colors, gradients, shadows, glassEffect } from "../styles/theme";
import { AnimatedSection } from "../components/AnimatedSection";

export const TechnicalSkills = () => {
  return (
    <section
      css={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "80%",
        justifyContent: "center",
        padding: "120px 0px",
        position: "relative",
      }}
    >
      <div css={{ width: "100%", height: "100%", zIndex: 1 }}>
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
            Technical Skills
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
            css={{
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            <h1
              css={mq({
                fontSize: ["28px", "36px", "42px"],
                margin: "0 0 24px 0",
                fontFamily: HEADING_FAMILY,
                color: colors.light,
                fontWeight: 700,
                lineHeight: 1.2,
              })}
            >
              Technologies I've mastered throughout my journey
            </h1>
            <p
              css={mq({
                fontWeight: 300,
                fontSize: ["16px", "18px", "20px"],
                margin: 0,
                color: colors.gray[300],
                fontFamily: PARAGRAPH_FAMILY,
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.6,
              })}
            >
              A comprehensive overview of the technologies, frameworks, and
              tools I've gained proficiency with across my development career.
            </p>
          </div>
        </AnimatedSection>

        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"],
            gap: "32px",
          })}
        >
          {qualifications.map((category, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <motion.div
                css={{
                  ...glassEffect,
                  padding: "32px",
                  borderRadius: "20px",
                  height: "100%",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: shadows.xl,
                }}
              >
                <h2
                  css={{
                    margin: "0 0 24px 0",
                    fontSize: "24px",
                    fontWeight: 800,
                    fontFamily: HEADING_FAMILY,
                    color: colors.light,
                    background: gradients.secondary,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {category.title}
                </h2>

                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  {category.categories.map((nestedCategory, nestedIndex) => (
                    <div
                      key={nestedCategory.id}
                      css={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h3
                        css={mq({
                          margin: "0 0 16px 0",
                          fontWeight: 600,
                          fontSize: ["16px", "18px", "18px"],
                          color: colors.gray[200],
                          fontFamily: HEADING_FAMILY,
                        })}
                      >
                        {nestedCategory.title}
                      </h3>

                      <div
                        css={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "12px",
                        }}
                      >
                        {nestedCategory.technologies.map(
                          (technology, techIndex) => (
                            <motion.div
                              key={technology.id}
                              css={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "8px",
                                padding: "8px 12px",
                                background: `${colors.gray[800]}80`,
                                border: `1px solid ${colors.gray[700]}`,
                                borderRadius: "12px",
                                transition: "all 0.3s ease",
                              }}
                              whileHover={{
                                scale: 1.05,
                                background: `${colors.gray[700]}80`,
                                borderColor: colors.primary[400],
                              }}
                            >
                              <img
                                loading="lazy"
                                src={technology.icon}
                                css={{
                                  width: "20px",
                                  height: "20px",
                                  objectFit: "contain",
                                }}
                              />
                              <span
                                css={mq({
                                  margin: 0,
                                  fontWeight: 500,
                                  fontSize: ["12px", "14px", "14px"],
                                  color: colors.gray[300],
                                  fontFamily: PARAGRAPH_FAMILY,
                                })}
                              >
                                {technology.title}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
