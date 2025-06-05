import { getHomePageData } from "@/loaders";
import { BlockRenderer } from "@/components/block-renderer";
import { Block } from "@/types";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";


async function loader(status: string): Promise<Block[]> {
  try {
    const data = await getHomePageData(status);
    if (!data) return notFound();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default async function Home() {
  const { isEnabled: isDraftMode } = await draftMode();
  const status = isDraftMode ? "draft" : "published";
  const data = await loader(status);
  return <div>{data ? <BlockRenderer blocks={data} /> : null}</div>;
}
