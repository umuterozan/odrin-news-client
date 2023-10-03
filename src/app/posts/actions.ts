'use server'

import axios from "axios"
import { cookies } from "next/headers"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms)) // temporary func

export async function createPost(formData: FormData, base64String: string) {
  await delay(1500)
  try {
    const res = await axios.post(process.env.API_URL + "/posts/create", {
      thumbnail: base64String,
      title: formData.get("title"),
      body: formData.get("body"),
      categoryId: Number(formData.get("category")),
    }, {
      headers: {
        Cookie: `accessToken=${cookies().get('accessToken')?.value}`
      }
    })
    return { ok: true, slug: res.data.slug }
  } catch (e: any) {
    return { message: e.response?.data?.message }
  }
}

export async function createComment(formData: FormData, postId: number) {
  await delay(1500)
  try {
    await axios.post(process.env.API_URL + "/comments/create", {
      text: formData.get("comment"),
      postId,
    }, {
      headers: {
        Cookie: `accessToken=${cookies().get('accessToken')?.value}`
      }
    })
    return { ok: true }
  } catch (e: any) {
    return { message: e.response?.data?.message }
  }
}