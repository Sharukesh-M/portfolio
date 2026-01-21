import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import ParallaxSection from '../ui/ParallaxSection';
import bgImage from '../../assets/parallax-bg.jpg';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={ref} id="home" className="h-screen relative overflow-hidden flex items-center justify-center">

            {/* Parallax Background Image */}
            <motion.div
                style={{ y: backgroundY, backgroundImage: `url(${bgImage})` }}
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40 z-0"
            />

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent z-0" />

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 px-4">

                {/* Text Content */}
                <motion.div style={{ y: textY }} className="order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-2">
                            Hello...
                        </h3>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
                            I'm <span className="text-white">Sharukesh</span>
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-400 mb-8">
                            AI Innovator & <br />
                            <span className="text-primary">Full Stack Developer</span>
                        </h2>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-[0_0_20px_rgba(255,77,77,0.4)] hover:shadow-[0_0_30px_rgba(255,77,77,0.6)] hover:bg-red-500 transition-all duration-300"
                            >
                                Hire me
                            </a>
                            <a
                                href="/resume.pdf"
                                className="px-8 py-3 bg-transparent border border-gray-600 text-white font-semibold rounded-md hover:border-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                            >
                                My Resume <FaFileDownload />
                            </a>
                        </div>

                        <div className="mt-12 flex gap-6 text-gray-400">
                            <a href="#" className="hover:text-primary transition-colors"><FaGithub size={24} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><FaLinkedin size={24} /></a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Avatar/3D Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center relative"
                >
                    {/* Glassmorphism Card for Avatar */}
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="text-6xl">👨‍💻</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
