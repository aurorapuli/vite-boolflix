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
        },
        numRound(num) {
            return Math.round(num / 2);
        }
    }
}
</script>

<template>
    <h3>SERIE TV</h3>
    <div class="row">
        <div class="card" v-for="serie in store.ListSerie">
            <div class="card-inner">
                <div class="card-front">
                    <div class="img"><img v-if="serie.poster_path" :src="getPoster(serie.poster_path)" alt=""></div>

                </div>
                <div class="card-back">
                    <div class="titolo"><strong>Titolo</strong>: {{ serie.name }}</div>
                    <div class="titolo.originale"><strong>Titolo originale</strong>: {{ serie.original_name }}</div>
                    <div class="lingua"> <img :src="getImage(`../assets/${serie.original_language}.png`)" alt=""></div>
                    <div class="voto"><strong>Voto</strong>: <i v-for="star in 5 " :key="star"
                            :class="{ 'fa-solid fa-star': star <= numRound(serie.vote_average), 'fa-regular fa-star': star > numRound(serie.vote_average) }"></i>
                    </div>
                    <div class="overvew"><strong>Overvew</strong>:
                        {{ serie.overview }}
                    </div>

                </div>
            </div>


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
        width: 342px;
        height: 515px;
        margin: 0 10px 70px 10px;
        color: white;

        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

            .card-front,
            .card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;

            }

            .card-back {
                transform: rotateY(180deg);
                background-color: black;

                div {
                    margin: 10px;
                }



            }

        }

        .lingua {
            width: 20px;

            img {
                max-width: 100%;
            }
        }
    }
}

.card:hover .card-inner {
    transform: rotateY(180deg);
}
</style>
