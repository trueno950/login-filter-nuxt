<template>
    <!-- <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"> -->
    <Navbar />
    <div class="bg-gray-100">
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
        <div class="flex justify-between px-8 pt-8 gap-9">
            <template v-for="(item, index) in dataPercetage" :key="index">
                <CardPercentage :size="item.size" :icon="item.icon" :title="item.title"
                    :showPercentage="item.showPercentage" :type="item.type" :percentage="item.percentage"
                    :subtitle="item.subtitle" :showSecondaryPercentage="item.showSecondaryPercentage"
                    :secondaryPercentage="item.secondaryPercentage" :secondarySubtitle="item.secondarySubtitle" />
            </template>
        </div>

        <div class="w-full max-w-full px-3 mb-6  mx-auto">
            <div
                class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                <div
                    class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                    <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                        <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                            <span class="mr-3 font-semibold text-dark">Mis evaluaciones</span>
                        </h3>
                    </div>
                    <div class="flex-auto block py-8 pt-6 px-9">
                        <div class="overflow-x-auto">
                            <table class="w-full my-0 align-middle text-dark border-neutral-200">
                                <thead class="align-bottom">
                                    <tr class="font-semibold text-sm text-gray-800">
                                        <th class="min-w-[10%]">
                                            <p class="text-left">Fecha</p>
                                        </th>
                                        <th class="min-w-[30%]">
                                            <p class="text-left">Nombre</p>
                                        </th>
                                        <th class="pr-12 min-w-[10%]">
                                            <p class="text-left">Celular</p>
                                        </th>
                                        <th class="pr-12 min-w-[20%]">
                                            <p class="text-left">Progreso</p>
                                        </th>
                                        <th class="min-w-[20%]">
                                            <p class="text-left">Estatus</p>
                                        </th>
                                        <th class="min-w-[10%]"></th>
                                    </tr>
                                </thead>
                                <tbody v-for="(item, index) in [0, 1, 2, 3, 4]" :key="index">
                                    <tr class="">
                                        <td class="py-2 ">
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
                                                :class="['rounded-md', 'flex', 'justify-center', 'p-1', 'h-7', 'text-green-500', 'bg-green-100', 'items-center', 'gap-2', 'px-2']">
                                                <Icon name="mdi:account-check-outline" />
                                                <span class="text-xs">No acepta ofertas</span>
                                            </div>
                                        </td>
                                        <td class="py-2 ">
                                            <button
                                                class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                <span
                                                    class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                </span>
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
    </div>
</template>

<script setup>
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
        "size": "w-[70%]",
        "icon": "mdi:alpha-x-circle-outline",
        "title": "No acepta ofertas",
        "showPercentage": true,
        "type": "info",
        "percentage": "19%",
        "subtitle": "",
    },
    {
        "size": "w-[70%]",
        "icon": "mdi:file-document",
        "title": "Evaluación incompletada",
        "showPercentage": true,
        "type": "warning",
        "percentage": "20%",
        "subtitle": "",
    },
    {
        "size": "w-[70%]",
        "icon": "mdi:account-remove",
        "title": "No cumple con el perfil",
        "showPercentage": true,
        "type": "error",
        "percentage": "40%",
        "subtitle": "",

    }
]

</script>