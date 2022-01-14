export default {
  methods: {
    saveBook() {
      this.$store.dispatch("book/saveItem", this.item);
      this.$toast.open({
        message: "Book Saved",
        duration: 2000,
        position: "top-right",
      });
    },
    alreadySave(id) {
      const item = this.$store.state.book.saved.find(
        (item) => item.id === id
      );

      return item ? true : false;
    },
  },
};