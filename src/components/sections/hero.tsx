import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Starfield from '../vfx/Starfield';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 3. Background Image Layer (z-index 5 or less, so Starfield (z-10) is above it) */}
      {/* Using the Image component for better optimization and layout */}
      <div className="absolute inset-0 -z-51 bg-gradient-to-br from-primary to-purple-400 dark:from-green-700"> 
          <Image 
              src="/Assets/horsehead.jpg" 
              alt="Horsehead Nebula Background" 
              layout="fill" 
              objectFit="cover" 
              quality={100}
              // Optional: Add a subtle overlay for better text readability
              className=""
          />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-green-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-teal-600"></div>
      </div>
      <div className="container relative text-center py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
          Launching Tomorrow's
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to">
            {' '}
            Possibility.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Space Bar Labs is your elite partner in engineering high-performance software solutions that transform ambitious ideas into market-defining products.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild className="bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-primary-foreground hover:opacity-90 transition-opacity">
            <Link href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#portfolio">See Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
