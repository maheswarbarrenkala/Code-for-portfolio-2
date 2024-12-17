<template>
  <div :class="[`group-123`, className || ``]">
    <div class="overlap-group-16" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
      <img
        class="vector-7"
        src="https://cdn.animaapp.com/projects/67588397084266cadf63ec76/releases/67588c6cf64e4bed8782fd9c/img/vector-42@2x.png"
        alt="Vector"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group123",
  props: ["overlapGroup", "className"],
};
</script>

<style>
.group-123 {
  height: 163.92px;
  position: relative;
  width: 166.02px;
}

.overlap-group-16 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 120px;
  left: 22px;
  min-width: 138px;
  padding: 26.7px 35.5px;
  position: relative;
  top: 28px;
}

.vector-7 {
  height: 49px;
  width: 50px;
}

.group-123.group-123-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-left: -4px;
  min-width: 166.02px;
  padding: 15.8px 6.2px;
  position: unset;
  width: unset;
}

.group-123.group-123-1 .overlap-group-16 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
