<template>
  <div class="software-architecture-2" :style="{ 'background-image': 'url(' + softwareArchitecture + ')' }">
    <div class="group-191-2">
      <div class="overlap-group-28">
        <div class="software-cloud-architecture-2 crimsontext-normal-white-24px">{{ softwareCloudArchitecture }}</div>
        <p class="building-the-backbon-1 sourceserifpro-normal-white-16px">{{ buildingTheBackbon }}</p>
      </div>
      <router-link to="/desktop-3"
        ><img class="open-link_svgrepocom-9" :src="openLink_SvgrepoCom" alt="open-link_svgrepo.com"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoftwareArchitecture2",
  props: ["softwareArchitecture", "softwareCloudArchitecture", "buildingTheBackbon", "openLink_SvgrepoCom"],
};
</script>

<style>
.software-architecture-2 {
  background-size: 100% 100%;
  border-radius: 5px;
  box-shadow: -5px -5px 20px #00000080, 5px 5px 20px #00000080;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 255px;
}

.group-191-2 {
  align-items: flex-start;
  display: flex;
  gap: 3328px;
  height: 300px;
  margin-left: 4px;
  margin-top: 301px;
  min-width: 259px;
}

.overlap-group-28 {
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

.software-cloud-architecture-2 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.34px;
  min-height: 62px;
  text-align: center;
  width: 211px;
}

.building-the-backbon-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  text-align: center;
  width: 214px;
}

.open-link_svgrepocom-9 {
  cursor: pointer;
  height: 30px;
  margin-top: -5863px;
  width: 30px;
}
</style>
