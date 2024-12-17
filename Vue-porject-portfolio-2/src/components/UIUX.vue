<template>
  <div class="ui-ux" :style="{ 'background-image': 'url(' + uiUx1 + ')' }">
    <div class="group-190">
      <img class="open-link_svgrepocom-1" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com" />
      <div class="overlap-group-8">
        <div class="ui-ux-1 crimsontext-normal-white-24px">{{ uiUx2 }}</div>
        <p class="crafting-digital-sol sourceserifpro-normal-white-16px">{{ craftingDigitalSol }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIUX",
  props: ["uiUx1", "openLink_SvgrepoCom", "uiUx2", "craftingDigitalSol"],
};
</script>

<style>
.ui-ux {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  height: 300px;
  overflow: hidden;
  position: relative;
  width: 255px;
}

.group-190 {
  align-items: flex-start;
  display: flex;
  gap: 945px;
  height: 300px;
  margin-top: 301px;
  min-width: 259px;
}

.open-link_svgrepocom-1 {
  height: 30px;
  margin-left: -975px;
  margin-top: -7353px;
  width: 30px;
}

.overlap-group-8 {
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

.ui-ux-1 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1.34px;
  min-height: 31px;
  text-align: center;
  width: 78px;
}

.crafting-digital-sol {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  text-align: center;
  width: 222px;
}
</style>
