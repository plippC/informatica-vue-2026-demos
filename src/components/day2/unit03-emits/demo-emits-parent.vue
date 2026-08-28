<script setup lang="ts">
import SpeakerCard from './SpeakerCard.vue'

const onSelected = (name: string) => window.alert(`picked ${name}!`)
</script>

<template>
  <SpeakerCard name="Ada Lovelace" tagline="Wrote the first algorithm" @selected="onSelected" />
  <SpeakerCard name="Grace Hopper" @selected="onSelected" />
</template>