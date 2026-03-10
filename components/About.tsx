"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-lighter/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative aspect-square max-w-md mx-auto md:mx-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl -rotate-6 opacity-20"></div>
                        <div className="relative h-full w-full bg-dark-lighter rounded-2xl border border-gray-800 overflow-hidden flex items-center justify-center">
                            <Image
                                src="/profile.jpg"
                                alt="Profile Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am a passionate software engineering enthusiast with a strong foundation in application development, problem solving, and system design.
                            I enjoy building reliable software solutions that turn ideas into practical products with real-world impact.
                            </p>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            My journey in tech has led me to work on projects involving web development, data processing, and scalable application workflows.
                            I believe in clean architecture, continuous learning, and writing maintainable code to solve challenging real-world problems.
                        </p>


                        <div className="grid grid-cols-2 gap-6">
                            {[
                                // { label: "Experience", value: "3+ Years" },
                                { label: "Projects", value: "3+" },
                                { label: "Clients", value: "1" },

                            ].map((stat, index) => (
                                <div key={index}>
                                    <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
