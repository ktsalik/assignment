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
        <div class="thumbnails">thumbnails</div>
        <div class="left">
          <div class="image">image</div>
          <div class="description">description</div>
        </div>
        <div class="right">
          <button>ADD TO CART</button>
        </div>
      </template>
    </div>
  `,
}