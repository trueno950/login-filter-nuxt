<template>
    <div :class="containerClasses">
        <div class="flex items-center">
            <div>
                <div
                    :class="['text-2xl', 'rounded-md', 'flex', 'justify-center', 'p-1', 'w-8', 'h-8', textVariants[type], bgVariants[type]]">
                    <Icon :name="icon" />
                </div>
                <p class="text-xs text-gray-500 font-bold mt-2">{{ title }}</p>
                <div class="flex gap-4 items-center">
                    <p v-if="showPercentage" class="text-2xl font-bold text-black mt-">{{ percentage }} <span
                            class="text-xs font-normal text-gray-500">{{ subtitle }}</span></p>
                    <p v-if="showSecondaryPercentage" class="text-xl font-normal text-gray-500"> | </p>
                    <p v-if="showSecondaryPercentage" class="text-2xl font-bold text-black mt-">{{ secondaryPercentage }}
                        <span class="text-xs font-normal text-gray-500">{{ secondarySubtitle }}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { computed, reactive } from 'vue';
// Props
const props = defineProps({
    size: {
        type: String,
        default: "w-full"
    },
    icon: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: 'success'
    },
    title: {
        type: String,
        default: ""
    },
    showPercentage: {
        type: Boolean,
        default: true
    },
    percentage: {
        type: String,
        default: ""
    },
    subtitle: {
        type: String,
        default: ""
    },
    showSecondaryPercentage: {
        type: Boolean,
        default: false
    },
    secondaryPercentage: {
        type: String,
        default: "80%"
    },
    secondarySubtitle: {
        type: String,
        default: "con cita"
    }
});

const textVariants = reactive({
    error: 'text-red-500',
    warning: 'text-orange-500',
    success: 'text-green-500',
    info: 'text-blue-500',
});

const bgVariants = reactive({
    error: 'bg-red-100',
    warning: 'bg-orange-100',
    success: 'bg-green-100',
    info: 'bg-blue-100',
});
// Computed properties
const containerClasses = computed(() => `rounded-lg overflow-hidden bg-white shadow-md p-8 ${props.size}`);
</script>