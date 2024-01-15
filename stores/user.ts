import { defineStore } from "pinia";

interface UserPayloadInterface {
  token: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    infoProfile: {},
    loading: false,
  }),
  actions: {
    async getInfoProfile({ token }: UserPayloadInterface) {
      this.loading = true;
      const { data, pending }: any = await useFetch(
        "https://dummyjson.com/auth/me",
        {
          method: "GET",
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
