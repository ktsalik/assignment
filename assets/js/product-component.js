export default {
  props: [
    'id',
  ],
  created() {
    this.loading = true;

    fetch('orderchamp product page.json').then((response) => {
      response.json().then((data) => {
        this.loading = false;
        this.images = data.data.storefrontBySlug.listing.images.edges.map((record) => {
          return {
            thumbnailUrl: record.node.small,
            url: record.node.big,
          };
        });
        this.imageSelected = this.images[0];
      });
    });
  },
  data() {
    return {
      loading: false,
      images: [],
      imageSelected: null,
    };
  },
  methods: {
    onImageSelect(index) {
      this.imageSelected = this.images[index];
    }
  },
  template: `
    <div class="product">
      <span v-if="loading">Please Wait</span>
      <template v-else="!loading">
        <div class="thumbnails">
          <div
            v-for="(image, index) in images"
            class="thumbnail"
            :style="{ 'background-image': 'url(' + image.thumbnailUrl + ')' }"
            @click="onImageSelect(index)"
          ></div>
        </div>
        <div class="left">
          <div class="image" :style="{ 'background-image': 'url(' + imageSelected.url + ')' }"></div>
          <div class="description">description</div>
        </div>
        <div class="right">
          <button>ADD TO CART</button>
        </div>
      </template>
    </div>
  `,
}