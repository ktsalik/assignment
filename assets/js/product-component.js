export default {
  props: [
    'id',
  ],
  created() {
    this.loading = true;

    fetch('orderchamp product page.json').then((response) => {
      response.json().then((data) => {
        this.loading = false;
      });
    });
  },
  data() {
    return {
      loading: false,

    };
  },
  template: `
    <div class="product">
      <span v-if="loading">Please Wait</span>
      <template v-else="!loading">
        product preview
      </template>
    </div>
  `,
}