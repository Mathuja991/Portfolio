"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Programming", items: ["Java", "Python", "JavaScript", "TypeScript"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-dark-lighter/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-primary">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My technical toolkit that I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/30 transition-colors h-full"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-secondary">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {skillGroup.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-dark-lighter rounded-lg text-sm text-gray-300 border border-gray-800 hover:border-primary/50 hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
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
