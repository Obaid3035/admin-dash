import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient('https://zpswaazwoxagzlmrcpne.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwc3dhYXp3b3hhZ3psbXJjcG5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5OTg5MDAsImV4cCI6MjAxODU3NDkwMH0.DBWWOW2f4hMhhKWmKxLYC12z0wZHt1lG28zIVDZ7x2E');

export default supabase;