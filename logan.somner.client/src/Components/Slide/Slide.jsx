import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from './Slide.module.css'; 

//something is wrong because I'm not using AnimatePresence?
// At least, for sure, something is wrong. 
function Slide(props) {
    return (
        <AnimatePresence>
        <motion.div className='fixed h-full w-full z-20'
            initial={{ opacity: 0 }}
            animate={props.active ? "open" : "closed"}
            variants={UNDERLAY_VARIANTS}
            style={{ top: 0, right: 0 }}
        >
            <div className={styles.backdrop }>
                <div className={styles.slide} >
                        {props.active && <motion.div
                            onClick={props.exit}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: .5,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                },
                            }}
                            exit={{
                                opacity: 0, y: -8 }}
                            className={styles.exit }
                        >
                            -exit-
                        </motion.div>}
                        {props.active && <motion.div
                            className={styles.slideContent}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: .75,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                } ,
                            }}
                            exit={{
                                opacity: 0, y: 10,
                                transition: {
                                    duration: .1,
                                    ease: "easeInOut",
                                }}

                            }
                        >
                            heloo dudesd look at the text bros

                        </motion.div>}
                </div>
            </div>
            </motion.div>
        </AnimatePresence>
    );
}

const UNDERLAY_VARIANTS = {
    open: {
        width: "100%",
        height: "100%",
        opacity: 1,
        transition: { type: "spring", mass: 3, stiffness: 400, damping: 57, ease:'easeInOut'  },
    },
    closed: {
        width: "0px",
        height: "0px",
        opacity: 0,
        transition: { type: "spring", mass: 3, stiffness: 400, damping: 57, ease: 'easeInOut', delay: .75 },
    },
};

const TEXT_VARIANTS = {
    open: {
        opacity: 0, y: 10,
        transition: { type: "spring", mass: 3, stiffness: 400, damping: 57, ease: 'easeInOut' }
    },
    closed: {
        opacity: 0, y: 10,
        transition: { type: "spring", mass: 3, stiffness: 400, damping: 57, ease: 'easeInOut' }
    }
}

export default Slide;