import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Services Sidebar (Left - similar to image "Website Design, etc icon list") */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 space-y-8"
                    >
                        <div className="bg-secondary p-6 rounded-xl border-l-4 border-primary shadow-lg group hover:bg-secondary/80 transition-all cursor-default">
                            <div className="text-primary mb-3 text-2xl"><FaCode /></div>
                            <h4 className="font-bold text-white text-lg">AI Integration</h4>
                            <p className="text-sm text-gray-400 mt-1">Implementing intelligent models into web apps.</p>
                        </div>
                        <div className="bg-secondary p-6 rounded-xl border-l-4 border-primary shadow-lg group hover:bg-secondary/80 transition-all cursor-default">
                            <div className="text-primary mb-3 text-2xl"><FaServer /></div>
                            <h4 className="font-bold text-white text-lg">Full Stack Dev</h4>
                            <p className="text-sm text-gray-400 mt-1">Robust MERN stack architectures.</p>
                        </div>
                        <div className="bg-secondary p-6 rounded-xl border-l-4 border-primary shadow-lg group hover:bg-secondary/80 transition-all cursor-default">
                            <div className="text-primary mb-3 text-2xl"><FaDatabase /></div>
                            <h4 className="font-bold text-white text-lg">Data Science</h4>
                            <p className="text-sm text-gray-400 mt-1">Analytics and Predictive modeling.</p>
                        </div>
                    </motion.div>

                    {/* Main Content (Right/Center) */}
                    <motion.div
                        className="lg:col-span-9"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                            I am a 3rd-year AI & Data Science student at Prathyusha Engineering College with a passion for building intelligent systems.
                            My expertise bridges the gap between complex AI models and user-friendly web interfaces.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-lg mb-10">
                            With experience in IoT data analysis and full-stack development, I deliver solutions that are not just functional, but also scalable and impactful.
                            Currently exploring Generative AI and advanced NLP.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-secondary/50 p-4 rounded-lg text-center border border-gray-800">
                                <h3 className="text-3xl font-bold text-primary mb-1">10+</h3>
                                <p className="text-sm text-gray-400">Projects Done</p>
                            </div>
                            <div className="bg-secondary/50 p-4 rounded-lg text-center border border-gray-800">
                                <h3 className="text-3xl font-bold text-primary mb-1">2+</h3>
                                <p className="text-sm text-gray-400">Internships</p>
                            </div>
                            <div className="bg-secondary/50 p-4 rounded-lg text-center border border-gray-800">
                                <h3 className="text-3xl font-bold text-primary mb-1">5+</h3>
                                <p className="text-sm text-gray-400">Certifications</p>
                            </div>
                            <div className="bg-secondary/50 p-4 rounded-lg text-center border border-gray-800">
                                <h3 className="text-3xl font-bold text-primary mb-1">3.5</h3>
                                <p className="text-sm text-gray-400">Years Coding</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
