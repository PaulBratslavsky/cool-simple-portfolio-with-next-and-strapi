import Link from "next/link";
import { StrapiImage } from "../strapi-image";

interface LogoProps {
  image: {
    url: string;
    alternativeText: string | null;
  };
  link: {
    href: string;
    label: string;
  };
}

export function LogoLink({ image, link }: LogoProps) {
  return (
    <Link href={link.href} className="flex items-center gap-2">
      <StrapiImage
        src={image.url}
        alt={image.alternativeText}
        width={32}
        height={32}
        className="dark:invert"
      />
      <span className="text-sm font-bold text-foreground">{link.label}</span>
    </Link>
  );
}
