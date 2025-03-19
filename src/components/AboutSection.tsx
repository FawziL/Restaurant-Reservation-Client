"use client";

import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section className="bg-white text-gray-700 py-8 px-8 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ml-8">
                {/* Contenido de texto */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-4">Somos RESTO</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Disfruta de una experiencia gastronómica única, donde cada plato es una obra de arte. Nuestro menú combina ingredientes frescos y sabores auténticos para deleitar tu paladar.
                    </p>
                    <Link
                        href="/menu"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-all"
                    >
                        Ver Menú
                    </Link>
                </div>

                {/* Imagen decorativa */}
                <div className="flex justify-center">
                    <Image
                        src="/images/resto.jpg" // Asegúrate de tener esta imagen en /public
                        alt="Restaurante acogedor"
                        width={450}
                        height={300}
                        className="rounded-lg h-70 shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;