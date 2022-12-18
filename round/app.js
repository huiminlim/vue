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

let vm2 = Vue.createApp({
    data() {
        return {
            mode: 1
        }
    }
}).mount('#app2')