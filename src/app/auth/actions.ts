'use server'

import axios from "axios"
import { cookies } from "next/headers"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms)) // temporary func

export async function createUser(formData: FormData) {
  await delay(1500)
  try {
    await axios.post(process.env.API_URL + "/auth/signup", {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    })
    return { ok: true }
  } catch (e: any) {
    return { message: e.response?.data?.message }
  }
}

export async function findUser(formData: FormData, agent: string) {
  await delay(1500)
  try {
    const res = await axios.post(process.env.API_URL + "/auth/signin", {
      username: formData.get("username"),
      password: formData.get("password"),
      agent,
    })
    cookies().set('username', res.data.username)
    cookies().set('accessToken', res.data.accessToken, { httpOnly: true })
    cookies().set('refreshToken', res.data.refreshToken, { httpOnly: true })
    return { ok: true }
  } catch (e: any) {
    return { message: e.response.data.message }
  }
}

export async function deleteCookies() {
  cookies().delete('username')
  cookies().delete('accessToken')
  cookies().delete('refreshToken')
}