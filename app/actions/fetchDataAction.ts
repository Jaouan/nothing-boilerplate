"use server";

import { createClient } from "@/lib/supabase/server";

export async function fetchDataAction() {
	const supabase = await createClient();
	const { data, error } = await supabase.from("my_test").select("*");
	return { data, error };
}
