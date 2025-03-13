import Link from 'next/link';

export default function NavBar() {
  return (
        <nav>
        <h1>RESTO</h1>
            <Link href="/">WELCOME</Link>
            <Link href="/workshops">WORKSHOPS</Link>
            <Link href="/jewell">JEWELL</Link>
            <Link href="/designers">DESIGNERS</Link>
            <Link href="/gives">GIVES</Link>
            <Link href="/contact">CONTACT</Link>
        </nav>
  );
}