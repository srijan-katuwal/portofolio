<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import Toast from "@vuesimple/vs-toast";
import { ADD_BLOG, UPLOAD_IMAGE } from "../service/api.js";

import Navbar from "../components/Navbar.vue";
import InputImage from "../components/InputImage.vue";

const router = useRouter();
let quill = null;
const editor = ref(null);
const title = ref("");
const previewImage = ref(null);
const previewImagePath = ref(null);
// const toolbar = ref({});

onMounted(() => {
  quill = new Quill(editor.value, {
    // modules: { toolbar: false },
    // readOnly: true,
    theme: "snow",
  });
});

const saveBlog = async () => {
  const req = {
    head: title.value,
    body: quill.getContents(),
    previewImage: previewImagePath.value,
  };
  const res = await ADD_BLOG(req);
  if (res.data) {
    Toast.show({
      title: "Data Saved Successfully",
      message: res.data,
      variant: "success",
    });
    router.push("/");
  } else if (res.errors) {
    Toast.show({
      title: "Couldn't Save Data",
      message: res.errors,
      variant: "error",
    });
  }
};

const uploadImage = async (e) => {
  const req = {
    image: e.target.files[0],
  };
  try {
    const res = await UPLOAD_IMAGE(req);
    console.log(res);
    if (res.image) {
      previewImage.value = res.image;
      previewImagePath.value = res.imagePath;
    }
  } catch (err) {
    Toast.show({
      title: "Couldn't Save Image",
      message: err?.response?.data?.errors,
      variant: "error",
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
          <InputImage class="w-1/2" />

          <!--<img
            v-if="previewImage"
            :src="previewImage"
            class="h-full"
            @click=""
          />

          <div
            v-else
            class="h-full w-40 btn-select-image border-2 border-black/5 hover:cursor-pointer border-box flex justify-center items-center"
          >
            Select Image
          </div>
          <input
            id="previewImage"
            type="file"
            accept="image/*"
            @change="uploadImage"
            class="hidden"
          /> -->
        </div>

        <div class="row-span-1">
          <label for="editorHeading">Author</label>
          <input
            id="editorHeading"
            v-model="title"
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
</style>
