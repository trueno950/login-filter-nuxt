import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie("accessToken"); // get token from cookies

  if (token.value) {
    // check if value exists
    // todo verify if token is valid, before updating the state
    authenticated.value = true; // update the state to authenticated
  }
  if (token.value && to?.name === undefined) {
    return navigateTo("/dashboard");
  }

  // if token exists and url is /accounts/login redirect to homepage
  if (token.value && to?.name === "accounts-login") {
    return navigateTo("/dashboard");
  }

  // if token doesn't exist redirect to log in
  if (
    !token.value &&
    to?.name !== "accounts-login" &&
    to?.name !== "accounts-register" &&
    to?.name !== "accounts-reset"
  ) {
    // abortNavigation();
    return navigateTo("/accounts/login");
  }
});
