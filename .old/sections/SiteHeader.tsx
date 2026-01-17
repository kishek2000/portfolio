/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
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
  HEADING_FAMILY,
  PARAGRAPH_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { useEffect, useState } from "react";
import { colors, gradients, shadows, glassEffect } from "../styles/theme";
import { AnimatedSection } from "../components/AnimatedSection";

export const SiteHeader = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header
      css={mq({
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: ["center", "center", "center"],
        position: "relative",
        overflow: "hidden",
      })}
    >
      {/* Animated cursor follower */}
      <motion.div
        css={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: gradients.primary,
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div
        css={mq({
          display: "flex",
          flexDirection: ["column"],
          alignItems: "center",
          justifyContent: "center",
          width: "85%",
          gap: ["36px", "64px", "120px"],
          zIndex: 1,
        })}
      >
        <div
          css={mq({
            display: "flex",
            flexDirection: ["column-reverse", "row", "row"],
            alignItems: "center",
            justifyContent: "center",
            gap: ["36px", "64px", "72px"],
          })}
        >
          <AnimatedSection direction="left">
            <div
              css={mq({
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: ["100%", "45%", "35%"],
              })}
            >
              <motion.p
                css={mq({
                  margin: 0,
                  fontSize: ["24px", "28px", FONT_400],
                  fontWeight: 400,
                  fontFamily: HEADING_FAMILY,
                  color: colors.gray[300],
                  marginBottom: "16px",
                })}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hey! 👋
              </motion.p>

              <motion.h1
                css={mq({
                  margin: 0,
                  fontSize: ["36px", "52px", "64px"],
                  fontFamily: HEADING_FAMILY,
                  color: colors.light,
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: "32px",
                })}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                I'm{" "}
                <span
                  css={{
                    background: gradients.primary,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    position: "relative",
                  }}
                >
                  Adi Kishore
                  <motion.div
                    css={{
                      position: "absolute",
                      bottom: -4,
                      left: 0,
                      width: "100%",
                      height: "3px",
                      background: gradients.primary,
                      borderRadius: "2px",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.div
                css={{
                  ...glassEffect,
                  padding: "24px",
                  marginBottom: "24px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p
                  css={mq({
                    margin: 0,
                    fontSize: ["14px", "16px", "18px"],
                    fontWeight: 300,
                    color: colors.gray[300],
                    fontFamily: PARAGRAPH_FAMILY,
                    lineHeight: "175%",
                  })}
                >
                  I'm a Junior Full Stack Developer and UI/UX Designer looking
                  to create world class products.
                  <br />
                  <br />
                  In the last 2 years, I have worked on a variety of problems
                  with a customer-centric mindset, forming strong foundations in{" "}
                  <span
                    css={{
                      color: colors.primary[400],
                      fontWeight: 700,
                      background: `linear-gradient(45deg, ${colors.primary[400]}, ${colors.primary[300]})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Full Stack Development
                  </span>
                  ,{" "}
                  <span
                    css={{
                      color: colors.accent[400],
                      fontWeight: 700,
                      background: `linear-gradient(45deg, ${colors.accent[400]}, ${colors.accent[300]})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    UI/UX Design
                  </span>{" "}
                  and{" "}
                  <span
                    css={{
                      color: "#10b981",
                      fontWeight: 700,
                      background: "linear-gradient(45deg, #10b981, #34d399)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    DevOps
                  </span>
                  .
                </p>
              </motion.div>

              <motion.div
                css={mq({
                  display: "flex",
                  flexDirection: ["column", "row", "row"],
                  gap: "16px",
                  alignItems: ["stretch", "center", "center"],
                })}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.button
                  css={{
                    background: gradients.primary,
                    border: "none",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    color: colors.light,
                    fontFamily: HEADING_FAMILY,
                    fontWeight: 600,
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow: shadows.lg,
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: shadows.glow,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const projectsSection = document.querySelector(
                      '[data-section="projects"]'
                    );
                    projectsSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View My Work
                </motion.button>

                <motion.button
                  css={{
                    background: "transparent",
                    border: `2px solid ${colors.gray[600]}`,
                    borderRadius: "12px",
                    padding: "12px 28px",
                    color: colors.light,
                    fontFamily: HEADING_FAMILY,
                    fontWeight: 600,
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: colors.primary[400],
                    color: colors.primary[400],
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.querySelector(
                      '[data-section="contact"]'
                    );
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div
              css={mq({
                position: "relative",
                width: ["216px", "360px", "476px"],
                height: ["216px", "360px", "476px"],
              })}
            >
              <motion.div
                css={{
                  position: "relative",
                  zIndex: 2,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src="/profile2.jpg"
                  css={mq({
                    width: ["216px", "360px", "476px"],
                    height: ["216px", "360px", "476px"],
                    objectFit: "cover",
                    objectPosition: "0% 10%",
                    borderRadius: "50%",
                    border: `3px solid ${colors.primary[400]}`,
                    boxShadow: shadows.xl,
                  })}
                />
              </motion.div>

              {/* Animated background rings */}
              <motion.div
                css={mq({
                  position: "absolute",
                  top: "-20px",
                  left: "-20px",
                  width: ["256px", "400px", "516px"],
                  height: ["256px", "400px", "516px"],
                  border: `2px solid ${colors.primary[400]}`,
                  borderRadius: "50%",
                  opacity: 0.3,
                  zIndex: 1,
                })}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                css={mq({
                  position: "absolute",
                  top: "-40px",
                  left: "-40px",
                  width: ["296px", "440px", "556px"],
                  height: ["296px", "440px", "556px"],
                  border: `1px solid ${colors.accent[400]}`,
                  borderRadius: "50%",
                  opacity: 0.2,
                  zIndex: 0,
                })}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={1}>
          <motion.div
            css={mq({
              display: ["none", "flex", "flex"],
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              bottom: ["180px", "90px", "120px"],
              gap: "12px",
              cursor: "pointer",
              padding: "16px 24px",
              background: glassEffect.background,
              backdropFilter: glassEffect.backdropFilter,
              border: glassEffect.border,
              borderRadius: "50px",
              transition: "all 0.3s ease",
            })}
            onClick={() => {
              window.scrollBy({ top: window.outerHeight, behavior: "smooth" });
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <p
              css={mq({
                margin: 0,
                fontFamily: PARAGRAPH_FAMILY,
                color: colors.light,
                fontWeight: 600,
                fontSize: ["16px", "18px", "20px"],
              })}
            >
              Explore My Journey
            </p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </header>
  );
};
