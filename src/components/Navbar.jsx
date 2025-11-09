import Link from "next/link";
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/leadership", label: "Leadership" },
  { href: "/music", label: "Music" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" }
];
export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">Julian Wiser</Link>
        <ul className="flex gap-4 text-sm">
          {links.map(l => (
            <li key={l.href}><Link className="hover:underline" href={l.href}>{l.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
