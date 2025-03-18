"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-opacity-50 fixed w-full z-10 top-0 left-0 z-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-white text-2xl font-bold"
                        >
                            RESTO
                        </Link>
                    </div>

                    {/* Menú (se oculta en móvil y se muestra con flex en escritorio) */}
                    <div
                        className={`md:bg-transparent md:flex md:space-x-6 w-full md:w-auto top-16 left-0 transition-all duration-300 ease-in-out ${
                            isOpen ? "block" : "hidden md:flex"
                        }`}
                    >
                        {[
                            "WELCOME",
                            "SPECIALTIES",
                            "MENU",
                            "RESERVATION",
                            "EVENTS",
                            "CONTACT",
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href={`/${item.toLowerCase()}`}
                                className="block text-white hover:text-yellow-400 p-4 md:p-0"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Botón para abrir/cerrar menú en móviles */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white text-2xl"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
