<template>
  <div class="software-engineering-1">
    <img
      class="vector"
      src="https://cdn.animaapp.com/projects/67588397084266cadf63ec76/releases/67588c6cf64e4bed8782fd9c/img/vector-38@2x.png"
      alt="Vector"
    />
    <div class="software-engineering-2 sourceserifpro-normal-gulf-blue-22px">{{ softwareEngineering }}</div>
    <div class="learn-more sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
  </div>
</template>

<script>
export default {
  name: "SoftwareEngineering",
  props: ["softwareEngineering", "learnMore"],
};
</script>

<style>
.software-engineering-1 {
  align-items: flex-start;
  background-color: var(--parchment);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-height: 179.04px;
  padding: 11.9px 10px;
  width: 263px;
}

.vector {
  height: 50px;
  margin-left: 10px;
  margin-top: 6px;
  width: 50px;
}

.software-engineering-2 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 11px;
  margin-top: 15px;
  min-height: 28px;
  min-width: 212px;
}

.learn-more {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 41px;
  min-height: 15px;
  min-width: 74px;
}
</style>
