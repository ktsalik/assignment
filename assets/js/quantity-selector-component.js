export default {
  props: {
    
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    onKeyPress(e) {
      const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (!keysAllowed.includes(e.key)) {
        e.preventDefault();
      }
    },
    onBlur() {
      if (!this.value.toString().trim().length) {
        this.value = 0;
      }
    },
    onInput() {
      const value = parseInt(this.value) || 0;
      this.$emit('change', value);
    },
    increase() {
      this.value++;
      this.$emit('change', this.value);
    },
    decrease() {
      this.value = this.value > 0 ? this.value - 1 : 0;
      this.$emit('change', this.value);
    },
  },
  template: `
    <div class="quantity-selector">
      <button @click="decrease">-</button>

      <input
        type="text"
        v-model="value"
        @keypress="onKeyPress"
        @blur="onBlur"
        @input="onInput"
      />

      <button @click="increase">+</button>
    </div>
  `,
}