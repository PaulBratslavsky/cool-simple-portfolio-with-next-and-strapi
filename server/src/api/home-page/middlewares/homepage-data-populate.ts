/**
 * `experience-data-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populateQuery = {
  blocks: {
    on: {
      "blocks.featured-experience": {
        populate: {
          experiences: {
            populate: {
              technologies: true,
            },
            sort: "startDate:desc",
          },
        },
      },
      "blocks.featured-projects": {
        populate: {
          projects: {
            populate: {
              technologies: true,
              image: {
                fields: ["url", "alternativeText", "name"],
              },
            },

            sort: "createdAt:desc",
          },
        },
      },
      "blocks.hero": {
        populate: {
          cta: true,
          image: {
            fields: ["url", "alternativeText", "name"],
          },
        },
      },
      "blocks.content-with-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText", "name"],
          },
          links: true,
        },
      },
      "blocks.section-heading": true,
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.

  console.log("--------------------------------");
  console.log("From experience-data-populate middleware");
  console.log("--------------------------------");

  return async (ctx, next) => {
    strapi.log.info("In global-data-populate middleware.");
    ctx.query = {
      ...ctx.query,
      populate: populateQuery,
    };
    await next();
  };
};
