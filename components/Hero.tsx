"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-4">
                        Hi, I&apos;m Mathuja
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        AI Engineer
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Machine learning and deep learning practitioner focused on building robust ML systems.
                        I work on model development, preprocessing biomedical time-series (EEG/ECG), and end-to-end ML pipelines.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all flex items-center gap-2 group"
                        >
                            View Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 border border-gray-700 hover:border-primary text-gray-300 hover:text-white rounded-full font-medium transition-all"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        {[
                            { icon: Github, href: "https://github.com/Mathuja991" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/Mathuja991/" },
                            { icon: Mail, href: "mailto:mathujaparameshwaran@gmail.com" }, // also fix mail
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark-lighter rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
