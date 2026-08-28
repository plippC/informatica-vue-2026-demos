<script setup lang="ts">
import { ref } from 'vue';
import ExplicitCustomInput from './ExplicitCustomInput.vue';
import SimplifiedCustomInput from './SimplifiedCustomInput.vue';

const input11 = ref<string>()
const input12 = ref<string>()
const input2 = ref<string>()
</script>

<template>
    <h1>ExplicitCustomInput</h1>
    <h2>The long Way</h2>
    <ExplicitCustomInput :model-value="input11" @update:model-value="input11 = $event"></ExplicitCustomInput>
    <div>input11 = {{ input11 }}</div>
    <h2>The easy Way</h2>
    <ExplicitCustomInput v-model="input12" />
    <div>input12 = {{ input12 }}</div>

    <hr />

    <h1>SimplifiedCustomInput</h1>
    <SimplifiedCustomInput v-model="input2"></SimplifiedCustomInput>
    <div>input2 = {{ input2 }}</div>
</template>