import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



function ATerribleThing (props){

    return (
        <>
            
            <AnimatePresence>{props.active && <LinksOverlay />}</AnimatePresence>
        </>
    );
}

const LinksOverlay = () => {
    return (
        <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
            <LinksContainer />
            
        </nav>
    );
};

const LinksContainer = () => {
    return (
        <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
            {LINKS.map((l, idx) => {
                return (
                    <NavLink key={l.title} href={l.href} idx={idx}>
                        {l.title}
                    </NavLink>
                );
            })}
        </motion.div>
    );
};

const NavLink = ({ children, href, idx }) => {
    return (
        <motion.a
            initial={{ opacity: 0, y: -8 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.75 + idx * 0.125,
                    duration: 0.5,
                    ease: "easeInOut",
                },
            }}
            exit={{ opacity: 0, y: -8 }}
            href={href}
            className="block text-5xl font-semibold text-violet-400 transition-colors hover:text-violet-50 md:text-7xl"
        >
            {children}.
        </motion.a>
    );
};


const LINKS = [
    {
        title: "home",
        href: "#",
    },
    {
        title: "features",
        href: "#",
    },
    {
        title: "blog",
        href: "#",
    },
    {
        title: "careers",
        href: "#",
    },
];



const UNDERLAY_VARIANTS = {
    open: {
        width: "calc(100% - 32px)",
        height: "calc(100vh - 32px)",
        transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
    },
    closed: {
        width: "80px",
        height: "80px",
        transition: {
            delay: 0.75,
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
        },
    },
};

const HAMBURGER_VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)",
        },
    },
};

export default ATerribleThing