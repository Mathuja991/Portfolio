import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 bg-dark-lighter border-t border-gray-800 text-center">
            <div className="flex justify-center gap-6 mb-4">
                <a
                    href="https://github.com/Mathuja991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/mathuja-parameshwararan-3668bb24b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="mailto:mathujaparameshwaran@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Mail size={20} />
                </a>
            </div>
            <p className="text-gray-500">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
