import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "AI Doctor & Learning Platform",
            description: "A dual-purpose platform revolutionizing healthcare diagnosis and personalized education using advanced AI models.",
            tags: ["Python", "Machine Learning", "React", "Node.js"],
            link: "#",
            github: "#"
        },
        {
            title: "AI Agent for Business Analytics",
            description: "Intelligent agent system providing real-time data driven insights and ROI analysis for businesses.",
            tags: ["NLP", "Data Analytics", "React", "LLMs"],
            link: "#",
            github: "#"
        },
        {
            title: "Stock Market Prediction",
            description: "Time-series forecasting model for predicting stock trends with high accuracy.",
            tags: ["Python", "LSTM", "Pandas", "Evaluation"],
            link: "#",
            github: "#"
        },
        {
            title: "Smart Student Attendance (SIH)",
            description: "Prototype for automated attendance tracking in rural schools to ensure educational consistency.",
            tags: ["IoT", "Computer Vision", "Web Dashboard"],
            link: "#",
            github: "#"
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-20 relative z-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    Featured <span className="text-[#00f6ff]">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
