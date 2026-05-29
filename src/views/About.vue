<template>
  <div class="home-page">

    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay">
        <h1>Tembera Urwanda</h1>
        <p class="subtitle">Discover the Land of a Thousand Hills</p>
        <button @click="bookTrip" class="cta-btn">
          Start Your Journey
        </button>
      </div>
    </section>

    <!-- Destinations -->
    <section class="destinations">
      <h2>Experience Rwanda</h2>

      <div class="grid">
        <div class="card">
          <h3>🦍 Volcanoes National Park</h3>
          <p>
            Home to the majestic mountain gorillas and dramatic volcanic peaks.
          </p>
        </div>

        <div class="card">
          <h3>🦁 Akagera National Park</h3>
          <p>
            Experience a classic African safari with the Big Five roaming free.
          </p>
        </div>

        <div class="card">
          <h3>🌊 Lake Kivu</h3>
          <p>
            Relax by the beautiful emerald-green waters and rolling hills.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const bookTrip = () => {
  alert("Murakaza neza! Thank you for planning your visit to Rwanda.");
};
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-page{
  font-family: Arial, Helvetica, sans-serif;
}

/* HERO SECTION */
.hero{
  height: 100vh;
  background-image:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("src/assets/images/tembera.png");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: white;
}

.overlay{
  padding: 20px;
}

.hero h1{
  font-size: 4rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 10px black;
}

.subtitle{
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.cta-btn{
  padding: 14px 35px;
  border: none;
  border-radius: 30px;
  background: #008751;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.cta-btn:hover{
  background: #e5b800;
  color: black;
  transform: scale(1.05);
}

/* DESTINATIONS */
.destinations{
  padding: 70px 20px;
  text-align: center;
  background: #f5f5f5;
}

.destinations h2{
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0066b2;
}

.grid{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.card{
  background: white;
  width: 300px;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: 0.3s;
  text-align: left;
}

.card:hover{
  transform: translateY(-8px);
}

.card h3{
  margin-bottom: 15px;
  color: #008751;
}

.card p{
  color: #555;
  line-height: 1.6;
}

</style>