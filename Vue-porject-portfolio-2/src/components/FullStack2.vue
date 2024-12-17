<template>
  <div class="full-stack-2" :style="{ 'background-image': 'url(' + fullStack + ')' }">
    <div class="text_full-stack-1">
      <div class="develop-container-1">
        <div class="full-stack-development-2 crimsontext-normal-white-24px">{{ fullStackDevelopment }}</div>
        <p class="designing-developin-1 sourceserifpro-normal-white-16px">{{ designingDevelopin }}</p>
      </div>
      <router-link to="/desktop-3"
        ><img class="open-link_svgrepocom-5" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullStack2",
  props: ["fullStack", "fullStackDevelopment", "designingDevelopin", "openLink_SvgrepoCom"],
};
</script>

<style>
.full-stack-2 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: -5px -5px 20px #00000080, 5px 5px 20px #00000080;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 255px;
}

.text_full-stack-1 {
  align-items: flex-start;
  display: flex;
  gap: 3765px;
  height: 300px;
  margin-left: 4px;
  margin-top: 300px;
  min-width: 259px;
}

.develop-container-1 {
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

.full-stack-development-2 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 31px;
  text-align: center;
  width: 235px;
}

.designing-developin-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  text-align: center;
  width: 255px;
}

.open-link_svgrepocom-5 {
  cursor: pointer;
  height: 30px;
  margin-top: -5307px;
  width: 30px;
}
</style>
