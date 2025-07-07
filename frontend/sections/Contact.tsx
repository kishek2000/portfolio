/** @jsxImportSource @emotion/react */

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { GapVertical } from "../components/GapVertical";
import {
  FONT_150,
  FONT_175,
  FONT_250,
  FONT_300,
  FONT_400,
  HEADING_FAMILY,
  PARAGRAPH_FAMILY,
} from "../styles/fonts";
import { mq } from "../styles/mq";
import { colors, gradients, shadows, glassEffect } from "../styles/theme";
import { AnimatedSection } from "../components/AnimatedSection";

export const Contact = () => {
  const socialLinks = [
    {
      url: "https://www.github.com/kishek2000/",
      color: colors.gray[600],
      label: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/adi-kishore/",
      color: "#0077b5",
      label: "LinkedIn",
    },
    {
      url: "https://soundcloud.com/adi-kishore/",
      color: "#ff5500",
      label: "SoundCloud",
    },
  ];

  return (
    <section
      data-section="contact"
      css={{
        width: "100%",
        minHeight: "60vh",
        color: colors.light,
        padding: "120px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Background gradient effect */}
      <div
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <AnimatedSection>
        <motion.div
          css={mq({
            ...glassEffect,
            padding: ["40px 24px", "60px 40px", "80px 60px"],
            borderRadius: "32px",
            textAlign: "center",
            maxWidth: "600px",
            width: "90%",
            position: "relative",
            zIndex: 1,
          })}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <motion.div
            css={{
              position: "absolute",
              top: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: gradients.primary,
              borderRadius: "2px",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.h1
            css={mq({
              margin: "0 0 24px 0",
              textAlign: "center",
              fontSize: ["32px", "42px", "48px"],
              fontFamily: HEADING_FAMILY,
              fontWeight: 800,
              color: colors.light,
              lineHeight: 1.2,
            })}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Work{" "}
            <span
              css={{
                background: gradients.primary,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Together
            </span>
          </motion.h1>

          <motion.p
            css={mq({
              fontWeight: 300,
              fontSize: ["16px", "18px", "20px"],
              margin: "0 0 32px 0",
              textAlign: "center",
              fontFamily: PARAGRAPH_FAMILY,
              color: colors.gray[300],
              lineHeight: 1.6,
            })}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have an exciting project in mind? I'd love to hear about it!
            <br />
            Reach out and let's create something amazing together.
          </motion.p>

          <motion.div
            css={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 24px",
              background: `${colors.primary[600]}20`,
              border: `2px solid ${colors.primary[400]}40`,
              borderRadius: "16px",
              marginBottom: "40px",
              transition: "all 0.3s ease",
            }}
            whileHover={{
              scale: 1.05,
              background: `${colors.primary[600]}30`,
              borderColor: colors.primary[400],
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div
              css={{
                width: "8px",
                height: "8px",
                background: colors.primary[400],
                borderRadius: "50%",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              css={{
                fontFamily: PARAGRAPH_FAMILY,
                fontSize: "16px",
                fontWeight: 600,
                color: colors.primary[300],
              }}
            >
              kishek12@gmail.com
            </span>
          </motion.div>

          <motion.div
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.url}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <SocialIcon
                  url={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    boxShadow: shadows.md,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Floating background elements */}
          <motion.div
            css={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "60px",
              height: "60px",
              background: `${colors.accent[400]}10`,
              borderRadius: "50%",
              zIndex: -1,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            css={{
              position: "absolute",
              bottom: "30px",
              left: "30px",
              width: "40px",
              height: "40px",
              background: `${colors.primary[400]}15`,
              borderRadius: "50%",
              zIndex: -1,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </AnimatedSection>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};
