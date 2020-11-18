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
          <q-card @click="goToAyah" flat bordered class="q-mx-sm">
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
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "customer",
  data() {
    return {
      lorem: "Lorem ipsum dolor sit amet",
      base_path: "http://api.alquran.cloud/v1/surah",
      tempSetup: [],
      ayahs: [],
      surahs: null,
      errored: false,
      loading: false,
      showModal: false,
    };
  },

  created() {
    const x =JSON.parse(localStorage.getItem("dataStorage"));
    console.log(x, 'x');
    if (x == null) {
      this.loading = true      
      axios
        .get(this.base_path)
        .then((response) => {
          this.surahs = response.data.data;
          // console.log(this.surahs, 'data dari API');
          localStorage.setItem("dataStorage", JSON.stringify(response.data.data));
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    } else {
      this.loading = false
      this.surahs = JSON.parse(localStorage.getItem("dataStorage"));
    }
    
  },


  methods: {
    goToAyah() {
      //this.showModal = true;
      console.log("Sucess");
    },
  },
};
</script>