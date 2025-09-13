import signInApi from "@/axios/api/signInApi";
import { create } from "zustand";
import Cookies from "js-cookie";

interface AuthState {
  auth: any;
  signIn: (payload: any) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  auth: null,
  signIn: async (payload: any) => {
    const test = await signInApi.signIn(payload);
    Cookies.set("tho", `Bearer ${test.accessToken}`, {
      expires: 7,
    });
    set({
      auth: test,
    });
  },
}));
