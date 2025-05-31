import { useState } from 'react';
import "./Header.css"
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full p-10 backdrop-blur-md bg-[#0F0715] ">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-2xl font-medium text-white">
                        Youssef.Zakaria@svnu.edu.eg
                    </a>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-light focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {["SERVICES", "WORKS", "RESUME", "SKILLS", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-light font-medium gradient-underline text-[15px] hover:text-primary transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4">
                        <div className="flex flex-col space-y-4">
                            {["Home", "About", "Projects", "Skills", "Contact"].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-light hover:text-primary transition-colors duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
export default Header;