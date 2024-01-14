<template>
    <div class="bg-white shadow-md" @click="handleClickOutside">
        <div class="container mx-auto flex items-center justify-between p-4">
            <div>
                <NuxtImg src="/logo.svg" />
            </div>

            <div class="flex items-center space-x-4">
                <a href="#" class="text-gray-700 hover:text-black">Inicio</a>
                <a href="#" class="text-gray-700 hover:text-black">Acerca de</a>
            </div>

            <div class="flex">
                <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 overflow-hidden rounded-full">
                        <NuxtImg src="/logo.svg" alt="Foto de perfil" class="object-cover w-full h-full" />

                    </div>
                    <div>
                        <p class="text-gray-700 font-semibold">Nombre de Usuario</p>
                        <p class="text-sm text-gray-500">Admin</p>
                    </div>
                </div>

                <div x-data="{ dropdownOpen: false }" class="relative menu-dropdown">
                    <button @click="toggleDropdown" class="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
                        <svg class="h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                    <div v-if="dropdownOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                        <a href="#"
                            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                            your profile
                        </a>
                        <a href="#"
                            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                            Your projects
                        </a>
                        <a href="#"
                            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                            Help
                        </a>
                        <a href="#"
                            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                            Settings
                        </a>
                        <a href="#"
                            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const dropdownOpen = ref(false);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const closeDropdown = () => {
    dropdownOpen.value = false;
};

const handleClickOutside = (event) => {
    const isClickInsideDropdown = event.target.closest('.menu-dropdown');
    if (!isClickInsideDropdown) {
        closeDropdown();
    }
};
</script>