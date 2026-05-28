<template>
  <div class="home-page">
    <!-- Hero Section -->
    <header class="hero">
      <h1>Tembera Urwanda</h1>
      <p class="subtitle">Discover the Land of a Thousand Hills</p>
      <button @click="bookTrip" class="cta-btn">Start Your Journey</button>
    </header>

    <!-- Highlights Section -->
    <section class="destinations">
      <h2>Experience Rwanda</h2>
      <div class="grid">
        <div class="card">
          <h3>🦍 Volcanoes National Park</h3>
          <p>Home to the majestic mountain gorillas and dramatic volcanic peaks.</p>
        </div>
        <div class="card">
          <h3>🦁 Akagera National Park</h3>
          <p>Experience a classic African safari with the Big Five roaming free.</p>
        </div>
        <div class="card">
          <h3>🌊 Lake Kivu</h3>
          <p>Relax by the beautiful emerald-green waters and rolling mist-covered hills.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const bookTrip = () => {
  alert('Murakaza neza! Thank you for planning your visit to Rwanda.');
};
</script>

<style scoped>
.home-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.hero {
  /* This combines the dark overlay tint and the green rolling hills image */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1541747152917-8071fc576226?auto=format&fit=crop&w=1200&q=80') 
              no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 140px 20px; /* Generous padding to showcase the landscape */
}

.hero h1 {
  font-size: 3.5rem;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.subtitle {
  font-size: 1.6rem;
  margin-bottom: 35px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}

.cta-btn {
  background-color: #008751; /* Vibrant Rwandan Flag Green */
  color: white;
  border: none;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background-color: #e5b800; /* Warm Yellow Accent */
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.destinations {
  padding: 60px 20px;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.destinations h2 {
  font-size: 2.2rem;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
}

/* Small colorful line under the section header */
.destinations h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: #008751;
  margin: 8px auto 0 auto;
  border-radius: 2px;
}

.grid {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 30px;
  width: 290px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: left;
  border-top: 4px solid #0066b2; /* Sky Blue accent line */
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin-top: 0;
  font-size: 1.3rem;
  color: #0066b2;
}

.card p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 0;
}
</style>