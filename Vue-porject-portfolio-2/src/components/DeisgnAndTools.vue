<template>
  <div class="deisgn-and-tools">
    <img
      class="design-tools-ruler-pen-pencil_svgrepocom"
      :src="designToolsRulerPenPencil_SvgrepoCo"
      alt="design-tools-ruler-pen-pencil_svgrepo.com"
    />
    <div class="design-tools sourceserifpro-normal-gulf-blue-22px">{{ designTools }}</div>
    <router-link to="/iphone-16-pro-max-2" className="align-self-flex-end">
      <div class="learn-more-3 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "DeisgnAndTools",
  props: ["designToolsRulerPenPencil_SvgrepoCo", "designTools", "learnMore"],
};
</script>

<style>
.deisgn-and-tools {
  align-items: flex-start;
  background-color: var(--parchment);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 179.04px;
  padding: 11.9px 10px;
  width: 263px;
}

.design-tools-ruler-pen-pencil_svgrepocom {
  height: 50px;
  margin-left: 10px;
  margin-top: 6px;
  width: 48px;
}

.design-tools {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 10px;
  margin-top: 16px;
  min-height: 28px;
}

.learn-more-3 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 41px;
  min-height: 15px;
  min-width: 74px;
}
</style>
