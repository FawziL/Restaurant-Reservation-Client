import NavBar from "@/components/NavBar";
import Image from "next/image";

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
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                        Reservar ahora
                    </button>
                </div>
            </main>

            <section className="about">
                <h3>ABOUT US</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi nemo ad quo fugit natus veritatis aperiam in, nobis
                    hic molestias architecto assumenda distinctio odit rem amet
                    optio ipsum, quos ducimus!
                </p>
            </section>

            <section className="specialties">
                <h3>Osas SPECIALTIES</h3>
                <p>Descubre nuestras especialidades únicas.</p>
            </section>

            <footer className="footer">
                <p>&copy;. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
