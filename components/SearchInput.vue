<template>
  <div class="input__box">
    <i class="bx bx-search text-lg"></i>
    <input
      :value="name"
      type="text"
      class="input"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
  model: {
    prop: 'name',
    event: 'update',
  },
  props: {
    name: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style lang="scss" scoped>
.input__box {
  max-width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 0.5rem;
  padding: 1.125rem 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  background-color: $container_color;
}
.input {
  border: none;
  outline: none;
  font-size: $normal_font_size;
  font-weight: $font_semi_bold;
  color: darken($first_color, 10%);

  &::placeholder {
    font-size: $normal_font_size;
    font-family: $body_font;
    color: lighten($first_color, 5%);
  }
}
</style>
