<template>
  <v-overlay :value="loading" z-index="10">
    <lottie :options="defaultOptions" :height="200" :width="200"></lottie>
  </v-overlay>
</template>

<script>
import Lottie from "vue-lottie";
import * as animationData from "~/assets/lottie/loading.json";

export default {
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading.loading;
    },
  },
};
</script>

<style>
</style>