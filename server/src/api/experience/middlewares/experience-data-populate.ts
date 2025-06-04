/**
 * `experience-data-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populateQuery = {
  technologies: true,
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
      sort: ["startDate:desc"],
    };
    await next();
  };
};
