<template>
  <div class="font-sans text-gray-800 bg-gray-50 min-h-screen">
    <nav class="bg-emerald-800 text-white sticky top-0 z-50 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex-shrink-0 cursor-pointer" @click="currentRoute = 'Home'">
            <span class="text-2xl font-bold tracking-wider text-amber-400">TEMBERA URWANDA</span>
          </div>

          <div class="hidden md:flex space-x-6 items-center">
            <button @click="currentRoute = 'Home'" :class="navClass('Home')">Home</button>
            <button @click="currentRoute = 'About'" :class="navClass('About')">About</button>
            <button @click="currentRoute = 'Services'" :class="navClass('Services')">Services</button>

            <div class="relative group">
              <button class="hover:text-amber-400 px-3 py-2 rounded-md font-medium flex items-center gap-1">
                Destination ▾
              </button>
              <div class="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 hidden group-hover:block">
                <a v-for="prov in provinces" :key="prov" @click="selectDestination(prov)" class="block px-4 py-2 hover:bg-emerald-50 cursor-pointer">
                  {{ prov }} Province
                </a>
              </div>
            </div>

            <div class="relative group">
              <button class="hover:text-amber-400 px-3 py-2 rounded-md font-medium flex items-center gap-1">
                Gallery ▾
              </button>
              <div class="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 hidden group-hover:block">
                <a @click="selectGallery('Images')" class="block px-4 py-2 hover:bg-emerald-50 cursor-pointer">Images</a>
                <a @click="selectGallery('Videos')" class="block px-4 py-2 hover:bg-emerald-50 cursor-pointer">Videos</a>
              </div>
            </div>

            <button @click="currentRoute = 'Contact'" :class="navClass('Contact')">Contact</button>

            <div class="relative group ml-4 border-l border-emerald-600 pl-4">
              <button class="bg-emerald-700 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-emerald-600">
                🌐 {{ currentLang }} ▾
              </button>
              <div class="absolute right-0 mt-2 w-36 bg-white text-gray-800 rounded-md shadow-lg py-2 hidden group-hover:block">
                <a v-for="lang in languages" :key="lang.code" @click="currentLang = lang.name" class="block px-4 py-2 text-sm hover:bg-emerald-50 cursor-pointer">
                  {{ lang.name }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <component 
        :is="currentComponent" 
        :province="selectedProvince" 
        :galleryType="selectedGalleryType"
        :language="currentLang"
      />
    </main>
   <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Destination from './views/Destination.vue'
import Gallery from './views/Gallery.vue'
import Contact from './views/Contact.vue'
import Footer from './components/Footer.vue'

const currentRoute = ref('Home')
const selectedProvince = ref('')
const selectedGalleryType = ref('')
const currentLang = ref('English')

const provinces = ['Kigali', 'Eastern', 'Western', 'Northern', 'Southern']
const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'rw', name: 'Kinyarwanda' },
  { code: 'sw', name: 'Kiswahili' }
]

const currentComponent = computed(() => {
  if (currentRoute.value === 'Home') return Home
  if (currentRoute.value === 'About') return About
  if (currentRoute.value === 'Services') return Services
  if (currentRoute.value === 'Destination') return Destination
  if (currentRoute.value === 'Gallery') return Gallery
  if (currentRoute.value === 'Contact') return Contact
  return Home
})

function navClass(route) {
  return currentRoute.value === route 
    ? 'text-amber-400 font-bold px-3 py-2 rounded-md' 
    : 'hover:text-amber-400 px-3 py-2 rounded-md font-medium'
}

function selectDestination(province) {
  selectedProvince.value = province
  currentRoute.value = 'Destination'
}

function selectGallery(type) {
  selectedGalleryType.value = type
  currentRoute.value = 'Gallery'
}
</script>