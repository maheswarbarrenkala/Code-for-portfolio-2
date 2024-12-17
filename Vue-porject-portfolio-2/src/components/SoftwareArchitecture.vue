<template>
  <div class="software-architecture" :style="{ 'background-image': 'url(' + softwareArchitecture + ')' }">
    <div class="group-191-1">
      <img class="open-link_svgrepocom-3" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com" />
      <div class="overlap-group-10">
        <div class="software-cloud-architecture crimsontext-normal-white-24px">{{ softwareCloudArchitecture }}</div>
        <p class="building-the-backbon sourceserifpro-normal-white-16px">{{ buildingTheBackbon }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoftwareArchitecture",
  props: ["softwareArchitecture", "openLink_SvgrepoCom", "softwareCloudArchitecture", "buildingTheBackbon"],
};
</script>

<style>
.software-architecture {
  background-size: 100% 100%;
  border-radius: 5px;
  display: flex;
  height: 300px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 255px;
}

.group-191-1 {
  align-items: flex-start;
  display: flex;
  gap: 945px;
  height: 300px;
  margin-left: 4px;
  margin-top: 301px;
  min-width: 259px;
}

.open-link_svgrepocom-3 {
  height: 30px;
  margin-left: -975px;
  margin-top: -7992px;
  width: 30px;
}

.overlap-group-10 {
  align-items: flex-start;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgb(150.45, 0, 7.21) 100%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 300px;
  padding: 40px 20px;
  width: 255px;
}

.software-cloud-architecture {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.34px;
  min-height: 62px;
  text-align: center;
  width: 211px;
}

.building-the-backbon {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  text-align: center;
  width: 214px;
}
</style>
