import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  client: string;
  year: string;
  description: string;
  tags: string[];
  gallery: string[];
}

interface ProjectDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

const AUTOPLAY_MS = 3000;

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ open, onOpenChange, project }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const gallery = project?.gallery ?? [];
  const total = gallery.length;

  const clearTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!open || paused || total <= 1) return;
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTOPLAY_MS);
    return clearTimer;
  }, [current, open, paused, total]);

  useEffect(() => {
    if (!open) {
      setCurrent(0);
      setLightboxSrc(null);
    }
  }, [open]);

  const go = (dir: number) => {
    clearTimer();
    setCurrent((c) => (c + dir + total) % total);
  };

  if (!project) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto p-0">
          <div className="p-6 md:p-8">
            <DialogHeader className="text-left space-y-3">
              <DialogTitle className="text-2xl md:text-3xl font-bold">
                {project.title}
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                {project.client} · {project.year}
              </p>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                {project.description}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </DialogHeader>

            {/* Carousel */}
            {total > 0 && (
              <div
                className="relative mt-8 overflow-hidden rounded-lg border border-border bg-muted"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="relative w-full aspect-[16/10] bg-background">
                  {gallery.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} — slide ${i + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        i === current ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>

                {total > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous slide"
                      onClick={() => go(-1)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-md smooth-transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next slide"
                      onClick={() => go(1)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-md smooth-transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                      {gallery.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          aria-label={`Go to slide ${i + 1}`}
                          onClick={() => {
                            clearTimer();
                            setCurrent(i);
                          }}
                          className={`h-2 rounded-full smooth-transition ${
                            i === current ? 'w-6 bg-primary' : 'w-2 bg-background/70 hover:bg-background'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* All Assets grid */}
            {total > 0 && (
              <section className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">All Assets</h3>
                <div className="grid grid-cols-2 gap-4">
                  {gallery.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setLightboxSrc(src)}
                      className="group relative overflow-hidden rounded-lg border border-border bg-muted aspect-[4/3] smooth-transition hover:border-primary/40"
                    >
                      <img
                        src={src}
                        alt={`${project.title} — asset ${i + 1}`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] smooth-transition"
                      />
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <Button
            size="icon"
            variant="outline"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxSrc(null);
            }}
            className="absolute top-4 right-4 rounded-full bg-background/90 hover:bg-background"
          >
            <X className="w-5 h-5" />
          </Button>
          <img
            src={lightboxSrc}
            alt="Asset preview"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProjectDetailModal;
