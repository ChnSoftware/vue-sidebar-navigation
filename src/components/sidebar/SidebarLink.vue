<template>
    <router-link :to="to" class="link" :class="isActive">
        <i class="icon" :class="icon"></i>
        <transition name="fade">
            <span v-if="!collapsed">
                <slot />
            </span>
        </transition>
    </router-link>
</template>

<script>
    import { mapState } from "vuex"

    export default {
        props: ["to", "icon"],
        computed: {
            ...mapState(["collapsed"]),
            isActive() {
                return {
                    active: this.$route.path === this.to
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .link {
        display: flex;
        align-items: center;

        cursor: pointer;
        position: relative;
        font-weight: 400;
        user-select: none;

        margin: 0.1em 0;
        padding: 0.4em;
        border-radius: 0.25em;
        height: 2.3em;

        color: white;

        &:hover {
            background-color: var(--sidebar-item-hover);
        }
        &.active {
            background-color: var(--sidebar-item-active);
        }
        .icon {
            width: 25px;
            margin-right: 10px;
            flex-shrink: 0;
        }
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 100ms;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>