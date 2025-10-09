"use client";

import Link from 'next/link';
import { Bot, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline sm:inline-block">
            ApexDev Foundry
          </span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:flex bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-primary-foreground hover:opacity-90 transition-opacity">
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Bot className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">ApexDev Foundry</span>
              </Link>
              <div className="flex flex-col gap-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
