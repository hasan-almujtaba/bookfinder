export default {
  methods: {
    saveBook() {
      this.$store.dispatch("book/saveItem", this.item);
      this.$toast.success('Book Saved');
    },
    alreadySave(id) {
      const item = this.$store.state.book.saved.find(
        (item) => item.id === id
      );

      return item ? true : false;
    },
  },
};