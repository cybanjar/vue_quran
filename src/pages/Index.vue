<template>
  <q-page>
    <!-- <section v-if="errored">No Internet</section> -->

    <section>
      <!-- <div v-if="loading">
        <q-spinner-dots color="primary" size="2em" class="text-center" />
      </div> -->

      <div class="row justify-around q-ma-md">
        <div
          v-for="surah in surahs"
          :key="surah.id"
          class="col-4 col-xs-12 col-md-3 q-ma-md"
        >
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6">
                <span class="number"> surah.number </span>
                <span class="float-right"> surah.englishName </span>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              surah.englishNameTranslation
              <span class="float-right"> surah.name </span>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import axios from "axios";
import ky from "ky";

export default {
  name: "PageIndex",
  data() {
    return {
      lorem: "Lorem ipsum dolor sit amet",
      base_path: "http://api.alquran.cloud/v1/quran/quran-uthmani",
      tempSetup: [],
      ayahs: [],
      surahs: null,
      errored: false,
      loading: true,
    };
  },
  mounted() {
    (async () => {
      const parsed = await ky.get(this.base_path, {}).json();
      console.log(parsed.data);
    })();
  },

  // mounted() {
  //   axios
  //     .get(this.base_path)
  //     .then((response) => {
  //       this.surahs = response.data.data.surahs;
  //       console.log(this.surahs);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       this.errored = true;
  //     })
  //     .finally(() => (this.loading = false));
  // },
};
</script>