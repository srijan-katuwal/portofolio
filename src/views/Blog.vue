<script setup>
import { onMounted, ref } from "vue";
import "@splidejs/splide/css";
import { RouterLink } from "vue-router";
import { GET_BLOGS } from "../service/api.js";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/vue-splide";

const API_URL = import.meta.env.VITE_API_URL;

const blogs = ref([]);
const spliderOpt = {
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
};

onMounted(() => {
  getBlogs();
});
const getBlogs = async () => {
  try {
    const res = await GET_BLOGS();

    if (res?.data) {
      res.data.forEach((d) => {
        blogs.value.push(d);
      });
    }
  } catch (err) {
    console.error("No Blog Found");
  }
};
</script>

<template>
  <div class="w-full" v-if="blogs.length">
    <div class="mx-auto container">
      <h2 class="font-butler mt-32 text-5xl mb-8">Blog</h2>
      <Splide :has-track="false" :options="spliderOpt">
        <SplideTrack>
          <SplideSlide v-for="blog in blogs" :key="blog.title">
            <img
              :src="API_URL + blog.previewImage"
              class="w-full bg-zinc-100"
            />
            <header class="flex flex-col gap-4">
              <div class="flex items-center text-lg mt-4 text-zinc-500">
                <span>2024.01.01</span>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <span>{{ blog.author }}</span>
              </div>
              <h2 class="line-clamp-2 font-butler text-2xl">
                {{ blog.title }}
              </h2>
              <span class="line-clamp-3 text-zinc-500">{{ blog.summary }}</span>
              <router-link
                to="/"
                class="text-lg transition ease-in-out hover:underline underline-offset-4"
                >Read More</router-link
              >
            </header>
          </SplideSlide>
        </SplideTrack>
        <div class="splide__arrows">
          <button
            class="splide__arrow splide__arrow--prev custom-prev-button left-0"
            type="button"
            aria-label="Previous slide"
            aria-controls="splide01-track"
          >
            <img src="/src/assets/images/arrow-left.svg" />
          </button>
          <button
            class="splide__arrow splide__arrow--next custom-next-button"
            type="button"
            aria-label="Next slide"
            aria-controls="splide01-track"
          >
            <img src="/src/assets/images/arrow-right.svg" />
          </button>
        </div>
      </Splide>
    </div>
  </div>
</template>

<style scoped>
.splide li img {
  aspect-ratio: 1/1;
  object-fit: cover;
}
.splide__track {
  overflow: visible !important;
}

.splide__arrows {
  position: absolute;
  top: -2em;
  right: 5%;
  transform: translateX(-50%);
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
