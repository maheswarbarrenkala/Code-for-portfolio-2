<template>
  <div class="software-engineering-4">
    <div class="flex-col-5">
      <img
        class="vector-37"
        src="https://cdn.animaapp.com/projects/67588397084266cadf63ec76/releases/67588c6cf64e4bed8782fd9c/img/vector-57@2x.png"
        alt="Vector"
      />
      <div class="software-engineering-5 sourceserifpro-normal-gulf-blue-22px">{{ softwareEngineering }}</div>
      <router-link to="/desktop-2" className="align-self-flex-end">
        <div class="learn-more-6 sourceserifpro-normal-gulf-blue-12px">{{ learnMore }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoftwareEngineering2",
  props: ["softwareEngineering", "learnMore"],
};
</script>

<style>
.software-engineering-4 {
  background-color: var(--parchment);
  border-radius: 10px;
  height: 173.11px;
  position: relative;
  width: 263px;
}

.flex-col-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 20px;
  min-height: 145px;
  position: relative;
  top: 17px;
  width: 233px;
}

.vector-37 {
  height: 49px;
  width: 50px;
}

.software-engineering-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 14px;
  min-height: 28px;
}

.learn-more-6 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 39px;
  min-height: 15px;
  min-width: 74px;
}
</style>
