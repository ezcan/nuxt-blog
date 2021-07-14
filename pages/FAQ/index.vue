<template>
  <section class="section bd-container">
    <h2 class="section-title">實況問題集</h2>
    <ul
      class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center"
    >
      <li
        v-for="article of articles"
        :key="article.slug"
        class="faq overflow-hidden"
      >
        <NuxtLink :to="{ name: 'FAQ-slug', params: { slug: article.slug } }">
          <img :src="article.img" :alt="article.title" loading="lazy" />
          <h3 class="faq-title font-semibold">
            {{ article.title }}
          </h3>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  async asyncData({ $content, params }) {
    const articles = await $content('FAQ')
      .only(['title', 'img', 'slug', 'number'])
      .sortBy('updatedAt', 'desc')
      .limit(12)
      .fetch()

    return { articles }
  },
  data() {
    return {
      value: Math.floor(Math.random() * 100),
      articles: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.faq {
  position: relative;
  cursor: pointer;
  & img {
    transition: transform 0.5s;
  }
  &-title {
    position: absolute;
    bottom: 0;
    padding: 0 1.5rem;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: right;
    background-color: rgba(black, 0.7);
    z-index: $z_tooltip;
  }

  &:hover {
    & img {
      transform: scale(1.2);
    }
  }
}
</style>
