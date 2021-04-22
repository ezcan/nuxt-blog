<template>
  <section class="section bd-container">
    <SearchInput v-model.lazy="searchQuery" class="mb-2" />
    <transition-group tag="ul" name="fade">
      <li
        v-for="result of searchResult"
        :key="result.target"
        class="result__container bd-grid"
      >
        <h3 class="target-char">{{ result.target }}</h3>
        <div class="result__box">
          <ul>
            <li v-for="pos of result.position" :key="pos.prefix">
              {{ pos.prefix }}
              頁
              <span class="color-primany">{{ pos.page }} / </span>
              {{ pos.maxPage }}
              {{ pos.text }}
            </li>
          </ul>
        </div>
      </li>
    </transition-group>
    <p class="tool__info">
      這個工具可以幫助您在「實況野球2021」遊戲中，快速查找您輸入的漢字所在位置。若查詢結果顯示「查無資料」，即表示遊戲中可能並未收錄該文字；如確有勘誤的部分，也歡迎回報！
    </p>
  </section>
</template>
<script>
import words from './_words2021'
import SearchInput from '~/components/SearchInput.vue'

export default {
  name: 'Chinese',
  components: {
    SearchInput,
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  computed: {
    uniqueCharSet() {
      return Array.from(new Set(this.searchQuery.split('')))
    },
    searchResult() {
      return this.uniqueCharSet.map((target) => {
        return {
          target,
          position: this.findCharPosition(target),
        }
      })
    },
  },
  methods: {
    findCharPosition(char) {
      const pos = words.filter((content) => content.includes(char))
      if (!pos.length) return [{ error: `似乎沒有收錄這個漢字` }]

      return pos.map((content) => {
        const ROW_NUMBER = 5
        const COL_NUMBER = 12
        const prefix = content[0]
        const index = content.indexOf(char) + 1
        const page = Math.floor(index / (ROW_NUMBER * COL_NUMBER)) + 1
        const maxPage =
          Math.floor(content.length / (ROW_NUMBER * COL_NUMBER)) + 1
        const row = (Math.floor(index / COL_NUMBER) % ROW_NUMBER) + 1
        const col = index % COL_NUMBER === 0 ? 12 : index % COL_NUMBER
        const text = `第 ${row} 列第 ${col} 字`
        return {
          prefix,
          page,
          maxPage,
          text,
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.result__container {
  margin: 0.5rem 0;
  padding: 0.5rem;
  grid-template-columns: max-content 1fr;
  background-color: $container_color;
  border-radius: 0.5rem;
}
.target-char {
  width: 54px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  font-size: $biggest_font_size;
  background-color: $first_color;
  color: #fff;
  border-radius: 0.5rem;
}
.tool__info {
  padding: 0.5rem;
  text-align: justify;
  background-color: $first_color;
  color: $body_color;
  border-radius: 0.5rem;
}

.color-primany {
  color: $first_color;
}
</style>
