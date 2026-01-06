import Link from "next/link";
import { MountainIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-card">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Arthava Matric</span>
        </div>
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Arthava Matric. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm hover:text-primary transition-colors" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
