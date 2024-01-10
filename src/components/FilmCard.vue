<script>

// importo store
import { store } from '../store';

export default {
    name: "FilmCard",

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <h3>Film</h3>
    <div class="row">
        <div class="card" v-for="film in apiFilm">
            <div class="img"><img src="" alt=""></div>
            <div class="titolo">{{ film.title }}</div>
            <div class="titolo.originale">{{ film.original_title }}</div>
            <div class="lingua">{{ film.original_language }}</div>
            <div class="voto">{{ film.vote_average }}</div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.row {
    display: flex;
    flex-wrap: wrap;

    // .card {
    //     width: calc((100% / 5) - 20px);
    //     margin: 0 10px;
    // }
}
</style>
