"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 bg-dark-lighter p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Email</h4>
                                    <p className="text-gray-400">mathujaparameshwaran@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-dark-lighter p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Phone</h4>
                                    <p className="text-gray-400">0753756987</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-dark-lighter p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Location</h4>
                                    <p className="text-gray-400"> Jaffna, Northern Provinvce, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
