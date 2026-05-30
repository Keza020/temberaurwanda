<template>
  <div class="page">

    <h1>Languages</h1>

    <select v-model="language">
      <option>English</option>
      <option>Français</option>
      <option>Kinyarwanda</option>
      <option>Kiswahili</option>
    </select>

    <h2>{{ message }}</h2>

  </div>
</template>

<script setup>
import { computed, ref } from "vue"

const language = ref("English")

const message = computed(() => {
  switch(language.value){

    case "English":
      return "Welcome to Visit Rwanda"

    case "Français":
      return "Bienvenue au Rwanda"

    case "Kinyarwanda":
      return "Murakaza neza mu Rwanda"

    case "Kiswahili":
      return "Karibu Rwanda"

    default:
      return ""
  }
})
</script>

<style scoped>
.page{
  padding:30px;
}
select{
  padding:10px;
}
</style>