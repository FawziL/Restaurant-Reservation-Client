"use client";

import Image from "next/image";
import Link from "next/link";

const menuItems = [
    {
        category: "Entradas",
        image: "/images/entradas.jpg", // Asegúrate de tener estas imágenes en /public
    },
    {
        category: "Platos Principales",
        image: "/images/principal.jpeg",
    },
    {
        category: "Postres",
        image: "/images/postres.jpeg",
    },
    {
        category: "Bebidas",
        image: "/images/bebidas.jpeg",
    },
];

const MenuSection = () => {
    return (
        <section className="bg-gray-800 text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Descubre Nuestro Menú</h2>
                <p className="text-lg text-gray-300 mb-8">
                    Explora nuestra selección de platillos preparados con los mejores ingredientes y pasión por la gastronomía.
                </p>

                {/* Grid de categorías */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative group">
                            <Image
                                src={item.image}
                                alt={item.category}
                                width={300}
                                height={200}
                                className="rounded-lg shadow-lg h-36 transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-lg font-semibold">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón para ver el menú completo */}
                <div className="mt-8">
                    <Link
                        href="/menu"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-all"
                    >
                        Ver Menú Completo
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
