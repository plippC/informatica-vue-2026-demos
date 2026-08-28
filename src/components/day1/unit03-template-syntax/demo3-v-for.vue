<script setup>
import { ref } from 'vue'
const fruits = ref(['Apple', 'Banana', 'Cherry'])
</script>

<template>
  <button @click="fruits.shift()">Remove first</button>
  <ul>
    <li v-for="fruit in fruits" :key="fruit">{{ fruit }} <input :placeholder="fruit" /></li>
  </ul>
</template>
