import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
          {/* 404 Visual */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
              404
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the URL incorrectly.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                asChild 
                size="lg"
                className="primary-gradient text-primary-foreground font-semibold hover:shadow-glow smooth-transition"
              >
                <Link to="/" className="flex items-center gap-2">
                  <Home size={20} />
                  Go to Homepage
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="hover:border-primary hover:text-primary smooth-transition"
                onClick={() => window.history.back()}
              >
                <button className="flex items-center gap-2">
                  <ArrowLeft size={20} />
                  Go Back
                </button>
              </Button>
            </div>

            {/* Help Text */}
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you think this is an error or need assistance, feel free to contact us.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-primary">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
