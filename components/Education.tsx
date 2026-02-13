"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Science Honours in Computer Science",
            institution: "University of Jaffna",
            period: "2022 - 2026",
            description: "Specialized in Software Engineering and Web Development"
        },
        {
            degree: "G.C.E. A/L (Physical Science Stream)",
            institution: "Udduppiddy American Mission College",
            period: "2018 - 2020",
            description: "Mathematics, Physics, Chemistry - Results: 3B"
        },
        {
            degree: "G.C.E. O/L",
            institution: "J/Thondaimanaru Veerakaththippillai M.V",
            period: "2007 - 2017",
            description: " Results: 9A"
        }
    ];

    return (
        <section id="education" className="py-20 bg-dark-lighter/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-primary">Education</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My academic journey and qualifications
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark-lighter rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <GraduationCap size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-gray-400 font-medium">{edu.institution}</p>
                                        </div>
                                        <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm">{edu.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
