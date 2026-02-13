"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

const CV = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-dark py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Print Button */}
                <div className="flex justify-end mb-6 print:hidden">
                    <button
                        onClick={handlePrint}
                        className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors"
                    >
                        <Download size={20} />
                        Download PDF
                    </button>
                </div>

                {/* CV Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-dark-lighter rounded-xl border border-gray-800 overflow-hidden shadow-2xl"
                >
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-primary to-secondary p-8 sm:p-12 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            }}></div>
                        </div>
                        <div className="relative z-10">
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                Mathuja Parameshwaran
                            </h1>
                            <p className="text-xl text-white/90 mb-6">
                                AI Engineer · Computer Science Undergraduate
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/Mathuja991"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                                >
                                    <Github size={18} />
                                    <span className="text-sm">GitHub</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/Mathuja991/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                                >
                                    <Linkedin size={18} />
                                    <span className="text-sm">LinkedIn</span>
                                </a>
                                <a
                                    href="mailto:mathujaparameshwaran@gmail.com"
                                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                                >
                                    <Mail size={18} />
                                    <span className="text-sm">mathujaparameshwaran@gmail.com</span>
                                </a>
                                <a
                                    href="tel:0753756987"
                                    className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                                >
                                    <Phone size={18} />
                                    <span className="text-sm">0753756987</span>
                                </a>
                                <div className="flex items-center gap-2 text-white/90">
                                    <MapPin size={18} />
                                    <span className="text-sm">Jaffna, Sri Lanka</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-8 sm:p-12 space-y-10">
                        {/* About Section */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white border-b-2 border-primary pb-2 inline-block">
                                About Me
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                I am an aspiring AI engineer focused on machine learning and deep learning for real-world impact. I have hands-on experience
                                developing and evaluating models with PyTorch, preprocessing time-series biomedical signals (EEG/ECG), and building reproducible
                                training pipelines. I combine strong software engineering fundamentals (Python, data pipelines, Git, Docker) with practical
                                expertise in signal processing, model evaluation, and experiment tracking. I&apos;m seeking an AI Engineer Intern role where I
                                can contribute to model development, data engineering, and end-to-end ML workflows while learning from experienced teams.
                            </p>
                        </section>

                        {/* Education Section */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white border-b-2 border-primary pb-2 inline-block">
                                Education
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-dark/50 p-5 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                Bachelor of Science Honours in Computer Science
                                            </h3>
                                            <p className="text-gray-400">University of Jaffna</p>
                                        </div>
                                        <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                                            2022 - 2026
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Skills Section (AI-focused) */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white border-b-2 border-primary pb-2 inline-block">
                                AI & Technical Skills
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-dark/50 p-5 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                                    <h3 className="text-lg font-semibold text-white mb-3">Machine Learning</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["PyTorch", "TensorFlow", "scikit-learn", "MNE", "NumPy"].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-dark/50 p-5 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                                    <h3 className="text-lg font-semibold text-white mb-3">Data & Engineering</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["pandas", "scikit-learn", "SQL", "Data Pipelines", "Experiment Tracking"].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-dark/50 p-5 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                                    <h3 className="text-lg font-semibold text-white mb-3">Tools & Infrastructure</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Git", "Docker", "AWS", "MLflow", "Weights & Biases"].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Projects Section */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white border-b-2 border-primary pb-2 inline-block">
                                Featured Projects
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-dark/50 p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">Emotion Detection from EEG (AI)</h3>
                                            <p className="text-sm text-primary">Research · Deep Learning</p>
                                        </div>
                                        <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                                            2024
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                                        A deep learning system that classifies emotional states using EEG signals. Includes signal preprocessing, feature extraction, and trial-level prediction using PyTorch.
                                    </p>
                                    <p className="text-gray-500 text-sm mb-3">
                                        <span className="font-semibold text-gray-400">Technologies:</span> PyTorch, NumPy, SciPy, MNE, Python
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <a
                                            href="https://github.com/Mathuja991/EmotionDetection_EEG"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors border border-primary/30"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-dark/50 p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">ECG Heart Disease Classification (AI)</h3>
                                            <p className="text-sm text-primary">Research · Deep Learning</p>
                                        </div>
                                        <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                                            2024
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                                        A convolutional neural network that detects and classifies heart diseases from ECG signals. Includes preprocessing pipelines and patient-level evaluation.
                                    </p>
                                    <p className="text-gray-500 text-sm mb-3">
                                        <span className="font-semibold text-gray-400">Technologies:</span> PyTorch, pandas, scikit-learn, matplotlib
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <a
                                            href="https://github.com/Mathuja991/ECG-Signal-Classification"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors border border-primary/30"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Footer */}
                    <div className="bg-dark-lighter/50 p-6 text-center border-t border-gray-800">
                        <p className="text-gray-500 text-sm">
                            © 2025 Mathuja Parameshwaran. All rights reserved.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Print Styles */}
            <style>{`
                @media print {
                    body {
                        background: white !important;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                    * {
                        color-adjust: exact;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            `}</style>
        </div>
    );
};

export default CV;
