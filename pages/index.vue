<template>
  <v-container fluid>
    <!-- Hero Section -->
    <v-row class="primary pa-lg-16 pa-10">
      <v-col class="white--text tw-self-center" cols="12" lg="6">
        <h1 class="tw-font-black">
          Find the books you are looking for anywhere
        </h1>
        <p>
          Search for books anywhere, you don't need to know the name of the
          book, if you know the name of the author or the publisher, just type
          and search.
        </p>
        <v-btn color="secondary" depressed to="/search">
          search now
          <v-icon right>mdi-forward</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" lg="6" v-if="$vuetify.breakpoint.lgAndUp">
        <v-img
          src="/assets/book.svg"
          max-width="450"
          eager
          class="float-right"
        ></v-img>
      </v-col>
    </v-row>

    <!-- Main Section -->
    <v-row class="pa-16">
      <v-col cols="12">
        <h2 class="text-center tw-text-xl lg:tw-text-2xl">
          THE IMPORTANCE OF READING BOOKS
        </h2>
      </v-col>
    </v-row>

    <!-- PC Main Section -->
    <template v-if="$vuetify.breakpoint.lgAndUp">
      <template v-for="(item, i) in primarySection">
        <v-row :key="i" v-if="i % 2 === 0" class="px-lg-16">
          <v-col cols="12" lg="6" class="tw-self-center">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.description }}
            </p>
          </v-col>
          <v-col cols="12" lg="6">
            <v-img
              eager
              :src="`/assets/${item.image}`"
              max-width="450"
              class="lg:tw-float-right"
              contain
            ></v-img>
          </v-col>
        </v-row>

        <v-row :key="i" v-else class="px-lg-16">
          <v-col cols="12" lg="6">
            <v-img
              eager
              :src="`/assets/${item.image}`"
              max-width="450"
              contain
            ></v-img>
          </v-col>
          <v-col cols="12" lg="6" class="tw-self-center tw-text-right">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.description }}
            </p>
          </v-col>
        </v-row>
      </template>
    </template>
    <!-- PC Main Section -->

    <!-- Mobile Main Section -->
    <template v-else>
      <v-row v-for="(item, i) in primarySection" :key="i" class="px-10">
        <v-col>
          <v-img
            eager
            :src="`/assets/${item.image}`"
            max-width="450"
            class="mx-auto"
            contain
          ></v-img>
          <h3 class="text-center my-3">{{ item.title }}</h3>
          <p class="text-justify">
            {{ item.description }}
          </p>
        </v-col>
      </v-row>
    </template>
    <!-- Mobile Main Section -->

    <!-- Main Section -->

    <!-- Second Section -->
    <v-row class="secondary">
      <v-col class="text-center pa-lg-16 pa-10">
        <h2 class="tw-text-xl lg:tw-text-2xl">
          ALL THE BOOKS YOU LOOK FOR IN ONE PLACE
        </h2>
        <v-img
          src="/assets/search.svg"
          max-width="450"
          class="mx-auto"
          contain
        ></v-img>
      </v-col>
    </v-row>
    <!-- Second Section -->

    <v-row class="">
      <v-col class="text-center" cols="12" lg="6">
        <v-img
          eager
          src="/assets/download.svg"
          max-width="300"
          class="mx-auto"
          contain
        ></v-img>
        <p>Download samples in PDF or EPUB of your favorite books</p>
      </v-col>
      <v-col class="text-center" cols="12" lg="6">
        <v-img
          eager
          src="/assets/buy.svg"
          max-width="300"
          class="mx-auto"
          contain
        ></v-img>
        <p>Buy the books you're looking for from your phone or PC</p>
      </v-col>
    </v-row>

    <v-row class="">
      <v-col class="text-center">
        <h2 class="text-center">THE TECHNOLOGIES USED</h2>
        <div class="py-10">
          <v-icon color="primary" size="60">mdi-vuejs</v-icon>
          <v-icon color="primary" size="60">mdi-nodejs</v-icon>
          <v-icon color="primary" size="60">mdi-google</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      primarySection: [
        {
          title: "READING PRACTICE IMPROVES VOCABULARY",
          description:
            "Whether for pleasure, study or information, reading practice improves vocabulary and streamlines reasoning and interpretation.",
          image: "vocabulary.svg",
        },
        {
          title: "ADVANCING TECHNOLOGY",
          description:
            "With the advancement of technologies in the modern world, people are less and less interested in reading.",
          image: "tech.svg",
        },
        {
          title: "DYNAMIC READING",
          description:
            "Dynamic and relaxed reading is one of the best ways to acquire information. The ideal is to learn to read informative texts, scientific articles, textbooks, educational books, etc.",
          image: "dynamic.svg",
        },
      ],
    };
  },
};
</script>