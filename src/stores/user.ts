import { defineStore } from "pinia";
import request from "@/composables/axios";
import type { auth } from "@/Prototype/board";

export const useUserStore = defineStore("store", {
  state: () => {
    return {
      userID: null as string | null,
      token: null as string | null,
    };
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  },
  actions: {
    async signUp(payload: auth) {
      try {
        const res = await request.post("users/signup", payload);
        const data = res.data;

        // Set credentials
        this.userID = data.user_id;
        this.token = data.token;
        localStorage.setItem("token", data.token);
        localStorage.setItem("userID", data.user_id);
        localStorage.setItem("expires", data.expires_at);
      } catch (error: any) {
        let err;
        if (error.response) {
          err = error.response.data.message;
        } else if (error.request) {
          err = error.request;
        } else {
          err = "Error " + error.message;
        }
        throw err;
      }
    },
    async signIn(payload: auth) {
      try {
        const res = await request.post("users/signin", payload);

        // Set credentials
        const data = res.data;
        this.userID = data.user_id;
        this.token = data.token;
        localStorage.setItem("token", data.token);
        localStorage.setItem("userID", data.user_id);
        localStorage.setItem("expires", data.expires_at);
      } catch (error: any) {
        let err;
        if (error.response) {
          err = error.response.data.message;
        } else if (error.request) {
          err = error.request;
        } else {
          err = "Error " + error.message;
        }
        throw err;
      }
    },
    async Logout() {
      try {
        const res = await request.post("users/logout");
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        this.token = null;
        this.userID = null;
        console.log(res);
      } catch (error: any) {
        let err;
        if (error.response) {
          err = error.response.data.message;
        } else if (error.request) {
          err = error.request;
        } else {
          err = "Error " + error.message;
        }
        throw err;
      }
    },
    autoLogin() {
      const token = localStorage.getItem("token");
      const userID = localStorage.getItem("userID");
      this.token = token;
      this.userID = userID;
    },
    autoLogout() {
      const expireTime = localStorage.getItem("expires");
      const timeOut = new Date(expireTime).getTime();
      const now = new Date().getTime();
      if (now > timeOut) {
        this.Logout();
      } else {
        this.autoLogin();
      }
    },
  },
});
