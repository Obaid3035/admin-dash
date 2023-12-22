import { PostgrestError } from "@supabase/supabase-js";
import supabase from "./index";
import { User } from "./types";
import { UUID } from "crypto";

export const getUsers = async (): Promise<{
  data: User[] | null;
  error: Error | PostgrestError | null;
}> => {
  const { data, error } = await supabase.from("users").select("*");
  return { data, error };
};

export const getUserById = async (
  userId: number
): Promise<{ data: User[] | null; error: Error | PostgrestError | null }> => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId);
  return { data, error };
}

export const updateUser = async (
  userId: UUID,
  updates: Partial<User>
): Promise<{ data: User[] | null; error: Error | PostgrestError | null }> => {
  const { data, error } = await supabase
    .from("users")
    .update(updates)
    .eq("id", userId);
  return { data, error };
};

// quick test of the above
// (async () => {
//   console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
//   const { data, error } = await updateUser('5b922994-ba08-4096-aa76-1ebef6b9f37c', { payed: false, blocked: true })
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//   }
// })();