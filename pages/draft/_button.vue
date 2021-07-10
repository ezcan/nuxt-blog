<template>
  <button
    class="button"
    :class="player.position"
    :disabled="isDisable"
    @click="$emit('click')"
  >
    {{ player.name }}
  </button>
</template>

<script>
export default {
  name: 'DraftButton',
  props: {
    player: {
      type: Object,
      required: true,
      default: () => ({
        name: '姓名',
        position: 'i',
        owner: null,
      }),
    },
  },
  computed: {
    isDisable() {
      return this.player.owner
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  position: relative;
  min-width: 100px;
  height: 2rem;
  margin: 0.25rem;
  padding-left: 2rem;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  outline: none;
  transition: transform 1s;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 1.5rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-right: 2px solid;
  }

  &.P {
    background-color: #fb988d;
    &::before {
      content: 'P';
    }
  }
  &.C {
    background-color: #6ecce3;
    &::before {
      content: 'C';
    }
  }
  &.I {
    background-color: #fbe26e;
    &::before {
      content: 'I';
    }
  }
  &.O {
    background-color: #73ce6f;
    &::before {
      content: 'O';
    }
  }
  &:hover {
    animation: pop 0.5s infinite;
  }
  &:disabled {
    background-color: lightgrey;
    cursor: not-allowed;
    animation: none;
  }
}

@keyframes pop {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-0.25rem);
  }
  80% {
    transform: translateY(0.25rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
