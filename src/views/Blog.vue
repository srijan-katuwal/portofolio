<script setup>
import { onMounted, ref } from "vue";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";
import { RouterLink } from "vue-router";

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
const blogSlider = ref(null);

onMounted(() => {
  const slider = new Splide(blogSlider.value, {
    type: "loop",
    perPage: 3,
    perMove: 1,
    interval: 5000,
    autoplay: true,
    gap: 40,
    classes: {
      prev: "splide__arrow--prev custom-prev-button",
      next: "splide__arrow--next custom-next-button",
    },
    breakpoints: {
      768: {
        perPage: 2,
      },
      500: {
        perPage: 1,
      },
    },
  });
  slider.mount();
});
</script>

<template>
  <div class="w-full overflow-x-hidden">
    <div class="mx-auto container">
      <section
        ref="blogSlider"
        class="splide"
        aria-label="Splide Basic HTML Example"
      >
        <div class="splide__track">
          <ul class="splide__list">
            <article
              v-for="blog in blogs"
              :key="blog.title"
              class="splide__slide"
            >
              <img src="../assets/images/blog-1.webp" />
              <header class="flex flex-col gap-4">
                <div class="flex items-center text-lg mt-4">
                  <span>2024.01.01</span>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <span>{{ blog.author }}</span>
                </div>
                <h2 class="line-clamp-2 font-butler text-2xl">
                  {{ blog.title }}
                </h2>
                <span class="line-clamp-3"
                  >Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.</span
                >
                <router-link
                  to="/"
                  class="text-lg transition ease-in-out hover:underline underline-offset-4"
                  >Read More</router-link
                >
              </header>
            </article>
          </ul>
        </div>
        <div class="splide__arrows">
          <button
            class="splide__arrow splide__arrow--prev custom-prev-button left-0"
            type="button"
            aria-label="Previous slide"
            aria-controls="splide01-track"
          >
            <img src="../assets/images/arrow-left.svg" />
          </button>
          <button
            class="splide__arrow splide__arrow--next custom-next-button"
            type="button"
            aria-label="Next slide"
            aria-controls="splide01-track"
          >
            <img src="../assets/images/arrow-right.svg" />
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.splide article img {
  aspect-ratio: 1/1;
  object-fit: cover;
}
.splide__track {
  overflow: visible !important;
}

.splide__arrows {
  position: absolute;
  bottom: 0em;
  left: 50%;
}
.splide__track {
  padding-bottom: 5em;
}
.splide__arrow {
  background: none;
  padding: 10px;
}
.splide__arrow--prev {
  left: unset;
  top: unset;
  transform: translateX(-100%) translateY(-100%);
}
.splide__arrow--next {
  right: unset;
  top: unset;
  transform: translateX(100%) translateY(-100%);
}
.splide__arrow--prev,
.splide__arrow--next {
  left: 50%;
}
</style>
