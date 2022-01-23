<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12" lg="4">
        <book-detail-card :item="book"></book-detail-card>
      </v-col>
      <v-col cols="12" lg="8">
        <book-description-card :item="book"></book-description-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    const { data } = await this.$axios.get(`volumes/${this.$route.params.id}`);
    this.book = data.volumeInfo;
    this.book.id = this.$route.params.id;
  },
  head() {
    return {
      title: this.book.title,
    };
  },
  data() {
    return {
      book: {},
    };
  },
};
</script>