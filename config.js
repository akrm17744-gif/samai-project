// Supabase Configuration
// Replace these values with your actual Supabase project credentials
const SUPABASE_CONFIG = {
    url: 'https://skjddytehplveaeceogb.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyaW5xaXlsZnNpdXhycHlrcXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3OTMyNjMsImV4cCI6MjA3MzM2OTI2M30.Sv-WvrdRzO3kYjBmeGjaY84KUQ7GVaMmt0I7kQpH9-U'
};

// Initialize Supabase client
let supabase;
if (typeof window !== 'undefined' && window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
}

// Export configuration for use in other files
window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.supabaseClient = supabase;

