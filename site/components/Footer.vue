<template>
  <footer class="flex justify-center px-4 pb-4 pt-16">
    <div class="items-center">&copy; {{ currentYear }} Brian Hernandez</div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<style scoped></style>
