<template>
  <div class="cart">
    <div class="radio-com">
    <Radio v-for="product in products" :key="product.id" v-bind:product="product" v-on:picked="onRadioChange" v-bind:id="product['id'] == picked.id ? 'checked' : ''" />
    </div>
    <div class="number-select">
      <label>Numbers of licenses: </label>
      <select v-model="selected">
        <option v-for="index in picked.number" :key="index.id">{{
          index
        }}</option>
      </select>
    </div>
    <div class="cart-result">
      <p class="total">
        TOTAL: <a> ${{ picked.price * selected }}<span>US</span></a>
      </p>
      <button>Buy Now</button>
      <p class="selplanlabel">Selected plan: #{{ picked.id }}</p>
    </div>
  </div>
</template>

<script>
import Myjson from '../../assets/products.json'
import Radio from '../../components/Radio/Radio'
export default {
  name: 'ShoppingCart',
  data () {
    return {
      selected: 1,
      picked: {
        price: 0,
        number: 1
      }
    }
  },
  computed: {
    products () {
      return Myjson.map(item => {
        return item
      })
    }
  },
  components: {
    Radio
  },
  methods: {
    // Triggered when `childToParent` event is emitted by the child.
    onRadioChange (value) {
      this.picked = value
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./style.css";
</style>
