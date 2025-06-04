import { getHomePageData } from "@/loaders";
import { BlockRenderer } from "@/components/block-renderer";
import { Block } from "@/types";
import { notFound } from "next/navigation";

async function loader(): Promise<Block[]> {
  try {
    const data = await getHomePageData();
    if (!data?.data?.blocks) return notFound();
    return data.data.blocks;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default async function Home() {
  const data = await loader();

  return <div>{data ? <BlockRenderer blocks={data} /> : null}</div>;
}
