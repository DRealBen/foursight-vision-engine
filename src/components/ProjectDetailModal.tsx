import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

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

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ open, onOpenChange, project }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="p-6 md:p-8">
          <DialogHeader className="text-left space-y-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <DialogTitle className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.client} · {project.year}
                </p>
              </div>
            </div>
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

          <div className="mt-8 space-y-6">
            {project.gallery.map((src, index) => (
              <div key={index} className="w-full overflow-hidden rounded-lg border border-border">
                <img
                  src={src}
                  alt={`${project.title} — image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
