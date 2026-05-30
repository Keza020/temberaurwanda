<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <h1 class="text-4xl font-bold text-emerald-900 mb-4">Our Tourism Services</h1>
      <p class="text-gray-600">We make your travel around Rwanda seamless, safe, and utterly unforgettable.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="service in services" :key="service.title" class="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">
        <div class="h-40 overflow-hidden rounded-lg mb-4">
          <img :src="service.image" :alt="service.title" class="w-full h-full object-cover transition transform hover:scale-105 duration-300"/>
        </div>
        <h3 class="text-xl font-bold text-emerald-800 mb-2">{{ service.title }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ service.desc }}</p>
        <button class="text-amber-600 font-semibold text-sm hover:underline">Learn More &rarr;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Gorilla Trekking Permits',
    desc: 'Hassle-free arrangements to secure official tracking passes in Volcanoes National Park.',
    image: 'src/assets/images/tembera.png'
  },
  {
    title: 'Cultural Eco-Tours',
    desc: 'Guided immersion inside local cultural villages, tea plantation harvests, and artisan workshops.',
    image: 'src/assets/images/eco-tour.png'
  },
  {
    title: 'Luxury Transport & Lodges',
    desc: 'Curated bookings for high-end boutique safari lodges and 4x4 offroad transport configurations.',
    image: 'src/assets/images/lodge.png'
  }
]
</script>