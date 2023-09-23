import axios from "axios";
import { ICategory, IPost } from "./types";
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
  try {
    const isVerifyToken = (await axios.get(process.env.API_URL + "/auth/verify-token", {
      headers: {
        Cookie: `${cookie?.name}=${cookie?.value}`
      }
    })).data
  
    return isVerifyToken
  } catch (e: any) {
    return false
  }
}

export async function findSessions(cookie: RequestCookie | undefined) {
  try {
    const data = (await axios.get(process.env.API_URL + "/auth/find-sessions", {
      headers: {
        Cookie: `${cookie?.name}=${cookie?.value}`
      },
    })).data
  
    return data
  } catch (e: any) {
    return null
  }
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

export function parseUserAgent(userAgent: string) {
  const result = {
    browser: "Bilinmiyor",
    os: "Bilinmiyor",
    isMobile: false,
  };

  if (/Windows NT 10.0/.test(userAgent)) {
    result.os = "Windows 10";
  } else if (/Windows NT 6.3/.test(userAgent)) {
    result.os = "Windows 8.1";
  } else if (/Windows NT 6.2/.test(userAgent)) {
    result.os = "Windows 8";
  } else if (/Windows NT 6.1/.test(userAgent)) {
    result.os = "Windows 7";
  } else if (/Windows NT 6.0/.test(userAgent)) {
    result.os = "Windows Vista";
  } else if (/Windows NT 5.1/.test(userAgent)) {
    result.os = "Windows XP";
  } else if (/Android/.test(userAgent)) {
    result.os = "Android";
    result.isMobile = true;
  } else if (/iOS|iPhone|iPad/.test(userAgent)) {
    result.os = "iOS";
    result.isMobile = true;
  } else if (/Mac OS X/.test(userAgent)) {
    result.os = "macOS";
  } else if (/Linux/.test(userAgent)) {
    result.os = "Linux";
  }

  if (/Chrome/.test(userAgent)) {
    result.browser = "Chrome";
  } else if (/Safari/.test(userAgent)) {
    result.browser = "Safari";
  } else if (/Firefox/.test(userAgent)) {
    result.browser = "Firefox";
  } else if (/Edge/.test(userAgent)) {
    result.browser = "Edge";
  } else if (/Opera/.test(userAgent)) {
    result.browser = "Opera";
  }

  return result;
}