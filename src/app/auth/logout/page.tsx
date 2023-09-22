import { cookies } from "next/headers";
import { findSessions } from "@/lib/actions";
import SubmitButton from "../SubmitButton";

export default async function LogoutPage() {
  const sessions = await findSessions(cookies().get('accessToken'))

  return (
    <section className="my-14">
      <div className="container mx-auto">
        <div>
          <div className="border-2 bg-white p-5">
            <h1 className="text-[#0E0E0E] font-bold">Session ID: 1</h1>
            <p className="text-[#666666] font-semibold">agent buraya</p>
            <button className="bg-[#666666] text-white w-full p-2 rounded hover:bg-opacity-90 transition-all">Log out</button>
          </div>
        </div>
      </div>
    </section>
  );
}
