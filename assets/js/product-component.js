export default {
  props: [
    'id',
  ],
  created() {
    this.loading = true;

    fetch('orderchamp product page.json').then((response) => {
      response.json().then((data) => {console.log(data)
        this.loading = false;
        this.user.name = data.data.storefrontBySlug.name;
        this.user.minimumOrderAmount = data.data.storefrontBySlug.minimumOrderAmount;
        this.images = data.data.storefrontBySlug.listing.images.edges.map((record) => {
          return {
            thumbnailUrl: record.node.small,
            url: record.node.big,
          };
        });
        this.imageSelected = this.images[0];
        this.description = data.data.storefrontBySlug.listing.description;
      });
    });
  },
  data() {
    return {
      loading: false,
      user: {
        name: null,
        minimumOrderAmount: null,
      },
      images: [],
      imageSelected: null,
      description: '',
      descriptionExpanded: false,
    };
  },
  methods: {
    onImageSelect(index) {
      this.imageSelected = this.images[index];
    },
    expandDescription() {
      this.descriptionExpanded = true;
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
          <div class="description">
            <h3>Information</h3>
            <p>
              <template v-if="!descriptionExpanded">
                {{description.split(' ').slice(0, 70).join(' ')}}...
              </template>

              <template v-if="descriptionExpanded">
                {{description}}
              </template>
            </p>
            <button
              v-if="!descriptionExpanded"
              class="btn-read-more"
              @click="expandDescription"
            >Read More</button>
          </div>
        </div>
        <div class="right">
          <div class="user-info">
          <a href="#">{{user.name}}</a> - €{{parseFloat(user.minimumOrderAmount).toFixed(2)}} Order minimum
          </div>

          <button>ADD TO CART</button>
        </div>
      </template>
    </div>
  `,
}