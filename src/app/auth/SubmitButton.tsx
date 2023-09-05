'use client'

import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit" className="bg-[#666666] text-white w-full p-2 rounded hover:bg-opacity-90 transition-all">{pending ? 'Submitting...' : text}</button>
  )
}