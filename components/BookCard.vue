<template>
  <v-card flat class="pl-0" height="100%">
    <div class="tw-flex">
      <div class="tw-self-center">
        <v-img
          :src="item.imageLinks.thumbnail.replace('http', 'https')"
          v-if="item.imageLinks"
          width="128"
          height="202"
        ></v-img>
        <v-img v-else src="/assets/not-found.png" width="128" height="202">
        </v-img>
      </div>
      <v-divider vertical></v-divider>
      <div class="tw-flex-grow tw-flex tw-flex-col">
        <v-card-text>
          <v-clamp :max-lines="1" class="primary--text tw-font-bold tw-text-xl">
            {{ item.title }}
          </v-clamp>
          <div>
            <ul>
              <li class="list-item ml-n6 success--text">
                {{
                  $dayjs(item.publishedDate).format("DD/MM/YYYY") || "Unknown"
                }}
              </li>
              <li class="list-item ml-n6">
                {{ item.authors ? item.authors[0] : "Unknown Author" }}
              </li>
              <li class="list-item ml-n6 tw-text-secondary">
                {{ item.publisher || "Unknown Publisher" }}
              </li>
              <li class="list-item ml-n6 tw-text-accent">
                {{ formatCategory(item.categories) }}
              </li>
            </ul>
          </div>
        </v-card-text>

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
                v-bind="attrs"
                v-on="on"
                class="mt-4"
                :to="`book/${item.id}`"
              >
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </template>
            <span>View Book Detail</span>
          </v-tooltip>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
import VClamp from "vue-clamp";
import book from "~/mixins/book";

export default {
  mixins: [book],
  components: {
    VClamp,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatCategory(item) {
      return item.length !== 0 ? item[0] : "Unknown";
    },
  },
};
</script>

<style scoped lang="postcss">
.list-item {
  @apply tw-list-none tw-font-bold !important;
}
</style>