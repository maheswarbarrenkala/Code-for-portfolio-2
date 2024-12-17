<template>
  <div :class="[`group-192-2-1 crimsonpro-mediumitalic-medium-white-22px`, className || ``]">
    <p class="specialization-aim">{{ specializationAiM }}</p>
    <p class="tools-and-frameworks">{{ toolsAndFrameworks }}</p>
    <p class="projects" v-html="projectsFakeNews"></p>
  </div>
</template>

<script>
export default {
  name: "Group192",
  props: ["specializationAiM", "toolsAndFrameworks", "projectsFakeNews", "className"],
};
</script>

<style>
.group-192-2-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 196px;
  left: 59px;
  position: absolute;
  top: 92px;
  width: 660px;
}

.specialization-aim,
.tools-and-frameworks {
  height: 48px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -6px;
  width: 654px;
}

.projects {
  height: 72px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -6px;
  width: 654px;
}

.group-192-2-1.group-192-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 172px;
  left: 59px;
  position: absolute;
  top: 92px;
  width: 660px;
}

.group-192-2-1.group-192-3 .projects {
  height: 48px;
}
</style>
