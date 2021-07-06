<template>
    <div class="sidebar" :style="{ width: sidebarWidthSet }">
        <h1>
            <div v-if="collapsed">
                <i class="fab fa-vuejs"></i>
            </div>

            <span v-else>Chn <i class="fab fa-vuejs"></i></span>
        </h1>

        <SidebarLink
            v-for="(menu, index) in menus"
            :key="index"
            :to="menu.to"
            :icon="menu.icon"
        >
            {{ menu.name }}
        </SidebarLink>

        <span
            class="collapse-icon"
            :class="{ 'rotate-180': collapsed }"
            @click="toggleSidebar"
        >
            <i class="fas fa-angle-double-left"></i>
        </span>
    </div>
</template>

<script>
    import SidebarLink from "@/components/sidebar/SidebarLink"
    import { mapGetters, mapState, mapMutations } from "vuex"

    export default {
        components: { SidebarLink },
        methods: {
            ...mapMutations(["toggleSidebar"])
        },
        computed: {
            ...mapGetters(["sidebarWidthSet"]),
            ...mapState(["menus", "collapsed"])
        }
    }
</script>

<style>
    :root {
        --sidebar-bg-color: #2f855a;
        --sidebar-item-hover: #38a169;
        --sidebar-item-active: #276749;
    }
</style>
<style lang="scss" scoped>
    .sidebar {
        color: #fff;
        background-color: var(--sidebar-bg-color);

        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0.5em;

        transition: 300ms ease;

        display: flex;
        flex-direction: column;

        h1 {
            display: flex;
            justify-content: center;
            margin: 21.5px 0;
            height: 2.5em;
            white-space: nowrap;
        }

        .collapse-icon {
            position: absolute;
            bottom: 0;
            padding: 0.75em;
            color: rgba(white, 0.7);
            cursor: pointer;

            transition: 200ms linear;

            &.rotate-180 {
                transform: rotate(180deg);
                // transition: 200ms linear;
            }
        }
    }
</style>