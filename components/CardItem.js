export const CardItem = {
  props: {
    id: Number,
    name: String,
    img_src: String,
    like: Boolean,
    price: Number,
  },
  template: `
  <div>
  <li :key="id">
    <img  :src="img_src" alt="post image"/>
    <p>Price: {{ price }}</p>
    <button>
      {{ like }} Like{{ like !== 1 ? 's' : '' }}
    </button>
  </li>
</div>
    `,
};
