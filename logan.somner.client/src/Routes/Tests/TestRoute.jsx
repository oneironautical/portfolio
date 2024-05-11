
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
                    initialState: { opacity: 0, y: 25 }, endState: { opacity: 1, y: 0 }
                }}
                initial='initialState'
                animate='endState'
                transition={{duration: 1, delay: .75, ease: 'easeIn'}}
                className={styles.testContainer}  >

                <p className=''>
                    Hello.
                </p>


                <p className='my-8'>
                    My name is <span className={styles.censored }>Logan</span>. I am a Sr. software engineer who has spent the last decade specializing in building custom enterprise
                    software solutions within the Microsoft ecosphere. While the bulk of my past
                    work has been server-side and corporate serving, I have recently started to focus more on the subjective experiential side of the
                    this craft. Or in other words, I have recently started practicing UX design and UI implimentation with more artistic notions in mind.
                </p>
                <p className='my-8'>
                    This site is an exploration of various ideas built with the intention
                    of honing my client-side chops. Please,
                    have a look around. The experiments range from clean and corporate to weird and annoying.  
                </p>

                <p className='my-8'>
                    While I am currently contentedly employed in a full time capacity, I am always open to hearing of opportunities
                    to build unique and beautiful tools, or to volunteer my skills to causes that I find worth while. Feel 
                    free to reach out.
                </p>
              
            </motion.div>
            
        </>
    );
}

export default TestRoute;