import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Shield, Brush, Rocket, Satellite } from 'lucide-react';

const techCategories = [
  {
    category: 'Frontend',
    icon: <Rocket className="h-6 w-6 text-primary" />,
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    category: 'Backend',
    icon: <Code className="h-6 w-6 text-primary" />,
    techs: ['Node.js', 'Python', 'Go', 'GraphQL', 'Genkit'],
  },
  {
    category: 'Database',
    icon: <Database className="h-6 w-6 text-primary" />,
    techs: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
  },
  {
    category: 'DevOps & Cloud',
    icon: <Satellite className="h-6 w-6 text-primary" />,
    techs: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Vercel'],
  },
  {
    category: 'UI/UX',
    icon: <Brush className="h-6 w-6 text-primary" />,
    techs: ['Figma', 'User Research', 'Prototyping'],
  },
  {
    category: 'Security',
    icon: <Shield className="h-6 w-6 text-primary" />,
    techs: ['Penetration Testing', 'Cloud Security', 'SAST & DAST'],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to">
              Our Technology Arsenal
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
            We leverage a cutting-edge, battle-tested tech stack to build high-performance, secure, and scalable applications.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <Card key={category.category} className="glass-card flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle className="font-headline text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-sm py-1 px-3 rounded-md border-2 border-border hover:bg-accent/20 hover:text-foreground transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
