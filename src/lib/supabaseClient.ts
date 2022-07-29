import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.SUPABASE_URL;
const supabaseAnonKey: string = process.env.SUPABASE_AUTH_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
