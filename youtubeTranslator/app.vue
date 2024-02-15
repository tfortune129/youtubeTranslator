<template>
  <div class="d-flex justify-content-center">
      <h2 class="text-center">App</h2>
      <input v-model="youtube_url" type="text" placeholder="Enter youtube URL">
      <button @click="send">Send</button>
      <div v-if="is_loading">Loading</div>
      <div v-else>
           {{ summary }}
      </div>
   </div>
</template>

<script setup lang="ts">
   const youtube_url = ref<string>()
   const is_loading = ref<boolean>()
   const summary = ref<string>()

   const send = async () => {
       is_loading.value = true
       summary.value = await $fetch('/summarize', {
           method: 'POST',
           body: JSON.stringify({
               youtube_url: youtube_url.value
           })
       })
       is_loading.value = false
   }
</script>

<style>
   .text-center {
      text-align: center;
   }

   .d-flex {
       display: flex;
   }

   .justify-content-center {
       justify-content: center;
   }
</style>