import SigninForm from "@/components/auth/SigninForm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function SigninPage() {
  if(cookies().get('accessToken')?.value) redirect('/')

  return (
    <section className="my-14">
      <div className="container mx-auto flex justify-center">
        <SigninForm />
      </div>
    </section>
  )
}