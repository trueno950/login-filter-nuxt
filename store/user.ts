import { defineStore } from "pinia";

interface UserPayloadInterface {
  token: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    infoProfile: Object,
    loading: false,
  }),
  actions: {
    async getInfoProfile({ token }: UserPayloadInterface) {
      const { data, pending }: any = await useFetch(
        "https://dummyjson.com/auth/me",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.loading = pending;

      if (data.value) {
        this.infoProfile = data?.value;
      }
    },
  },
});
