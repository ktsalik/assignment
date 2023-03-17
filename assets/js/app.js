import headerComponent from "./header-component.js";
import productComponent from "./product-component.js";

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  components: {
    headerComponent: headerComponent,
    product: productComponent,
  },
}).mount('#app')
