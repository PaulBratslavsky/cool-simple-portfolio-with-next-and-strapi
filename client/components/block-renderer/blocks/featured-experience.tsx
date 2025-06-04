import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { FeaturedExperienceProps, Experience } from "@/types";

export function FeaturedExperience({ experiences }: FeaturedExperienceProps) {
  return (
    <section id="experience" className="relative py-10 px-6 scroll-mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="relative">
          {experiences.map((experience, index: number) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperience;


function ExperienceItem({ experience }: { experience: Experience }) {
  const { company, description, startDate, endDate, role, technologies } = experience;
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{role}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech.id} variant="secondary" className="rounded-full">
              {tech.title}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};