<template>
  <div class="frame-193-item-1">
    <div class="overlap-group-4">
      <div class="rectangle-175-1"></div>
      <div class="rectangle-174-1"></div>
      <img class="group-201-2" :src="group201" alt="Group 201" /><group192
        :specializationAiM="group192Props.specializationAiM"
        :toolsAndFrameworks="group192Props.toolsAndFrameworks"
        :projectsFakeNews="group192Props.projectsFakeNews"
        :className="group192Props.className"
      />
      <div class="x-and crimsonpro-semi-bold-cultured-pearl-30px">{{ designAndTools }}</div>
      <img class="rectangle-176-2" :src="rectangle176" alt="Rectangle 176" />
    </div>
  </div>
</template>

<script>
import Group192 from "./Group192";
export default {
  name: "UI",
  components: {
    Group192,
  },
  props: ["group201", "designAndTools", "rectangle176", "group192Props"],
};
</script>

<style>
.frame-193-item-1 {
  align-items: flex-start;
  display: flex;
  margin-left: 2px;
  min-width: 1225px;
}

.overlap-group-4 {
  height: 417px;
  position: relative;
  width: 1223px;
}

.rectangle-175-1 {
  background-color: var(--black-4);
  border-radius: 10px;
  box-shadow: 4px 4px 4px #00000040;
  height: 404px;
  left: 13px;
  position: absolute;
  top: 13px;
  width: 1210px;
}

.rectangle-174-1 {
  background: linear-gradient(180deg, rgb(225.25, 195.06, 158.61) 0%, rgb(52.83, 139.42, 234.81) 100%);
  border-radius: 10px;
  height: 406px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1213px;
}

.group-201-2 {
  height: 35px;
  left: 59px;
  position: absolute;
  top: 320px;
  width: 583px;
}

.x-and {
  left: 59px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 30px;
  white-space: nowrap;
}

.rectangle-176-2 {
  height: 350px;
  left: 804px;
  position: absolute;
  top: 28px;
  width: 350px;
}
</style>
