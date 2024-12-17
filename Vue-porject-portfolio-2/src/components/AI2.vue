<template>
  <div class="ai-3" :style="{ 'background-image': 'url(' + ai + ')' }">
    <div class="group-189-1">
      <div class="overlap-group-25">
        <div class="artificial-intelligence-4 crimsontext-normal-white-24px">{{ artificialIntelligence }}</div>
        <p class="revolutionizing-the-future-with-ai-1 sourceserifpro-normal-white-16px">
          {{ revolutionizingTheFutureWithAi }}
        </p>
      </div>
      <router-link to="/desktop-3"
        ><img class="open-link_svgrepocom-6" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AI2",
  props: ["ai", "artificialIntelligence", "revolutionizingTheFutureWithAi", "openLink_SvgrepoCom"],
};
</script>

<style>
.ai-3 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: -5px -5px 20px #00000080, 5px 5px 20px #00000080;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 255px;
}

.group-189-1 {
  align-items: flex-start;
  display: flex;
  gap: 3765px;
  height: 300px;
  margin-left: 3.7px;
  margin-top: 301px;
  min-width: 258.66px;
}

.overlap-group-25 {
  align-items: flex-start;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgb(150.45, 0, 7.21) 100%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 300px;
  padding: 40px 10px;
  width: 255px;
}

.artificial-intelligence-4 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.34px;
  min-height: 31px;
  min-width: 199px;
  text-align: center;
}

.revolutionizing-the-future-with-ai-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  text-align: center;
  width: 234px;
}

.open-link_svgrepocom-6 {
  cursor: pointer;
  height: 30px;
  margin-top: -5657px;
  width: 30px;
}
</style>
