import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://hcxshxnsjkbjgrhrwlgh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjeHNoeG5zamtiamdyaHJ3bGdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzkyMjUsImV4cCI6MjA0MjI1NTIyNX0.8KSXDUOeMnabphDZdN8lWH-laB935Kvm6QmBOmg-jE8"
)