<template>
    <Navbar />
    <div class="bg-gray-50 mt-14">
        <div class="px-9 pt-5 flex flex-col items-stretch flex-wrap bg-transparent">
            <h1 class="flex flex-col items-start justify-center font-medium text-4xl text-dark">
                <span class="mr-3 font-semibold text-dark">Dashboard</span>
            </h1>
            <h2 class="flex flex-row items-start text-lg font-semibold">
                <span class="text-gray-500">Buenos días, <span class="font-semibold text-green-600">{{ `${infoProfile?.firstName} ${infoProfile?.lastName}` }}</span></span>
            </h2>
        </div>
        <TabPeriod />
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
                                    placeholder="Buscar" v-model="filterPhoneNumber" @input="applyPhoneNumberFilter">
                            </div>
                        </div>
                    </div>
                    <div class="flex-auto block px-12">
                        <div class="overflow-x-auto">
                            <table class="w-full my-0 align-middle text-dark border-neutral-200" v-if="evaluations.length >= 1">
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
                                                <MenuButton class="focus:outline-none text-2xl text-gray-500"
                                                    id="menu-progress">
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
                                                <MenuButton class="focus:outline-none text-2xl text-gray-500"
                                                    id="menu-status">
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
                                <tbody v-for="(item, index) in evaluations" :key="index">
                                    <tr class="">
                                        <td class="py-3 ">
                                            <span class="font-semibold text-gray-600 text-xs">{{ item.date }}</span>
                                        </td>
                                        <td class="py-2 ">
                                            <span class="font-semibold text-gray-600 text-xs">{{ item.name }}</span>
                                        </td>
                                        <td class="py-2">
                                            <span class="font-semibold text-gray-600 text-xs">{{ item.lada }}
                                                {{ item.celphone }}</span>
                                        </td>
                                        <td class="text-start">
                                            <ProgressBar :percentage="item.progress" />
                                        </td>
                                        <td class="py-2 flex">
                                            <StatusBadge :status="item.status" />
                                        </td>
                                        <td class="py-2">
                                            <button class="ml-auto text-2xl text-gray-400" @click="openModal"
                                                v-if="item.status === 'aproved'" ref="cancelButtonRef">
                                                <Icon name="heroicons:eye" />
                                            </button>
                                            <button class="ml-auto text-2xl text-gray-400" @click="openModal" v-else
                                                ref="cancelButtonRef">
                                                <Icon name="heroicons:pencil-square" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="inline-flex w-full justify-center p-6" v-else>
                                <h1 class="text-lg text-base-300 text-gray-400">
                                    <span name="label-empty">Sin datos</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalDetails :isOpen="isOpen" @close="isOpen = false" />
    </div>
</template>

<script setup>
useHead({
    title: 'Dashboard',
})
import {
    Menu, MenuButton, MenuItems, MenuItem
} from '@headlessui/vue'
import { ref, watch, onMounted } from 'vue';
import { debounce } from 'lodash';

const { evaluations, infoProfile } = storeToRefs(useUserStore());
const { getEvaluations } = useUserStore();

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
const filterPhoneNumber = ref("");
const originalEvaluations = ref([]);
const isOpen = ref(false)

const openModal = () => {
    isOpen.value = true
}

const applyPhoneNumberFilter = debounce(() => {
    if (!Array.isArray(originalEvaluations.value)) {
        originalEvaluations.value = [];
    }

    const filteredEvaluations = originalEvaluations.value.filter(item => item.celphone.includes(filterPhoneNumber.value));
    evaluations.value = filteredEvaluations;
}, 300);

watch(filterPhoneNumber, applyPhoneNumberFilter);

onMounted(async () => {
    await getEvaluations();
    originalEvaluations.value = [...evaluations.value];
});
</script>