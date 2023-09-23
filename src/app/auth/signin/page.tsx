import SigninForm from "@/components/auth/SigninForm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/lib/actions"

export default async function SigninPage() {
  const isVerifyToken = await verifyToken(cookies().get('accessToken'))
  if (isVerifyToken) return redirect('/')

  return (
    <section className="my-14">
      <div className="container mx-auto flex justify-center">
        <SigninForm />
      </div>
    </section>
  )
}