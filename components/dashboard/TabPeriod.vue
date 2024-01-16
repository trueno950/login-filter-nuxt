<template>
  <div class="px-9 flex justify-end items-stretch flex-wrap pb-0 bg-transparent">
    <div class="flex gap-2 items-center rounded-lg bg-white p-1 px-4 h-9">
      <button :class="{ 'border-b-2 border-green-600': activeTab === 'todo' }" @click="setActiveTab('todo')"
        class="text-xs font-semibold text-gray-600 mx-1 focus:border-green-600">
        Todo
      </button>
      <button :class="{ 'border-b-2 border-green-600': activeTab === 'hoy' }" @click="setActiveTab('hoy')"
        class="text-xs font-semibold text-gray-600 mx-1 focus:border-green-600">
        Hoy
      </button>
      <button :class="{ 'border-b-2 border-green-600': activeTab === 'mes' }" @click="setActiveTab('mes')"
        class="text-xs font-semibold text-dark-600 mx-1">
        Mes
      </button>
      <button :class="{ 'border-b-2 border-green-600': activeTab === 'ano' }" @click="setActiveTab('ano')"
        class="text-xs font-semibold text-gray-600 mx-1 focus:border-green-600">
        Año
      </button>
      <div class="flex flex-col items-center mx-1 text-gray-400 text-xl">
        <Icon name="mdi:dots-vertical" />
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
  setup() {
    const activeTab = ref('todo');

    const setActiveTab = (tab) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
};
</script>
