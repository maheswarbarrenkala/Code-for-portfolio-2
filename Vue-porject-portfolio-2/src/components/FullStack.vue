<template>
  <div class="full-stack" :style="{ 'background-image': 'url(' + fullStack + ')' }">
    <div class="text_full-stack">
      <img class="open-link_svgrepocom" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com" />
      <div class="develop-container">
        <div class="full-stack-development crimsontext-normal-white-24px">{{ fullStackDevelopment }}</div>
        <p class="designing-developin sourceserifpro-normal-white-16px">{{ designingDevelopin }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullStack",
  props: ["fullStack", "openLink_SvgrepoCom", "fullStackDevelopment", "designingDevelopin"],
};
</script>

<style>
.full-stack {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 300px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 254.66px;
}

.text_full-stack {
  align-items: flex-start;
  display: flex;
  gap: 945px;
  height: 300px;
  margin-left: 4px;
  margin-top: 300px;
  min-width: 259px;
}

.open-link_svgrepocom {
  height: 30px;
  margin-left: -975px;
  margin-top: -7018px;
  width: 30px;
}

.develop-container {
  align-items: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgb(150.45, 0, 7.21) 100%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 300px;
  padding: 40px 0;
  width: 255px;
}

.full-stack-development {
  letter-spacing: 0;
  line-height: normal;
  min-height: 31px;
  text-align: center;
  width: 235px;
}

.designing-developin {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  text-align: center;
  width: 255px;
}
</style>
