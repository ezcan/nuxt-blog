<template>
  <main>
    <Header />
    <Nuxt />
  </main>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
html {
  scroll-behavior: smooth;
}

body {
  margin: $header_height 0 0 0;
  font-family: var(--body-font);
  font-size: $normal_font_size;
  background-color: $body_color;
  color: $text_color;
  line-height: 1.5;

  @media screen and(min-width: 768px) {
    margin-top: $header_height * 1.5;
  }
}

h1,
h2,
h3,
p,
ul {
  margin: 0;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
}

.bd-container {
  max-width: 960px;
  width: calc(100% - 3rem);
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: var(--h2-font-size);
  text-transform: uppercase;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
