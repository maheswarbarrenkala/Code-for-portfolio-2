<template>
  <div class="management-4" :style="{ 'background-image': 'url(' + management1 + ')' }">
    <div class="group-192-5">
      <div class="overlap-group-26">
        <div class="management-5 crimsontext-normal-white-24px">{{ management2 }}</div>
        <p class="driving-innovation-t-1 sourceserifpro-normal-white-16px">{{ drivingInnovationT }}</p>
      </div>
      <router-link to="/desktop-3"
        ><img class="open-link_svgrepocom-7" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Management2",
  props: ["management1", "management2", "drivingInnovationT", "openLink_SvgrepoCom"],
};
</script>

<style>
.management-4 {
  background-size: 100% 100%;
  border-radius: 5px;
  box-shadow: -5px -5px 20px #00000080, 5px 5px 20px #00000080;
  display: flex;
  overflow: hidden;
  width: 255px;
}

.group-192-5 {
  align-items: flex-start;
  display: flex;
  gap: 3765px;
  height: 300px;
  margin-top: 301px;
  min-width: 258.66px;
}

.overlap-group-26 {
  align-items: flex-end;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgb(150.45, 0, 7.21) 100%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 300px;
  padding: 40px 22.7px;
  width: 255px;
}

.management-5 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 0.66px;
  min-height: 31px;
  min-width: 124px;
  text-align: center;
}

.driving-innovation-t-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 60px;
  text-align: center;
  width: 209px;
}

.open-link_svgrepocom-7 {
  cursor: pointer;
  height: 30px;
  margin-top: -5987px;
  width: 30px;
}
</style>
