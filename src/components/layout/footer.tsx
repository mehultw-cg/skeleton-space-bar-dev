import Link from 'next/link';
import { Github, Linkedin, Twitter, Rocket, Sprout } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Space Bar Labs</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Space Bar Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
