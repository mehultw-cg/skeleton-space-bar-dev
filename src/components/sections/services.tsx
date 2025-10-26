import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, LayoutTemplate, CodeXml, Database, Network, ShieldCheck, PenTool, Cloud, UserCheck, CloudCog, ShieldAlert, TestTube } from 'lucide-react';

const serviceCategories = [
  {
    category: "Strategy & Design",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    services: [
      {
        icon: <UserCheck className="h-6 w-6 text-primary" />,
        title: 'Consulting',
        description: 'Strategic guidance to align technology with your business goals.',
      },
      {
        icon: <LayoutTemplate className="h-6 w-6 text-primary" />,
        title: 'UI Design',
        description: 'Creating intuitive and visually appealing user interfaces.',
      },
      {
        icon: <PenTool className="h-6 w-6 text-primary" />,
        title: 'UX Design',
        description: 'Crafting seamless and engaging user experiences through research.',
      },
    ],
  },
  {
    category: "Development",
    icon: <CodeXml className="h-8 w-8 text-primary" />,
    services: [
      {
        icon: <CodeXml className="h-6 w-6 text-primary" />,
        title: 'Frontend Development',
        description: 'Building responsive and performant client-side applications.',
      },
      {
        icon: <Database className="h-6 w-6 text-primary" />,
        title: 'Backend Development',
        description: 'Developing robust and scalable server-side logic and APIs.',
      },
      {
        icon: <Cloud className="h-6 w-6 text-primary" />,
        title: 'DevOps & SysAdmin',
        description: 'Automating deployment and managing infrastructure for reliability.',
      },
    ]
  },
  {
    category: "Security & Operations",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    services: [
      {
        icon: <ShieldAlert className="h-6 w-6 text-primary" />,
        title: 'Security Auditing',
        description: 'Comprehensive analysis to identify and mitigate security vulnerabilities.',
      },
      {
        icon: <CloudCog className="h-6 w-6 text-primary" />,
        title: 'Cloud Security',
        description: 'Securing cloud infrastructure and services against threats.',
      },
      {
        icon: <TestTube className="h-6 w-6 text-primary" />,
        title: 'Web Penetration Testing',
        description: 'Simulating cyber-attacks to evaluate and strengthen your security posture.',
      },
    ]
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to">
              Our Capabilities
            </span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
            We provide a complete suite of services to bring your vision to life with precision and performance.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="glass-card flex flex-col p-6 transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 z-10">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {category.icon}
                <CardTitle className="text-2xl font-headline">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                {category.services.map((service, sIndex) => (
                  <div key={sIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
