<template>
  <div class="emerging-technology">
    <img class="q3-icons" :src="q3Icons" alt="Q3 icons" />
    <div class="emerging-technology-1 sourceserifpro-normal-gulf-blue-22px">{{ emergingTechnology }}</div>
    <router-link to="/iphone-16-pro-max-2" className="align-self-flex-end">
      <div class="learn-more-2 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EmergingTechnology",
  props: ["q3Icons", "emergingTechnology", "learnMore"],
};
</script>

<style>
.emerging-technology {
  align-items: flex-start;
  background-color: var(--parchment);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 179.04px;
  padding: 11.9px 10px;
  width: 263px;
}

.q3-icons {
  height: 50px;
  margin-left: 10px;
  margin-top: 6px;
  width: 48px;
}

.emerging-technology-1 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 16px;
  min-height: 28px;
  min-width: 215px;
}

.learn-more-2 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 41px;
  min-height: 15px;
  min-width: 74px;
}
</style>
