// Create the first Vue instance
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
// This is a class selector ('.' in front of "app")
// This corresponds to index.htnl: <div class="app">...</div>
}).mount("#app")

// Create the second Vue instance
Vue.createApp({
    data() {
        return {
            firstName: "Jane",
            world: "Hello, world!"
        }
    },
// This is a class selector ('.' in front of "app")
// This corresponds to index.htnl: <div class="app">...</div>
}).mount("#app2")