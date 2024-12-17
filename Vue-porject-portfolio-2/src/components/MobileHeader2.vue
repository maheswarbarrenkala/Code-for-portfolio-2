<template>
  <div :class="[`mobile-header-_2`, className || ``]" id="mobile-header-_2">
    <div class="group-184">
      <img
        class="unnamed__1_-removebg-preview-1"
        :src="unnamed__1_RemovebgPreview1"
        alt="unnamed__1_-removebg-preview 1"
      /><img
        class="menu"
        src="https://cdn.animaapp.com/projects/67588397084266cadf63ec76/releases/67588c6cf64e4bed8782fd9c/img/menu-2@2x.png"
        alt="Menu"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileHeader2",
  props: ["unnamed__1_RemovebgPreview1", "className"],
};
</script>

<style>
.mobile-header-_2 {
  display: flex;
  height: 60px;
  width: 440px;
}

.group-184 {
  align-items: center;
  background: linear-gradient(180deg, rgb(217, 160, 91) 35.56%, rgb(27, 38, 79) 72.17%);
  display: flex;
  flex: 1;
  gap: 285px;
  min-width: 440px;
  padding: 0 21px;
}

.unnamed__1_-removebg-preview-1 {
  height: 60px;
  object-fit: cover;
  width: 60px;
}

.menu {
  height: 40px;
  width: 45px;
}

.mobile-header-_2.mobile-header-bar {
  -webkit-backdrop-filter: blur(200px) brightness(100%);
  backdrop-filter: blur(200px) brightness(100%);
  box-shadow: 0px 4px 4px #00000040;
  left: 0;
  position: absolute;
  top: 0;
}

.mobile-header-_2.mobile-header-bar .group-184 {
  background: unset;
  background-color: #0000004c;
}
</style>
