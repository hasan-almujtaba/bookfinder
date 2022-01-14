<template>
  <v-card flat>
    <v-card-title
      class="justify-center tw-break-normal primary--text tw-font-bold"
    >
      {{ item.title }}
    </v-card-title>
    <v-img
      width="128"
      height="202"
      :src="item.imageLinks.thumbnail.replace('http', 'https')"
      v-if="item.imageLinks"
      class="mx-auto"
    ></v-img>
    <v-img
      v-else
      src="/assets/not-found.png"
      width="128"
      height="202"
      class="mx-auto"
    ></v-img>
    <v-card-text>
      <li>Authors : {{ item.authors ? item.authors[0] : "Unknown" }}</li>
      <li>Publisher : {{ item.publisher }}</li>
      <li>Published Date : {{ item.publishedDate }}</li>
      <li>Number of pages : {{ item.pageCount }}</li>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="postcss">
li {
  @apply tw-list-none !important;
}
</style>