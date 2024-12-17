<template>
  <div :class="[`product-design-1`, className || ``]" :style="{ 'background-image': 'url(' + productDesign + ')' }">
    <p class="product-design-uiux-2 valign-text-middle crimsontext-bold-black-22px">
      <span
        ><span class="span0-1 crimsontext-bold-black-22px">{{ spanText1 }}</span
        ><span class="span-4 crimsontext-bold-black-20px">{{ spanText2 }}</span
        ><span class="span-4 crimsontext-normal-black-20px">{{ spanText3 }}</span
        ><span class="span-4 crimsontext-bold-black-20px">Key Skills<br /><br /></span
        ><span class="span-4 crimsontext-normal-black-20px">{{ spanText5 }}</span
        ><span class="span-4 crimsontext-bold-black-20px">{{ spanText6 }}</span
        ><span class="span-4 crimsontext-normal-black-20px">{{ spanText7 }}</span
        ><span class="span-4 crimsontext-bold-black-20px">{{ spanText8 }}</span
        ><span class="span-4 crimsontext-normal-black-20px">{{ spanText9 }}</span
        ><span class="span-4 crimsontext-bold-black-20px">{{ spanText10 }}</span
        ><span class="span-4 crimsontext-normal-black-20px">{{ spanText11 }}</span
        ><span class="span-4 crimsontext-bold-black-20px">Achievements<br /><br /></span
        ><span class="span-4 crimsontext-normal-black-20px">{{ spanText13 }}</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ProductDesign",
  props: [
    "productDesign",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText13",
    "className",
  ],
};
</script>

<style>
.product-design-1 {
  background-size: 100% 100%;
  display: flex;
  height: 1066px;
  justify-content: center;
  width: 1038px;
}

.product-design-uiux-2 {
  height: 1020px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 23px;
  width: 950px;
}

.span0-1 {
  text-decoration: underline;
}

.product-design-1.management-3 {
  height: 881px;
}

.product-design-1.management-3 .product-design-uiux-2 {
  height: 835px;
}
</style>
