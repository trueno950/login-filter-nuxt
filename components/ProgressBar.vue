<template>
    <div class="w-full">
        <span class="text-sm text-gray-800 dark:text-white">Oferta comercial</span>
        <div class="max-w-[10rem] flex items-center gap-x-1">
            <div v-for="(bar, index) in progressBars" :key="bar.id" :class="[bar.class, getBorderRadius(index)]"
                :style="{ width: bar.width }" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</template>
  
<script>
import { ref, watchEffect } from 'vue';

export default {
    props: {
        percentage: {
            type: Number,
            required: true,
            validator: (value) => value >= 0 && value <= 100,
        },
    },
    setup(props) {
        const progressBars = ref([]);

        const calculateWidths = () => {
            const greenBars = Math.floor(props.percentage / 20);
            const grayBars = 5 - greenBars;

            progressBars.value = Array.from({ length: greenBars }, (_, index) => ({
                id: `green-${index}`,
                class: 'w-full h-2.5 flex flex-col justify-center overflow-hidden bg-green-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-green-500',
                width: '20%',
            })).concat(
                Array.from({ length: grayBars }, (_, index) => ({
                    id: `gray-${index}`,
                    class: 'w-full h-2.5 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-gray-600',
                    width: '20%',
                }))
            );
        };

        const getBorderRadius = (index) => {
            if (index === 0) {
                return 'rounded-s-lg';
            } else if (index === progressBars.value.length - 1) {
                return 'rounded-e-lg';
            } else {
                return 'rounded-none';
            }
        };

        watchEffect(() => {
            calculateWidths();
        });

        return {
            progressBars,
            getBorderRadius,
        };
    },
};
</script>