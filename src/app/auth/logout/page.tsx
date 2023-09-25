import { cookies } from "next/headers";
import { findSessions, formatDate, parseUserAgent, verifyToken } from "@/lib/actions";
import Image from "next/image";
import { ISession } from "@/lib/types";
import LogoutButton from "@/components/auth/LogoutButton";
import { redirect } from "next/navigation"

export default async function LogoutPage() {
  const isVerifyToken = await verifyToken(cookies().get('accessToken'))
  if (!isVerifyToken) return redirect('/')

  const data = await findSessions(cookies().get('accessToken'))
  const currentSession = data.currentSession
  const sessions = data.sessions

  return (
    <section className="my-14">
      <div className="container mx-auto">
        <h1 className="text-[#0E0E0E] text-4xl font-medium text-center border-b-2 pb-2">Sessions</h1>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {sessions && sessions.map((session: ISession) => (
            <div key={session.id} className={`${session.id === currentSession && 'border-[#666666] -order-last'} bg-white border-2 p-5 flex flex-col items-center`}>
              <Image
                width={128} height={128}
                src={parseUserAgent(session.agent).isMobile ? "https://cdn.discordapp.com/attachments/1086616867264811090/1154799685639340153/android.png" : "https://cdn.discordapp.com/attachments/1086616867264811090/1154799665867395103/pc.png"}
                alt="device photo"
              />
              <h3 className="text-[#0E0E0E] font-medium text-sm mb-1">Session ID: {session.id} {session.id === currentSession && '(current)'}</h3>
              <h3 className="text-[#0E0E0E] font-medium text-sm mb-1">OS: {parseUserAgent(session.agent).os}</h3>
              <h3 className="text-[#0E0E0E] font-medium text-sm mb-1">Browser: {parseUserAgent(session.agent).browser}</h3>
              <h3 className="text-[#0E0E0E] font-medium text-sm mb-4">Created at: {formatDate(new Date(session.createdAt))}</h3>
              <LogoutButton endpoint={session.id === currentSession ? 'logout-current' : `logout-one/${session.id}`} text="Log out" />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <LogoutButton endpoint={`logout-all`} text="Log out all" />
        </div>
      </div>
    </section>
  );
}
