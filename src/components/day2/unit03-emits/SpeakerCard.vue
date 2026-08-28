<script setup lang="ts">
defineProps<{
  name: string;
  tagline?: string;
}>();
const emit = defineEmits<{ selected: [name: string] }>()
</script>

<template>
  <h3>{{ name }}</h3>
  <p v-if="tagline">{{ tagline }}</p>
  <p v-else>No tagline yet.</p>
  <button @click="emit('selected', name)">Select</button>
</template>