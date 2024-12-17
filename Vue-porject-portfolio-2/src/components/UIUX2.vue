<template>
  <div class="ui-ux-2" :style="{ 'background-image': 'url(' + uiUx1 + ')' }">
    <div class="group-190-1">
      <div class="overlap-group-27">
        <div class="ui-ux-3 crimsontext-normal-white-24px">{{ uiUx2 }}</div>
        <p class="crafting-digital-sol-1 sourceserifpro-normal-white-16px">{{ craftingDigitalSol }}</p>
      </div>
      <router-link to="/desktop-3"
        ><img class="open-link_svgrepocom-8" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIUX2",
  props: ["uiUx1", "uiUx2", "craftingDigitalSol", "openLink_SvgrepoCom"],
};
</script>

<style>
.ui-ux-2 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: -5px -5px 20px #00000080, 5px 5px 20px #00000080;
  display: flex;
  overflow: hidden;
  width: 255px;
}

.group-190-1 {
  align-items: flex-start;
  display: flex;
  gap: 3328px;
  height: 300px;
  margin-top: 301px;
  min-width: 259px;
}

.overlap-group-27 {
  align-items: flex-end;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgb(150.45, 0, 7.21) 100%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 300px;
  padding: 40px 15.7px;
  width: 255px;
}

.ui-ux-3 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1.34px;
  min-height: 31px;
  text-align: center;
  width: 78px;
}

.crafting-digital-sol-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  text-align: center;
  width: 222px;
}

.open-link_svgrepocom-8 {
  cursor: pointer;
  height: 30px;
  margin-top: -5464px;
  width: 30px;
}
</style>
