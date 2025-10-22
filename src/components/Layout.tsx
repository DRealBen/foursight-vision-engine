import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import foursightLogo from '@/assets/foursight-ng-logo.png';
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || !savedTheme && prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'Portfolio',
    href: '/portfolio'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border/20">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={foursightLogo} alt="FourSight NG Logo" className="h-12 w-auto smooth-transition group-hover:scale-105" />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-primary leading-tight">FourSight NG</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`font-medium smooth-transition relative group ${isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary smooth-transition ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>)}
              
              {/* Theme Toggle */}
              <Button variant="outline" size="icon" onClick={toggleTheme} className="smooth-transition hover:shadow-glow">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={toggleTheme} className="smooth-transition">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              <Button variant="outline" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="smooth-transition">
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && <div className="md:hidden mt-4 py-4 border-t border-border/20 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`font-medium smooth-transition px-2 py-1 rounded-md ${isActive(item.href) ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}>
                    {item.name}
                  </Link>)}
              </div>
            </div>}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral text-neutral-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img src={foursightLogo} alt="FourSight Nigeria" className="h-8 w-auto mb-4 opacity-90" style={{
              filter: 'brightness(0) invert(1)'
            }} />
              <p className="text-neutral-foreground/80 mb-4 max-w-md">
                Turning vision into reality through innovative graphic design and creative solutions. 
                Building the future of media and technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigation.map(item => <Link key={item.name} to={item.href} className="block text-neutral-foreground/80 hover:text-accent smooth-transition">
                    {item.name}
                  </Link>)}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-neutral-foreground/80">
                <p>Email: benedictpraise653@gmail.com</p>
                <p>WhatsApp: +234 816 789 4509</p>
                <p>Available: Mon-Fri 9AM-6PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-foreground/20 mt-8 pt-8 text-center text-neutral-foreground/60">
            <p>© 2025 FourSight Nigeria. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Layout;