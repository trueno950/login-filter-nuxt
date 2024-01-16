<template>
    <div :class="['rounded-md flex justify-center p-1 h-7 items-center gap-2 px-2', getStatusClass(status)]">
        <Icon :name="getIconName(status)" />
        <span class="text-xs">{{ getStatusText(status) }}</span>
    </div>
</template>
  
<script>
export default {
    props: {
        status: {
            type: String,
            required: true,
        },
    },
    methods: {
        getStatusClass(status) {
            switch (status) {
                case 'aproved':
                    return 'bg-green-50 text-green-500';
                case 'not-meet':
                    return 'bg-blue-50 text-blue-500';
                case 'not-accept':
                    return 'bg-red-50 text-red-500';
                case 'incomplete':
                    return 'bg-orange-50 text-orange-500';
                default:
                    return '';
            }
        },
        getIconName(status) {
            switch (status) {
                case 'aproved':
                    return 'mdi:account-check-outline';
                case 'not-meet':
                    return 'mdi:account-remove';
                case 'not-accept':
                    return 'heroicons:x-circle';
                case 'incomplete':
                    return 'mdi:file-document';
                default:
                    return 'mdi:account-check-outline';
            }
        },
        getStatusText(status) {
            switch (status) {
                case 'aproved':
                    return 'Aprobada con cita';
                case 'not-meet':
                    return 'No cumple con el perfil';
                case 'not-accept':
                    return 'No acepta ofertas';
                case 'incomplete':
                    return 'Evaluación incompleta';
                default:
                    return '';
            }
        },
    },
};
</script>