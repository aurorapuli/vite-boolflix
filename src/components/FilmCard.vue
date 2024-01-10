<script>

// importo store
import { store } from '../store';

export default {
    name: "FilmCard",

    data() {
        return {
            store,
        }
    },
    methods: {
        getImage: function (imgPath) {
            return new URL(imgPath, import.meta.url).href
        }
    }
}
</script>

<template>
    <h3>Film</h3>
    <div class="row">
        <div class="card" v-for="film in store.ListFilm">
            <div class="img"><img src="" alt=""></div>
            <div class="titolo">{{ film.title }}</div>
            <div class="titolo.originale"><img src="" alt="">{{ film.original_title }}</div>
            <div class="lingua"> <img :src="getImage(`../assets/${film.original_language}.png`)" alt=""></div>
            <div class="voto">{{ film.vote_average }}</div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.row {
    display: flex;
    flex-wrap: wrap;

    .card {
        width: calc((100% / 5) - 20px);
        margin: 0 10px;

        .lingua {
            width: 20px;

            img {
                max-width: 100%;
            }
        }
    }
}
</style>
