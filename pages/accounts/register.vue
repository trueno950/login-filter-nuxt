<template>
    <div class="flex h-screen">
        <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
            <div class="max-w-md text-center">
                <NuxtImg src="/loginImage.svg" />
            </div>
        </div>
        <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
            <div class="max-w-md w-full p-6">
                <h1 class="text-3xl font-semibold mb-6 text-black text-center">Regístrate</h1>
                <h1 class="text-sm font-semibold mb-6 text-gray-500 text-center">Únete a Nuestra Comunidad con acceso en
                    todo momento y gratis </h1>
                <div class="mt-4 flex flex-col lg:flex-row items-center justify-between gap-4">
                    <SocialSignInButton buttonType="button" :logoSrc="'/googleLogo.svg'"
                        buttonText="Regístrate con Google" />
                    <SocialSignInButton buttonType="button" :logoSrc="'/githubLogo.svg'"
                        buttonText="Regístrate con Github" />
                </div>
                <div class="mt-4 text-sm text-gray-600 text-center">
                    <p>ó con correo electrónico</p>
                </div>
                <form @submit.prevent="submitForm" class="space-y-4 mb-10">
                    <FormField v-model="username" label="Usuario" />
                    <FormField v-model="email" label="Correo" />
                    <FormField v-model="password" label="Contraseña" type="password" />

                    <div>
                        <button :disabled="!isValid || loading"
                            :class="{ 'bg-gray-400 cursor-not-allowed': !isValid || loading }" type="submit"
                            class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                            <span v-if="!loading">Registrarte</span>
                            <span v-else>Cargando...</span>
                        </button>
                    </div>
                </form>
                <div class="mt-s4 text-sm text-gray-600 text-center">
                    <p>¿Tienes una cuenta? <router-link to="/accounts/login" class="text-black hover:underline">Inicia
                            sesión</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const { registerAccount } = useAuthStore();
const { loading } = storeToRefs(useAuthStore()); // make authenticated state reactive
const { $toast } = useNuxtApp();
import { useValidation } from '@/composables/useValidation'

const username = ref('');
const email = ref('');
const password = ref('');
const usernameValidation = useValidation(username, { required: true });
const emailValidation = useValidation(email, { required: true, email: true });
const passwordValidation = useValidation(password, { required: true, password: true });

const isValid = computed(() => usernameValidation.isNotEmpty.value && emailValidation.isValidEmail.value && passwordValidation.isNotEmpty.value && passwordValidation.isValidPassword.value);


const submitForm = async () => {
    if (!isValid.value) {
        $toast.error('Por favor, complete todos los campos correctamente.');
        return;
    }
    try {
        await registerAccount({ username: username.value, email: email.value, password: password.value });
        username.value = '';
        email.value = '';
        password.value = '';
        $toast.success('Se ha registrado su cuenta con éxito.');
        setTimeout(() => {
            navigateTo('/accounts/login');
        }, 2000);
    } catch (error) {
        $toast.error('Ha ocurrido un error al intentar registrar su cuenta');
    }

};
</script>