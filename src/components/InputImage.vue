<script setup>
import { ref, onMounted } from "vue";

import { GET_IMAGES, UPLOAD_IMAGE } from "../service/api.js";

import Toast from "@vuesimple/vs-toast";
import Modal from "./Modal.vue";

const toggleModal = ref(false);
const uploadType = ref(1);
const uploadIndex = ref(-1);
const newUpload = ref(null);
const previewImageButton = ref(null);
const currentImages = ref([]);

onMounted(async () => {
  const res = await GET_IMAGES();
  try {
    console.log(res);
    if (res.data?.length) {
      currentImages.value = res.data;
    }
  } catch {
    currentImages.value = [];
  }
});

const uploadImage = async (e) => {
  const req = {
    image: e.target.files[0],
  };
  try {
    const res = await UPLOAD_IMAGE(req);
    console.log(res);
    if (res.imagePath) {
      newUpload.value = res.imagePath;
    }
  } catch (err) {
    Toast.show({
      title: "Couldn't Save Image",
      message: err?.response?.data?.errors,
      variant: "error",
    });
  }
};

const selectFile = () => {
  previewImageButton.value.click();
};
</script>

<template>
  <div
    class="border flex items-center justify-center flex-col gap-4 py-10 cursor-pointer"
    @click="toggleModal = true"
  >
    <span class="font-fontello icon-file-image text-4xl"></span>
    <span>Click to add an image</span>
  </div>

  <Modal v-if="toggleModal" @close="toggleModal = false" title="Add new assets">
    <div class="flex">
      <span
        class="underline-offset-4 cursor-pointer"
        :class="{
          underline: uploadType == 1,
          'text-neutral-400': uploadType != 1,
        }"
        @click="uploadType = 1"
        >Recent Uploads</span
      >
      &nbsp; | &nbsp;
      <span
        class="underline-offset-4 cursor-pointer"
        :class="{
          underline: uploadType == 2,
          'text-neutral-400': uploadType != 2,
        }"
        @click="uploadType = 2"
        >From Computer</span
      >
    </div>

    <div
      v-if="uploadType == 1"
      class="current-images mt-6 grid grid-cols-3 gap-6"
    >
      <div v-for="(img, index) in currentImages" key="index" class="relative">
        <img :src="'http://localhost:3000' + img.imagePath" />
        <div class="absolute top-0 left-0 w-full h-full">
          <span
            class="font-fontello text-2xl text-yello-900 absolute left-2 top-2"
            :class="uploadIndex == index ? 'icon-check' : 'icon-check-empty'"
            @click="uploadIndex = index"
          ></span>
        </div>
      </div>
    </div>
    <template v-else>
      <div
        v-if="newUpload"
        class="upload-images border-dashed border-2 flex items-center justify-center flex-col gap-4 mt-6 bg-slate-100"
      >
        <img :src="'http://localhost:3000' + newUpload" />
      </div>
      <div
        v-else
        class="upload-images border-dashed border-2 flex items-center justify-center flex-col gap-4 cursor-pointer mt-6 bg-slate-100"
        @click="selectFile()"
      >
        <span class="font-fontello icon-file-image text-4xl"></span>
        <span>Click to add an image</span>
        <input
          ref="previewImageButton"
          id="previewImage"
          type="file"
          accept="image/*"
          @change="uploadImage"
          class="hidden"
        />
      </div>
    </template>
  </Modal>
</template>

<style scoped>
.current-images,
.upload-images {
  min-height: 10rem;
  overflow: hidden;
}
.current-images img,
.upload-images img {
  height: 10em;
  object-fit: contain;
}
.current-images span.icon-check-empty,
.current-images span.icon-check {
  filter: drop-shadow(1px 1px 8px #fff);
}
</style>
