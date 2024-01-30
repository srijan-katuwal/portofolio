<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="modal w-screen h-screen bg-black/40 z-10">
    <div class="modal-container rounded overflow-hidden">
      <div
        class="bg-slate-100 flex justify-between items-center py-3 px-4 border-b"
      >
        <span class="text-neutral-500">{{ title }}</span>
        <span
          class="border border-neutral-300 font-fontello icon-cancel py-1 px-2 rounded text-neutral-500 bg-slate-100 cursor-pointer"
          @click="$emit('close')"
        ></span>
      </div>
      <div class="bg-white py-8 px-6">
        <slot></slot>
      </div>
      <div
        class="bg-slate-100 py-3 border-b cursor-pointer px-4"
        @click="$emit('close')"
      >
        <span
          class="border border-neutral-300 py-1 px-3 inline-block rounded text-neutral-500"
          >Cancel</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-container {
  width: 600px;
  background: white;
}
</style>
