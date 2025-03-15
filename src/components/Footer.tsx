import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container flex flex-col gap-6 py-8 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CompanyName. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
