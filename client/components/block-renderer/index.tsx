import type { Block } from "@/types";

import { Hero } from "@/components/block-renderer/blocks/hero";
import { HeadingSection } from "@/components/block-renderer/blocks/heading-section";
import { FeaturedExperience } from "@/components/block-renderer/blocks/featured-experience";
import { FeaturedProjects } from "@/components/block-renderer/blocks/featured-projects";
import { ContentWithImage } from "@/components/block-renderer/blocks/content-with-image";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero":
      return <Hero key={index} {...block} />;
    case "blocks.section-heading":
      return <HeadingSection key={index} {...block} />;
    case "blocks.content-with-image":
      return <ContentWithImage key={index} {...block} />;
    case "blocks.featured-experience":
      return <FeaturedExperience key={index} {...block} />;
    case "blocks.featured-projects":
      return <FeaturedProjects key={index} {...block} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
