<script setup>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = new Editor({
  content: "Start typing",
  extensions: [StarterKit],
});
</script>

<template>
  <div class="w-full h-screen bg-black/10">
    <button @click="save">Save</button>
    <EditorContent :editor="editor" />
  </div>
</template>
