import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Generative AI Intern",
            company: "Prodigy InfoTech",
            duration: "1 Month",
            description: "Worked on advanced GAN models and LLM fine-tuning tasks, contributing to ongoing R&D projects."
        },
        {
            role: "IoT Data Analyst",
            company: "NIELIT",
            duration: "6 Months",
            description: "Analyzed sensor data pipelines, optimized data collection protocols, and visualized IoT metrics for actionable insights."
        },
        {
            role: "Full Stack Development Intern",
            company: "Tech Solutions",
            duration: "3 Months",
            description: "Built scalable web applications using the MERN stack, optimizing frontend performance and backend API efficiency."
        }
    ];

    return (
        <section id="experience" className="min-h-screen py-20 relative z-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    Experience & <span className="text-[#00f6ff]">Journey</span>
                </h2>

                <div className="space-y-12 relative border-l border-[#2A0E61] ml-4 md:ml-0 pl-8 md:pl-0">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative md:ml-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-[#030014] border-2 border-[#00f6ff] shadow-[0_0_10px_#00f6ff]" />

                            <div className="bg-[#111] p-6 rounded-xl border border-[#2A0E61] hover:border-[#7042f8] transition-colors">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-[#7042f8] font-medium">{exp.company}</h4>
                                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">{exp.duration}</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
