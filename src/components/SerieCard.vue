<script>

// importo store
import { store } from '../store';

export default {
    name: "SerieCard",

    data() {
        return {
            store,
        }
    },
    methods: {
        getImage: function (imgPath) {
            return new URL(imgPath, import.meta.url).href
        },
        getPoster(imgPoster) {
            return "http://image.tmdb.org/t/p/w342" + imgPoster;
        }
    }
}
</script>

<template>
    <h3>SERIE TV</h3>
    <div class="row">
        <div class="card" v-for="serie in store.ListSerie">
            <div class="img"><img v-if="serie.poster_path" :src="getPoster(serie.poster_path)" alt=""></div>
            <div class="titolo">{{ serie.name }}</div>
            <div class="titolo.originale">{{ serie.original_name }}</div>
            <div class="lingua"> <img :src="getImage(`../assets/${serie.original_language}.png`)" alt=""></div>
            <div class="voto">{{ serie.vote_average }}</div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
h3 {
    font-size: 30px;
    color: white;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;

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
