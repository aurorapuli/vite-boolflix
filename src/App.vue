<script>
import AppHeader from './components/AppHeader.vue'
import FilmCard from './components/FilmCard.vue'
import SerieCard from './components/SerieCard.vue'

// importo axios
import axios from 'axios';

// importo store
import { store } from './store';

export default {
  components: {
    AppHeader,
    FilmCard,
    SerieCard
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilm() {

      if (store.queryfilm) {
        store.apiFilm += `&query=${store.queryfilm}`
        store.apiSerie += `&query=${store.queryfilm}`

        axios
          .get(store.apiFilm)
          .then((res => {

            store.ListFilm = res.data.results;
            console.log(res.data.results);
          }))
          .catch((err) => {
            console.log("Errori", err);
          })

        axios

          .get(store.apiSerie)
          .then((res => {

            store.ListSerie = res.data.results;
            console.log(res.data.results);
          }))
          .catch((err) => {
            console.log("Errori", err);
          })

      }

      store.queryfilm = ""
    }

  },
  created() {
    this.getFilm();

  }
}
</script>

<template>
  <AppHeader @search="getFilm" />
  <main>
    <FilmCard />
    <SerieCard />

  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/_variables.scss' as *;

main {
  padding: 10px;
}
</style>
