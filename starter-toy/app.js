// Create the first Vue instance
const vm = Vue.createApp({
    // Inserting data into application
    // Evaluates the expression firstName to "John"
    // Data that we don't wish to render should not be here (as it can be seen)
    // Note: this data() function is a special function to return data from vue
    data() {
        return {
            firstName: "John",
            lastName: "Tan",
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

Vue.createApp({
    data() {
        return {
            firstName: "Jack",
            lastName: "Tan",
            world: "Hello, world!"
        }
    },
    methods: {
        fullName(){
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount("#app1")

// Create the second Vue instance
Vue.createApp({
    data() {
        return {
            firstName: "Jane",
            lastName: "Tan",
            world: "Hello, world!",
            url:"https://google.com",
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        increment(){
            this.age += 1
        },
        updateLastName(msg, event){
            event.preventDefault()
            console.log(msg) // Passing log message in
            this.lastName = event.target.value
        }
    }
// This is a class selector ('.' in front of "app")
// This corresponds to index.htnl: <div class="app">...</div>
}).mount("#app2")