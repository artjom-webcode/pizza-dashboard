import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sqykbtxflhuybrrrjtim.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxeWtidHhmbGh1eWJycnJqdGltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxMzc1ODcsImV4cCI6MjA1NTcxMzU4N30.URjQDxSmXwnafH_6CYuRUC8lpM-xjrZMW-Qc-a1ilXE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
