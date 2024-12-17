<template>
  <div class="deisgn-and-tools-1">
    <router-link to="/desktop-2">
      <div class="learn-more-9 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
    </router-link>
    <div class="design-container">
      <img
        class="design-tools-ruler-pen-pencil_svgrepocom-1"
        :src="designToolsRulerPenPencil_SvgrepoCo"
        alt="design-tools-ruler-pen-pencil_svgrepo.com"
      />
      <div class="design-tools-1 sourceserifpro-normal-gulf-blue-22px">{{ designTools }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeisgnAndTools2",
  props: ["learnMore", "designToolsRulerPenPencil_SvgrepoCo", "designTools"],
};
</script>

<style>
.deisgn-and-tools-1 {
  align-self: stretch;
  background-color: var(--parchment);
  border-radius: 10px;
  height: 173.11px;
  position: relative;
  width: 100%;
}

.learn-more-9 {
  cursor: pointer;
  left: 179px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 147px;
}

.design-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 15px;
  left: 20px;
  min-height: 91px;
  position: absolute;
  top: 17px;
  width: 146px;
}

.design-tools-ruler-pen-pencil_svgrepocom-1 {
  height: 48px;
  width: 48px;
}

.design-tools-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 28px;
}
</style>
