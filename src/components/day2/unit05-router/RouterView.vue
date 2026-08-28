<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <h1>Router Info</h1>
    <p>Current path: {{ route.path }}</p>
</template>