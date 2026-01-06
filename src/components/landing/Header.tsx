import Link from "next/link";
import { MountainIcon } from "lucide-react";

export function Header() {
  const navLinks = [
    { href: "#platform", label: "Platform" },
    { href: "#strategies", label: "Strategies" },
    { href: "#research", label: "Research" },
    { href: "#clients", label: "Clients" },
    { href: "#security", label: "Security" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold font-headline">Arthava Matric</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
