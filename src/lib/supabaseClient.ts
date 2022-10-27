import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://emxllayyisdskjtscvck.supabase.co";
const supabaseAnonKey: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteGxsYXl5aXNkc2tqdHNjdmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYyNjI2NzIsImV4cCI6MTk3MTgzODY3Mn0.BI4xM-cQS5zrhIIYev_dWaPD65eHTadfvl1zlSEYFi4";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
