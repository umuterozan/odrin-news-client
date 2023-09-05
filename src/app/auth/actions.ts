'use server'

import axios from "axios"
import { redirect } from "next/navigation"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

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
    redirect('/auth/signin')
  } catch (e) {
    return { message: e.response.data.message }
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
    // ......
  } catch (e) {
    return { message: e.response.data.message }
  }
}