import { reactive } from 'vue'

export const store = reactive({

    ListFilm: [],
    apiFilm: "https://api.themoviedb.org/3/search/movie?api_key=68a623aa06584ac14c2298104440fc7d",
    queryfilm: ""
})