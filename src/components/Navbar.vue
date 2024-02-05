<script setup></script>

<template>
  <div class="bg-black/80">
    <div class="container mx-auto flex justify-between text-white py-4">
      <router-link to="/">
        <h2>Srijan K.</h2>
      </router-link>
      <nav>
        <ul class="flex gap-10">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <!-- <li><router-link to="contact">Contact</router-link></li> -->
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
nav ul li {
  @apply text-white;
}
</style>
