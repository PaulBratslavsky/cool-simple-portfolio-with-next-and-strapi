import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { getExperienceData } from "@/loaders";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";


export type Technology = {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  createdAt: string; 
  updatedAt: string;
  publishedAt: string;
}

export type Experience = {
  id: number;
  documentId: string;
  company: string;
  description: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  role: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  technologies: Technology[];
}

type Meta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface ExperienceProps {
  data: Experience[];
  meta: Meta;
}

async function loader(): Promise<ExperienceProps> {
  try {
    const data = await getExperienceData();
    if (!data?.data) return notFound();
    return {
      data: data?.data as Experience[],
      meta: data?.meta as Meta,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function Experience() {
  const { data } = await loader();

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {data.map((experience: Experience, index: number) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


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