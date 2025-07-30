<script setup lang="ts">
defineProps<{
  category: String
  organizer: String
}>()
</script>

<template>
  <div class="event-meta">
    <div>{{ category }}</div>
    <div>{{ organizer }}</div>
  </div>
</template>

<style scoped>
.event-meta {
  text-align: right;
  font-size: 16px;
  color: #555;
}
</style>
