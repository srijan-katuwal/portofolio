<script setup>
const blogs = [
  {
    title:
      "AI Search - Build search & discovery experiences w/ APIs, libraries, CLI & More Sign up for Free",
    body: "Test body",
    author: "Srijan",
  },
  {
    title: "Using ts-node? Here's a tip speed up your development",
    body: "Test body",
    author: "Srijan",
  },
  {
    title:
      "AI Search - Build search & discovery experiences w/ APIs, libraries, CLI & More Sign up for Free",
    body: "Test body",
    author: "Srijan",
  },
];
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3 gap-10">
      <article
        v-for="blog in blogs"
        :key="blog.title"
        class="border border-black/10 p-10 rounded flex flex-col gap-6"
      >
        <header>
          <h2 class="line-clamp-1">{{ blog.title }}</h2>
        </header>
        <div class="bg-black/10 rounded py-20"></div>
      </article>
    </div>
  </div>
</template>

<style scoped></style>
