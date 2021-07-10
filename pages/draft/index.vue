<template>
  <section id="draft" class="section bd-container">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div class="players-container">
        <draft-button
          v-for="(player, i) of players"
          :key="player.name"
          :player="player"
          @click="clickHandler(player, i)"
        ></draft-button>
        <hr />
        <button @click="abstainHandler">棄權</button>
      </div>
      <div>
        <h2>{{ roundTip }}</h2>
        <div class="grid gap-4 grid-cols-5">
          <div v-for="team of teams" :key="team.name">
            <h3>{{ team.name }}</h3>
            <ul>
              <li v-for="player of team.owned" :key="player">
                {{ player }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import players from './draft.json'
import DraftButton from './_button.vue'
export default {
  name: 'Draft',
  components: {
    DraftButton,
  },
  data() {
    return {
      turn: 0,
      teams: [
        {
          name: '富邦悍將',
          owned: [],
          isAbstain: false,
        },
        {
          name: '樂天桃猿',
          owned: [],
          isAbstain: false,
        },
        {
          name: '中信兄弟',
          owned: [],
          isAbstain: false,
        },
        {
          name: '統一獅',
          owned: [],
          isAbstain: false,
        },
        {
          name: '味全龍',
          owned: [],
          isAbstain: false,
        },
      ],
      players,
    }
  },
  computed: {
    roundTip() {
      let result = '本次選秀會到此結束。'
      if (!this.isEnd) {
        const round = 1 + Math.floor(this.turn / this.teams.length)
        const order = 1 + Math.floor(this.turn % this.teams.length)
        result = `第 ${round} 輪，第 ${order} 順位，由 ${this.currentTeam.name} 選擇中...`
      }
      return result
    },
    isEnd() {
      // 全數球隊放棄 或 全數球員皆被選擇 即結束選秀
      return this.teams.every((t) => t.isAbstain)
    },
    currentTeam() {
      const team = this.teams[this.turn % this.teams.length]
      return team
    },
  },
  methods: {
    abstainHandler() {
      alert(`${this.currentTeam.name}棄權`)
      this.currentTeam.isAbstain = true
      this.currentTeam.owned.push('放棄')
      this.nextTurn()
    },
    clickHandler(p, i) {
      if (this.isEnd) {
        return null
      }
      const confirm = window.confirm(
        `${this.currentTeam.name} 選擇： ${p.name}`
      )
      if (confirm) {
        this.players[i] = Object.assign({
          ...p,
          owner: this.currentTeam,
        })
        this.teams[this.turn % this.teams.length].owned.push(p.name)
        this.nextTurn()
      }
    },
    nextTurn() {
      let nextTeam
      do {
        this.turn++
        nextTeam = this.teams[this.turn % this.teams.length]
      } while (nextTeam.isAbstain && !this.isEnd)
    },
  },
}
</script>
