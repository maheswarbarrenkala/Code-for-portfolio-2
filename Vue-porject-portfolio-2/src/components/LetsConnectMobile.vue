<template>
  <div class="lets-connect-mobile">
    <div class="lets-connect">{{ letsConnect }}</div>
  </div>
</template>

<script>
export default {
  name: "LetsConnectMobile",
  props: ["letsConnect"],
};
</script>

<style>
.lets-connect-mobile {
  align-items: center;
  background-color: var(--violet-red);
  border-radius: 10px;
  display: flex;
  height: 25px;
  justify-content: center;
  margin-top: 31px;
  width: 120px;
}

.lets-connect {
  color: var(--white);
  font-family: var(--font-family-crimson_pro-regular);
  font-size: 14px;
  font-weight: 400;
  height: 16px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  white-space: nowrap;
  width: 74px;
}
</style>
