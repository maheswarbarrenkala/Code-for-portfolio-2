<template>
  <div :class="[`group-125`, className || ``]">
    <div class="vector-container-1" :style="{ 'background-image': 'url(' + vectorContainer + ')' }">
      <img
        class="vector-9"
        src="https://cdn.animaapp.com/projects/67588397084266cadf63ec76/releases/67588c6cf64e4bed8782fd9c/img/vector-43@2x.png"
        alt="Vector"
      />
      <img class="vector-10" :src="vector2" alt="Vector" /><img class="vector-11" :src="vector3" alt="Vector" /><img
        class="vector-12"
        :src="vector4"
        alt="Vector"
      /><img class="vector-13" :src="vector5" alt="Vector" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group125",
  props: ["vectorContainer", "vector2", "vector3", "vector4", "vector5", "className"],
};
</script>

<style>
.group-125 {
  height: 163.92px;
  position: relative;
  width: 166.02px;
}

.vector-container-1 {
  background-size: 100% 100%;
  height: 120px;
  left: 22px;
  position: relative;
  top: 28px;
  width: 138px;
}

.vector-9 {
  height: 62px;
  left: 39px;
  position: absolute;
  top: 23px;
  width: 46px;
}

.vector-10 {
  height: 8px;
  left: 66px;
  position: absolute;
  top: 43px;
  width: 8px;
}

.vector-11 {
  height: 7px;
  left: 49px;
  position: absolute;
  top: 60px;
  width: 7px;
}

.vector-12 {
  height: 20px;
  left: 50px;
  position: absolute;
  top: 43px;
  width: 19px;
}

.vector-13 {
  height: 8px;
  left: 64px;
  position: absolute;
  top: 58px;
  width: 9px;
}

.group-125.group-125-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-left: -4px;
  min-width: 166.02px;
  padding: 15.8px 6.2px;
  position: unset;
  width: unset;
}

.group-125.group-125-1 .vector-container-1 {
  left: unset;
  top: unset;
}
</style>
