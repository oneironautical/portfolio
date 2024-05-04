
import styles from './TestRoute.module.css';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useTransform, useSpring } from 'framer-motion';


function TestRoute() {
    const ref = useRef(null);
    const SPRING_OPTIONS = {
        mass: 1,
        stiffness: 200,
        damping: 15,
    };
    const divLocation = useSpring(0, SPRING_OPTIONS)


    return (
        <>
            <motion.div
                ref={ref}
                variants={{
                    initialState: { opacity: 0 }, endState: { opacity: 1 }
                }}
                initial='initialState'
                animate='endState'
                transition={{duration: 3, delay: 1, ease: 'easeIn'}}
                className={styles.testContainer}  >

                <p className='my-3'>
                    Hello.
                </p>
                <p className='my-3'>
                    My name is Logan. I am a Sr. software engineer who has specialized in enterprise
                    software solutions within the Microsoft ecosphere for the last decade. I am experienced
                    in stuff and I know things about writing filler content because I do it alot because I
                    really hate writing about myself and I'll probably pay someone else to write the content
                    for this site. Thanks bro. I love you bro. 
                </p>
            </motion.div>
            
        </>
    );
}

export default TestRoute;