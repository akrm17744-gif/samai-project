import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Supabase Configuration
// These values will be loaded from environment variables during deployment on Vercel.
// For local development, you can use the hardcoded values below or set environment variables.
const SUPABASE_CONFIG = {
    url: import.meta.env.VITE_SUPABASE_URL || 'https://skjddytehplveaeceogb.supabase.co',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyaW5xaXlsZnNpdXhycHlrcXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3OTMyNjMsImV4cCI6MjA3MzM2OTI2M30.Sv-WvrdRzO3kYjBmeGjaY84KUQ7GVaMmt0I7kQpH9-U'
};

// Initialize Supabase client
const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Export configuration for use in other files
window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.supabaseClient = supabase;
