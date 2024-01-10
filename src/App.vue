<script>
import AppHeader from './components/AppHeader.vue'
import FilmCard from './components/FilmCard.vue'

// importo axios
import axios from 'axios';

// importo store
import { store } from './store';

export default {
  components: {
    AppHeader,
    FilmCard
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
        axios
          .get(store.apiFilm)
          .then((res => {

            store.apiFilm = res.data.results;
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

  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/_variables.scss' as *;

main {
  padding: 10px;
}
</style>
