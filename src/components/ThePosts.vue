<script setup lang="ts">
import PostsItem from "./PostsItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import Posts from "@/api/posts.json";

const posts = Posts.data;
</script>

<template>
  <PostsItem v-for="item of posts" :key="item.id" :id="item.id">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ item.title }}</template>

    {{ item.description }}
  </PostsItem>
</template>
