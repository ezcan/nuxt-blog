<template>
  <div class="card-slider-container">
    <transition-group class="card-slider-items" name="flip-list">
      <div v-for="item of displayItems" :key="item.id" class="card-slider-item">
        <img :src="item.img" alt="" />
      </div>
    </transition-group>
    <ul class="card-slider-buttons">
      <li v-for="(item, index) of items" :key="index">
        <button @click="changeHandler(index)" class="button">
          {{ index }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardSlider',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    displayNumber: {
      type: Number,
      default: () => 5,
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  computed: {
    cloneItems() {
      const array = []
      const { length = 5 } = this.items
      const threshold =
        Math.ceil((this.displayNumber + 2 * 2) / length) * length
      for (let i = 0; i < threshold; i++) {
        array.push({
          ...this.items[i % length],
          id: i,
        })
      }
      return array
    },
    displayItems() {
      const start = this.currentIndex - 4
      return [
        ...this.cloneItems.slice(start),
        ...this.cloneItems.slice(0, start),
      ]
    },
  },
  methods: {
    changeHandler(idx) {
      const maxIndex = this.cloneItems.length - 1
      this.currentIndex = idx < 0 ? maxIndex : idx > maxIndex ? 0 : idx
    },
  },
}
</script>

<style lang="scss" scoped>
$slider-width: 50%;

.card-slider-container {
  position: relative;
  max-width: 100vw;
  overflow: hidden;

  > button {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 10;
    width: 5rem;
    height: 100%;
    transform: translateY(-50%);
  }
}
.card-slider-items {
  display: flex;
  margin-left: calc(-1 * #{$slider-width} * 3.5);
  width: 100%;
}
.card-slider-item {
  flex: calc(#{$slider-width} - 1rem) 0 0;
  margin: 0 0.5rem;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  > img {
    transition: 0.5s;
  }
  &:hover {
    > img {
      transform: scale(1.2);
    }
  }
  &:first-child,
  &:last-child {
    visibility: hidden;
    z-index: -1;
  }
}

.flip-list-move {
  transition: 0.5s;
}
</style>
