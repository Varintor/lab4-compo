<script setup lang="ts">
import type { Event } from '@/type'
import { RouterLink } from 'vue-router'
import EventMeta from '@/components/EventMeta.vue'

defineProps<{
  event: Event
}>()
//const event = ref({
//  id: 5928101,
//  category: 'animal welfare',
//  title: 'Cat Adoption Day',
//  description: 'Find your new feline friend at this event.',
//  location: 'Meow Town',
//  date: 'January 28, 2022',
//  time: '12:00',
//  petsAllowed: true,
//  organizer: 'Kat Laydee'
//})
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
      <EventMeta :category="event.category" :organizer="event.organizer" />
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
