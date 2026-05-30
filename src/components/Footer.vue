<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="flex flex-wrap justify-between gap-8">

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          TEMBERA U RWANDA
        </h3>
        <p class="text-sm text-green-200">
          Discover the beauty of the land of a thousand hills.
        </p>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          Quick Links
        </h3>

        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About Us</RouterLink></li>
          <li><RouterLink to="/destination">Destinations</RouterLink></li>
          <li><RouterLink to="/gallery">Gallery</RouterLink></li>
          <li><RouterLink to="/contact">Contact Us</RouterLink></li>
          <li><RouterLink to="/language">Languages</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          Destinations
        </h3>

        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/northern">Northern Province</RouterLink></li>
          <li><RouterLink to="/kigali">Kigali City</RouterLink></li>
          <li><RouterLink to="/southern">Southern Province</RouterLink></li>
          <li><RouterLink to="/eastern">Eastern Province</RouterLink></li>
          <li><RouterLink to="/western">Western Province</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          Contacts
        </h3>

        <ul class="space-y-2 text-green-300 text-sm">
          <li>Email: etiakeza24@gmail.com</li>
          <li>Phone: +250 788 123 456</li>
          <li>Address: Kigali, Rwanda</li>
        </ul>
      </div>

    </div>

    <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
      <p class="text-center">
        &copy; 2025 Tembera U Rwanda. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>