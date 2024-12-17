<template>
  <div :class="[`icons`, className || ``]">
    <img class="icons-item" :src="linkedin" alt="LInkedIn" /><img
      class="icons-item variant-1"
      :src="gmail"
      alt="Gmail "
    /><img class="icons-item variant-2" :src="figma" alt="Figma" /><img
      class="icons-item variant-3"
      :src="github"
      alt="Github"
    /><img class="icons-item variant-4" :src="facebook" alt="Facebook" /><img
      class="icons-item variant-5"
      :src="twitter"
      alt="Twitter"
    />
  </div>
</template>

<script>
export default {
  name: "Icons",
  props: ["linkedin", "gmail", "figma", "github", "facebook", "twitter", "className"],
};
</script>

<style>
.icons {
  align-items: flex-start;
  display: flex;
  gap: 20px;
  height: 55px;
  left: 505px;
  min-width: 430px;
  position: absolute;
  top: 126px;
}

.icons-item {
  height: 55px;
  width: 55px;
}

.icons.icons-1 {
  align-items: flex-end;
  height: 50px;
  top: 94px;
}

.icons.icons-1 .icons-item {
  height: 50px;
  margin-bottom: 0;
}

.icons.icons-2 {
  top: 129px;
}

.icons.icons-1 .icons-item.variant-1,
.icons.icons-1 .icons-item.variant-2,
.icons.icons-1 .icons-item.variant-3,
.icons.icons-1 .icons-item.variant-4,
.icons.icons-1 .icons-item.variant-5 {
  width: 55px;
}
</style>
