<template>
  <section class="section bd-container">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div>
        <SearchInput v-model="searchQuery" class="mb-2" />

        <transition-group tag="ul" name="fade">
          <li
            v-for="result of searchResult"
            :key="result.target"
            class="result__container grid"
          >
            <h3 class="target-char">{{ result.target }}</h3>
            <div class="result__box">
              <ul>
                <li v-for="pos of result.position" :key="pos.prefix">
                  {{ pos.prefix }}
                  <i class="bx bx-columns"></i>
                  <span class="color-primany"> {{ pos.page | page }} </span>
                  <span class="color-primany"> {{ pos.row | row }} </span>
                  <span class="color-primany"> {{ pos.col | col }} </span>
                </li>
                <li v-if="result.position.length === 0">
                  Opps!遊戲中可能有沒收錄這個字
                </li>
              </ul>
            </div>
          </li>
        </transition-group>
        <p class="tool__info">
          這個工具可以幫助您在「實況野球2021」遊戲中，快速查找您輸入的漢字所在位置。若查詢結果顯示「查無資料」，即表示遊戲中可能並未收錄該文字；如確有勘誤的部分，也歡迎回報！
        </p>
      </div>
      <div>
        <img src="@/assets/images/chinese.jpg" class="my-4 rounded-lg" alt="" />
      </div>
    </div>
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
  filters: {
    page(val) {
      return val && `第${val}頁`
    },
    row(val) {
      return val && `第${val}列`
    },
    col(val) {
      return val && `第${val}字`
    },
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
      return pos.map((content) => {
        const ROW_NUMBER = 5
        const COL_NUMBER = 12
        const prefix = content[0]
        const index = content.indexOf(char)
        const page = Math.floor(index / (ROW_NUMBER * COL_NUMBER)) + 1
        const row = (Math.floor(index / COL_NUMBER) % ROW_NUMBER) + 1
        const col = (index % COL_NUMBER) + 1
        return {
          prefix,
          page,
          row,
          col,
          index,
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
  color: $body_color;
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
  border-radius: 0.5rem;
}
</style>
