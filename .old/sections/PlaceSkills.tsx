/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { motion } from "framer-motion";
import { GapHorizontal } from "../components/GapHorizontal";
import { GapVertical } from "../components/GapVertical";
import { FONT_100, PARAGRAPH_FAMILY, HEADING_FAMILY } from "../styles/fonts";
import { mq } from "../styles/mq";
import { SkillsModel } from "../store/placesInfo";
import { colors, gradients, shadows, glassEffect } from "../styles/theme";

interface PlaceSkillsProps {
  skills: SkillsModel;
}

export const PlaceSkills: FC<PlaceSkillsProps> = ({ skills }) => {
  return (
    <motion.div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        fontFamily: PARAGRAPH_FAMILY,
        minWidth: "200px",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h4
        css={mq({
          fontSize: ["12px", "14px", "16px"],
          margin: "0 0 16px 0",
          fontWeight: 700,
          textTransform: "uppercase",
          color: colors.primary[300],
          letterSpacing: "1px",
          fontFamily: HEADING_FAMILY,
        })}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {skills.title}
      </motion.h4>

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        }}
      >
        {skills.technologies.map((tech, index) => (
          <motion.div
            key={tech.title}
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "12px",
              padding: "8px 12px",
              background: `${colors.gray[800]}60`,
              border: `1px solid ${colors.gray[700]}80`,
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}
            whileHover={{
              background: `${colors.gray[700]}80`,
              borderColor: colors.primary[400],
              scale: 1.02,
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div
              css={{
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `${colors.gray[600]}40`,
                borderRadius: "8px",
                padding: "4px",
              }}
            >
              <img
                css={mq({
                  width: ["20px", "20px", "24px"],
                  height: ["20px", "20px", "24px"],
                  objectFit: "contain",
                })}
                loading="lazy"
                src={tech.icon}
              />
            </div>

            <span
              css={mq({
                fontSize: ["12px", "14px", "14px"],
                margin: 0,
                fontWeight: 500,
                color: colors.gray[200],
                fontFamily: PARAGRAPH_FAMILY,
                flex: 1,
              })}
            >
              {tech.title}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
