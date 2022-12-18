let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: "",
            size: 150
        }
    },
    computed: {
        // Use computred properties to return the property
        // that the caller wants
        circle_classes() {
            return {
                purple: this.isPurple
            }
        }
    }
}).mount('#app')