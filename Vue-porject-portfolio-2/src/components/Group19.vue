<template>
  <div :class="[`group-19`, className || ``]">
    <div class="overlap-group-12" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
      <img class="frame-16" :src="frame16" alt="Frame 16" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group19",
  props: ["overlapGroup", "frame16", "className"],
};
</script>

<style>
.group-19 {
  height: 163.92px;
  position: relative;
  width: 163.92px;
}

.overlap-group-12 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 120px;
  left: 22px;
  min-width: 136px;
  padding: 29.2px 22px;
  position: relative;
  top: 28px;
}

.frame-16 {
  height: 50px;
  width: 75px;
}

.group-19.group-19-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-left: -4px;
  min-width: 163.92px;
  padding: 15.8px 6px;
  position: unset;
  width: unset;
}

.group-19.group-19-1 .overlap-group-12 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
