import { Badge } from "@/components/ui/badge";
import { SectionHeadingProps } from "@/types";

export function HeadingSection({
  heading,
  subHeading,
  badge,
  sectionLink,
}: SectionHeadingProps) {
  return (
    <section id={sectionLink} className="relative py-10 px-6 scroll-mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            {badge}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {heading}
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            {subHeading}
          </p>
        </div>
      </div>
    </section>
  );
}
