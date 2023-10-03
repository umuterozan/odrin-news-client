import AddPostModal from "@/components/posts/AddPostModal"
import PostList from "@/components/posts/PostList"
import { getCategories } from "@/lib/actions"
import { ICategory } from "@/lib/types"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyToken } from "@/lib/actions"
import { Suspense } from "react"

export default async function PostsPage() {
  const isVerifyToken = await verifyToken(cookies().get('accessToken'))
  if (!isVerifyToken) return redirect('/')
  
  const categories: ICategory[] = await getCategories()

  return (
    <section className="my-14">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div></div>
          <h1 className="text-text-one text-4xl text-center font-medium border-b-2 pb-2">Posts</h1>
          <AddPostModal categories={categories} />
        </div>
        <Suspense fallback={<div>Posts loading...</div>}>
          <PostList />
        </Suspense>
      </div>
    </section>
  )
}