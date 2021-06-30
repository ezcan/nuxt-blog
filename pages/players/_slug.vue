<template>
  <article class="article bd-container">
    <h3 class="article-title">{{ article.title }} 選手能力</h3>
    <img :src="article.img" :alt="article.title" />

    <h4 class="article-subtitle">{{ article.title }} 基本情報</h4>
    <nuxt-content :document="article"></nuxt-content>

    <h4 class="article-subtitle">其它 {{ article.team }} 球員</h4>
    <ul class="grid gap-4 grid-cols-3 md:grid-cols-6 items-center">
      <li v-for="item of others" :key="item.slug">
        <NuxtLink :to="{ name: 'players-slug', params: { slug: item.slug } }">
          {{ item.title }} #{{ item.number }}
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('players', params.slug).fetch()
    const others = await $content('players')
      .where({ team: article.team })
      .only(['title', 'position', 'number', 'slug'])
      .sortBy('title')
      .fetch()
    return { article, others }
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
