<script setup>
import { ref, onMounted, watch } from 'vue'

const name = ref('')
const place = ref('')

onMounted(() => {
  console.log('component mounted!')
  const saved = localStorage.getItem('demo-name')
  if (saved) name.value = saved
})

watch(name, (val) => {
  console.log('name changed to:', val)
  localStorage.setItem('demo-name', val)
})
</script>

<template>
  <input v-model="name" placeholder="Type your name…" />
  <input v-model="place" placeholder="Type a place…" />
  <p>
    More about the <code>localStorage</code> API see <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">MDN Documentation</a>
  </p>
  <p>
    More about Vue Lifecycle Hooks see <a href="https://vuejs.org/guide/essentials/lifecycle.html">Vue Documentation</a>
  </p>
</template>
