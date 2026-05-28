<script setup>
import { ref } from 'vue'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import vueLogo from '../assets/vue.svg'

</script>

<template>
  <section class="bg-white-500 min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Welcome Directeur of Studies!</h1>
      <p class="text-lg text-gray-700 mb-6">Welcome to SOS website.</p>
      
      <button 
        @click="$emit('back-to-dashboard')" 
        class="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors"
      >
        BACK TO DASHBOARD
      </button>
    </div>
  </section>
</template>