export default {
  props: {
    score: Number,
    reviewsCount: Number,
  },
  data() {
    return {
      
    };
  },    
  template: `
    <div class="product-rating">
      <div class="stars">
        <i v-for="index in parseInt(score)" class="fa-solid fa-star"></i>
        <i v-for="index in (5 - parseInt(score))" class="fa-regular fa-star"></i>
      </div>

      <span class="score">
        {{parseFloat(score).toFixed(1)}}
      </span>

      <a href="#" class="reviews-count">
        ({{reviewsCount}} Reviews)
      </a>
    </div>
  `,
}