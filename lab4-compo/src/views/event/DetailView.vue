<script setup lang="ts">
import { toRefs, defineProps, } from 'vue'
import { type Event } from '@/type'

const props = defineProps<{
    event: Event
    id: String
}>()
const { event } = toRefs(props)
</script>

<template>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</template>