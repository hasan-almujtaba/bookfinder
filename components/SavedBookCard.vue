<template>
  <v-card flat>
    <div class="tw-flex">
      <div class="tw-self-center">
        <v-img
          :src="item.imageLinks.thumbnail.replace('http', 'https')"
          width="128"
          height="202"
          v-if="item.imageLinks"
        ></v-img>
        <v-img
          v-else
          src="/assets/not-found.png"
          width="128"
          height="202"
        ></v-img>
      </div>
      <div class="tw-flex-grow tw-flex tw-flex-col">
        <v-card-text class="tw-justify-start">
          <v-clamp :max-lines="1" class="primary--text tw-font-bold tw-text-xl">
            {{ item.title }}
          </v-clamp>
          <p class="tw-font-bold">
            {{ item.authors ? item.authors[0] : "Unknown Author" }}
            <br />
            <span class="tw-text-secondary">
              {{ item.publisher || "Unknown Publisher" }}
            </span>
            <br />
            <span class="tw-text-accent"> {{ item.pageCount }} Pages </span>
          </p>
        </v-card-text>
        <v-card-actions class="tw-justify-end">
          <v-btn color="primary" depressed :to="`book/${item.id}`">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
          <v-btn color="error" depressed @click="$emit('click:remove', item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>