<template>
  <a href="#certifications">
    <div class="certifications-1">
      <div class="certifications-2 crimsonpro-medium-white-25px">{{ certifications }}</div>
    </div></a
  >
</template>

<script>
export default {
  name: "Certifications",
  props: ["certifications"],
};
</script>

<style>
.certifications-1 {
  cursor: pointer;
  display: flex;
  height: 28px;
  width: 138px;
}

.certifications-2 {
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  width: 138px;
}
</style>
