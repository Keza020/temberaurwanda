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
}
.hero {
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1579033390094-91bf6b36025d?auto=format&fit=crop&w=1200&q=80') no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 100px 20px;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
}
.cta-btn {
  background-color: #008751; /* Rowandan flag green inspired */
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 25px;
  transition: background 0.3s;
}
.cta-btn:hover {
  background-color: #e5b800; /* Yellow accent */
  color: #000;
}
.destinations {
  padding: 50px 20px;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
.grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.card {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 25px;
  width: 280px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  text-align: left;
}
.card h3 {
  margin-top: 0;
  color: #0066b2; /* Sky blue flag accent */
}
</style>