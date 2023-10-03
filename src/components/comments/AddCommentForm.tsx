"use client";

import { createComment } from "@/app/posts/actions";
import { useState, useRef } from "react";
import SubmitButton from "@/app/auth/SubmitButton";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddCommentForm({ postId }: { postId: number }) {
  const [messages, setMessages] = useState<string[]>([]);
  const router = useRouter();
  const formRef: any = useRef()

  async function sendData(formData: FormData) {
    const res = await createComment(formData, postId);
    if (res.message) {
      const messages = Array.isArray(res.message) ? res.message : [res.message];
      setMessages(messages);
      toast.error("Errors exist.");
    }
    if (res.ok) {
      router.refresh();
      setMessages([])
      formRef.current.reset()
      toast.success("Successful!");
    }
  }

  return (
    <form action={sendData} ref={formRef}>
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

      <div className="mb-4">
        <label htmlFor="username" className="text-sm text-[#666666]">
          Add Comment
        </label>
        <div className="mt-1 flex items-center">
          <input
            type="text"
            name="comment"
            className="w-full border-2 rounded p-2 outline-none hover:border-[#666] focus:border-[#666] transition-all"
          />
          <div>
            <SubmitButton text="Add!" />
          </div>
        </div>
      </div>
    </form>
  );
}
