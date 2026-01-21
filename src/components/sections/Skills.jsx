import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillsData = [
        { category: "Languages", items: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"] },
        { category: "Web Development", items: ["React.js", "Node.js", "Express", "MySQL", "Full Stack Architecture"] },
        { category: "AI & Data Science", items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Prompt Engineering"] },
        { category: "Tools & Analytics", items: ["PowerBI", "MS Excel", "Big Data Analytics", "Statistical Modeling"] },
        { category: "Soft Skills", items: ["Communication", "Problem Solving", "Team Collaboration", "Project Management"] },
    ];

    return (
        <section id="skills" className="min-h-screen py-20 relative z-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00f6ff]"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#030014]/50 border border-[#2A0E61] p-6 rounded-xl hover:border-[#00f6ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(42,14,97,0.5)]"
                        >
                            <h3 className="text-xl font-semibold text-[#00f6ff] mb-4 border-b border-[#2A0E61] pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
