<script setup lang="ts">
import { ref, onMounted } from 'vue'

const joke = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

async function fetchJoke() {
    loading.value = true
    error.value = null
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        if (!response.ok) throw new Error(`API error: ${response.status}`)
        const data = await response.json()
        joke.value = `${data.setup} — ${data.punchline}`
    } catch (err) {
        error.value = err instanceof Error ? err.message : 'Something went wrong'
    } finally {
        loading.value = false
    }
}

onMounted(fetchJoke)
</script>

<template>
    <p v-if="loading">Loading…</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>{{ joke }}</p>
    <button @click="fetchJoke">Another one</button>
</template>