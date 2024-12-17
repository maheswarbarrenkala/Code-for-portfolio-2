<template>
  <div class="my-work-2 animate-enter2">
    <div class="overlap-group-24">
      <div class="rectangle-47-1"></div>
      <div class="my-work-3 valign-text-middle">{{ myWork }}</div>
      <img class="arrow-8-1" :src="arrow8" alt="Arrow 8" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyWork2",
  props: ["myWork", "arrow8"],
};
</script>

<style>
.my-work-2 {
  box-shadow: 0px 4px 4px #00000040;
  cursor: pointer;
  height: 55px;
  margin-top: 157px;
  opacity: 0;
  transition: all 0.2s ease;
  width: 170px;
}

.my-work-2.animate-enter2 {
  animation: animate-enter2-frames 0.2s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.my-work-2:hover {
  opacity: 1;
}

.overlap-group-24 {
  height: 56px;
  position: relative;
}

.rectangle-47-1 {
  background-blend-mode: difference;
  background-color: var(--white);
  border-radius: 15px;
  filter: blur(2px);
  height: 55px;
  left: 0;
  opacity: 0.15;
  position: absolute;
  top: 0;
  width: 170px;
}

.my-work-3 {
  color: var(--white);
  font-family: var(--font-family-crimson_pro-regular);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  height: 55px;
  left: 18px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 107px;
}

.arrow-8-1 {
  height: 15px;
  left: 133px;
  position: absolute;
  top: 21px;
  width: 22px;
}

@keyframes animate-enter2-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
