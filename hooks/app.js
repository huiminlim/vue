let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },

  // Lifecycle hooks

  beforeCreate() {
    // Data is not initialized yet, should print undefined
    console.log("beforeCreate() function called!", this.message)
  },
  created() {
    // Data is initialized after created, so print messages
    console.log("created() function called!", this.message)
  },
  beforeMount() {
    // Vue instance is not mounted yet, so no element is mount ($el is null)
    console.log("beforeMount() function called!", this.$el) // $el is the element vue mounted
  },
  mounted() {
    // Vue instance is mounted and the element mounted is the message
    // onto the HTML
    console.log("mounted() function called!", this.$el)
  },
  beforeUpdate() {
    console.log("beforeUpdate() function called!")
  },
  updated() {
    console.log("updated() function called!")
  },
  beforeUnmount() {
    console.log("beforeUnmount() function called!")
  },
  unmounted() {
    console.log("unmounted() function called!")
  }
}) //.mount('#app') // Mount later until it is required later for interaction

vm.mount('#app')
// setTimeout(() => {
//   vm.mount("#app")
// }, 3000);