import { getAllCollection } from "@/lib/sdk";

export async function getExperienceData() {
  const experienceData = await getAllCollection("experiences");
  return experienceData;
}

