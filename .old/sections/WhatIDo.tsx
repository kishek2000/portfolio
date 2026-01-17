/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
import { GapVertical } from "../components/GapVertical";
import { CoreServices } from "../store/coreServices";
import {
  FONT_200,
  FONT_400,
  FONT_175,
  FONT_300,
  FONT_150,
  HEADING_FAMILY,
  PARAGRAPH_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { colors, gradients, shadows, glassEffect } from "../styles/theme";
import { AnimatedSection } from "../components/AnimatedSection";

const serviceColors = [
  {
    primary: colors.primary[400],
    secondary: colors.primary[300],
    gradient: gradients.primary,
  },
  {
    primary: colors.accent[400],
    secondary: colors.accent[300],
    gradient: gradients.secondary,
  },
  {
    primary: "#10b981",
    secondary: "#34d399",
    gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
  },
];

export const WhatIDo = () => {
  return (
    <section
      css={mq({
        width: "100%",
        display: "grid",
        gridTemplateColumns: "80%",
        justifyContent: "center",
        padding: "120px 0px",
        position: "relative",
      })}
    >
      <div css={{ width: "100%", zIndex: 1, height: "100%" }}>
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
            What I Do
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
            <p
              css={mq({
                fontSize: ["16px", "18px", "20px"],
                margin: 0,
                color: colors.gray[300],
                fontFamily: PARAGRAPH_FAMILY,
                fontWeight: 400,
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.6,
              })}
            >
              My core abilities and expertise areas that drive innovative
              solutions and exceptional user experiences.
            </p>
          </div>
        </AnimatedSection>

        <div
          css={mq({
            display: "grid",
            gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"],
            gap: "32px",
            justifyItems: "center",
          })}
        >
          {CoreServices.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.3 + index * 0.1}>
              <motion.div
                css={mq({
                  width: ["100%", "320px", "360px"],
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  ...glassEffect,
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                })}
                whileHover={{
                  y: -10,
                  boxShadow: shadows["2xl"],
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  css={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: serviceColors[index].gradient,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  whileHover={{ opacity: 0.1 }}
                />

                {/* Top accent line */}
                <motion.div
                  css={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: serviceColors[index].gradient,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />

                <div
                  css={{
                    width: "85%",
                    height: "85%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    css={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "20px",
                      background: `${serviceColors[index].primary}20`,
                      border: `2px solid ${serviceColors[index].primary}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "32px",
                    }}
                    whileHover={{
                      scale: 1.1,
                      background: `${serviceColors[index].primary}30`,
                    }}
                  >
                    <img
                      css={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                      }}
                      src={service.image}
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.h4
                    css={{
                      fontSize: "24px",
                      margin: "0 0 16px 0",
                      color: colors.light,
                      fontFamily: HEADING_FAMILY,
                      fontWeight: 700,
                    }}
                    whileHover={{
                      color: serviceColors[index].primary,
                    }}
                  >
                    {service.title}
                  </motion.h4>

                  <p
                    css={{
                      margin: 0,
                      fontWeight: 400,
                      lineHeight: "175%",
                      textAlign: "center",
                      color: colors.gray[300],
                      fontFamily: PARAGRAPH_FAMILY,
                      fontSize: "14px",
                    }}
                  >
                    {service.desc}
                  </p>

                  {/* Floating particles effect */}
                  <motion.div
                    css={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "8px",
                      height: "8px",
                      background: serviceColors[index].primary,
                      borderRadius: "50%",
                      opacity: 0.6,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />

                  <motion.div
                    css={{
                      position: "absolute",
                      bottom: "30px",
                      left: "30px",
                      width: "6px",
                      height: "6px",
                      background: serviceColors[index].secondary,
                      borderRadius: "50%",
                      opacity: 0.4,
                    }}
                    animate={{
                      y: [0, 8, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5 + 1,
                    }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
