<template>
  <div class="rank-table">
    <header class="rank-table-header tr">
      <div class="col th">彈道</div>
      <div class="col th">ミート</div>
      <div class="col th">パワー</div>
      <div class="col th">走力</div>
      <div class="col th">肩力</div>
      <div class="col th">守力</div>
      <div class="col th">捕球</div>
    </header>
    <div class="rank-table-body tr">
      <div v-for="(val, idx) of values" :key="idx" class="col td">
        <rank-displayer :value="val" />
        <span>{{ val }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import RankDisplayer from './RankDisplayer.vue'

export default {
  name: 'RankTable',
  components: {
    RankDisplayer,
  },
  props: {
    values: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.tr {
  display: flex;
  flex-direction: row;
}
</style>
