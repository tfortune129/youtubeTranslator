<template>
  <div class="d-flex justify-content-center">
    <div class="upper-left-text">Youtube Translator</div>
      <div class="center-container">
        <div class="input-container">
          <input v-model="youtube_url" type="text" placeholder="Enter youtube URL" class="input-field">
          <button @click="send" class="send-button">Send</button>
        </div>
        <div class="summary-container">
          <div v-if="is_loading">Loading...</div>
          <div v-else>
              {{ summary }}
        </div>
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
  background-color:rgb(233, 150, 122);
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

.input-container {
  border: 2px solid #333; 
  border-radius: 50px;
  padding: 40px;
  margin-bottom: 50px;
  background-color: rgb(143, 188, 143); 
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.send-button {
  padding: 10px;
  cursor: pointer;
  background-color: slateblue;
  color: white;
  border: none;
  border-radius: 30px;
}

.summary-container {
  max-width: 800px;
  margin: 0 auto; 
  text-align: center;
}

/* .summary-container {
  border: 2px solid #333; 
  border-radius: 8px;
  padding: 20px;
  background-color: white; 
} */



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