import quantitySelectorComponent from './quantity-selector-component.js';

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      
    };
  },
  methods: {
    onQuantityChange(value) {
      this.$emit('onQuantityChange', {
        id: this.data.id,
        quantity: value,
      });
    },
  },
  components: {
    quantitySelector: quantitySelectorComponent,
  },
  template: `
    <div class="product-variant">
      <quantity-selector
        @change="onQuantityChange"
      ></quantity-selector>

      <span class="name">{{data.name}}</span>

      <span class="price">€{{data.price}}</span>

      <span class="msrp">€{{data.msrp}}</span>

      <i class="fa-solid fa-circle-check"></i>
    </div>
  `,
}