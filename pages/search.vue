<template>
  <v-container class="pa-10">
    <v-row justify="center">
      <v-col cols="12" lg="8" class="tw-text-center">
        <h1 class="tw-capitalize primary--text">Find your information</h1>
        <p>
          You don't need to know the name of the book, if you know the name of
          the author or publisher, just type, search and find
        </p>

        <v-form @submit.prevent="submit">
          <v-text-field
            append-icon="mdi-magnify"
            outlined
            dense
            placeholder="Type author, book name ..."
            hide-details="auto"
            autofocus
            v-model="search"
          ></v-text-field>
          <div
            class="mt-10 primary--text tw-font-semibold"
            v-if="books.length !== 0"
          >
            Result {{ books.length }} books
          </div>
        </v-form>
      </v-col>
    </v-row>

    <v-row>
      <template v-if="books.length === 0">
        <v-col>
          <v-img
            src="/assets/search-information.svg"
            max-width="300"
            class="mx-auto"
          ></v-img>
        </v-col>
      </template>

      <template v-else>
        <v-col v-for="(item, index) in books" :key="index" cols="12" lg="6">
          <book-card :item="item"></book-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head: {
    title: "Search",
    meta: [
      {
        name: "description",
        hid: "description",
        content: "Search information",
      },
    ],
  },
  data() {
    return {
      search: "",
      books: [],
    };
  },
  methods: {
    async submit() {
      this.$store.dispatch("loading/setLoading");
      const { data } = await this.$axios.get(
        `volumes?q=${this.search}&maxResults=40`
      );
      this.$store.dispatch("loading/setLoading");

      this.books = [];

      data.items.forEach((element) => {
        const info = element.volumeInfo;

        this.books.push({
          id: element.id,
          authors: info.authors,
          categories: info.categories || [],
          publishedDate: info.publishedDate,
          publisher: info.publisher,
          title: info.title,
          imageLinks: info.imageLinks,
          pageCount: info.pageCount,
        });
      });
      this.search = "";
    },
  },
};
</script>