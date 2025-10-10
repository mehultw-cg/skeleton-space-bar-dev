import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';

const portfolioProjects = PlaceHolderImages.filter(img => img.id.startsWith('portfolio-'));

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to">
              Our Portfolio of Work
            </span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
            Explore a selection of our successful projects and see our expertise in action.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    width={600}
                    height={400}
                    data-ai-hint={project.imageHint}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl mb-2">{`Project ${index + 1}`}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 transition-colors">
                    View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
