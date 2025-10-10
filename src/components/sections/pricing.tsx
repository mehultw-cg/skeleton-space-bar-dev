import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Rocket, Zap, FlaskConical, SatelliteDish, Wrench } from 'lucide-react';

const pricingTiers = [
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Craft Your Ship',
    description: 'UI/UX research, brainstorming, consulting, and prototyping. A touch of frontend to bring concepts to life.',
    features: ['UI/UX Research', 'Brainstorming & Consulting', 'Interactive Prototypes', 'Initial Frontend Scaffolding'],
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Liftoff',
    description: 'For startups and new ventures. We build and launch your application or project from the ground up.',
    features: ['Full Product Development', 'Go-to-Market Strategy', 'Scalable Infrastructure', 'Launch Support'],
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Accelerate',
    description: 'For projects already in motion. We help you accelerate your plans and push beyond your limits.',
    features: ['Feature Development Sprints', 'Performance Optimization', 'Codebase Refactoring', 'Team Augmentation'],
  },
  {
    icon: <FlaskConical className="h-8 w-8 text-primary" />,
    title: 'Deep Space',
    description: 'Research-based, long-term projects to break new ground and develop novel technology.',
    features: ['Exploratory R&D', 'Feasibility Studies', 'Proof-of-Concept Builds', 'Cutting-Edge Tech Integration'],
  },
  {
    icon: <SatelliteDish className="h-8 w-8 text-primary" />,
    title: 'Station Keeping',
    description: 'Maintain and monitor your product to keep it stable in orbit and performing at its peak.',
    features: ['24/7 Monitoring & Support', 'Bug Fixes & Patching', 'Security Updates', 'Performance Tuning'],
  },
];

export function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to">
              Choose Your Adventure
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
            Flexible engagement models tailored to your project's unique trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.title}
              className={`glass-card flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 ${
                index === 1 || index === 3 ? 'lg:col-span-1' : ''
              } ${
                index === 0 || index === 2 || index === 4 ? 'lg:col-span-1' : ''
              } ${
                index === 1 ? 'border-primary shadow-primary/20' : ''
              }
              ${index === 2 ? 'lg:col-start-2' : ''}
              `}
              // A bit of complex logic to create a more interesting layout
              style={{gridColumn: index === 0 || index === 4 ? 'span 1 / span 1' : (index === 1 || index === 3) ? 'span 1 / span 1' : 'span 1 / span 1',
                      gridRow: index === 0 ? '1' : index === 1 ? '1' : index === 2 ? '1' : index === 3 ? '2' : '2',
                      gridColumnStart: index === 3 ? 1 : index === 4 ? 3 : 'auto'
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-2">
                  {tier.icon}
                  <CardTitle className="text-2xl font-headline">{tier.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-sm">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 pt-4">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-6">
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-primary-foreground hover:opacity-90 transition-opacity">
                  <Link href="#contact">Get Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
