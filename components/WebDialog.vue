<template>
  <v-dialog v-model="show" persistent>
    <v-card>
      <v-card-title class="primary white--text">
        <slot name="header"></slot>
      </v-card-title>
      <v-card-text class="pa-5" :class="contentClass">
        <slot></slot>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions v-if="$slots.actions" :class="actionClass">
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    actionClass: {
      type: String,
      default: "",
    },
    contentClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>