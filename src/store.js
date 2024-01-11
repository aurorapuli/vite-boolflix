import { reactive } from 'vue'

export const store = reactive({

    ListFilm: [],
    apiFilm: "https://api.themoviedb.org/3/search/movie?api_key=68a623aa06584ac14c2298104440fc7d&language=it-IT",
    queryfilm: "",

    apiSerie: "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT",
    ListSerie: []

})