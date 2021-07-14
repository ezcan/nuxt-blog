<template>
  <article class="article bd-container">
    <img :src="article.img" :alt="article.title" class="rounded-xl mb-2" />
    <h3 class="article-title">{{ article.title }}</h3>
    <nuxt-content :document="article"></nuxt-content>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('FAQ', params.slug).fetch()
    const others = await $content('FAQ')
      .where({ team: article.team })
      .only(['title', 'position', 'number', 'slug'])
      .sortBy('title')
      .fetch()
    return { article, others }
  },
  data() {
    return {
      article: {},
    }
  },
}
</script>

<style lang="scss">
h3.article-title {
  padding: 0 1rem;
  background-color: $text_color;
  color: $body_color;
  font-size: $h3_font_size;
  margin-bottom: 0.5rem;
}

h4 {
  margin: 1rem 0 0.5rem;
  padding: 0 1rem;
  border-left-width: 0.5rem;
  border-bottom-width: 1px;
}
</style>
