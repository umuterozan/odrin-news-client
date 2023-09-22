import axios from "axios";
import { ICategory, ICookie, IPost } from "./types";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function getPosts(limit: number = 0, sort: string = '', order: 'ASC' | 'DESC' = 'ASC') {
  const posts: IPost[] = (await axios.get(process.env.API_URL + `/posts?limit=${limit}&sort=${sort}&order=${order}`)).data
  return posts
}

export async function getCategories(limit: number = 0, sort: string = '', order: 'ASC' | 'DESC' = 'ASC') {
  const categories: ICategory[] = (await axios.get(process.env.API_URL + `/categories?limit=${limit}&sort=${sort}&order=${order}`)).data
  return categories
}

export async function verifyToken(cookie: RequestCookie | undefined) {
  return (await axios.get(process.env.API_URL + "/auth/verify-token", {
    headers: {
      Cookie: `${cookie?.name}=${cookie?.value}`
    }
  })).data
}

export async function findSessions(cookie: RequestCookie | undefined) {
  return (await axios.get(process.env.API_URL + "/auth/find-sessions", {
    headers: {
      Cookie: `${cookie?.name}=${cookie?.value}`
    }
  })).data
}

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export function formatDate(date: any) {
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}