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
      "blocks.hero": {
        populate: {
          cta: true,
          image: {
            fields: ["url", "alternativeText", "name"],
          },
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
