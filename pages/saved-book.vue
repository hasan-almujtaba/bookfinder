<template>
  <v-container class="pa-10">
    <v-row>
      <v-col>
        <!-- Title -->
        <div class="text-center">
          <h1 class="tw-capitalize primary--text">Saved Book</h1>
          <p class="tw-capitalize tw-text-sm">
            All books saved in local storage on your device.
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- Book Card List -->
    <client-only>
      <v-row justify="center">
        <template v-if="books.length === 0">
          <v-col class="text-center">
            <v-img
              src="/assets/book-empty.svg"
              width="300"
              class="mx-auto"
              contain
            ></v-img>
            <h3 class="primary--text">No book saved</h3>
            <div>Search for a book and save it to your device.</div>
            <v-btn depressed color="primary" to="/search" class="mt-2">
              <v-icon left>mdi-book-search</v-icon>
              Search
            </v-btn>
          </v-col>
        </template>
        <template v-else>
          <v-col
            v-for="(item, i) in books"
            :key="i"
            :item="item"
            cols="12"
            lg="6"
          >
            <saved-book-card :item="item" @click:remove="openRemoveDialog">
            </saved-book-card>
          </v-col>
        </template>
      </v-row>

      <!-- Dialog -->
      <web-dialog :show="remove.dialog" content-class="primary--text">
        <template #header>
          <span class="headline">Remove Book</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="remove.dialog = false" dark>
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </template>
        <template> Are you sure you want to remove this book? </template>
        <template #actions>
          <v-btn
            color="primary"
            depressed
            text
            class="tw-w-1/2 tw-font-bold"
            @click="removeBook"
          >
            <v-icon left>mdi-check</v-icon>
            Yes
          </v-btn>
          <v-divider vertical></v-divider>
          <v-btn
            color="error"
            depressed
            text
            class="tw-w-1/2 tw-font-bold"
            @click="remove.dialog = false"
          >
            <v-icon left>mdi-close</v-icon>
            No
          </v-btn>
        </template>
      </web-dialog>
    </client-only>
  </v-container>
</template>

<script>
export default {
  head: {
    title: "Saved Book",
    meta: [
      {
        name: "description",
        hid: "description",
        content: "Saved book list",
      },
    ],
  },
  data() {
    return {
      remove: {
        dialog: false,
        data: {},
      },
    };
  },
  computed: {
    books() {
      return this.$store.state.book.saved;
    },
  },
  methods: {
    removeBook() {
      this.$store.dispatch("book/removeItem", this.remove.data);
      this.$toast.open({
        message: "Book Removed",
        duration: 2000,
        position: "top-right",
      });

      this.remove.dialog = false;
    },
    openRemoveDialog(item) {
      this.remove.data = item;
      this.remove.dialog = true;
    },
  },
};
</script>