import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CloudCog, CodeXml, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Consulting',
    description: 'Strategic guidance to align your technology with business goals, ensuring optimal architecture and roadmap.',
  },
  {
    icon: <CodeXml className="h-8 w-8 text-primary" />,
    title: 'Development',
    description: 'End-to-end custom software development, from web and mobile apps to complex enterprise systems.',
  },
  {
    icon: <CloudCog className="h-8 w-8 text-primary" />,
    title: 'Deployment',
    description: 'Efficient and automated deployment pipelines for seamless integration, and reliable infrastructure management.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Security',
    description: 'Comprehensive security audits, penetration testing, and implementation of best practices to protect your assets.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Expertise</h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
            We provide a complete suite of services to bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 border-2 border-transparent hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="p-0 mb-4">
                {service.icon}
              </CardHeader>
              <CardTitle className="mb-2 text-xl font-headline">{service.title}</CardTitle>
              <CardContent className="p-0 text-muted-foreground">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
