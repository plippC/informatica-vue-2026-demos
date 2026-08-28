<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <h1>Router Navigation</h1>
    <button @click="router.push('/day2-unit02-speaker-card')">Go to 'props' demo</button>
</template>