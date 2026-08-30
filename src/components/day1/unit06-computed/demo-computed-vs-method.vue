<script setup>
import { ref, computed } from 'vue'
const price = ref(10)
const quantity = ref(2)

const name = ref('')

const total = computed(() => {
  console.log('calculate computed total')
  return price.value * quantity.value
})

function totalFn() {
  console.log('calculate totalFn')
  return price.value * quantity.value
}
</script>

<template>
  <input v-model.number="price" type="number" />
  ×
  <input v-model.number="quantity" type="number" />
  = {{ total }} ({{ totalFn() }})
  <hr />
  <input v-model="name" placeholder="independent name" /> {{ name }}
</template>
