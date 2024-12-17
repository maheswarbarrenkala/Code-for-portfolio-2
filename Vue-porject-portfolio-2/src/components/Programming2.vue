<template>
  <div class="programming-2">
    <div class="flex-col-6">
      <img class="coding-1" :src="coding" alt="Coding" />
      <div class="programming-development-1 sourceserifpro-normal-gulf-blue-22px">{{ programmingDevelopment }}</div>
      <router-link to="/desktop-2" className="align-self-flex-end">
        <div class="learn-more-7 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Programming2",
  props: ["coding", "programmingDevelopment", "learnMore"],
};
</script>

<style>
.programming-2 {
  align-self: stretch;
  background-color: var(--parchment);
  border-radius: 10px;
  height: 173.11px;
  position: relative;
  width: 100%;
}

.flex-col-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 20px;
  min-height: 145px;
  position: relative;
  top: 17px;
  width: 233px;
}

.coding-1 {
  height: 48px;
  width: 53px;
}

.programming-development-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 15px;
  min-height: 56px;
  width: 172px;
}

.learn-more-7 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 11px;
  min-height: 15px;
  min-width: 74px;
}
</style>
