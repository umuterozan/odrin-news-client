export default function LoginPage() {
  return (
    <section className="mt-14">
      <div className="container mx-auto flex justify-center">
        <form action="" className="w-1/4">
          <div className="text-center text-2xl font-medium mb-4 border-b-2 pb-2">Login</div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="username" className="text-sm text-[#666666]">Username</label>
            <input type="text" name="username" className="border-2 rounded p-2 outline-none hover:border-[#666] focus:border-[#666] transition-all" />
          </div>
          <div className="flex flex-col gap-y-1 mb-4">
            <label htmlFor="password" className="text-sm text-[#666666]">Password</label>
            <input type="text" name="password" className="border-2 rounded p-2 outline-none hover:border-[#666] focus:border-[#666] transition-all" />
          </div>
          <div>
            <button type="submit" className="bg-[#666666] text-white w-full p-2 rounded hover:bg-opacity-90 transition-all">Login!</button>
          </div>
        </form>
      </div>
    </section>
  )
}