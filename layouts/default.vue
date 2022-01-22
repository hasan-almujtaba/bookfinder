<template>
  <v-app>
    <loading-overlay></loading-overlay>
    <web-navigation></web-navigation>
    <v-main class="tw-bg-gray-200">
      <Nuxt keep-alive />
    </v-main>
    <v-footer absolute app color="primary" dark>
      <div>
        &copy; {{ new Date().getFullYear() }} Book<span class="font-weight-bold"
          >finder
        </span>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon dark href="https://my.hasanproject.com" target="_blank">
        <v-icon>mdi-web</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

