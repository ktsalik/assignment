import productVariantComponent from './product-variant-component.js';

export default {
  props: {
    data: Array,
  },
  data() {
    return {
      variantsSelected: [],
    };
  },
  methods: {
    onVariantQuantityChange({ id, quantity }) {
      const variantSelectedIndex = this.variantsSelected.findIndex((v) => v.id === id);

      if (variantSelectedIndex > -1) {
        // already selected variant
        if (quantity === 0) {
          this.variantsSelected.splice(variantSelectedIndex, 1);
        } else {
          this.variantsSelected[variantSelectedIndex].quantity = quantity;
        }
      } else {
        // choosing this variant for the first time
        if (quantity > 0) { // input value is not still zero (by spamming decrease button)
          this.variantsSelected.push({ id, quantity });
        }
      }

      let totalCostAmount = 0;
      this.variantsSelected.forEach((variantSelected) => {
        const variantData = this.data.find((v) => v.id === variantSelected.id);
        totalCostAmount += parseFloat(variantData.price) * variantSelected.quantity;
      });
      this.$emit('variantChoose', { variants: this.variantsSelected, totalCostAmount });
    },
  },
  components: {
    productVariant: productVariantComponent,
  },
  template: `
    <div class="product-variants">
      <div class="header">
        <span>Quantity</span>
        <span>Variant</span>
        <span>Price</span>
        <span>MSRP</span>
        <span>Stock</span>
      </div>

      <product-variant
        v-for="(variant, index) in data"
        :data="variant"
        @onQuantityChange="onVariantQuantityChange"
      ></product-variant>
    </div>
  `,
}