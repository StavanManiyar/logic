import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fallback for development/demo purposes
const defaultUrl = 'https://demo.supabase.co';
const defaultKey = 'demo-key';

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('demo') || supabaseAnonKey.includes('demo')) {
  console.warn('⚠️  Using demo Supabase configuration. Please update your .env file with actual Supabase credentials.');
  console.warn('⚠️  Authentication and data persistence will not work with demo credentials.');
}

const finalUrl = supabaseUrl || defaultUrl;
const finalKey = supabaseAnonKey || defaultKey;

export const supabase = createClient(finalUrl, finalKey);
