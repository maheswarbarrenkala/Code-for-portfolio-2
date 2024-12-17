<template>
  <a href="#software-developer-6521720_1920-1">
    <div :class="[`home`, className || ``]"><div class="place-2 crimsonpro-medium-white-25px">Home</div></div></a
  >
</template>

<script>
export default {
  name: "Home",
  props: ["className"],
};
</script>

<style>
.home {
  cursor: pointer;
  display: flex;
  height: 33px;
  justify-content: center;
  position: relative;
  width: 73px;
}

.place-2 {
  height: 28px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  width: 61px;
}

.home.home-1 {
  cursor: unset;
  margin-left: -14.5px;
}
</style>
