<template>
  <div class="portfolio-list-1">
    <div class="overlap-group-17" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
      <div class="full-stack-development-1 valign-text-middle">{{ fullStackDevelopment }}</div>
    </div>
    <group207 :productDesignUiUx="group2071Props.productDesignUiUx" />
    <group207 :productDesignUiUx="group2072Props.productDesignUiUx" />
    <group207 :productDesignUiUx="group2073Props.productDesignUiUx" />
    <group207 :productDesignUiUx="group2074Props.productDesignUiUx" />
  </div>
</template>

<script>
import Group207 from "./Group207";
export default {
  name: "PortfolioList",
  components: {
    Group207,
  },
  props: [
    "overlapGroup",
    "fullStackDevelopment",
    "group2071Props",
    "group2072Props",
    "group2073Props",
    "group2074Props",
  ],
};
</script>

<style>
.portfolio-list-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 168px;
  min-height: 324px;
  position: relative;
  width: 278px;
}

.overlap-group-17 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  height: 40px;
  min-width: 278px;
  padding: 0 6px;
}

.full-stack-development-1 {
  color: var(--di-serria-2);
  font-family: var(--font-family-crimson_text-semibold);
  font-size: var(--font-size-s);
  font-weight: 600;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 238px;
}
</style>
