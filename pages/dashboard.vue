<template>
    <Navbar />
    <div class="bg-gray-50 mt-14">
        <div class="px-9 pt-5 flex flex-col items-stretch flex-wrap bg-transparent">
            <h1 class="flex flex-col items-start justify-center font-medium text-4xl text-dark">
                <span class="mr-3 font-semibold text-dark">Dashboard</span>
            </h1>
            <h2 class="flex flex-row items-start text-lg font-semibold">
                <span class="text-gray-500">Buenos días, <span class="font-semibold text-green-600">Juan
                        Manuel</span></span>
            </h2>
        </div>
        <div class="px-9 flex justify-end items-stretch flex-wrap pb-0 bg-transparent">
            <div class="flex gap-2 items-center rounded-lg bg-white p-1 px-4 h-9">
                <button
                    class="text-xs font-semibold text-gray-600 mx-1 border-b-2 border-transparent focus:border-green-600">Todo</button>
                <button
                    class="text-xs font-semibold text-gray-600 mx-1 border-b-2 border-transparent focus:border-green-600">Hoy</button>
                <button class="text-xs font-semibold text-dark-600 mx-1 border-b-2 border-green-600">Mes</button>
                <button
                    class="text-xs font-semibold text-gray-600 mx-1 border-b-2 border-transparent focus:border-green-600">Año</button>
                <div class="flex flex-col items-center mx-1 text-gray-400 text-xl">
                    <Icon name="mdi:dots-vertical" />
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:flex md:justify-between px-8 pt-8 xl:gap-9">
            <template v-for="(item, index) in dataPercetage || []" :key="index">
                <CardPercentage :size="item.size" :icon="item.icon" :title="item.title"
                    :showPercentage="item.showPercentage" :type="item.type" :percentage="item.percentage"
                    :subtitle="item.subtitle" :showSecondaryPercentage="item.showSecondaryPercentage"
                    :secondaryPercentage="item.secondaryPercentage" :secondarySubtitle="item.secondarySubtitle" />
            </template>
        </div>

        <div class="w-full max-w-full px-2 mb-6  mx-auto">
            <div
                class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                <div
                    class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                    <div
                        class="px-12 flex flex-col justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                        <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                            <span class="mr-3 font-semibold text-dark">Mis evaluaciones</span>
                        </h3>
                        <div class="sm:w-[30%] w-full">
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <Icon name="heroicons:magnifying-glass" />
                                </div>
                                <input type="text" id="input-group-1"
                                    class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Buscar">
                            </div>
                        </div>
                    </div>
                    <div class="flex-auto block px-12">
                        <div class="overflow-x-auto">
                            <table class="w-full my-0 align-middle text-dark border-neutral-200">
                                <thead class="align-bottom border-b-2 py-2">
                                    <tr class="font-semibold text-gray-600 text-xs">
                                        <th class="min-w-[10%] pb-3">
                                            <p class="text-left">
                                                Fecha
                                                <span class="ml-2">
                                                    <Icon name="heroicons:arrows-up-down-16-solid" />
                                                </span>
                                            </p>
                                        </th>
                                        <th class="min-w-[30%] pb-3">
                                            <p class="text-left">
                                                Nombre
                                                <span class="ml-2">
                                                    <Icon name="heroicons:arrows-up-down-16-solid" />
                                                </span>
                                            </p>
                                        </th>
                                        <th class="pr-12 min-w-[10%] pb-3">
                                            <p class="text-left">Celular</p>
                                        </th>
                                        <th class="pr-12 min-w-[25%] pb-3">
                                            <p class="text-left">
                                                Progreso
                                            <Menu>
                                                <MenuButton class="focus:outline-none text-2xl text-gray-500" id="menu-progress">
                                                    <Icon name="mdi:chevron-down" />
                                                </MenuButton>
                                                <MenuItems
                                                    class="absolute mt-0 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                                                    <MenuItem v-for="(item, index) in filterPercentage || []" :key="index">
                                                    <span
                                                        class="block px-4 py-2 text-xs text-gray-700 hover:bg-blue-500 hover:text-white">{{
                                                            item.label }}</span>
                                                    </MenuItem>
                                                </MenuItems>
                                            </Menu>
                                            </p>
                                        </th>
                                        <th class="min-w-[20%] pb-3">
                                            <p class="text-left">
                                                Estatus
                                            <Menu>
                                                <MenuButton class="focus:outline-none text-2xl text-gray-500" id="menu-status">
                                                    <Icon name="mdi:chevron-down" />
                                                </MenuButton>
                                                <MenuItems
                                                    class="absolute mt-0 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                                                    <MenuItem v-for="(item, index) in filterStatus || []" :key="index">
                                                    <div class="p-2">
                                                        <div
                                                            :class="`rounded-md flex justify-center p-1 h-7 text-${item.color}-500 hover:bg-blue-100 bg-green-50 items-center gap-2 px-2`">
                                                            <Icon name="mdi:account-check-outline" />
                                                            <span class="text-xs">{{ item.label }}</span>
                                                        </div>
                                                    </div>
                                                    </MenuItem>
                                                </MenuItems>
                                            </Menu>
                                            </p>
                                        </th>
                                        <th class="min-w-[5%] pb-3"></th>
                                    </tr>
                                </thead>
                                <tbody v-for="(item, index) in [0, 1, 2, 3, 4]" :key="index">
                                    <tr class="">
                                        <td class="py-3 ">
                                            <span class="font-semibold text-gray-600 text-xs">05/07/2024</span>
                                        </td>
                                        <td class="py-2 ">
                                            <span class="font-semibold text-gray-600 text-xs">Joel Abdiel May Canche</span>
                                        </td>
                                        <td class="py-2">
                                            <span class="font-semibold text-gray-600 text-xs">+529911098469</span>
                                        </td>
                                        <td class="text-start">
                                            <ProgressBar :percentage="100" />
                                        </td>
                                        <td class="py-2 flex">
                                            <div
                                                class="rounded-md flex justify-center p-1 h-7 text-green-500 bg-green-50 items-center gap-2 px-2">
                                                <Icon name="mdi:account-check-outline" />
                                                <span class="text-xs">No acepta ofertas</span>
                                            </div>
                                        </td>
                                        <td class="py-2">
                                            <button class="ml-auto text-2xl text-gray-400" @click="openModal"
                                                ref="cancelButtonRef">
                                                <Icon name="heroicons:eye" />
                                            </button>
                                            <button class="ml-auto text-2xl text-gray-400" @click="openModal"
                                                ref="cancelButtonRef">
                                                <Icon name="heroicons:pencil-square" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-10">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                    leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black/25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full sm:w-[75%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <TabGroup>
                                    <TabList class="absolute left-0 top-0 flex gap-4 w-full bg-gray-50 items-center">
                                        <Tab v-slot="{ selected }">
                                            <div
                                                :class="[selected ? 'bg-white text-green-500 font-semibold border-y-white' : 'bg-gray-50 text-gray-400', 'px-14 py-2']">
                                                <p>General</p>
                                            </div>
                                        </Tab>

                                        <Tab v-slot="{ selected }">
                                            <div
                                                :class="[selected ? 'bg-white text-green-500 font-semibold border-y-white' : 'bg-gray-50 text-gray-400', 'px-14 py-2']">
                                                <p>Oferta comercial</p>
                                            </div>
                                        </Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel class="flex flex-col p-3 mt-4">
                                            <div class="flex justify-end">
                                                <span class="text-[0.6rem] text-green-600">Oferta comercial<span
                                                        class="text-[0.6rem] text-gray-400"> | Cita
                                                        agendada</span></span>
                                            </div>
                                            <div class="flex justify-between mb-4">
                                                <div>
                                                    <h1 class=" font-bold text-lg">Informacion personal</h1>
                                                </div>
                                                <div>
                                                    <div
                                                        class="rounded-md flex justify-center p-1 h-7 text-green-500 bg-green-50 items-center gap-2 px-2">
                                                        <Icon name="mdi:account-check-outline" />
                                                        <span class="text-xs">No acepta ofertas</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <section>
                                                <div class="grid grid-cols-1 gap-2 md:flex md:flex-row md:gap-20">
                                                    <div>
                                                        <div class="flex flex-row gap-4 mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Nombre</h2>
                                                            <h3 class="text-gray-700">María Eugenia Rodriguez Rendon</h3>
                                                        </div>
                                                        <div class="flex flex-row gap-4 mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Fec nacimiento</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                        <div class="flex flex-row gap-4 mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">RFC</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="flex flex-row mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Celular</h2>
                                                            <h3 class="text-gray-700">+529911098469</h3>
                                                        </div>
                                                        <div class="flex flex-row mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Correo</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                        <div class="flex flex-row mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Dirección</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr
                                                    class="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />
                                                <div class="grid grid-cols-1 gap-2 md:flex md:flex-row md:gap-20">
                                                    <div>
                                                        <div class="flex flex-row gap-4 mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Producto</h2>
                                                            <h3 class="text-gray-700">María Eugenia Rodriguez Rendon</h3>
                                                        </div>
                                                        <div class="flex flex-row gap-4 mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Sub Producto</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                        <div class="flex flex-row gap-4 mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Tipo Nómina</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                        <div class="flex flex-row gap-4 mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Operación</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="flex flex-row mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Estado</h2>
                                                            <h3 class="text-gray-700">+529911098469</h3>
                                                        </div>
                                                        <div class="flex flex-row mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Banco</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                        <div class="flex flex-row mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Sucursal</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                        <div class="flex flex-row mb-2
                                                        ">
                                                            <h2 class="text-gray-500 w-[8em]">Promotor</h2>
                                                            <h3 class="text-gray-700">{{ true }}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <div class="flex justify-end">
                                                <button class="bg-green-500 rounded-md px-4 py-2 text-white"
                                                    @click="closeModal">Cerrar</button>
                                            </div>
                                        </TabPanel>
                                        <TabPanel class="flex p-16">
                                            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, asperiores!
                                                Porro corrupti, quaerat at aut repellat minima qui officiis expedita. Iste
                                                iure, repellendus officia fugit voluptatem nesciunt pariatur repellat
                                                doloremque!</div>
                                        </TabPanel>
                                    </TabPanels>
                                </TabGroup>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script setup>
useHead({
    title: 'Dashboard',
})
import { ref } from 'vue';

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    TabGroup, TabList, Tab, TabPanels, TabPanel,
    Menu, MenuButton, MenuItems, MenuItem
} from '@headlessui/vue'

const dataPercetage = [
    {
        "size": "w-full",
        "icon": "mdi:account-check-outline",
        "title": "Evaluación aprobada",
        "showPercentage": true,
        "type": "success",
        "percentage": "8%",
        "subtitle": "con cita",
        "showSecondaryPercentage": true,
        "secondaryPercentage": "13%",
        "secondarySubtitle": "sin cita"
    },
    {
        "size": "w-full md:w-[70%]",
        "icon": "heroicons:x-circle",
        "title": "No acepta ofertas",
        "showPercentage": true,
        "type": "info",
        "percentage": "19%",
        "subtitle": "",
        "showSecondaryPercentage": false,
    },
    {
        "size": "w-full md:w-[70%]",
        "icon": "mdi:file-document",
        "title": "Evaluación incompletada",
        "showPercentage": true,
        "type": "warning",
        "percentage": "20%",
        "subtitle": "",
        "showSecondaryPercentage": false,
    },
    {
        "size": "w-full md:w-[70%]",
        "icon": "mdi:account-remove",
        "title": "No cumple con el perfil",
        "showPercentage": true,
        "type": "error",
        "percentage": "40%",
        "subtitle": "",

    }
]

const filterStatus = [
    {
        label: "Aprobada con cita",
        color: "green"
    },
    {
        label: "No acepta ofertas",
        color: "blue"
    },
    {
        label: "Evaluación incompleta",
        color: "orange"
    },
    {
        label: "No cumple con el perfil",
        color: "red"
    }
];

const filterPercentage = [
    {
        label: "100%",
    },
    {
        label: "80%",
    },
    {
        label: "60%",
    },
    {
        label: "40%",
    },
    {
        label: "20%",
    },
    {
        label: "0%",
    }
]

const isOpen = ref(false)

const closeModal = () => {
    isOpen.value = false
}
const openModal = () => {
    isOpen.value = true
}
</script>