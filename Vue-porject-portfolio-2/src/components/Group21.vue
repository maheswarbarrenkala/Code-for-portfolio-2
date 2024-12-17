<template>
  <div :class="[`group-21`, className || ``]">
    <div class="overlap-group-14" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
      <img
        class="responsive-design-symbol_svgrepocom"
        :src="responsiveDesignSymbol_SvgrepoCom"
        alt="responsive-design-symbol_svgrepo.com"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group21",
  props: ["overlapGroup", "responsiveDesignSymbol_SvgrepoCom", "className"],
};
</script>

<style>
.group-21 {
  height: 163.92px;
  position: relative;
  width: 166.02px;
}

.overlap-group-14 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 120px;
  left: 22px;
  min-width: 138px;
  padding: 24.2px 23.3px;
  position: relative;
  top: 28px;
}

.responsive-design-symbol_svgrepocom {
  height: 63px;
  width: 75px;
}

.group-21.group-21-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-left: -4px;
  min-width: 166.02px;
  padding: 15.8px 6.2px;
  position: unset;
  width: unset;
}

.group-21.group-21-1 .overlap-group-14 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
