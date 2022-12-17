// Create the first Vue instance
const vm = Vue.createApp({
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

// Accessing data after creation of Vue Model
// Change the text to Bob after 2000ms
setTimeout(()=>{
     // Not required as Vue allows PROXY getter/setters to these attributes
    // vm.$data.firstName = "Bob" // w/o proxy

    vm.firstName = "Bob" // with proxy
}, 2000 /*ms*/),

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