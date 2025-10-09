import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { TechStack } from '@/components/sections/tech-stack';
import { Portfolio } from '@/components/sections/portfolio';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <TechStack />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
