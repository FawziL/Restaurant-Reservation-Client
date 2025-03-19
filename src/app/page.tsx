import NavBar from "@/components/NavBar";
import Image from "next/image";
import AboutSection from "@/components/AboutSection"
import MenuSection from "@/components/MenuSection"
import Footer from "@/components/Footer"
import Link from "next/link";

export default function Home() {
    return (
        <div>
            {/* Barra de navegación */}
            <NavBar />

            {/* Hero section */}
            <main className="relative h-110 flex items-center justify-center text-center text-white overflow-hidden">
                {/* Imagen de fondo */}
                <Image
                    src="/images/hero.jpg"
                    alt="Restaurante de pruebas"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Capa oscura semitransparente */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                {/* Contenido del Hero */}
                <div className="z-11 max-w-4xl px-5">
                    <h2 className="text-4xl md:text-4xl font-bold mb-4">
                        Bienvenido al RESTAURANT DE PRUEBAS
                    </h2>
                    <p className="text-xl md:text-2xl mb-8">
                        Descubre nuestra deliciosa comida y haz tu reserva en
                        línea.
                    </p>
                    <Link
                        href="/reservas"
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Reservar ahora
                    </Link>
                </div>
            </main>

            {/* About */}
            <AboutSection />

            {/* Menu */}
            <MenuSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}
