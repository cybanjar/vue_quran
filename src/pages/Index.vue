<template>
  <q-page class="bg-grey-2">
    <section v-if="errored">Request Timeout</section>

    <section v-else>
      <div v-if="loading">
        <div class="row justify-center content-center">
          <q-spinner-dots color="primary" size="4.4em" />
        </div>
      </div>

      <div class="row justify-around">
        <div
          v-for="surah in surahs"
          :key="surah.id"
          class="col-4 col-xs-12 col-sm-3 col-md-3 q-ma-md"
        >
          <q-card @click="dialog = true" flat bordered class="q-mx-sm">
            <q-card-section>
              <div class="text-h6">
                <span class="number">{{ surah.number }}</span>
                <span class="float-right">{{ surah.englishName }}</span>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{ surah.englishNameTranslation }}
              <p class="float-right text-subtitle1">{{ surah.name }}</p>
            </q-card-section>
          </q-card>

          <!-- <q-btn
            flat
            class="bg-primary text-white"
            @click="goToAyah(surahs)"
            label="Save"
          /> -->
        </div>
      </div>
    </section>

    <!-- Dialog for surahs -->
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip
              v-if="maximizedToggle"
              content-class="bg-white text-primary"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip
              v-if="!maximizedToggle"
              content-class="bg-white text-primary"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div class="text-h6">Surah {{ surahs[1]["englishName"] }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import data from "../components/quran.json";
import axios from "axios";
import router from "../router";
import Vue from "vue";

export default {
  name: "customer",
  data() {
    return {
      lorem: "Lorem ipsum dolor sit amet",
      // base_path: "https://api.alquran.cloud/v1/surah",
      tempSetup: [],
      ayahs: data.data.surahs.ayahs,
      surahs: data.data.surahs,
      errored: false,
      loading: false,
      showModal: false,
      data: null,
      dialog: false,
      maximizedToggle: true,
      filteredSurahs: [],
      filteredAyahs: [],
    };
  },

  created() {
    const tempData = this.surahs;
    console.log("Get Surahs: ", tempData);

    const tempDataAyahs = this.ayahs;
    console.log("Get Ayahs : ", tempDataAyahs);
    // const x = JSON.parse(localStorage.getItem("dataStorage"));
    // console.log(x, "x");
    // if (x == null) {
    //   this.loading = true;
    //   axios
    //     .get(this.base_path)
    //     .then((response) => {
    //       this.surahs = response.data.data;
    //       // console.log(this.surahs, 'data dari API');
    //       localStorage.setItem(
    //         "dataStorage",
    //         JSON.stringify(response.data.data)
    //       );
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.errored = true;
    //     })
    //     .finally(() => (this.loading = false));
    // } else {
    //   this.loading = false;
    //   this.surahs = JSON.parse(localStorage.getItem("dataStorage"));
    // }
  },

  methods: {
    goToAyah(row) {
      //this.showModal = true;
      console.log("row", row);
      // router.push({ name: '/landing' })
      // alert(row["name"]);
    },
  },
};
</script>