"use server";
import { redirect } from "next/navigation";
import { signIn } from "../../../auth";
import { saltAndHashPassword } from "../../../utils/password";
import DbService from "../../../lib/DbService";

export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user_id = crypto.randomUUID();

  const hashedPassword = await saltAndHashPassword(password);
  const dbService = DbService.getInstance();
  await dbService.createUser(email, name, hashedPassword, user_id);
  await signIn("credentials", { email, password, redirect: false });
  redirect("/");
}
