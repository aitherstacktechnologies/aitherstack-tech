import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase.com/dashboard/project/evpdszaxnkxursicwjhl/settings/api-keys';
const supabaseAnonKey = 'sb_publishable_sMheJPnU8xme7aWkuYhBwQ_F33cC3WM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);