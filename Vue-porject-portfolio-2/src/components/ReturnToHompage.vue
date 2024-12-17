<template>
  <div :class="[`return-to-hompage`, className || ``]">
    <div class="return-to-hompage-1 crimsonpro-medium-white-25px">Return to Hompage</div>
  </div>
</template>

<script>
export default {
  name: "ReturnToHompage",
  props: ["className"],
};
</script>

<style>
.return-to-hompage {
  display: flex;
  height: 28px;
  width: 199px;
}

.return-to-hompage-1 {
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  width: 199px;
}
</style>
