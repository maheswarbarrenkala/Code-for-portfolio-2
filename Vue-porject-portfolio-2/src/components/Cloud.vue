<template>
  <div class="cloud">
    <img class="cloud-computing_svgrepocom" :src="cloudComputing_SvgrepoCom" alt="cloud-computing_svgrepo.com" />
    <div class="cloud-infrastructure sourceserifpro-normal-gulf-blue-22px">{{ cloudInfrastructure }}</div>
    <router-link to="/iphone-16-pro-max-2">
      <div class="learn-more-4 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Cloud",
  props: ["cloudComputing_SvgrepoCom", "cloudInfrastructure", "learnMore"],
};
</script>

<style>
.cloud {
  align-items: flex-end;
  background-color: var(--parchment);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 179.04px;
  padding: 11.9px 10px;
  width: 263px;
}

.cloud-computing_svgrepocom {
  align-self: flex-start;
  height: 50px;
  margin-left: 10px;
  margin-top: 6px;
  width: 48px;
}

.cloud-infrastructure {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 11px;
  margin-top: 16px;
  min-height: 28px;
  min-width: 222px;
}

.learn-more-4 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 41px;
  min-height: 15px;
  min-width: 74px;
}
</style>
