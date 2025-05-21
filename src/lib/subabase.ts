    // المفروض يكون كده مثلًا:
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uulbwmmtduojgoaubeka.supabase.co'; // بدّل بـ Project URL
const supabaseAnonKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1bGJ3bW10ZHVvamdvYXViZWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MjgwODQsImV4cCI6MjA2MzQwNDA4NH0.CGRLsVe__tBrXKLvSNassmiYo5C3T6zXo7lwTdgvOok'; // بدّل بـ anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
