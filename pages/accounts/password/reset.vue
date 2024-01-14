<template>
    <div class="flex h-screen">
        <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
            <div class="max-w-md text-center">
                <NuxtImg src="/loginImage.svg" />
            </div>
        </div>
        <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
            <div class="max-w-md w-full p-6">
                <h1 class="text-3xl font-semibold mb-6 text-black text-center">Recuperar Contraseña</h1>
                <form @submit.prevent="resetPassword" class="space-y-4">
                    <FormField v-model="email" label="Correo Electrónico" type="email" />
                    <div>
                        <button :disabled="isButtonDisabled || loading"
                            :class="{ 'bg-gray-400 cursor-not-allowed': isButtonDisabled || loading }" type="submit"
                            class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                            <span v-if="!loading">Enviar Enlace de Recuperación</span>
                            <span v-else>Cargando...</span>
                        </button>
                    </div>
                </form>
                <div class="mt-4 text-sm text-gray-600 text-center">
                    <router-link to="/login" class="text-black hover:underline">
                        ¿Recuerdas tu contraseña? Inicia sesión aquí.
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
const { sendPasswordResetEmail } = useAuthStore();
const { loading } = storeToRefs(useAuthStore());
import { useValidation } from '@/composables/useValidation'
const { $toast } = useNuxtApp();
const email = ref('');
const { isValidEmail, isNotEmpty } = useValidation(email, { email: true, required: true });
const isButtonDisabled = computed(() => !isValidEmail.value || !isNotEmpty.value);

const resetPassword = async () => {
    if (isButtonDisabled.value) {
        $toast.error('Por favor, ingresa un correo electrónico válido y no dejes campos vacíos.');
        return;
    }

    try {
        await sendPasswordResetEmail(email.value);
        email.value = '';
        $toast.success('Se ha enviado un enlace de recuperación a tu correo electrónico.');
        setTimeout(() => {
            navigateTo('/accounts/login');
        }, 2000);
    } catch (error) {
        $toast.error('Ha ocurrido un error al intentar recuperar su contraseña');
    }
};
</script>