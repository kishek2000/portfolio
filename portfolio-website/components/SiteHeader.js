/** @jsx jsx */
import { jsx } from "@emotion/core";

import {
  FONT_150,
  FONT_400,
  FONT_300,
  FONT_100,
  FONT_200,
  FONT_500,
} from "../styles/fonts";
import { computeGridSize, maxWidth } from "../styles/grid";
import { mq } from "../styles/mq";
import { GapHorizontal } from "./GapHorizontal";
import { GapVertical } from "./GapVertical";
import { AnimatePresence, motion } from "framer-motion";

export function SiteHeader() {
  return (
    <AnimatePresence>
      <motion.div
        css={mq({
          display: "flex",
          width: "95%",
          maxWidth: "95vw",
          height: "100vh",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: ["column", "row"],
        })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src="/folio-image.png"
          css={mq({
            maxWidth: [
              computeGridSize(100),
              computeGridSize(100),
              computeGridSize(120),
            ],
            width: ["45%", "30%"],
          })}
        />
        <GapHorizontal css={mq({ display: ["none", "flex"] })} times={12} />
        <GapVertical css={mq({ display: ["flex", "none"] })} times={8} />
        <div
          css={mq({
            display: "flex",
            flexDirection: "column",
            maxWidth: [computeGridSize(60), "none"],
          })}
        >
          <p
            css={mq({
              fontSize: [FONT_300, FONT_400, FONT_500],
              fontFamily: "Work Sans",
              fontWeight: "bold",
              letterSpacing: ["3px", "5px"],
              color: "#DCE6FF",
              margin: 0,
              alignSelf: ["center", ""],
              width: ["", "95%"],
              whiteSpace: ["", "", "nowrap"],
            })}
          >
            Hello, I'm <br />
            Adi Kishore.
          </p>
          <div
            css={mq({ marginBottom: [computeGridSize(3), computeGridSize(6)] })}
          />
          <p
            css={mq({
              fontFamily: "Rubik",
              fontSize: [FONT_100, FONT_150, FONT_200],
              color: "white",
              margin: 0,
              alignSelf: ["center", ""],
              maxWidth: ["", computeGridSize(120), computeGridSize(180)],
              width: ["", "95%"],
            })}
          >
            I'm a Junior Developer and UI Designer looking to make a genuine
            impact in the world!
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
