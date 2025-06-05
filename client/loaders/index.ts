import { getSingleType, getAllCollection } from "@/lib/sdk";

export async function getGlobalPageData() {
  const globalPageData = await getSingleType("global");
  return globalPageData;
}

export async function getHomePageData() {
  const homePageData = await getSingleType("home-page");
  return homePageData;
}

export async function getExperienceData() {
  const experienceData = await getAllCollection("experiences");
  return experienceData;
}
