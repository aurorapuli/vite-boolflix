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
    getCard() {

      if (store.statusValue) {
        store.apiURL += `&${store.apiStatusParamentrer}=${store.statusValue}`
      }

      axios
        .get(store.apiURL)
        .then((res => {
          console.log(res.data.data);
          store.ListCard = res.data.data;
        }))
        .catch((err) => {
          console.log("Errori", err);
        })
    }


  },
  created() {
    this.getCard();
    this.getArchetype();

  }
}
</script>

<template>
  <AppHeader />
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
