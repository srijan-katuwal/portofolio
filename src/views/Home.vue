<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Blog from "./Blog.vue";
</script>

<template>
  <Navbar></Navbar>
  <div class="container mx-auto">
    <h1 class="text-xl mt-10 mb-6">Blog</h1>
    <Blog class="mb-10"></Blog>
    <router-link to="/blog/create" class="btn">Write Blog</router-link>
  </div>
</template>
