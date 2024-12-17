<template>
  <div class="project-management-4">
    <div class="flex-col-9">
      <img class="layer-2-1" :src="layer2" alt="Layer 2" />
      <div class="project-management-business-1 sourceserifpro-normal-gulf-blue-22px">
        {{ projectManagementBusiness }}
      </div>
      <router-link to="/desktop-2" className="align-self-flex-end">
        <div class="learn-more-11 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectManagement2",
  props: ["layer2", "projectManagementBusiness", "learnMore"],
};
</script>

<style>
.project-management-4 {
  align-self: stretch;
  background-color: var(--parchment);
  border-radius: 10px;
  height: 173.11px;
  margin-bottom: -3.54px;
  position: relative;
  width: 100%;
}

.flex-col-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 20px;
  min-height: 145px;
  position: relative;
  top: 17px;
  width: 233px;
}

.layer-2-1 {
  height: 47px;
  width: 47px;
}

.project-management-business-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 16px;
  min-height: 56px;
  width: 216px;
}

.learn-more-11 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 11px;
  min-height: 15px;
  min-width: 74px;
}
</style>
