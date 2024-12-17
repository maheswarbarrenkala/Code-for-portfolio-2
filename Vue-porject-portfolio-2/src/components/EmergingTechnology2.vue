<template>
  <div class="emerging-technology-2">
    <div class="flex-col-7">
      <img class="q3-icons-1" :src="q3Icons" alt="Q3 icons" />
      <div class="emerging-technology-3 sourceserifpro-normal-gulf-blue-22px">{{ emergingTechnology }}</div>
      <router-link to="/desktop-2" className="align-self-flex-end">
        <div class="learn-more-8 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmergingTechnology2",
  props: ["q3Icons", "emergingTechnology", "learnMore"],
};
</script>

<style>
.emerging-technology-2 {
  align-self: stretch;
  background-color: var(--parchment);
  border-radius: 10px;
  height: 173.11px;
  position: relative;
  width: 100%;
}

.flex-col-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 20px;
  min-height: 145px;
  position: relative;
  top: 17px;
  width: 233px;
}

.q3-icons-1 {
  height: 48px;
  width: 48px;
}

.emerging-technology-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 15px;
  min-height: 28px;
}

.learn-more-8 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 39px;
  min-height: 15px;
  min-width: 74px;
}
</style>
