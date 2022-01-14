<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      disable-resize-watcher
      v-if="$vuetify.breakpoint.mdAndDown"
    >
      <v-list>
        <v-list-item to="/saved-book" router exact>
          <v-list-item-icon>
            <v-icon color="primary">mdi-bookmark</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="primary--text text-capitalize">
              saved book
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      class="header"
      :class="scrollToggle ? 'header-scroll' : 'header-top'"
    >
      <v-toolbar-title
        class="text-capitalize tw-cursor-pointer"
        @click="$router.push('/')"
      >
        Book<span class="font-weight-bold">finder </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="$vuetify.breakpoint.mdAndDown"
        :class="scrollToggle ? 'primary--text' : 'white--text'"
      />
      <template v-if="$vuetify.breakpoint.lgAndUp">
        <v-badge
          dot
          overlap
          :color="scrollToggle ? 'primary' : 'white'"
          :value="savedBookExist"
        >
          <v-btn
            depressed
            :color="scrollToggle ? 'primary' : 'white'"
            text
            to="/saved-book"
          >
            <v-icon left>mdi-bookmark</v-icon>
            saved book
          </v-btn>
        </v-badge>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      scrollPosition: null,
    };
  },
  computed: {
    scrollToggle() {
      return this.scrollPosition > 50;
    },
    savedBookExist() {
      return this.$store.state.book.saved.length > 0 ? true : false;
    },
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped lang="postcss">
.header {
  @apply tw-transition tw-duration-500 tw-px-10 !important;
}

.header-scroll {
  @apply tw-shadow tw-bg-white tw-text-primary !important;
}

.header-top {
  @apply tw-shadow-none tw-bg-primary tw-text-white !important;
}
</style>