<template>
  <div class="cloud-2">
    <div class="flex-col-8">
      <img class="cloud-computing_svgrepocom-1" :src="cloudComputing_SvgrepoCom" alt="cloud-computing_svgrepo.com" />
      <div class="cloud-infrastructure-1 sourceserifpro-normal-gulf-blue-22px">{{ cloudInfrastructure }}</div>
      <router-link to="/desktop-2" className="align-self-flex-end">
        <div class="learn-more-10 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cloud2",
  props: ["cloudComputing_SvgrepoCom", "cloudInfrastructure", "learnMore"],
};
</script>

<style>
.cloud-2 {
  align-self: stretch;
  background-color: var(--parchment);
  border-radius: 10px;
  height: 173.11px;
  position: relative;
  width: 100%;
}

.flex-col-8 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 20px;
  min-height: 145px;
  position: relative;
  top: 17px;
  width: 233px;
}

.cloud-computing_svgrepocom-1 {
  height: 48px;
  width: 48px;
}

.cloud-infrastructure-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 15px;
  min-height: 28px;
}

.learn-more-10 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 39px;
  min-height: 15px;
  min-width: 74px;
}
</style>
