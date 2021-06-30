<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'FAQ-slug', params: { slug: prev.slug } }"
      class="my-2"
    >
      <i class="bx bxs-chevron-left-square bx-fade-left"></i>
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'FAQ-slug', params: { slug: next.slug } }"
      class="my-2"
    >
      {{ next.title }}
      <i class="bx bxs-chevron-right-square bx-fade-right"></i>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: 'PrevNext',
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
