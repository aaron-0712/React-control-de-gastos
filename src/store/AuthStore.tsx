import { create } from "zustand";
import { supabase } from "../index";

export const useAuthStore = create((_set) => ({
    isAuthenticated: false,
    SignInWithGoogle: async () => {
        try {
            await supabase.auth.signInWithOAuth({
                provider: "google",
            });
        } catch {}
    },
}));
