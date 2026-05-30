<script setup>
import northernImage from '../assets/images/northern.png'
</script>

<template>
    <section class="hero">
        <img :src="northernImage" class="banner" alt="Northern">
        <div class="content-overlay">
            <h1>Welcome to Northern Province</h1>
            <p>Home of Volcanoes National Park and mountain gorillas.</p>
        </div>
    </section>
</template>

<style scoped>
.hero {
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
}
</style>