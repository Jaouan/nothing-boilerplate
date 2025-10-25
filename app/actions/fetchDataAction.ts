"use server";

import { createClient } from "@/lib/auth/supabase/server-client";

export async function fetchDataAction() {
	const supabase = await createClient();
	const { data, error } = await supabase.from("my_test").select("*");
	return { data, error };
}
