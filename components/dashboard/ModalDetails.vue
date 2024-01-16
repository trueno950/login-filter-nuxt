<template>
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
                                            <div class="grid grid-cols-1 gap-2 lg:flex lg:flex-row lg:gap-20">
                                                <div>
                                                    <div class="flex flex-row gap-4 mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8em]">Nombre</h2>
                                                        <h3 class="text-sm text-gray-700">María Eugenia Rodriguez Rendon
                                                        </h3>
                                                    </div>
                                                    <div class="flex flex-row gap-4 mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8em]">Fec nacimiento</h2>
                                                        <h3 class="text-sm text-gray-700">28/08/1965</h3>
                                                    </div>
                                                    <div class="flex flex-row gap-4 mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8em]">RFC</h2>
                                                        <h3 class="text-sm text-gray-700">VISA790402B3TA</h3>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="flex flex-row mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8rem]">Celular</h2>
                                                        <h3 class="text-sm text-gray-700">+52 81 8576 7894</h3>
                                                    </div>
                                                    <div class="flex flex-row mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8rem]">Correo</h2>
                                                        <h3 class="text-sm text-gray-700">maria.eugenia@gmail.com</h3>
                                                    </div>
                                                    <div class="flex flex-row mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8rem]">Dirección</h2>
                                                        <h3 class="text-sm text-gray-700">
                                                            Calle Rio Lena #2018,Ruberas de Dos Rios, Guadalupe,C.P. 64628
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />
                                            <div class="grid grid-cols-1 gap-2 lg:flex lg:flex-row lg:gap-48">
                                                <div>
                                                    <div class="flex flex-row gap-4 mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8em]">Producto</h2>
                                                        <h3 class="text-sm text-gray-700">Electrónico</h3>
                                                    </div>
                                                    <div class="flex flex-row gap-4 mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8em]">Sub Producto</h2>
                                                        <h3 class="text-sm text-gray-700">IMSS</h3>
                                                    </div>
                                                    <div class="flex flex-row gap-4 mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8em]">Tipo Nómina</h2>
                                                        <h3 class="text-sm text-gray-700">Jubilado</h3>
                                                    </div>
                                                    <div class="flex flex-row gap-4 mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[8em]">Operación</h2>
                                                        <h3 class="text-sm text-gray-700">
                                                            Crédito Nuevo
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="flex flex-row mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[9em]">Estado</h2>
                                                        <h3 class="text-sm text-gray-700">Nuevo León</h3>
                                                    </div>
                                                    <div class="flex flex-row mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[9em]">Banco</h2>
                                                        <h3 class="text-sm text-gray-700">Banorte</h3>
                                                    </div>
                                                    <div class="flex flex-row mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[9em]">Sucursal</h2>
                                                        <h3 class="text-sm text-gray-700">Sucursal Escobedo</h3>
                                                    </div>
                                                    <div class="flex flex-row mb-2
                                                ">
                                                        <h2 class="text-sm text-gray-500 w-[9em]">Promotor</h2>
                                                        <h3 class="text-sm text-gray-700">
                                                            Pamela Chaves Garcia (81 10375 28740)
                                                        </h3>
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
</template>
  
<script setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    TabGroup, TabList, Tab, TabPanels, TabPanel
} from '@headlessui/vue';

const emits = defineEmits()

const closeModal = () => {
    emits('close');
};

const { isOpen } = defineProps(['isOpen']);
</script>