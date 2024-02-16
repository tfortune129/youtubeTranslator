<template>
  <div class="d-flex justify-content-center">
    <div class="upper-left-text">Youtube Translator</div>
      <!-- <h2 class="text-center">App</h2> -->
      <div class="center-container">
        <input v-model="youtube_url" type="text" placeholder="Enter youtube URL">
        <button @click="send">Send</button>
        <div v-if="is_loading">Loading...</div>
        <div v-else>
           {{ summary }}
      </div>
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

body{
  background-color:rgb(255, 253, 208);
  margin: 0;
}

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.upper-left-text {
  position: absolute;
  top: 10x;
  left: 10x;
  color: black;
  font-size: 50px;
  font-weight: bold;
}


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