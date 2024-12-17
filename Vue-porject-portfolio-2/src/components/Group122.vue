<template>
  <div :class="[`group-122`, className || ``]">
    <div class="vector-container" :style="{ 'background-image': 'url(' + vectorContainer + ')' }">
      <img
        class="vector-1"
        src="https://cdn.animaapp.com/projects/67588397084266cadf63ec76/releases/67588c6cf64e4bed8782fd9c/img/vector-39@2x.png"
        alt="Vector"
      />
      <img class="vector-2" :src="vector2" alt="Vector" /><img class="vector-3" :src="vector3" alt="Vector" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group122",
  props: ["vectorContainer", "vector2", "vector3", "className"],
};
</script>

<style>
.group-122 {
  height: 164.67px;
  position: relative;
  width: 165.88px;
}

.vector-container {
  background-size: 100% 100%;
  height: 121px;
  left: 22px;
  position: relative;
  top: 28px;
  width: 138px;
}

.vector-1 {
  height: 50px;
  left: 36px;
  position: absolute;
  top: 29px;
  width: 51px;
}

.vector-2 {
  height: 33px;
  left: 48px;
  position: absolute;
  top: 38px;
  width: 8px;
}

.vector-3 {
  height: 33px;
  left: 66px;
  position: absolute;
  top: 38px;
  width: 8px;
}

.group-122.group-122-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-left: -4px;
  min-width: 165.88px;
  padding: 15.9px 6.2px;
  position: unset;
  width: unset;
}

.group-122.group-122-1 .vector-container {
  left: unset;
  top: unset;
}
</style>
