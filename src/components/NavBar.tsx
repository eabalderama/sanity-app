import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4 mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            CompanyName
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            FAQ
          </Link>
          <Link
            href="#blog"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
