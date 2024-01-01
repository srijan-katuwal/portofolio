<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import Toast from "@vuesimple/vs-toast";
import { addBlog } from "../service/api.js";

const router = useRouter();
let quill = null;
const editor = ref({});
// const toolbar = ref({});

onMounted(() => {
  quill = new Quill(editor.value, {
    // modules: { toolbar: false },
    // readOnly: true,
    theme: "snow",
  });
});

const saveBlog = async () => {
  const res = await addBlog(quill.getContents());
  if (res.data) {
    Toast.show({
      title: "Data Saved Successfully",
      message: res.data,
      variant: "success",
    });
    router.push("/");
  } else if (res.error) {
    Toast.show({
      title: "Couldn't Save Data",
      message: res.error,
      variant: "error",
    });
  }
};
</script>

<template>
  <div class="w-full h-screen bg-black/10">
    <div class="container mx-auto py-10">
      <!-- <div ref="toolbar">
        <button class="ql-bold">Bold</button>
        <button class="ql-italic">Italic</button>
      </div> -->

      <div ref="editor"></div>

      <button class="btn mt-6" @click="saveBlog">Save</button>
    </div>
  </div>
</template>
