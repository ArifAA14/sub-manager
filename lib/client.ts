import { createClient } from "@libsql/client";


const dbUrl = process.env.TURSO_DATABASE_URL;
if (!dbUrl) {
  throw new Error("TURSO_DATABASE_URL is not set");
}

export const turso = createClient({
  url: dbUrl,
  authToken: process.env.TURSO_AUTH_TOKEN,
});