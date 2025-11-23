"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A fully functional online store built with Next.js, Stripe, and Sanity CMS.",
        tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
        image: "/project1.jpg", // Placeholder
        github: "#",
        demo: "#",
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager with real-time updates using Socket.io.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        image: "/project2.jpg", // Placeholder
        github: "#",
        demo: "#",
    },
    {
        title: "AI Content Generator",
        description: "An AI-powered application that generates marketing copy using OpenAI API.",
        tags: ["Next.js", "OpenAI API", "Vercel AI SDK"],
        image: "/project3.jpg", // Placeholder
        github: "#",
        demo: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one was a unique challenge that helped me grow as a developer.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark-lighter rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all group"
                        >
                            <div className="relative h-48 bg-gray-800 overflow-hidden">
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-900">
                                    {project.title} Image
                                </div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors"
                                        title="View Code"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors"
                                        title="Live Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
