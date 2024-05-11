import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from './SlidePortal.module.css'


const SlidePortal = (props) => {
    return (
        <div className='border-solid border-1'>
            <AnimatePresence>
                {props.active && <LinksOverlay active={props.active} />}
                
                
            </AnimatePresence>
            {/*<DesignSlide />*/}
        </div>
    );
};

const DesignSlide = () => {
    return (
        <div className={styles.designslide}>
            <motion.div
                
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.5 ,
                        duration: 0.5,
                        ease: "easeInOut",
                    },
                }}
                className={styles.exit}>
                -exit-
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 0.5,
                        duration: 0.5,
                        ease: "easeInOut",
                    },
                }}
                className={styles.designContent}>
                <span className={styles.blueHighlight}>E</span>ventually by scrolling down you will find a collection of selected UI design works. When you click on
                one of them you will get a live preview.  I can't decide yet if this palette is working for me or not. I think we need a yellow.

                But maybe it's too much.<br /><br />

                The exit button doesn't work.
                <br /><br />
                <span className={styles.lavenderHighlight }>Sorry.</span> 
                
            </motion.div>
        </div>
    );
}


const LinksOverlay = (props) => {
    return (
        <motion.div
            animate={props.active ? "open" : "closed"}
            variants={UNDERLAY_VARIANTS}
            style={{ top: 30, right: 30 }}
            className="fixed z-30 rounded-sm bg-black "
        >
            <DesignSlide/>
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