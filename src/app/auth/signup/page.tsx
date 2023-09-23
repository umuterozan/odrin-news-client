import SignupForm from "@/components/auth/SignupForm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/lib/actions"

export default async function SignupPage() {
  const isVerifyToken = await verifyToken(cookies().get('accessToken'))
  if (isVerifyToken) return redirect('/')

  return (
    <section className="my-14">
      <div className="container mx-auto flex justify-center">
        <SignupForm />
      </div>      
    </section>
  )
}