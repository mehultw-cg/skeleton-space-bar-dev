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
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">About Space Bar Labs</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Space Bar Labs is a collective of expert engineers, designers, and strategists obsessed with precision and performance. We exist to turn ambitious ideas into high-quality, impactful software.
              </p>
              <p>
                Our philosophy is built on a foundation of collaboration, meticulous execution, and a relentless drive for excellence. We don't just build products; we engineer possibilities.
              </p>
              <p>
                From disruptive startups to established enterprises, we apply rigorous standards to every project, ensuring that our solutions are not only technologically superior but also perfectly aligned with our clients' strategic goals.
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
