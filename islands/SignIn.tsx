/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { supabase } from "../clients/supabase.ts";

export default function SignIn() {
  const signIn = async () =>{
    const {user, session, error} = await supabase.auth.signIn({
      provider: 'twitter'
    });

    if (error) {
      console.log(error);
      return;
    }

    console.log('signed in');
  }
    return(
        <button class={tw`bg-gray-100 w-6/12 py-2 rounded-md`} onClick={signIn}>
          <p>Sign in with Twitter</p>
        </button>
    )
}