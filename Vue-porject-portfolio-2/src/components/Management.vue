<template>
  <div class="management" :style="{ 'background-image': 'url(' + management1 + ')' }">
    <div class="group-192-4">
      <img class="open-link_svgrepocom-4" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com" />
      <div class="overlap-group-11">
        <div class="management-1 crimsontext-normal-white-24px">{{ management2 }}</div>
        <p class="driving-innovation-t sourceserifpro-normal-white-16px">{{ drivingInnovationT }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Management",
  props: ["management1", "openLink_SvgrepoCom", "management2", "drivingInnovationT"],
};
</script>

<style>
.management {
  background-size: 100% 100%;
  border-radius: 5px;
  display: flex;
  height: 300px;
  overflow: hidden;
  position: relative;
  width: 254.66px;
}

.group-192-4 {
  align-items: flex-start;
  display: flex;
  gap: 945px;
  height: 300px;
  margin-top: 301px;
  min-width: 258.66px;
}

.open-link_svgrepocom-4 {
  height: 30px;
  margin-left: -975px;
  margin-top: -8338px;
  width: 30px;
}

.overlap-group-11 {
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

.management-1 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 0.66px;
  min-height: 31px;
  min-width: 124px;
  text-align: center;
}

.driving-innovation-t {
  letter-spacing: 0;
  line-height: normal;
  min-height: 60px;
  text-align: center;
  width: 209px;
}
</style>
