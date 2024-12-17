<template>
  <a href="#rectangle-139">
    <div :class="[`contact-1`, className || ``]">
      <div class="place-3 crimsonpro-medium-white-25px">Contact</div>
    </div></a
  >
</template>

<script>
export default {
  name: "Contact",
  props: ["className"],
};
</script>

<style>
.contact-1 {
  cursor: pointer;
  display: flex;
  height: 33px;
  justify-content: center;
  position: relative;
  width: 81px;
}

.place-3 {
  height: 33px;
  letter-spacing: 0;
  line-height: normal;
  width: 81px;
}

.contact-1.contact-2 {
  margin-right: -14.5px;
}
</style>
