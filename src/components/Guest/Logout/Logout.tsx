import { signOut } from "../../../../auth"

export function Logout() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className="lg:text-lg text-base font-medium text-gray-400 hover:text-black
              transition duration-200 ease-in-out  font-sans tracking-tight ">
        Logout
      </button>
    </form>
  )
}