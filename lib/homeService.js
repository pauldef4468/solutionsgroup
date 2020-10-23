import http from "./httpService";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getHomeInfo() {
  const url = `${STRAPI_URL}/home`;
  return await http.get(url);
}
