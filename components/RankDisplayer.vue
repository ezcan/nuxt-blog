<template>
  <span class="rank-displayer" :class="rank">
    {{ rank }}
  </span>
</template>

<script>
export default {
  name: 'RankDisplayer',
  props: {
    value: {
      type: Number,
      required: true,
      default: () => 1,
    },
  },
  computed: {
    rank() {
      const index = Math.floor(this.value / 10)
      const map = {
        0: 'G',
        1: 'G',
        2: 'F',
        3: 'F',
        4: 'E',
        5: 'D',
        6: 'C',
        7: 'B',
        8: 'A',
        9: 'S',
        10: 'S',
      }
      return map[index]
    },
  },
}
</script>

<style lang="scss" scoped>
.rank-displayer {
  font-size: 1.2rem;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;

  &.G {
    color: grey;
  }
  &.F {
    color: darkblue;
  }
  &.E {
    color: greenyellow;
  }
  &.D {
    color: yellow;
  }
  &.C {
    color: orange;
  }
  &.B {
    color: red;
  }
  &.A {
    color: palevioletred;
  }
  &.S {
    color: orchid;
  }
}
</style>
