<script setup>
import contactImage from '../assets/images/tembera.png'
</script>

<template>
  <div class="page">
    <img :src="contactImage" class="banner" alt="Contact">

    <div class="content-overlay">
      <h1>Contact Us</h1>

      <p>Email: info@temberaurwanda.rw</p>
      <p>Phone: +250 788 123 456</p>
      <p>Kigali, Rwanda</p>
    </div>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.banner {
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
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  z-index: 10;
  max-width: 600px;
}

.content-overlay h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fbbf24;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
}

.content-overlay p {
  font-size: 1.5rem;
  line-height: 1.8;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  margin: 10px 0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
}

input,
textarea {
  padding: 10px;
}

button {
  padding: 10px;
  background: green;
  color: white;
  border: none;
}
</style>