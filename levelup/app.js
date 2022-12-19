let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
}) //.mount('#app') // Mount later until it is required later for interaction

setTimeout(() => {
  vm.mount("#app")
}, 3000);