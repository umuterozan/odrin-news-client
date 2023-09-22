'use client'

import { findUser } from "@/app/auth/actions"
import { useState } from "react"
import SubmitButton from "@/app/auth/SubmitButton"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function SigninForm() {
  const [messages, setMessages] = useState<string[]>([])
  const router = useRouter()

  async function sendData(formData: FormData) {
    const res = await findUser(formData, navigator.userAgent)
    if (res.message) {
      const messages = Array.isArray(res.message) ? res.message : [res.message];
      setMessages(messages);
      toast.error('Errors exist.');
    }
    if (res.ok) {
      router.push('/')
      toast.success('Successful!')
    }
  }

  return (
    <form action={sendData} className="w-1/4">
      <div className="text-center text-2xl font-medium mb-4 border-b-2 pb-2">Sign in</div>
      <div className={`${messages.length === 0 ? 'hidden' : ''} bg-red-600 py-1 px-2 rounded text-white text-xs mb-4 grid gap-y-1 divide-y-2 divide-white divide-opacity-25`}>
        {messages.map((message) => (
          <div className="flex items-center gap-x-2 pt-1">
            <div>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
            </div>                
            <div>{message}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-1 mb-4">
        <label htmlFor="username" className="text-sm text-[#666666]">Username</label>
        <input type="text" name="username" className="border-2 rounded p-2 outline-none hover:border-[#666] focus:border-[#666] transition-all" />
      </div>
      <div className="flex flex-col gap-y-1 mb-4">
        <label htmlFor="password" className="text-sm text-[#666666]">Password</label>
        <input type="text" name="password" className="border-2 rounded p-2 outline-none hover:border-[#666] focus:border-[#666] transition-all" />
      </div>
      <div>
        <SubmitButton text="Sign in!" />
      </div>
    </form>
  )
}