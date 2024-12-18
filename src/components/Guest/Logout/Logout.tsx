import { signOut } from "../../../../auth"

export function Logout() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className="lg:text-lg text-base font-medium font-sans tracking-tight text-black">
        Logout
      </button>
    </form>
  )
}