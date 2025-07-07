/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GapVertical } from "../components/GapVertical";
import { HEADING_FAMILY, PARAGRAPH_FAMILY } from "../styles/fonts";
import { mq } from "../styles/mq";
import { PlaceInformation } from "./PlaceInformation";
import { colors, gradients, shadows, glassEffect } from "../styles/theme";
import { AnimatedSection } from "../components/AnimatedSection";

const places = [
  "Sadafal Education",
  "Optus",
  "Accenture & Autism Awareness",
  "Vihangam Yoga",
  "Evergrowing",
  "Kumbh Sukrit",
];

const volunteering = ["Vihangam Yoga", "Evergrowing", "Kumbh Sukrit"];

export const Career = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      css={mq({
        width: "100%",
        display: "grid",
        gridTemplateColumns: "80%",
        justifyContent: "center",
        height: "100%",
        padding: "120px 0px",
        position: "relative",
      })}
    >
      <div
        css={{
          width: "100%",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
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
            Career Journey
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
              Explore my professional journey across industry roles and
              meaningful volunteer contributions that have shaped my expertise.
            </p>
          </div>
        </AnimatedSection>

        <div
          css={mq({
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            position: "relative",
          })}
        >
          {/* Legend */}
          <AnimatedSection delay={0.3}>
            <div
              css={mq({
                display: "flex",
                flexDirection: ["row", "row", "row"],
                justifyContent: "center",
                gap: "32px",
                marginBottom: "32px",
              })}
            >
              <LegendItem
                color={colors.primary[400]}
                label="Industry"
                gradient={gradients.primary}
              />
              <LegendItem
                color="#ea9802"
                label="Volunteering"
                gradient="linear-gradient(135deg, #ea9802 0%, #ffc04b 100%)"
              />
            </div>
          </AnimatedSection>

          {/* Career Timeline/Stepper */}
          <AnimatedSection delay={0.4}>
            <div
              css={mq({
                display: "flex",
                justifyContent: "center",
                marginBottom: "48px",
              })}
            >
              <motion.div
                css={mq({
                  ...glassEffect,
                  padding: ["16px", "24px", "32px"],
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: ["12px", "16px", "20px"],
                  flexWrap: ["wrap", "nowrap", "nowrap"],
                  justifyContent: "center",
                })}
                layout
              >
                {places.map((place, index) => (
                  <motion.div
                    key={index}
                    css={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <motion.div
                      css={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        position: "relative",
                        background:
                          index <= active
                            ? volunteering.includes(places[index])
                              ? "#ea9802"
                              : colors.primary[400]
                            : colors.gray[600],
                        transition: "all 0.3s ease",
                        boxShadow: index === active ? shadows.glow : "none",
                      }}
                      onClick={() => setActive(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        scale: index === active ? 1.3 : 1,
                      }}
                    />
                    {index < places.length - 1 && (
                      <motion.div
                        css={{
                          width: ["16px", "20px", "24px"],
                          height: "2px",
                          background:
                            index < active
                              ? volunteering.includes(places[index])
                                ? "#ea9802"
                                : colors.primary[400]
                              : colors.gray[600],
                          borderRadius: "1px",
                          transition: "all 0.3s ease",
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: index < active ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Main Content Area */}
          <AnimatedSection delay={0.5}>
            <div
              css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                minHeight: "500px",
                overflow: "hidden",
              }}
            >
              <AnimatePresence>
                <motion.div
                  key={active}
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <PlaceInformation place={places[active]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* Navigation Controls */}
          <AnimatedSection delay={0.6}>
            <div
              css={mq({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "800px",
                margin: "0 auto",
                padding: "0 20px",
              })}
            >
              <motion.button
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  background:
                    active > 0 ? glassEffect.background : "transparent",
                  backdropFilter:
                    active > 0 ? glassEffect.backdropFilter : "none",
                  border:
                    active > 0
                      ? glassEffect.border
                      : `1px solid ${colors.gray[700]}`,
                  borderRadius: "12px",
                  color: active > 0 ? colors.light : colors.gray[600],
                  fontFamily: PARAGRAPH_FAMILY,
                  fontWeight: 500,
                  cursor: active > 0 ? "pointer" : "not-allowed",
                  transition: "all 0.3s ease",
                  minWidth: "120px",
                }}
                onClick={() => active > 0 && setActive(active - 1)}
                whileHover={
                  active > 0
                    ? { scale: 1.05, backgroundColor: `${colors.gray[800]}50` }
                    : {}
                }
                whileTap={active > 0 ? { scale: 0.95 } : {}}
                disabled={active === 0}
              >
                {active > 0 && (
                  <>
                    <span css={{ fontSize: "16px" }}>←</span>
                    <span css={{ fontSize: "14px" }}>Previous</span>
                  </>
                )}
              </motion.button>

              <motion.div
                css={{
                  padding: "8px 16px",
                  background: glassEffect.background,
                  backdropFilter: glassEffect.backdropFilter,
                  border: glassEffect.border,
                  borderRadius: "8px",
                  color: colors.gray[300],
                  fontFamily: PARAGRAPH_FAMILY,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {active + 1} of {places.length}
              </motion.div>

              <motion.button
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  background:
                    active < places.length - 1
                      ? glassEffect.background
                      : "transparent",
                  backdropFilter:
                    active < places.length - 1
                      ? glassEffect.backdropFilter
                      : "none",
                  border:
                    active < places.length - 1
                      ? glassEffect.border
                      : `1px solid ${colors.gray[700]}`,
                  borderRadius: "12px",
                  color:
                    active < places.length - 1
                      ? colors.light
                      : colors.gray[600],
                  fontFamily: PARAGRAPH_FAMILY,
                  fontWeight: 500,
                  cursor:
                    active < places.length - 1 ? "pointer" : "not-allowed",
                  transition: "all 0.3s ease",
                  minWidth: "120px",
                  justifyContent: "flex-end",
                }}
                onClick={() =>
                  active < places.length - 1 && setActive(active + 1)
                }
                whileHover={
                  active < places.length - 1
                    ? { scale: 1.05, backgroundColor: `${colors.gray[800]}50` }
                    : {}
                }
                whileTap={active < places.length - 1 ? { scale: 0.95 } : {}}
                disabled={active === places.length - 1}
              >
                {active < places.length - 1 && (
                  <>
                    <span css={{ fontSize: "14px" }}>Next</span>
                    <span css={{ fontSize: "16px" }}>→</span>
                  </>
                )}
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const LegendItem = ({
  color,
  label,
  gradient,
}: {
  color: string;
  label: string;
  gradient: string;
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
        background: gradient,
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
