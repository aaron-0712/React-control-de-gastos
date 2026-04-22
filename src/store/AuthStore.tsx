import { create } from "zustand";
import { supabase } from "../index";

export const useAuthStore = create((set) => ({
    isAuthenticated: false,
    SignInWithGoogle: async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
            });
        } catch (error) {}
    },
}));
