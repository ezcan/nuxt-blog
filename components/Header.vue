<template>
  <header class="header" :class="headerClass">
    <nav class="nav bd-container">
      <nuxt-link to="/">ezcan</nuxt-link>
      <div class="nav__menu" :class="toggleClass">
        <ul class="nav__list">
          <li class="nav__item">
            <nuxt-link to="/chinese">漢字查詢器</nuxt-link>
          </li>
          <li class="nav__item">
            <nuxt-link to="/about">關於</nuxt-link>
          </li>
        </ul>
      </div>
      <button id="nav-toggle" class="nav__toggle" @click="clickHandler">
        <i class="bx bx-menu"></i>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      windowTop: 0,
      toggleMenu: false,
    }
  },
  computed: {
    toggleClass() {
      return this.toggleMenu ? 'show-menu' : ''
    },
    headerClass() {
      return this.windowTop >= 20 ? 'scroll-header' : ''
    },
  },
  watch: {
    $route() {
      this.toggleMenu = false
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    clickHandler() {
      this.toggleMenu = !this.toggleMenu
    },
    scrollHandler() {
      this.windowTop = window.top.scrollY
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $z_fixed;
  background-color: $body_color;

  &.scroll-header {
    box-shadow: 0 2px 8px rgba(white, 0.1);
  }
}

.nav {
  max-width: 1024px;
  height: $header_height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.nav__item {
  margin-bottom: 1rem;

  > .nuxt-link-active {
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    background-color: $first_color;
    color: $text_color;
  }
}

.nav__link,
.nav__toggle {
  color: $text_color;
  font-weight: $font_medium;
}
.nav__link {
  transition: 0.3s;
  &:hover {
    color: $first_color;
  }
}
.nav__toggle {
  font-size: $h1_font_size;
  border: none;
  outline: none;
}

@media screen and (max-width: 768px) {
  .nav__menu {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    padding: 1.5rem 0 1rem;
    text-align: center;
    background-color: $body_color;
    transition: 0.5s;
    box-shadow: 0 4px 4px rgba(#fff, 0.3);
    border-radius: 0 0 1rem 1rem;
    z-index: $z_fixed;

    &.show-menu {
      top: $header_height;
    }
  }
}

@media screen and (min-width: 768px) {
  .nav {
    height: $header_height + 1.5rem;
  }
  .nav__list {
    display: flex;
  }
  .nav__item {
    margin-left: 2.5rem;
    margin-bottom: 0;
  }
  .nav__toggle {
    display: none;
  }
}
</style>
