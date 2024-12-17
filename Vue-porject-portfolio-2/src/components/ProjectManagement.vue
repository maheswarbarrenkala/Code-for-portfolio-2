<template>
  <div class="project-management-1">
    <img class="layer-2" :src="layer2" alt="Layer 2" />
    <div class="project-management-business sourceserifpro-normal-gulf-blue-22px">{{ projectManagementBusiness }}</div>
    <router-link to="/iphone-16-pro-max-2" className="align-self-flex-end">
      <div class="learn-more-5 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProjectManagement",
  props: ["layer2", "projectManagementBusiness", "learnMore"],
};
</script>

<style>
.project-management-1 {
  align-items: flex-start;
  background-color: var(--parchment);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 179.04px;
  padding: 11.9px 10px;
  width: 263px;
}

.layer-2 {
  height: 49px;
  margin-left: 10px;
  margin-top: 6px;
  width: 47px;
}

.project-management-business {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 7px;
  margin-top: 17px;
  min-height: 56px;
  width: 216px;
}

.learn-more-5 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 13px;
  min-height: 15px;
  min-width: 74px;
}
</style>
