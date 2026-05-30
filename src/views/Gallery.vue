<template>
  <div class="page">

    <h1>Tembera u Rwanda Gallery</h1>

    <select v-model="type">
      <option>Images</option>
      <option>Videos</option>
    </select>

    <!-- Images Section -->
    <div v-if="type === 'Images'" class="gallery">

      <div class="card">
        <img src="../assets/images/kgl.png" alt="Kigali City">
        <p>Kigali City - Rwanda's beautiful capital.</p>
      </div>

      <div class="card">
        <img src="../assets/images/akagera.png" alt="Akagera">
        <p>Akagera National Park - Home of the Big Five.</p>
      </div>

      <div class="card">
        <img src="../assets/images/lake kivu.png" alt="Lake Kivu">
        <p>Lake Kivu - One of Africa's Great Lakes.</p>
      </div>

    </div>

    <!-- Videos Section -->
    <div v-if="type === 'Videos'" class="video-hero">
      <img src="../assets/images/visit.png" class="video-banner" alt="Rwanda">
      
      <div class="video-overlay">
        <h2>Visit Rwanda Video</h2>
        <video controls width="600">
          <source src="https://www.youtube.com/embed/a8Yo3j_lTQY" type="video/mp4">
          <iframe width="600" height="400" src="https://www.youtube.com/embed/a8Yo3j_lTQY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </video>
        <p>Explore the beauty of Rwanda through this tourism video.</p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"

const type = ref("Images")
</script>

<style scoped>
.page {
  padding: 30px;
  text-align: center;
}

h1 {
  color: #008751;
  margin-bottom: 20px;
}

select {
  padding: 10px;
  margin-bottom: 25px;
  border-radius: 5px;
}

.gallery {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card p {
  padding: 10px;
}

.video-section {
  margin-top: 20px;
}

.video-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top: 20px;
}

.video-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.video-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.video-overlay h2 {
  font-size: 4rem;
  font-weight: bold;
  color: #fbbf24;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
  margin: 0;
}

.video-overlay video {
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.video-overlay p {
  font-size: 1.5rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  max-width: 600px;
}

video {
  max-width: 100%;
  border-radius: 10px;
}
</style>