import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-team');

export function About() {
  if (!aboutImage) return null;

  return (
    <section id="about">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">About ApexDev Foundry</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded on the principles of innovation and integrity, ApexDev Foundry is a collective of passionate engineers, designers, and strategists dedicated to solving complex problems with elegant code.
              </p>
              <p>
                Our mission is to empower businesses by transforming their ideas into high-quality, impactful software. We believe in building lasting partnerships, fostering a culture of continuous learning, and delivering excellence in every line of code.
              </p>
              <p>
                From startups to enterprise-level corporations, we tailor our approach to meet the unique challenges and opportunities of each client, ensuring solutions that are not only technologically sound but also strategically aligned with their long-term vision.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-full w-full">
             <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                data-ai-hint={aboutImage.imageHint}
                className="rounded-lg object-cover"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
