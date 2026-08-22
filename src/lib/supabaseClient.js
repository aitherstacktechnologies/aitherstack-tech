import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase.com/dashboard/project/xivyuyisbcsrrcvzzvjd/settings/api-keys';
const supabaseAnonKey = 'sb_publishable_gsgOaEfMKhHnW7ZljptBiw_TrEBWcqw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);