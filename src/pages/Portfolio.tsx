import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import Seo from '@/components/Seo';
import gloweraBrandBoard from '@/assets/glowera-brand-board.png';
import gloweraBillboard from '@/assets/glowera-billboard.png';
import gloweraBottle from '@/assets/glowera-bottle.png';
import gloweraBucketHat from '@/assets/glowera-bucket-hat.png';
import gloweraHoodie from '@/assets/glowera-hoodie.png';
import gloweraTshirt from '@/assets/glowera-tshirt.png';
import gloweraShoppingBag from '@/assets/glowera-shopping-bag.png';
import gloweraModel from '@/assets/glowera-model.png';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Glowera Brand Identity',
      category: 'branding',
      client: 'Glowera',
      description: 'Complete brand identity design for a beauty brand, including logo, color palette, typography system, brand pattern, and mockup application across apparel, packaging, print, and outdoor advertising.',
      image: gloweraBrandBoard,
      gallery: [gloweraBrandBoard, gloweraBillboard, gloweraBottle, gloweraBucketHat, gloweraHoodie, gloweraTshirt, gloweraShoppingBag, gloweraModel],
      year: '2025',
      tags: ['Branding', 'Logo Design', 'Print Design', 'Identity']
    },
    {
      id: 2,
      title: 'Restaurant Brand Package',
      category: 'branding',
      client: 'Bella Vista Restaurant',
      description: 'Comprehensive branding package including logo, menu design, and marketing materials for an upscale Italian restaurant.',
      image: '/api/placeholder/600/400',
      year: '2025',
      tags: ['Branding', 'Print Design', 'Menu']
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'digital',
      client: 'Fitness First Gym',
      description: 'Dynamic social media graphics and campaign visuals to promote new fitness programs and boost engagement.',
      image: '/api/placeholder/600/400',
      year: '2025',
      tags: ['Social Media', 'Digital Design', 'Marketing']
    },
    {
      id: 4,
      title: 'Product Packaging Design',
      category: 'print',
      client: 'EcoLife Products',
      description: 'Sustainable packaging design for a line of eco-friendly household products, emphasizing green values.',
      image: '/api/placeholder/600/400',
      year: '2025',
      tags: ['Packaging', 'Print Design', 'Sustainability']
    },
    {
      id: 5,
      title: 'Corporate Event Materials',
      category: 'print',
      client: 'Global Summit 2025',
      description: 'Complete event branding package including banners, brochures, name badges, and presentation templates.',
      image: '/api/placeholder/600/400',
      year: '2025',
      tags: ['Event Design', 'Print', 'Corporate']
    },
    {
      id: 6,
      title: 'E-commerce Website Design',
      category: 'digital',
      client: 'Artisan Crafts Co.',
      description: 'Modern, user-friendly e-commerce website design with focus on showcasing handmade products.',
      image: '/api/placeholder/600/400',
      year: '2025',
      tags: ['Web Design', 'E-commerce', 'UI/UX']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: portfolioItems.length },
    { id: 'branding', name: 'Branding', count: portfolioItems.filter(item => item.category === 'branding').length },
    { id: 'print', name: 'Print Design', count: portfolioItems.filter(item => item.category === 'print').length },
    { id: 'digital', name: 'Digital Design', count: portfolioItems.filter(item => item.category === 'digital').length }
  ];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const activeProject = portfolioItems.find(p => p.id === openProjectId);

  const isRealImage = (src: string) => src && !src.startsWith('/api/placeholder');

  return (
    <div className="py-20">
      <Seo
        title="Portfolio — Brand Identity & Design Work | FourSight"
        description="Selected FourSight projects: brand identity, logo design, and creative work including the Glowera beauty brand identity system."
        path="/portfolio"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'FourSight Portfolio',
          about: 'Brand identity, logo design, and creative work by FourSight.',
        }}
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their visual identity
            and achieve their creative goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in [animation-delay:0.2s]">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`smooth-transition ${
                selectedCategory === category.id
                  ? 'primary-gradient text-primary-foreground shadow-glow'
                  : 'hover:border-primary hover:text-primary'
              }`}
            >
              {category.name}
              <Badge
                variant="secondary"
                className="ml-2 text-xs"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-card smooth-transition border-border hover:border-primary/20 card-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                  {isRealImage(item.image) ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Eye className="w-12 h-12 text-muted-foreground" />
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 text-black hover:bg-white"
                      onClick={() => {
                        if (item.id === 1) setOpenProjectId(1);
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary smooth-transition">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.client}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.year}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State for Coming Soon Categories */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Eye className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">More Work Coming Soon</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We're constantly working on new projects. Check back soon or contact us to discuss your project.
            </p>
            <Button asChild className="primary-gradient text-primary-foreground hover:shadow-glow smooth-transition">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <section className="text-center animate-fade-in [animation-delay:0.4s]">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Every great project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="primary-gradient text-primary-foreground font-semibold hover:shadow-glow smooth-transition"
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
                className="hover:border-primary hover:text-primary smooth-transition"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ProjectDetailModal
        open={openProjectId !== null}
        onOpenChange={(open) => { if (!open) setOpenProjectId(null); }}
        project={activeProject ? {
          title: activeProject.title,
          client: activeProject.client,
          year: activeProject.year,
          description: activeProject.description,
          tags: activeProject.tags,
          gallery: (activeProject as any).gallery ?? [activeProject.image],
        } : null}
      />
    </div>
  );
};

export default Portfolio;
