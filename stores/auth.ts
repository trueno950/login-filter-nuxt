import { defineStore } from "pinia";

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      this.loading = true;
      const { data, pending }: any = await useFetch(
        "https://dummyjson.com/auth/login",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            username,
            password,
          },
        }
      );

      this.loading = pending.value;

      if (data.value) {
        const token = useCookie("token");
        token.value = data?.value?.token;
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    },
    async sendPasswordResetEmail(email: string) {
      this.loading = true;

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simular retardo de 1.5 segundos
        this.loading = false;
      } catch (error) {
        this.loading = false;
        throw new Error("Error al enviar el enlace de recuperación.");
      }
    },
    async registerAccount(username: string, email: string, password: string) {
      this.loading = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        this.loading = false;
      } catch (error) {
        this.loading = false;
        throw new Error("Error al registrar la cuenta.");
      }
    },
    logoutUser() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
      location.reload();
    },
  },
});
