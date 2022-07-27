import { createClient } from "supabase";
import { config } from "config";

const url: string = config().SB_URL;
const key: string = config().SB_ANON_KEY;

export const supabase = createClient(url, key);
