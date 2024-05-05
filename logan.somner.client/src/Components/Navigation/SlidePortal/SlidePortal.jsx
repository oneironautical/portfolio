import React ,{ useState } from "react";
import { AnimatePresence, motion } from "framer-motion";




const SlidePortal = (props) => {
    return (
        <>
            <AnimatePresence>{props.active && <LinksOverlay active={props.active} />}</AnimatePresence>
        </>
    );
};

const LinksOverlay = (props) => {
    return (
        <motion.div
            animate={props.active ? "open" : "closed"}
            variants={UNDERLAY_VARIANTS}
            style={{ bottom: 30, left: 30 }}
            className="fixed z-30 rounded-sm bg-white"
        >
        </motion.div>
    );
};

const UNDERLAY_VARIANTS = {
    open: {
        width: "calc(100% - 60px)",
        height: "calc(100vh - 60px)",
        transition: {type: "spring", mass: 3, stiffness: 400, damping: 60 },
    },
    closed: {
        width: "0px",
        height: "0px",
        transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
    },
};

export { SlidePortal };