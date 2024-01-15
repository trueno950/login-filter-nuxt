<template>
    <div class="bg-white shadow-inner flex items-center fixed w-full top-0 z-10">
        <div class="container mx-auto flex items-center justify-between">
            <div>
                <NuxtImg src="/logo-dimex.png" width="90" height="40" />
            </div>
            <div class="flex items-center space-x-4">
                <NuxtLink to="/dashboard" class="my-link text-md">Dashboard</NuxtLink>
                <NuxtLink to="/configuration" class="my-link text-md flex items-center gap-1">
                    <Icon name="mdi:cog-outline" />
                    Configuración
                </NuxtLink>
            </div>

            <div class="flex">
                <div class="flex items-center space-x-4">
                    <div class="w-8 h-8 overflow-hidden rounded-full">
                        <NuxtImg src="/logo.svg" alt="Foto de perfil" class="object-cover w-full h-full" />
                    </div>
                    <div>
                        <p class="text-gray-700 font-semibold">{{`${infoProfile.firstName} ${infoProfile.lastName}`}}</p>
                        <p class="text-sm text-gray-500">Admin</p>
                    </div>
                </div>

                <Menu>
                    <MenuButton class="relative z-10 block p-2 focus:outline-none text-3xl text-gray-500"
                        id="menu-settings">
                        <Icon name="mdi:chevron-down" />
                    </MenuButton>
                    <MenuItems class="absolute right-0 py-2 mt-10 w-48 bg-white rounded-md shadow-xl z-50">
                        <MenuItem>
                        <NuxtLink to="#"
                            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">Tu
                            perfil</NuxtLink>
                        </MenuItem>
                        <MenuItem>
                        <NuxtLink to="#"
                            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                            Ayuda</NuxtLink>
                        </MenuItem>
                        <MenuItem>
                        <NuxtLink
                            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                            @click="logoutUser">Cerrar sesión</NuxtLink>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

const { logoutUser } = useAuthStore();
const useUser = useUserStore()
const { infoProfile } = useUser
const token = useCookie('token');
await useUser.getInfoProfile({token: token.value});
</script>


<style>
.my-link {
    @apply text-gray-300;
}

.my-link:hover {
    @apply text-gray-600 font-medium;
}

.my-link.router-link-active {
    @apply text-green-500 font-bold;
}

.my-link.router-link-active:hover {
    @apply text-green-400 font-medium;
}
</style>