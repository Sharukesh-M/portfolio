import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward } from 'react-icons/fa';

const Certifications = () => {
    const certs = [
        {
            title: "NPTEL - Python",
            issuer: "NPTEL / IIT",
            date: "2024",
            icon: FaCodeLevel
        },
        {
            title: "NPTEL - Internet of Things",
            issuer: "NPTEL / IIT",
            date: "2023",
            icon: FaNetworkWired
        },
        {
            title: "NPTEL - Java Programming",
            issuer: "NPTEL / IIT",
            date: "2023",
            icon: FaJava
        },
        {
            title: "NPTEL - Machine Learning",
            issuer: "NPTEL / IIT",
            date: "2024",
            icon: FaBrain
        },
        {
            title: "Infosys Springboard",
            issuer: "Infosys",
            date: "2023",
            icon: FaAward
        }
    ];

    // Helper icons since I cannot import everything dynamically
    function FaCodeLevel(props) { return <FaCertificate {...props} /> }
    function FaNetworkWired(props) { return <FaCertificate {...props} /> }
    function FaJava(props) { return <FaCertificate {...props} /> }
    function FaBrain(props) { return <FaCertificate {...props} /> }

    return (
        <section id="certifications" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    Certifications & <span className="text-primary">Awards</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-secondary/40 border border-gray-800 p-6 rounded-xl hover:border-primary/50 hover:bg-secondary/60 transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <cert.icon size={24} />
                                </div>
                                <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">{cert.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                            <p className="text-sm text-gray-400">{cert.issuer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
