import { createClient } from "supabase";
import {configSync} from "config";

const url: string = Deno.env.get("SB_URL") || configSync().SB_URL;
const key: string = Deno.env.get("SB_ANON_KEY") || configSync().SB_ANON_KEY;

export const supabase = createClient(url, key);
