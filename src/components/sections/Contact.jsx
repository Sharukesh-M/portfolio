import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            // In production: fetch('/api/contact', { ... })
        }, 1500);
    };

    return (
        <section id="contact" className="min-h-screen py-20 relative z-20 flex items-center justify-center">
            <div className="max-w-4xl w-full px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-[#030014]/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-[#2A0E61] shadow-[0_0_50px_rgba(42,14,97,0.5)]"
                >
                    <h2 className="text-4xl font-bold text-center mb-8 text-white">
                        Get In <span className="text-[#00f6ff]">Touch</span>
                    </h2>
                    <p className="text-center text-gray-400 mb-12">
                        Interested in collaborating on AI or Web Development projects? Let's connect.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-[#1A1A2E] border border-[#2A0E61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f6ff] focus:ring-1 focus:ring-[#00f6ff] transition-all"
                                    placeholder="Sharukesh"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-[#1A1A2E] border border-[#2A0E61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f6ff] focus:ring-1 focus:ring-[#00f6ff] transition-all"
                                    placeholder="hello@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Message</label>
                            <textarea
                                rows="4"
                                required
                                className="w-full bg-[#1A1A2E] border border-[#2A0E61] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f6ff] focus:ring-1 focus:ring-[#00f6ff] transition-all"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus === 'sending' || formStatus === 'success'}
                            className="w-full bg-gradient-to-r from-[#2A0E61] to-[#7042f8] text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(112,66,248,0.5)] transition-all duration-300 disabled:opacity-50"
                        >
                            {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
