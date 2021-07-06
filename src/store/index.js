import { createStore } from 'vuex'

export default createStore({
    state: {
        menus: [
            { to: "/", name: "Home", icon: "fas fa-home" },
            { to: "/dashboard", name: "Dashboard", icon: "fas fa-columns" },
            { to: "/analytics", name: "Analytics", icon: "fas fa-chart-bar" },
            { to: "/friends", name: "Friends", icon: "fas fa-users" },
            { to: "/image", name: "Images", icon: "fas fa-image" },
        ],
        collapsed: false,
        sidebar_width: 196,
        sidebar_width_collapsed: 54,

    },
    mutations: {
        toggleSidebar: (state) => state.collapsed = !state.collapsed
    },
    getters: {
        sidebarWidthSet: (state) => `${state.collapsed ? state.sidebar_width_collapsed : state.sidebar_width}px`
    },
    modules: {
    }
})
