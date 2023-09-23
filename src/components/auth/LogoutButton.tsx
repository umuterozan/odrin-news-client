"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { deleteCookies } from "@/app/auth/actions";
import toast from "react-hot-toast"
const API_URL = "http://localhost:8000"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms)) // temporary func

export default function LogoutButton({ endpoint, text }: { endpoint: string, text: string }) {
  const router = useRouter()
  const [pending, setPending] = useState<boolean>(false)
  
  async function handleLogout() {
    setPending(true)
    await delay(1500)
    await axios.delete(API_URL + "/auth/" + endpoint, { withCredentials: true })
    setPending(false)
    
    if (endpoint === "logout-current" || endpoint === "logout-all") {
      deleteCookies()
      router.push("/")
    }

    router.refresh()
    toast.success('Succesful!')
  }

  return (
    <button disabled={pending} onClick={handleLogout} className="bg-[#666666] text-white w-full p-2 rounded hover:bg-opacity-90 transition-all">
      {pending ? 'Deleting...' : text}
    </button>
  );
}
