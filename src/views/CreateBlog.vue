<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";

import { ADD_BLOG } from "../service/api.js";

import { useToast } from "vue-toastification";
import Navbar from "../components/Navbar.vue";
import ImageInput from "../components/ImageInput.vue";

const API_URL = import.meta.env.VITE_API_URL;

const router = useRouter();
let quill = null;
const editor = ref(null);
const title = ref("");
const author = ref("");
const previewImage = ref(null);

const Toast = useToast();

onMounted(() => {
  quill = new Quill(editor.value, {
    // modules: { toolbar: false },
    // readOnly: true,
    theme: "snow",
  });
});

const saveBlog = async () => {
  const req = {
    title: title.value,
    author: author.value,
    body: quill.getContents(),
    previewImage: previewImage.value,
  };
  const res = await ADD_BLOG(req);
  if (res.data) {
    Toast.success(res.data);
    router.push("/");
  } else if (res.errors) {
    res.errors.forEach((err) => {
      Toast.error(err);
    });
  }
};
</script>

<template>
  <div class="w-full h-screen">
    <Navbar />
    <div class="container mx-auto py-10">
      <div class="grid grid-cols-2 gap-10">
        <div class="row-span-1">
          <label for="editorHeading">Title</label>
          <input
            id="editorHeading"
            v-model="title"
            class="border border-black/20 w-full h-10"
          />
        </div>

        <div class="row-span-2">
          <label for="previewImage">Preview Image</label>
          <ImageInput
            v-if="!previewImage"
            @onUpload="(image) => (previewImage = image)"
          />

          <div
            v-else
            class="previewImageBox border-dashed border-2 flex items-center justify-center flex-col gap-4 bg-slate-100 relative"
          >
            <img :src="API_URL + previewImage" />
            <div class="absolute top-0 right-0 w-full h-full">
              <span
                class="font-fontello text-2xl text-yello-900 absolute right-3 top-3 hover:cursor-pointer icon-trash"
                @click="previewImage = null"
              ></span>
            </div>
          </div>
        </div>

        <div class="row-span-1">
          <label for="editorHeading">Author</label>
          <input
            id="editorHeading"
            v-model="author"
            class="border border-black/20 w-full h-10"
          />
        </div>
      </div>
      <div class="mt-10">
        <label>Body</label>
        <div ref="editor"></div>
      </div>
      <button class="btn mt-8" @click="saveBlog">Save</button>
    </div>
  </div>
</template>

<style scoped>
.btn-select-image {
  color: #505050;
}
.previewImageBox img {
  height: 10em;
}
</style>
