<script setup lang="ts">
import { toRefs} from 'vue'
import { useRouter } from 'vue-router'
import type { Event } from '@/type'
import { useMessageStore } from '@/stores/message';

const props = defineProps<{
    event: Event
    id: String
}>()
//eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()

const store = useMessageStore()
const Edit = () => {
    store.updateMessage(`The data has been update ` + props.event.title)
    setTimeout(() => {
        store.reserMessage()
    }, 3000)
    router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>
<template>
    <p>Edit event here</p>
     <button @click="Edit">Edit</button>
</template>