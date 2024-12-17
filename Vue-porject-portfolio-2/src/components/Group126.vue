<template>
  <div :class="[`group-126`, className || ``]">
    <div class="vector-container-2" :style="{ 'background-image': 'url(' + vectorContainer + ')' }">
      <img
        class="vector-19"
        src="https://cdn.animaapp.com/projects/67588397084266cadf63ec76/releases/67588c6cf64e4bed8782fd9c/img/vector-48@2x.png"
        alt="Vector"
      />
      <img class="vector-20" :src="vector2" alt="Vector" /><img class="vector-21" :src="vector3" alt="Vector" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group126",
  props: ["vectorContainer", "vector2", "vector3", "className"],
};
</script>

<style>
.group-126 {
  height: 163.91px;
  position: relative;
  width: 165.93px;
}

.vector-container-2 {
  background-size: 100% 100%;
  height: 120px;
  left: 22px;
  position: relative;
  top: 28px;
  width: 137px;
}

.vector-19 {
  height: 40px;
  left: 31px;
  position: absolute;
  top: 33px;
  width: 59px;
}

.vector-20 {
  height: 10px;
  left: 70px;
  position: absolute;
  top: 27px;
  width: 10px;
}

.vector-21 {
  height: 8px;
  left: 38px;
  position: absolute;
  top: 40px;
  width: 14px;
}

.group-126.group-126-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-left: -4px;
  min-width: 165.93px;
  padding: 15.8px 6.2px;
  position: unset;
  width: unset;
}

.group-126.group-126-1 .vector-container-2 {
  left: unset;
  top: unset;
}
</style>
