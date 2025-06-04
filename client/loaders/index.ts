import { getSingleType, getAllCollection } from "@/lib/sdk";

export async function getExperienceData() {
  const experienceData = await getAllCollection("experiences");
  return experienceData;
}

  export async function getHomePageData() {
    const homePageData = await getSingleType("home-page");
  return homePageData;
}
