"use server";

import { getServerSession } from "next-auth";
import authOptions from "./authOptions";

export default async function getSession() {
  const session = await getServerSession(authOptions);

  if (!session) return;

  return session;
}
