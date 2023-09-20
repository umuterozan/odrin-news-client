import axios from "axios";
import { ICategory, IPost } from "./types";

export async function getPosts(limit: number = 0, sort: string = '', order: 'ASC' | 'DESC' = 'ASC') {
  const posts: IPost[] = (await axios.get(process.env.API_URL + `/posts?limit=${limit}&sort=${sort}&order=${order}`)).data
  return posts
}

export async function getCategories(limit: number = 0, sort: string = '', order: 'ASC' | 'DESC' = 'ASC') {
  const categories: ICategory[] = (await axios.get(process.env.API_URL + `/categories?limit=${limit}&sort=${sort}&order=${order}`)).data
  return categories
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