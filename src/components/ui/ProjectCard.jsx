import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, link, github }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#2A0E61] group hover:border-[#00f6ff]/50 transition-colors duration-300"
        >
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f6ff] transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 min-h-[60px]">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md border border-[#2A0E61] text-gray-300 bg-[#2A0E61]/20">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                    {link && (
                        <a href={link} className="flex items-center gap-2 text-sm text-white hover:text-[#00f6ff] transition-colors">
                            <FaExternalLinkAlt size={12} /> Demo
                        </a>
                    )}
                    {github && (
                        <a href={github} className="flex items-center gap-2 text-sm text-white hover:text-[#00f6ff] transition-colors">
                            <FaGithub size={14} /> Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
