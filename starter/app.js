Vue.createApp({
    // Inserting data into application
    // Evaluates the expression firstName to "John"
    // Data that we don't wish to render should not be here (as it can be seen)
    // Note: this data() function is a special function to return data from vue
    data() {
        return {
            firstName: "John",
            world: "Hello, world!"
        }
    },
// This is a id selector ('#' in front of "app")
// This corresponds to index.htnl: <div id="app">...</div>
}).mount("#app")