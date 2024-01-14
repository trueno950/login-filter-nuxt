<template>
    <div class="flex h-screen">
        <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
            <div class="max-w-md text-center">
                <NuxtImg src="/loginImage.svg" />
            </div>
        </div>
        <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
            <div class="max-w-md w-full p-6">
                <h1 class="text-3xl font-semibold mb-6 text-black text-center">Iniciar Sesión</h1>
                <form @submit.prevent="login" class="space-y-4">
                    <FormField v-model="username" label="Usuario" />
                    <FormField v-model="password" label="Contraseña" type="password" />
                    <div>
                        <button :disabled="!isValid || loading"
                            :class="{ 'bg-gray-400 cursor-not-allowed': !isValid || loading }" type="submit"
                            class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                            <span v-if="!loading">Acceder</span>
                            <span v-else>Cargando...</span>
                        </button>
                    </div>
                </form>
                <div class="mt-4 text-sm text-gray-600 text-center">
                    <p>O</p>
                </div>
                <div class="mt-4 flex flex-col lg:flex-row items-center justify-between gap-4">
                    <SocialSignInButton buttonType="button" :logoSrc="'/googleLogo.svg'"
                        buttonText="Iniciar sesion con Google" />
                    <SocialSignInButton buttonType="button" :logoSrc="'/githubLogo.svg'"
                        buttonText="Iniciar sesion con Github" />
                </div>
                <div class="mt-4 text-sm text-gray-600 text-center">
                    <router-link to="/accounts/password/reset" class="text-black hover:underline">
                        ¿Olvidaste tu contraseña?
                    </router-link>
                </div>
                <div class="mt-4 text-sm text-gray-600 text-center">
                    <p>¿No tienes una cuenta? <router-link to="/accounts/register"
                            class="text-black hover:underline">Regístrate</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const { authenticateUser } = useAuthStore();
const { authenticated, loading } = storeToRefs(useAuthStore());
import { useValidation } from '@/composables/useValidation'

const { $toast } = useNuxtApp();

const username = ref('kminchelle');
const password = ref('0lelplR');
const usernameValidation = useValidation(username, { required: true });
const passwordValidation = useValidation(password, { required: true, password: true });

const isValid = computed(() => usernameValidation.isNotEmpty.value && passwordValidation.isNotEmpty.value && passwordValidation.isValidPassword.value);

const login = async () => {
    if (!isValid.value) {
        $toast.error('Por favor, ingrese nombre de usuario y contraseña.');
        return;
    }
    await authenticateUser({ username: username.value, password: password.value });
    if (authenticated.value) {
        await navigateTo('/dashboard')
    } else {
        $toast.error('Verifique sus credenciales');
    }
};
</script>