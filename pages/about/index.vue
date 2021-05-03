<template>
  <section class="section bd-container">
    <h2 class="section-title">ABOUT THIS NOTE.</h2>
    <div class="about__exoect bd-grid">
      <p class="stress">
        作為一位普通的中職球迷與實況野球玩家，自然希望能結合自己喜歡的元素，紀錄下曾參與的台灣棒球歷史；然而，能力設定值代表個人對於選手某一時期的成績評價，敬請異議者提供佐證材料，俾利製作後續版本時參酌調整，感謝！
      </p>
      <img src="@/assets/images/about1.jpg" class="about-img" alt="" />
    </div>
    <h2 class="section-title">ABOUT THIS NOTE.</h2>
    <div class="about__me bd-grid">
      <img src="@/assets/images/about2.jpg" alt="" class="about-img" />
      <div class="about__description">
        <p>
          因恰恰彭政閔當年一席「球迷塞車論」而自2009年開始關注台灣棒球，不過卻決定支持當時戰績墊底的興農牛，而後歷經義大時期與富邦悍將至今。最欣賞的現役球員為「就...謝謝大家」的葉竹軒！
        </p>
        <p>
          從實況野球12決定版入坑至今已超過十餘年，日復一日在每個版本建立自己喜愛的中職球員，無意間發現實況前輩OGHI大漸少更新後，便想建構自己的「台灣棒球選手能力查定資料庫」，遂規劃了這個網站。正在遊玩的版本的為Nintendo-Switch平台的實況野球2020亞日版！
        </p>
        <p>
          最後，在架構這個網站的同時，也希望藉此機會能培養自己撰寫部落格的習慣，為此我規定自己往後每天要先寫一篇文章，才能打開那天的「成功模式」，如果你喜歡我的球員或是工具，那歡迎看到這裡的你一起監督我。希望這次自己至少可以堅持一個禮拜ＸＤ
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}
.about__exoect,
.about__me {
  align-items: center;
  grid-template-columns: 100%;
}

.stress {
  position: relative;
  padding: 0.5rem 1rem;

  &::before,
  &::after {
    position: absolute;
    font-size: 1.5rem;
  }
  &::before {
    content: '“';
    top: 0;
    left: 0;
  }
  &::after {
    content: '”';
    bottom: 0;
    right: 0;
  }
}

.about-img {
  border-radius: 1rem;
  box-shadow: 4px 4px 8px rgba(#fff, 0.3);
}

@media screen and (min-width: 768px) {
  .about__exoect,
  .about__me {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
