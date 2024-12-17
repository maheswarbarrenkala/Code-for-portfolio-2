<template>
  <div class="lets-connect-1">
    <div class="lets-connect-2">{{ letsConnect }}</div>
  </div>
</template>

<script>
export default {
  name: "LetsConnect",
  props: ["letsConnect"],
};
</script>

<style>
.lets-connect-1 {
  align-items: center;
  background-color: var(--violet-red);
  border-radius: 10px;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 1.29px;
  margin-top: 24px;
  width: 286px;
}

.lets-connect-2 {
  color: var(--white);
  font-family: var(--font-family-crimson_pro-regular);
  font-size: var(--font-size-s);
  font-weight: 400;
  height: 22px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1.3px;
  margin-top: 0;
  white-space: nowrap;
  width: 105px;
}
</style>
