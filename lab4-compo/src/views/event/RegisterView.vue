<script setup lang="ts">
import { toRefs } from 'vue'
import type {  Event } from '@/type'
import router from '@/router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
    event: Event
    id: String
}>()
//eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const store = useMessageStore()
const register = () => {
    store.updateMessage(`You are successfully registered for ` + props.event.title)
    setTimeout(() => {
        store.reserMessage()
    }, 3000)
    router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>
<template>
    <p>Register event here</p>
    <button @click="register">Register</button>
</template>