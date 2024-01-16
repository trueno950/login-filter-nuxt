import { defineStore } from "pinia";
import { dataJson } from "@/utils/evaluations"
interface UserPayloadInterface {
  token: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    infoProfile: {},
    loading: false,
    evaluations: []
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
    async getEvaluations() {
      this.loading = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        this.loading = false;
        this.evaluations = dataJson
      } catch (error) {
        this.loading = false;
        throw new Error("Error al registrar la cuenta.");
      }
    },
  },
});
