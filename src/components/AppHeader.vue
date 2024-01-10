<script>

// importo store
// import { store } from '../store';

export default {
    name: "AppHeader",

    // data() {
    //     return {
    //         store,
    //     }
    // }
}
</script>

<template>
    <header>
        <h1>BOOLFIX</h1>
        <div class="search">
            <input type="text">
            <div class="button">Search</div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;

    h1 {
        color: red;
    }

    .search {
        display: flex;

        .button {
            background-color: red;
            padding: 5px;
            margin-left: 4px;
        }
    }
}
</style>
