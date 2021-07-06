<template>
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidthSet }">
        <router-view />
    </div>
</template>

<script>
    import Sidebar from "@/components/sidebar/Sidebar"
    import { mapGetters } from "vuex"

    export default {
        name: "App",
        components: { Sidebar },
        computed: {
            ...mapGetters(["sidebarWidthSet"])
        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;

        &:focus {
            outline: none;
        }
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    div {
        transition: 300ms ease margin-left;
    }
</style>
