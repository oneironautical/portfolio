
import { AnimatePresence, motion,useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from './SideStaggerNav.module.css'
import { Link } from 'react-router-dom';

var NUM_LINES = 128;

var navItems = [
    { position: 1, title: "/home" },
    { position: 40, title: "/client" },
    { position: 72, title: "/server" },
    { position: 104, title: "/cv" },
];

const SideStaggerNav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseY = useMotionValue(Infinity);
    const [animateFirstLine, setAnimateFirstLine] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateFirstLine(true);
        }, 5000); // 5000 milliseconds = 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.nav
            variants={{
                initialState: { opacity: 0 }, endState: { opacity: 1 }
            }}
            initial='initialState'
            animate='endState'
            transition={{ duration: 3, ease: 'easeIn' }}

            onMouseMove={(e) => {
                mouseY.set(e.clientY);
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                mouseY.set(Infinity);
                setIsHovered(false);

            }}
            className="naviBar fixed right-0 top-0 flex h-screen flex-col z-10 items-end justify-between py-4 pl-8"
        >
            {Array.from(Array(NUM_LINES).keys()).map((i) => {
                const linkContent = navItems.find((item) => item.position === i + 1);
                var returnComponent;
                if (i + 1 == 1) {
                    returnComponent = <LinkLine
                        title={linkContent?.title}
                        isHovered={isHovered}
                        mouseY={mouseY}

                        key={i}
                    />

                    return returnComponent;

                    
                } else {
                    
                    returnComponent =
                        <LinkLine
                            title={linkContent?.title}
                            isHovered={isHovered}
                            mouseY={mouseY}
                            key={i}
                        />
                    
                    return returnComponent;
                }
                
            })}
        </motion.nav>
    );
};

const SPRING_OPTIONS = {
    mass: 1,
    stiffness: 200,
    damping: 15,
};

const LinkLine = ({ mouseY, isHovered, title, animate }) => {
    const ref = useRef(null);
    const distance = useTransform(mouseY, (val) => {
        const bounds = ref.current?.getBoundingClientRect();

        return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
    });

    // Styles for non-link lines
    const lineWidthRaw = useTransform(distance, [-80, 0, 80], [15, 500, 15]);
    const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);

    // Styles for link lines
    const linkWidth = useSpring(25, SPRING_OPTIONS);
    
    const linkColor = useSpring('#014040', SPRING_OPTIONS);

    useEffect(() => {
        if (animate) {
            linkWidth.set(100);
            linkColor.set('#00FF66');

            // Return to original length and color after 2 seconds
            setTimeout(() => {
                linkWidth.set(25);
                linkColor.set('#014040');
            }, 2000);
        } else if (isHovered) {
            linkWidth.set(100);
        } else {
            linkWidth.set(25);
        }
    }, [isHovered]);

    if (title) {
        return (
            <a href="cock">
                <motion.div
                    ref={ref}
                    
                    className= " group relative bg-[#014040] transition-colors hover:bg-[#00FF66] link"
                    style={{width: linkWidth, height: 2 }}
                >
                    <AnimatePresence>
                        {isHovered && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className=" absolute left-0 top-0 z-15 w-full pt-2 font-bold z-10  text-[#014040] transition-colors group-hover:text-[#0896A6]"
                            >
                                {title}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>
            </a>
        );
    } else {
        return (
            <motion.div
                ref={ref}
                className=" z-0 relative bg-[#014040] hover:bg-[red] "
                style={{ width: lineWidth, height: 1 }}
            />
        );
    }
};

export default SideStaggerNav;