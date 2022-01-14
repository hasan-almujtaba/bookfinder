<template>
  <v-card flat>
    <v-card-text v-html="item.description || 'No Description'"> </v-card-text>
    <v-card-actions class="tw-justify-end tw-space-x-1.5">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            depressed
            class="mt-4"
            v-bind="attrs"
            v-on="on"
            @click="saveBook"
            :disabled="alreadySave(item.id)"
          >
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </template>
        <span>Save This Book</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="secondary"
            depressed
            class="mt-4"
            v-bind="attrs"
            v-on="on"
            :href="item.previewLink"
            target="_blank"
          >
            <v-icon>mdi-link</v-icon>
          </v-btn>
        </template>
        <span>Read a sample</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import book from "~/mixins/book";

export default {
  mixins: [book],
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