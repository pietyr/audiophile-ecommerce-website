<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import HomeCategories from '@/components/HomeCategories.vue';
</script>

<template>
  <header>
    <Navbar />
    <HomeHeader />
  </header>
  <main>
    <HomeCategories />
  </main>
</template>
