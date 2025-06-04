import { getStrapiURL } from "@/lib/utils";
import { strapi } from "@strapi/client";

const BASE_API_URL = getStrapiURL() + "/api";
const sdk = strapi({ baseURL: BASE_API_URL, auth: process.env.STRAPI_API_KEY });

type StrapiFilterOperator = {
  $eq?: string | number | boolean;
  $ne?: string | number | boolean;
  $gt?: number;
  $gte?: number;
  $lt?: number;
  $lte?: number;
  $in?: (string | number)[];
  $notIn?: (string | number)[];
  $contains?: string;
  $notContains?: string;
  $containsi?: string;
  $notContainsi?: string;
  $null?: boolean;
  $notNull?: boolean;
  $between?: [number, number];
};

type StrapiParams = {
  populate?: string | string[];
  filters?: Record<string, string | number | boolean | StrapiFilterOperator>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
};

async function getAllCollection(collection: string, params: StrapiParams = {}) {
  const collectionData = await sdk.collection(collection).find(params);
  return collectionData;
}

async function getSingleCollection(collection: string, id: string, params: StrapiParams = {}) {
  const singleData = await sdk.collection(collection).findOne(id, params);
  return singleData;
}

async function getSingleType(collection: string, params: StrapiParams = {}) {
  const singleData = await sdk.single(collection).find(params);
  return singleData;
}

export { getAllCollection, getSingleCollection, getSingleType };