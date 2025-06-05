import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContentWithImageProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "@/components/strapi-image";

export function ContentWithImage({
  badge,
  heading,
  content,
  isReversed,
  sectionLink,
  image,
  links,
}: ContentWithImageProps) {
  return (
    <section
      id={sectionLink || ""}
      className="relative py-20 px-6 scroll-mt-20"
    >
      <div className="max-w-screen-md mx-auto">
        <div
          className={`flex flex-col md:flex-row gap-12 ${
            isReversed ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image - visible on all screens */}
          {image && (
            <div className="w-full md:w-auto">
              <div className="w-full md:w-64 h-48 md:h-64">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
                  <StrapiImage
                    src={image.url}
                    alt={image.alternativeText}
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              {badge}
            </Badge>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              {heading}
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">{content}</p>
            <div className="flex flex-wrap gap-4 justify-start">
              {links?.map((link) => (
                <Button
                  asChild
                  key={link.href}
                  className="rounded-full"
                  variant={link.style === "PRIMARY" ? "default" : "outline"}
                >
                  <Link
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
