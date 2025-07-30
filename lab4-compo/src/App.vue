<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia';
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div id="layout">
    <header>
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{name: 'event-list-view'}">Event</RouterLink> | 
          <RouterLink :to="{name: 'about'}">About</RouterLink> |
          <RouterLink :to="{name: 'students'}">Student</RouterLink>
        </nav>
        <div class="page-size-selector">
          <span>Page Size: </span>
          <RouterLink :to="{ name: 'event-list-view', query: { page: 1, size: 2 }}">2</RouterLink> |
          <RouterLink :to="{ name: 'event-list-view', query: { page: 1, size: 3 }}">3</RouterLink> |
          <RouterLink :to="{ name: 'event-list-view', query: { page: 1, size: 4 }}">4</RouterLink> 
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>


<style>
#layout{
  font-family:  Avenir,Helvetica,Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active{
  color: #42b983;
}

h2{
  font-size: 20px;
}

.page-size-selector {
  margin-top: 10px;
}

.page-size-selector a {
  margin: 0 4px;
  font-weight: normal;
}

@keyframes yellowfade {
  from { background-color: yellow; }
  to { background-color: transparent; }
}
#flashMessage {
  animation: yellowfade 3s ease-in-out;
}
</style>
