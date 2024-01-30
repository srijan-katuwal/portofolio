<script setup>
import Modal from "./Modal.vue";
import { ref } from "vue";

const toggleModal = ref(false);
const uploadType = ref(1);
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
          'text-neutral-500': uploadType != 1,
        }"
        @click="uploadType = 1"
        >Recent Uploads</span
      >
      &nbsp; | &nbsp;
      <span
        class="underline-offset-4 cursor-pointer"
        :class="{
          underline: uploadType == 2,
          'text-neutral-500': uploadType != 2,
        }"
        @click="uploadType = 2"
        >From Computer</span
      >
    </div>
    <div v-if="uploadType == 1" class="h-40 mt-4">Choose</div>
    <div
      v-else
      class="border-dashed border-2 flex items-center justify-center flex-col gap-4 h-40 cursor-pointer mt-4 bg-slate-100"
      @click="toggleModal = true"
    >
      <span class="font-fontello icon-file-image text-4xl"></span>
      <span>Click to add an image</span>
    </div>
  </Modal>
</template>
