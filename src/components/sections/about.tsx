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
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">About StellarDev Solutions</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Forged in the crucible of innovation, StellarDev Solutions is a constellation of passionate engineers, designers, and strategists dedicated to navigating the complexities of the digital cosmos.
              </p>
              <p>
                Our mission is to empower businesses by transforming their visions into high-velocity, impactful software. We believe in building interstellar partnerships, fostering a culture of cosmic discovery, and delivering excellence in every line of code.
              </p>
              <p>
                From fledgling startups to galactic enterprises, we tailor our trajectory to meet the unique challenges and opportunities of each client, ensuring solutions that are not only technologically superior but also strategically aligned with their long-term cosmic ambitions.
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
