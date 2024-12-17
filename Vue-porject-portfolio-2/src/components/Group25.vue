<template>
  <div :class="[`group-25`, className || ``]">
    <div class="overlap-group-13" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
      <img class="code-snippet-02_svgrepocom" :src="codeSnippet02_SvgrepoCom" alt="code-snippet-02_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group25",
  props: ["overlapGroup", "codeSnippet02_SvgrepoCom", "className"],
};
</script>

<style>
.group-25 {
  height: 163.92px;
  position: relative;
  width: 158.26px;
}

.overlap-group-13 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 120px;
  left: 21px;
  min-width: 132px;
  padding: 31.7px 30.3px;
  position: relative;
  top: 28px;
}

.code-snippet-02_svgrepocom {
  height: 45px;
  width: 55px;
}

.group-25.group-25-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-left: -4px;
  min-width: 158.26px;
  padding: 15.8px 5.2px;
  position: unset;
  width: unset;
}

.group-25.group-25-1 .overlap-group-13 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
