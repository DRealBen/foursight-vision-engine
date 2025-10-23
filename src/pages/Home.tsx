import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Zap, Target, Palette, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Professional logos, branding, and visual identity solutions that make your brand unforgettable.',
      status: 'active'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Modern, responsive websites that convert visitors into customers.',
      status: 'active'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Strategic advertising campaigns that reach your target audience effectively.',
      status: 'active'
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video editing and post-production services that bring your stories to life.',
      status: 'active'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Photography',
      description: 'Stunning visual storytelling through professional photography services.',
      status: 'coming-soon'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in [animation-delay:0.1s]">
              The{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Future
              </span>{' '}
              has a{' '}
              <span className="text-foreground">
                Look
              </span>{' '}
              - we{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Designed
              </span>{' '}
              <span className="text-foreground">
                it
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
              Where creativity meets technology. We craft stunning visual experiences 
              that elevate your brand and captivate your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.4s]">
              <Button 
                asChild 
                size="lg" 
                className="primary-gradient text-primary-foreground font-semibold px-8 py-6 text-lg hover:shadow-glow smooth-transition"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="font-semibold px-8 py-6 text-lg hover:bg-primary hover:text-primary-foreground smooth-transition"
              >
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float [animation-delay:2s]"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive creative solutions designed to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`relative group hover:shadow-card smooth-transition animate-fade-in card-shadow ${
                  service.status === 'active' 
                    ? 'border-primary/20 hover:border-primary/40' 
                    : 'border-border hover:border-accent/40'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-3 rounded-full w-fit ${
                    service.status === 'active' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                    {service.status === 'coming-soon' && (
                      <span className="ml-2 px-2 py-1 text-xs bg-accent/20 text-accent rounded-full font-normal">
                        Coming Soon
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {service.status === 'active' && (
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg smooth-transition"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to create something extraordinary. Get in touch today 
              and let's discuss how we can bring your ideas to life.
            </p>
            <Button 
              asChild 
              size="lg"
              className="primary-gradient text-primary-foreground font-semibold px-8 py-6 text-lg hover:shadow-glow smooth-transition"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Started Today
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;