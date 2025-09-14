import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Users, Target, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Vision-Driven',
      description: 'We believe in the power of foresight - seeing beyond the present to create solutions that anticipate future needs.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'Combining creativity with cutting-edge technology to deliver solutions that are both beautiful and functional.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results Focused',
      description: 'Every design decision is purposeful, aimed at achieving your business goals and connecting with your audience.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Spirit',
      description: 'We work as partners with our clients, building long-term relationships based on trust and shared success.',
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">FourSight</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where vision meets innovation. We're building the future of creative design and technology solutions.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20 animate-fade-in [animation-delay:0.2s]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  FourSight Media & Tech was born from a simple yet powerful belief: 
                  great design has the power to transform businesses and touch lives. 
                  Our journey began with a vision to bridge the gap between creativity and technology.
                </p>
                <p>
                  Founded on the principle of "turning vision into reality," we specialize in 
                  graphic design while continuously expanding our capabilities to serve the 
                  evolving needs of modern businesses. Every project we undertake is an 
                  opportunity to push boundaries and exceed expectations.
                </p>
                <p>
                  As we grow, we remain committed to our core mission: delivering exceptional 
                  creative solutions that not only look stunning but drive real business results. 
                  The future is bright, and we're here to help you see it clearly.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Eye className="w-24 h-24 text-primary mb-4 mx-auto animate-float" />
                  <h3 className="text-2xl font-bold text-primary">FourSight Vision</h3>
                  <p className="text-muted-foreground mt-2">Seeing beyond the horizon</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent/30 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-float [animation-delay:1s]"></div>
            </div>
          </div>
        </section>

        {/* The Meaning of FourSight */}
        <section className="mb-20 animate-fade-in [animation-delay:0.4s]">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              What is <span className="text-primary">"FourSight"?</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                FourSight represents our unique approach to creative problem-solving, combining four essential perspectives:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Foresight</h4>
                  <p className="text-sm text-muted-foreground">Anticipating future trends and needs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Insight</h4>
                  <p className="text-sm text-muted-foreground">Deep understanding of your brand and audience</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Oversight</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive project management and quality</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Hindsight</h4>
                  <p className="text-sm text-muted-foreground">Learning from experience to improve continuously</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20 animate-fade-in [animation-delay:0.6s]">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group hover:shadow-card smooth-transition border-border hover:border-primary/20 card-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.7}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground smooth-transition">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
                
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-lg smooth-transition"></div>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Vision */}
        <section className="mb-20 animate-fade-in [animation-delay:0.8s]">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Future <span className="text-primary">Focused</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                FourSight Media & Tech is a forward-thinking creative agency with ambitious plans. 
                As we grow, we're building a team of passionate creatives and tech innovators, 
                including talented siblings who share our vision for the future of design and technology.
              </p>
              
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To empower businesses with exceptional creative solutions that not only capture attention 
                  but drive meaningful connections with their audiences. We're not just creating designs; 
                  we're crafting the visual language of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center animate-fade-in [animation-delay:1s]">
          <div className="bg-neutral text-neutral-foreground rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Create the Future Together
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to turn your vision into reality? We'd love to hear about your project 
              and explore how we can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="bg-neutral-foreground text-neutral hover:bg-accent hover:text-accent-foreground smooth-transition"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-neutral-foreground/30 text-neutral-foreground hover:bg-neutral-foreground/10 smooth-transition"
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;