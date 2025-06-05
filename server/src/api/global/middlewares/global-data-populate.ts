/**
 * `global-data-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populateQuery = {
  logo: {
    populate: {
      image: {
        fields: ["url", "alternativeText", "width", "height"],
      },
      link: true,
    },
  },
  navigation: {
    populate: {
      navItems: true,
    },
  },
  socialLinks: {
    populate: {
      socialLink: true,
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In global-data-populate middleware.");

    ctx.query = {
      populate: populateQuery,
    };
    await next();
  };
};
