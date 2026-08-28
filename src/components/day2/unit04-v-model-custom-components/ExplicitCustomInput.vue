<script setup lang="ts">
const props = defineProps<{ modelValue: string | undefined }>()
const emit = defineEmits<{ 'update:modelValue': [value: string | undefined] }>()
</script>

<template>
    <!-- does  n o t  change the props !!! -->
    <input :value="props.modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement)?.value)" />
</template>