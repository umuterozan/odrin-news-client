"use client";

import { createPost } from "@/app/posts/actions";
import { useState } from "react";
import SubmitButton from "@/app/auth/SubmitButton";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ICategory } from "@/lib/types";

export default function AddPostForm({
  categories,
}: {
  categories: ICategory[];
}) {
  const [messages, setMessages] = useState<string[]>([]);
  const router = useRouter();

  function getBase64String(file: any) {
    if (!file.name) return null

    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
    })
  }

  async function sendData(formData: FormData) {
    const base64String: any = await getBase64String(formData.get("thumbnail"))
    const res = await createPost(formData, base64String);
    if (res.message) {
      const messages = Array.isArray(res.message) ? res.message : [res.message];
      setMessages(messages)
      toast.error("Errors exist.");
    }
    if (res.ok) {
      router.push(`/posts/${res.slug}`);
      toast.success("Successful", { duration: 6000 });
    }
  }

  return (
    <form action={sendData}>
      <div className="text-center text-2xl font-medium mb-4 border-b-2 pb-2 mt-2">
        Add Post
      </div>
      <div
        className={`${
          messages.length === 0 ? "hidden" : ""
        } bg-red-600 py-1 px-2 rounded text-white text-xs mb-4 grid gap-y-1 divide-y-2 divide-white divide-opacity-25`}
      >
        {messages.map((message, index) => (
          <div key={index} className="flex items-center gap-x-2 pt-1">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
              </svg>
            </div>
            <div>{message}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-1 mb-4">
        <label htmlFor="category" className="text-sm text-[#666666]">
          Category
        </label>
        <select
          name="category"
          className="border-2 rounded p-2 outline-none hover:border-[#666] focus:border-[#666] transition-all"
        >
          <option value="" selected disabled hidden>
            ...
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-y-1 mb-4">
        <label htmlFor="thumbnail" className="text-sm text-[#666666]">
          Thumbnail
        </label>
        <input
          type="file"
          name="thumbnail"
          accept="image/png, image/jpeg"
          className="border-2 rounded p-2 outline-none hover:border-[#666] focus:border-[#666] transition-all"
        />
      </div>
      <div className="flex flex-col gap-y-1 mb-4">
        <label htmlFor="title" className="text-sm text-[#666666]">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="border-2 rounded p-2 outline-none hover:border-[#666] focus:border-[#666] transition-all"
        />
      </div>
      <div className="flex flex-col gap-y-1 mb-4">
        <label htmlFor="body" className="text-sm text-[#666666]">
          Body
        </label>
        <textarea
          name="body"
          rows={10}
          className="border-2 rounded p-2 outline-none hover:border-[#666] focus:border-[#666] transition-all"
        />
      </div>
      <div>
        <SubmitButton text="Add!" />
      </div>
    </form>
  );
}
