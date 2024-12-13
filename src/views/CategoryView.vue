<script setup lang="ts">
const props = defineProps<{ category: string }>();
</script>

<template>
  <h1>{{ props.category }}</h1>
</template>

<style scoped lang="scss"></style>
