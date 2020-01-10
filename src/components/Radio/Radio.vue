<template>
      <label class="container"> LiCENSEPLAN#{{ product.id }}
        <input type="radio" name="radio"
          v-bind:value="{
            id: product.id,
            price: product.price,
            number: product.number
          }"
          v-model="picked"
          v-on:change="emitToParent"
        />
        <span class="checkmark"></span>
        <span class="right">${{ product.price }} per license</span>
      </label>
</template>
<script>
export default {
  name: 'Radio',
  props: ['product'],
  data: function () {
    return {
      picked: {
        price: 0,
        number: 1
      }
    }
  },
  methods: {
    emitToParent (event) {
      this.$emit('picked', this.picked)
    }
  }
}
</script>
<style scoped>
@import "./style.css";
</style>
