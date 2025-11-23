const Footer = () => {
    return (
        <footer className="py-8 bg-dark-lighter border-t border-gray-800 text-center">
            <p className="text-gray-500">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
