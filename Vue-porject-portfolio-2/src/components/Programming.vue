<template>
  <div class="programming">
    <img class="coding" :src="coding" alt="Coding" />
    <div class="programming-development sourceserifpro-normal-gulf-blue-22px">{{ programmingDevelopment }}</div>
    <router-link to="/iphone-16-pro-max-2" className="align-self-flex-end">
      <div class="learn-more-1 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Programming",
  props: ["coding", "programmingDevelopment", "learnMore"],
};
</script>

<style>
.programming {
  align-items: flex-start;
  background-color: var(--parchment);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 179.04px;
  padding: 11.9px 10px;
  width: 263px;
}

.coding {
  height: 49px;
  margin-left: 10px;
  margin-top: 6px;
  width: 53px;
}

.programming-development {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 10px;
  margin-top: 16px;
  min-height: 56px;
  width: 172px;
}

.learn-more-1 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 13px;
  min-height: 15px;
  min-width: 74px;
}
</style>
