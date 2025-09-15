import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, Eye, Monitor, Megaphone, 
  Check, Clock, ArrowRight, Star 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const currentService = {
    icon: <Palette className="w-12 h-12" />,
    title: 'Graphic Design',
    description: 'Professional visual identity and branding solutions that make your business stand out.',
    features: [
      'Logo Design & Branding',
      'Business Card Design',
      'Brochure & Flyer Design',
      'Social Media Graphics',
      'Poster & Banner Design',
      'Brand Style Guidelines',
      'Print Design Services',
      'Digital Asset Creation'
    ],
    pricing: 'Starting from $99',
    deliveryTime: '3-7 business days'
  };

  const upcomingServices = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Photography',
      description: 'Professional photography services for portraits, events, products, and commercial needs.',
      features: [
        'Portrait Photography',
        'Event Photography',
        'Product Photography',
        'Commercial Shoots',
        'Photo Editing & Retouching'
      ],
      launchDate: 'Q2 2026'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'E-commerce Solutions',
        'CMS Integration',
        'SEO Optimization'
      ],
      launchDate: 'Q3 2026'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Digital Marketing & Advertising',
      description: 'Strategic marketing campaigns that reach your target audience effectively.',
      features: [
        'Social Media Management',
        'Google Ads Campaigns',
        'Content Marketing',
        'Brand Strategy',
        'Analytics & Reporting'
      ],
      launchDate: 'Q4 2026'
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive creative solutions designed to elevate your brand and drive results. 
            From graphic design to full-scale digital marketing.
          </p>
        </div>

        {/* Current Service - Graphic Design */}
        <section className="mb-20 animate-fade-in [animation-delay:0.2s]">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-full">
                    {currentService.icon}
                  </div>
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    Available Now
                  </Badge>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {currentService.title}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {currentService.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="font-semibold">{currentService.pricing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{currentService.deliveryTime}</span>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  size="lg"
                  className="primary-gradient text-primary-foreground font-semibold hover:shadow-glow smooth-transition"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started Now
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">What's Included:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentService.features.map((feature, index) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Services */}
        <section className="animate-fade-in [animation-delay:0.4s]">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Coming <span className="text-accent">Soon</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're expanding our services to provide comprehensive creative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingServices.map((service, index) => (
              <Card 
                key={service.title}
                className="group hover:shadow-card smooth-transition border-border hover:border-accent/40 card-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-muted text-muted-foreground rounded-full group-hover:bg-accent/10 group-hover:text-accent smooth-transition">
                      {service.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.launchDate}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 rounded-lg smooth-transition"></div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center animate-fade-in [animation-delay:0.6s]">
          <div className="bg-neutral text-neutral-foreground rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you need graphic design services now or want to be notified when our other services launch, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="bg-neutral-foreground text-neutral hover:bg-accent hover:text-accent-foreground smooth-transition"
              >
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-neutral-foreground/30 text-neutral-foreground hover:bg-neutral-foreground/10 smooth-transition"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;