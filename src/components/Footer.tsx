"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo y Descripción */}
                <div>
                    <h2 className="text-2xl font-bold text-white">RESTO</h2>
                    <p className="mt-2 text-gray-400">
                        Un lugar donde la pasión por la cocina y la excelencia en el servicio se encuentran.
                    </p>
                </div>

                {/* Enlaces rápidos */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Enlaces Rápidos</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-yellow-400">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/menu" className="hover:text-yellow-400">Menú</Link>
                        </li>
                        <li>
                            <Link href="/reservation" className="hover:text-yellow-400">Reservas</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-yellow-400">Contacto</Link>
                        </li>
                    </ul>
                </div>

                {/* Información de contacto */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Contáctanos</h3>
                    <p><span className="font-semibold">Dirección:</span> Av. Gastronómica #123, Ciudad</p>
                    <p><span className="font-semibold">Horario:</span> Lun-Dom, 10:00 AM - 11:00 PM</p>
                    
                    {/* Redes Sociales */}
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                            3
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                            2
                        </a>
                        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                            1
                        </a>
                    </div>
                </div>
            </div>

            {/* Línea divisoria */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                <p className="text-gray-500">&copy; {new Date().getFullYear()} RESTO. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
