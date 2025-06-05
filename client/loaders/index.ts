import {
  getSingleType,
  getAllCollection,
} from "@/lib/sdk";

export async function getGlobalPageData() {
  const globalPageData = await getSingleType("global");
  return globalPageData;
}

export async function getHomePageData(status: string) {
  const homePageData = await getAllCollection("pages", {
    filters: {
      slug: "home-page",
    },
    status: status as "draft" | "published" | undefined,
  });
  return homePageData?.data[0].blocks;
}

export async function getExperienceData() {
  const experienceData = await getAllCollection("experiences");
  return experienceData;
}
