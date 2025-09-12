import signInApi from "@/axios/api/signInApi";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// utils/Cookie.ts
export class Cookie {
    static set(name: string, value: string, days: number) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Strict`;
    }

    static get(name: string): string | null {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [key, val] = cookie.split("=");
            if (key === name) return decodeURIComponent(val);
        }
        return null;
    }

    static delete(name: string) {
        this.set(name, "", -1);
    }
}

interface AuthState {
    auth: any;
    signIn: (payload: any) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => (
    {
        auth: Cookie.get("session") || null,
        signIn: async (payload: any) => {
            console.log('payload: ', payload);

            const test = await signInApi.signIn(payload);
            Cookie.set('tho', `Bearer ${test.accessToken}`, 7)
            set({
                auth: test
            })
        }
    }
))