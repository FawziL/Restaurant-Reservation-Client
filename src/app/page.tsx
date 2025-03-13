import NavBar from "@/components/NavBar";
import "./globals.css"; // Estilos globales (opcional)

export default function Home() {
    return (
        <div>
            <NavBar />
            <main className="hero">
                <h2>Bienvenido aL RESTAURANT DE PRUEBAS</h2>
                <p>
                    Descubre nuestra deliciosa comida y haz tu reserva en línea.
                </p>
            </main>

            <section className="about">
                <h3>ABOUT US</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo ad quo fugit natus veritatis aperiam in, nobis hic molestias architecto assumenda distinctio odit rem amet optio ipsum, quos ducimus!
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
