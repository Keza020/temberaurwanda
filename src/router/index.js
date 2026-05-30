import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import AboutUs from "../views/About.vue";
import ContactUs from "../views/Contact.vue";
import Destination from "../views/Destination.vue";
import Gallery from "../views/Gallery.vue";
import Language from "../views/Language.vue";

// Provinces
import Kigali from "../views/Kigali.vue";
import Northern from "../views/Northern.vue";
import Southern from "../views/Southern.vue";
import Eastern from "../views/Eastern.vue";
import Western from "../views/Western.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactUs,
  },
  {
    path: "/destination",
    name: "Destination",
    component: Destination,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/language",
    name: "Language",
    component: Language,
  },

  // Province pages
  {
    path: "/kigali",
    name: "Kigali",
    component: Kigali,
  },
  {
    path: "/northern",
    name: "Northern",
    component: Northern,
  },
  {
    path: "/southern",
    name: "Southern",
    component: Southern,
  },
  {
    path: "/eastern",
    name: "Eastern",
    component: Eastern,
  },
  {
    path: "/western",
    name: "Western",
    component: Western,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;