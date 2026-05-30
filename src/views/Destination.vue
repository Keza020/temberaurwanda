<template>
  <div class="page">
    <h1>Destinations</h1>

    <select v-model="province">
      <option>Kigali City</option>
      <option>Northern Province</option>
      <option>Southern Province</option>
      <option>Eastern Province</option>
      <option>Western Province</option>
    </select>

    <div v-if="province==='Kigali City'" class="hero">
      <img src="../assets/images/kigali.png" alt="Kigali">
      <div class="content-overlay">
        <h2>Kigali City</h2>
        <p>Kigali is Rwanda's capital city known for cleanliness and innovation.</p>
      </div>
    </div>

    <div v-if="province==='Northern Province'" class="hero">
      <img src="../assets/images/northern.png" alt="Northern">
      <div class="content-overlay">
        <h2>Northern Province</h2>
        <p>Home of Volcanoes National Park and mountain gorillas.</p>
      </div>
    </div>

    <div v-if="province==='Southern Province'" class="hero">
      <img src="../assets/images/southern.png" alt="Southern">
      <div class="content-overlay">
        <h2>Southern Province</h2>
        <p>Known for King's Palace and Ethnographic Museum.</p>
      </div>
    </div>

    <div v-if="province==='Eastern Province'" class="hero">
      <img src="../assets/images/eastern.png" alt="Eastern">
      <div class="content-overlay">
        <h2>Eastern Province</h2>
        <p>Famous for Akagera National Park and wildlife safaris.</p>
      </div>
    </div>

    <div v-if="province==='Western Province'" class="hero">
      <img src="../assets/images/western.png" alt="Western">
      <div class="content-overlay">
        <h2>Western Province</h2>
        <p>Home of Lake Kivu and Nyungwe National Park.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const province = ref("Kigali City")
</script>

<style scoped>
.page {
  padding: 30px;
}

select {
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 30px;
}

.hero {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
  max-width: 500px;
}

.content-overlay h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #fbbf24;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
}

.content-overlay p {
  font-size: 1.3rem;
  line-height: 1.8;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.content-overlay h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #fbbf24;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
}

.content-overlay p {
  font-size: 1.3rem;
  line-height: 1.8;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}
</style>