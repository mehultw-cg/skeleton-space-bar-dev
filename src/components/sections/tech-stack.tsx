import { Badge } from '@/components/ui/badge';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'Go',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'AWS',
  'Google Cloud',
  'Vercel',
  'Terraform',
  'GraphQL'
];

export function TechStack() {
  return (
    <section id="tech-stack">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Modern Technology, Solid Foundations</h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
            We leverage a cutting-edge, battle-tested tech stack to build high-performance applications.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-lg py-2 px-4 rounded-lg border-2 border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
