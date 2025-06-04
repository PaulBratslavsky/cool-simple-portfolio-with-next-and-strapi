import type { Schema, Struct } from '@strapi/strapi';

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
      'blocks.featured-experience': BlocksFeaturedExperience;
      'blocks.hero': BlocksHero;
      'blocks.section-heading': BlocksSectionHeading;
      'shared.link': SharedLink;
      'shared.tasks': SharedTasks;
    }
  }
}
