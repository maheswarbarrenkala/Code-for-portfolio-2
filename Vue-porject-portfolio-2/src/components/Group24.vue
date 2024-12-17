<template>
  <div :class="[`group-24`, className || ``]">
    <div class="overlap-group-15" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
      <img class="idea_svgrepocom" :src="idea_SvgrepoCom" alt="idea_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group24",
  props: ["overlapGroup", "idea_SvgrepoCom", "className"],
};
</script>

<style>
.group-24 {
  height: 163.92px;
  position: relative;
  width: 166.02px;
}

.overlap-group-15 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 120px;
  left: 22px;
  min-width: 138px;
  padding: 26.2px 40.5px;
  position: relative;
  top: 28px;
}

.idea_svgrepocom {
  height: 55px;
  width: 41px;
}

.group-24.group-24-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-left: -4px;
  min-width: 166.02px;
  padding: 15.8px 6.2px;
  position: unset;
  width: unset;
}

.group-24.group-24-1 .overlap-group-15 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
