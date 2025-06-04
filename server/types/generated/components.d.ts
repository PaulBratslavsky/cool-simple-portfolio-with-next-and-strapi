import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_with_images';
  info: {
    displayName: 'Content With Image';
  };
  attributes: {
    badge: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isReversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    links: Schema.Attribute.Component<'shared.link', true>;
    sectionLink: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedExperience extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_experiences';
  info: {
    displayName: 'Featured Experience';
  };
  attributes: {
    experiences: Schema.Attribute.Relation<
      'oneToMany',
      'api::experience.experience'
    >;
  };
}

export interface BlocksFeaturedProjects extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_projects';
  info: {
    displayName: 'Featured Projects';
  };
  attributes: {
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    cta: Schema.Attribute.Component<'shared.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
  };
}

export interface BlocksSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    badge: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    sectionLink: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']> &
      Schema.Attribute.DefaultTo<'PRIMARY'>;
  };
}

export interface SharedTasks extends Struct.ComponentSchema {
  collectionName: 'components_shared_tasks';
  info: {
    displayName: 'Task';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.content-with-image': BlocksContentWithImage;
      'blocks.featured-experience': BlocksFeaturedExperience;
      'blocks.featured-projects': BlocksFeaturedProjects;
      'blocks.hero': BlocksHero;
      'blocks.section-heading': BlocksSectionHeading;
      'shared.link': SharedLink;
      'shared.tasks': SharedTasks;
    }
  }
}
