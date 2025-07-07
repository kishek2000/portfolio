/** @jsxImportSource @emotion/react */
import { FC, Fragment } from "react";
import { motion } from "framer-motion";
import { GapVertical } from "../components/GapVertical";
import {
  FONT_100,
  FONT_150,
  FONT_175,
  FONT_200,
  FONT_250,
  PARAGRAPH_FAMILY,
  HEADING_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { placesInfo } from "../store/placesInfo";
import { PlaceSkills } from "./PlaceSkills";
import { GapHorizontal } from "../components/GapHorizontal";
import { colors, gradients, shadows, glassEffect } from "../styles/theme";

interface PlaceInformationProps {
  place: string;
  isIndustry?: boolean;
}

const industryGradient = gradients.primary;
const volunteeringGradient =
  "linear-gradient(135deg, #ea9802 0%, #ffc04b 100%)";

export const PlaceInformation: FC<PlaceInformationProps> = ({
  place,
  isIndustry,
}) => {
  const information = placesInfo.filter((placeInfo) => {
    return placeInfo.place === place;
  });

  if (information.length > 0) {
    const isVolunteering = information[0].role.includes("Volunteer");
    const cardGradient = isVolunteering
      ? volunteeringGradient
      : industryGradient;
    const accentColor = isVolunteering ? "#ea9802" : colors.primary[400];

    return (
      <motion.div
        css={mq({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
          width: ["90%", "700px", "800px"],
          minHeight: ["500px", "550px", "600px"],
          ...glassEffect,
          borderRadius: "24px",
          padding: ["32px", "48px", "64px"],
          fontFamily: PARAGRAPH_FAMILY,
          position: "relative",
          overflow: "hidden",
        })}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Gradient accent border */}
        <motion.div
          css={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: cardGradient,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Background pattern */}
        <div
          css={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, ${accentColor}15 0%, transparent 70%)`,
            borderRadius: "50%",
            zIndex: -1,
          }}
        />

        <motion.div
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <span
              css={mq({
                color: colors.gray[400],
                fontWeight: 500,
                fontSize: ["14px", "16px", "18px"],
                fontFamily: PARAGRAPH_FAMILY,
              })}
            >
              {information[0].place}
            </span>

            <motion.div
              css={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginLeft: "16px",
                padding: "4px 12px",
                background: isVolunteering
                  ? `${accentColor}20`
                  : `${colors.primary[400]}20`,
                border: `1px solid ${accentColor}40`,
                borderRadius: "12px",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                css={{
                  width: "8px",
                  height: "8px",
                  background: accentColor,
                  borderRadius: "50%",
                }}
              />
              <span
                css={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: accentColor,
                  fontFamily: PARAGRAPH_FAMILY,
                }}
              >
                {isVolunteering ? "Volunteering" : "Industry"}
              </span>
            </motion.div>
          </div>

          <span
            css={{
              color: colors.gray[500],
              fontWeight: 500,
              fontSize: "14px",
              fontFamily: PARAGRAPH_FAMILY,
            }}
          >
            {information[0].timePeriod}
          </span>
        </motion.div>

        <motion.h1
          css={mq({
            color: colors.light,
            fontSize: ["28px", "32px", "40px"],
            fontWeight: 700,
            margin: "0 0 24px 0",
            fontFamily: HEADING_FAMILY,
            lineHeight: 1.2,
            background: cardGradient,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {information[0].role}
        </motion.h1>

        <motion.p
          css={mq({
            margin: "0 0 32px 0",
            fontWeight: 400,
            lineHeight: "175%",
            color: colors.gray[300],
            fontFamily: PARAGRAPH_FAMILY,
            fontSize: ["14px", "16px", "18px"],
          })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {information[0].desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3
            css={mq({
              fontSize: ["16px", "18px", "20px"],
              margin: "0 0 20px 0",
              fontWeight: 700,
              color: colors.light,
              fontFamily: HEADING_FAMILY,
            })}
          >
            Skills & Technologies
          </h3>

          <div
            css={mq({
              display: "flex",
              width: "100%",
              alignItems: "flex-start",
              flexDirection: ["column", "row", "row"],
              gap: "24px",
            })}
          >
            {information[0].skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <PlaceSkills skills={skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          css={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            background: `${accentColor}10`,
            borderRadius: "50%",
            zIndex: -1,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  }
  return null;
};
