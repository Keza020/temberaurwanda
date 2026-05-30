<template>
  <div class="hero">
    <img src="../assets/images/home page.png" alt="Rwanda">

    <div class="content">
      <h1>Tembera U Rwanda</h1>
      <p>Welcome to the Land of a Thousand Hills.</p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 10;
  max-width: 600px;
}

.content h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fbbf24;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
}

.content p {
  font-size: 1.5rem;
  line-height: 1.8;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}
</style>