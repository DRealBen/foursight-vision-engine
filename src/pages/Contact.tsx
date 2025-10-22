import React, { useState, useRef } from 'react';
import { MessageCircle, Mail, Clock, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// Security: Input validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name contains invalid characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  company: z.string()
    .trim()
    .max(150, { message: "Company name must be less than 150 characters" })
    .optional()
    .transform(val => val === '' ? undefined : val),
  service: z.string()
    .min(1, { message: "Please select a service" }),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" })
});

// Security: Input sanitization utility
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Security: Phone number validation for WhatsApp URLs
const sanitizePhoneNumber = (phone: string): string => {
  return phone.replace(/[^\d+]/g, '').substring(0, 15); // Keep only digits and +, max 15 chars
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const lastSubmissionRef = useRef<number>(0);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Security: Sanitize input and clear previous errors
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Security: Rate limiting - prevent spam submissions
    const now = Date.now();
    if (now - lastSubmissionRef.current < 5000) { // 5 second throttle
      toast({
        title: "Too Fast!",
        description: "Please wait a moment before submitting another message.",
        variant: "destructive",
      });
      return;
    }
    
    // Security: Validate form data
    try {
      const validatedData = contactSchema.parse(formData);
      setErrors({});
      setIsSubmitting(true);
      lastSubmissionRef.current = now;

      // Security: Additional sanitization before processing
      const sanitizedData = {
        ...validatedData,
        name: sanitizeInput(validatedData.name),
        email: sanitizeInput(validatedData.email),
        company: validatedData.company ? sanitizeInput(validatedData.company) : '',
        message: sanitizeInput(validatedData.message)
      };

      // Simulate form submission with validated data
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });
      }, 2000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "Please Fix Form Errors",
          description: "Check the highlighted fields and try again.",
          variant: "destructive",
        });
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      info: 'benedictpraise653@gmail.com',
      description: 'Send us an email anytime',
      action: 'mailto:benedictpraise653@gmail.com'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      info: '+234 816 789 4509',
      description: 'Quick chat on WhatsApp',
      action: `https://wa.me/${sanitizePhoneNumber('2348167894509')}`
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      info: 'Mon - Fri: 9AM - 6PM EST',
      description: 'We respond within 24 hours',
      action: null
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      info: 'Remote Team, Global Reach',
      description: 'Serving clients worldwide',
      action: null
    }
  ];

  const services = [
    'Graphic Design',
    'Logo & Branding',
    'Print Design',
    'Social Media Graphics',
    'Video Editing',
    'Web Design (Coming Soon)',
    'Photography (Coming Soon)',
    'Digital Marketing (Coming Soon)',
    'Other'
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's start a conversation about your project. 
            We're here to listen, understand, and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in [animation-delay:0.2s]">
            <Card className="card-shadow border-border hover:border-primary/20 smooth-transition">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`smooth-transition focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className={`smooth-transition focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2 text-foreground">
                        Company (Optional)
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        maxLength={150}
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className={`smooth-transition focus:border-primary ${errors.company ? 'border-destructive' : ''}`}
                        aria-describedby={errors.company ? 'company-error' : undefined}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" />
                          {errors.company}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold mb-2 text-foreground">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background smooth-transition focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.service ? 'border-destructive' : ''}`}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p id="service-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" />
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      maxLength={2000}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={6}
                      className={`smooth-transition focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <p id="message-error" className="text-sm text-destructive flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      ) : (
                        <div></div>
                      )}
                      <p className="text-xs text-muted-foreground">
                        {formData.message.length}/2000
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full primary-gradient text-primary-foreground font-semibold hover:shadow-glow smooth-transition disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in [animation-delay:0.4s]">
            <Card className="card-shadow border-border">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach us. Choose what works best for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title} 
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                  >
                    <div className="p-2 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-primary hover:text-primary-glow font-medium smooth-transition"
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.info}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.info}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick WhatsApp */}
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 card-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Need Quick Help?</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Chat with us directly on WhatsApp for immediate assistance
                  </p>
                  <Button 
                    asChild
                    size="sm"
                    className="accent-gradient text-accent-foreground hover:shadow-glow smooth-transition"
                  >
                    <a 
                      href={`https://wa.me/${sanitizePhoneNumber('2348167894509')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle size={16} />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-muted border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold">Quick Response Guarantee</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days. 
                  Urgent projects? Reach out via WhatsApp for faster response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;