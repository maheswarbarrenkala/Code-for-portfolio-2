<template>
  <div class="ai" :style="{ 'background-image': 'url(' + ai + ')' }">
    <div class="group-189">
      <img class="open-link_svgrepocom-2" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com" />
      <div class="overlap-group-9">
        <div class="artificial-intelligence-1 crimsontext-normal-white-24px">{{ artificialIntelligence }}</div>
        <p class="revolutionizing-the-future-with-ai sourceserifpro-normal-white-16px">
          {{ revolutionizingTheFutureWithAi }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AI",
  props: ["ai", "openLink_SvgrepoCom", "artificialIntelligence", "revolutionizingTheFutureWithAi"],
};
</script>

<style>
.ai {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  height: 300px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 254.66px;
}

.group-189 {
  align-items: flex-start;
  display: flex;
  gap: 945px;
  height: 300px;
  margin-left: 3.7px;
  margin-top: 301px;
  min-width: 258.66px;
}

.open-link_svgrepocom-2 {
  height: 30px;
  margin-left: -975px;
  margin-top: -7688px;
  width: 30px;
}

.overlap-group-9 {
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

.artificial-intelligence-1 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.34px;
  min-height: 31px;
  min-width: 199px;
  text-align: center;
}

.revolutionizing-the-future-with-ai {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  text-align: center;
  width: 234px;
}
</style>
