<script setup>
import { onMounted } from "vue";

import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import List from "@editorjs/list";
import Title from "title-editorjs";

import { addBlog } from "../service/api.js";

let blogData = null;
let editor = null;

onMounted(() => {
  console.log(addBlog);
  editor = new EditorJS({
    holder: "editor",
    autofocus: true,
    tools: {
      title: Title,
      list: List,
    },
  });
});

const save = () => {
  editor
    .save()
    .then((outputData) => {
      blogData = outputData;
      addBlog(blogData);
    })
    .catch((error) => {
      console.log("Saving failed: ", error);
    });
};
</script>

<template>
  <div class="w-full h-screen bg-black/10">
    <button @click="save">Save</button>
    <div id="editor"></div>
  </div>
</template>
