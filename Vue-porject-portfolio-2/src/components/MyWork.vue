<template>
  <div class="my-work">
    <div class="overlap-group-7">
      <div class="rectangle-47"></div>
      <div class="my-work-1 valign-text-middle">{{ myWork }}</div>
      <img class="arrow-8" :src="arrow8" alt="Arrow 8" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyWork",
  props: ["myWork", "arrow8"],
};
</script>

<style>
.my-work {
  align-items: flex-end;
  display: flex;
  height: 50px;
  margin-left: 14px;
  margin-top: 191px;
  min-width: 155px;
}

.overlap-group-7 {
  height: 55px;
  margin-bottom: -4.5px;
  position: relative;
  width: 155px;
}

.rectangle-47 {
  background-blend-mode: difference;
  background-color: var(--white);
  border-radius: 15px;
  filter: blur(2px);
  height: 50px;
  left: 0;
  opacity: 0.15;
  position: absolute;
  top: 0;
  width: 155px;
}

.my-work-1 {
  color: var(--white);
  font-family: var(--font-family-crimson_pro-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  height: 55px;
  left: 10px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 107px;
}

.arrow-8 {
  height: 15px;
  left: 125px;
  position: absolute;
  top: 21px;
  width: 22px;
}
</style>
