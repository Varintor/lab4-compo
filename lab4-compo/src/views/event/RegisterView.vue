<script setup lang="ts">
import { toRefs } from 'vue'
import type {  Event } from '@/type'
import router from '@/router';

const props = defineProps<{
    event: Event
    id: String
}>()
//eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const register = () => {
    //If the registration API call successful
    //Push back to the evnet detail view
    router.push({ name: 'event-detail-view'})
}
</script>
<template>
    <p>Register event here</p>
    <button @click="register">Register</button>
</template>