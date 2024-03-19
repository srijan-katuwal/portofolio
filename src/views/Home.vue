<script setup>
import { RouterLink } from "vue-router";

import Navbar from "../components/Navbar.vue";
import Blog from "./Blog.vue";

import { ref } from "vue";
let technologies = ref([
  {
    name: "JavaScript",
    image: "/src/assets/images/javascript.png",
  },
  {
    name: "Vue",
    image: "/src/assets/images/vue-js.png",
  },
  {
    name: "Node",
    image: "/src/assets/images/nodejs.png",
  },
  {
    name: "MongoDB",
    image: "/src/assets/images/mongodb.png",
  },
  {
    name: "Express",
    image: "/src/assets/images/express.png",
  },
  {
    name: "Nuxt",
    image: "/src/assets/images/nuxt.png",
  },
  {
    name: "Tailwind",
    image: "/src/assets/images/tailwind.png",
  },
]);
</script>

<template>
  <Navbar></Navbar>

  <section class="container mx-auto mt-20">
    <header>
      <h1 class="mx-auto text-5xl text-center mt-52 font-bold font-butler">
        Full Stack Developer and Mentor
      </h1>
      <p
        class="mt-6 w-3/4 text-center text-xl mx-auto font-normal text-black/70"
      >
        I'm a full stack web developer who specializes in crafting exceptional
        digital experiences using JavaScript.
      </p>
    </header>
    <div>
      <h2 class="font-butler mt-32 text-4xl text-center">Technologies</h2>
      <ul
        class="flex justify-center gap-4 mt-6 flex-wrap w-full mx-auto lg:w-2/3"
      >
        <li
          v-for="tech in technologies"
          class="bg-black/5 rounded-md px-8 py-4 flex items-center gap-2"
        >
          <img :src="tech.image" class="w-14 mx-auto" />
          <p class="text-center p-4 text-xl">{{ tech.name }}</p>
        </li>
      </ul>
    </div>
  </section>

  <!-- <section class="container mx-auto">
    <h1 class="text-xl mt-10 mb-6">Blog</h1>
    <router-link to="/blog/create" class="btn">Write Blog</router-link>
  </section>
  <Blog class="mt-10"></Blog> -->
</template>

<style></style>
