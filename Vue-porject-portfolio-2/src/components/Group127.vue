<template>
  <div :class="[`group-127`, className || ``]">
    <div class="vector-container-3" :style="{ 'background-image': 'url(' + vectorContainer + ')' }">
      <img
        class="vector-25"
        src="https://cdn.animaapp.com/projects/67588397084266cadf63ec76/releases/67588c6cf64e4bed8782fd9c/img/vector-51@2x.png"
        alt="Vector"
      />
      <img class="vector-26" :src="vector2" alt="Vector" /><img class="vector-27" :src="vector3" alt="Vector" /><img
        class="vector-28"
        :src="vector4"
        alt="Vector"
      /><img class="vector-29" :src="vector5" alt="Vector" /><img class="vector-30" :src="vector6" alt="Vector" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Group127",
  props: ["vectorContainer", "vector2", "vector3", "vector4", "vector5", "vector6", "className"],
};
</script>

<style>
.group-127 {
  height: 163.92px;
  position: relative;
  width: 166.02px;
}

.vector-container-3 {
  background-size: 100% 100%;
  height: 120px;
  left: 22px;
  position: relative;
  top: 28px;
  width: 138px;
}

.vector-25 {
  height: 47px;
  left: 37px;
  position: absolute;
  top: 31px;
  width: 47px;
}

.vector-26 {
  height: 5px;
  left: 42px;
  position: absolute;
  top: 35px;
  width: 5px;
}

.vector-27 {
  height: 5px;
  left: 48px;
  position: absolute;
  top: 35px;
  width: 5px;
}

.vector-28 {
  height: 5px;
  left: 53px;
  position: absolute;
  top: 35px;
  width: 5px;
}

.vector-29 {
  height: 19px;
  left: 46px;
  position: absolute;
  top: 45px;
  width: 31px;
}

.vector-30 {
  height: 16px;
  left: 54px;
  position: absolute;
  top: 57px;
  width: 14px;
}

.group-127.group-127-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-left: -4px;
  min-width: 166.02px;
  padding: 15.8px 6.2px;
  position: unset;
  width: unset;
}

.group-127.group-127-1 .vector-container-3 {
  left: unset;
  top: unset;
}
</style>
