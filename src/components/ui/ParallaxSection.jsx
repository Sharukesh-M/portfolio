import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const ParallaxSection = ({ children, distance = 50, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, distance);

    return (
        <div ref={ref} className={`${className} relative`}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
};

export default ParallaxSection;
