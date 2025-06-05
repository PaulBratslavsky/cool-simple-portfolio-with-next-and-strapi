// app/api/preview/route.ts

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

function getPreviewPath(
  contentType: string | undefined,
  slug: string | null,
  locale: string | null,
  status: string | null
): string {
  const basePath = (() => {
    if (!contentType) return "/";

    if (contentType === "page" || contentType.includes("pages")) {
      // If it's a page but no slug is provided, it's the home page
      if (!slug) return "/";
      return "/pages/" + slug;
    }

    // Can add other content types here

    // if (contentType === 'page' || contentType.includes('pages')) {
    //   return slug ? '/' + slug : '/';
    // }

    return "/" + contentType;
  })();

  const localePath =
    locale && locale !== "en" ? "/" + locale + basePath : basePath;
  const statusParam = status ? "?status=" + status : "";
  return localePath + statusParam;
}

export const GET = async (request: Request) => {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const searchParamsData = Object.fromEntries(searchParams);
  const { secret, slug, locale, uid, status } = searchParamsData;

  // Check the secret and next parameters
  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const contentType = uid?.split(".").pop();
  const finalPath = getPreviewPath(contentType, slug, locale, status);

  // Enable Draft Mode by setting the cookie
  const draft = await draftMode();

  if (status === "draft") {
    draft.enable();
  } else {
    draft.disable();
  }

  // Redirect to the path from the fetched post
  redirect(finalPath);
};