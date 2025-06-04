import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { GithubLogo } from "@/components/icons";
import { FeaturedProjectsProps, Project } from "@/types";
import { StrapiImage } from "@/components/strapi-image";


export function FeaturedProjects({ projects }: FeaturedProjectsProps) {

  return (
    <section id="projects" className="relative py-10 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};


function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <StrapiImage
          src={project.image.url}
          alt={project.image.alternativeText || project.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech.id} variant="secondary" className="rounded-full">
              {tech.title}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {project.liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};