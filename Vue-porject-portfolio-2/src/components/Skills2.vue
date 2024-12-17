<template>
  <div class="skills-7 animate-enter1">
    <software-engineering2
      :softwareEngineering="softwareEngineering2Props.softwareEngineering"
      :learnMore="softwareEngineering2Props.learnMore"
    />
    <programming2
      :coding="programming2Props.coding"
      :programmingDevelopment="programming2Props.programmingDevelopment"
      :learnMore="programming2Props.learnMore"
    />
    <emerging-technology2
      :q3Icons="emergingTechnology2Props.q3Icons"
      :emergingTechnology="emergingTechnology2Props.emergingTechnology"
      :learnMore="emergingTechnology2Props.learnMore"
    />
    <deisgn-and-tools2
      :learnMore="deisgnAndTools2Props.learnMore"
      :designToolsRulerPenPencil_SvgrepoCo="deisgnAndTools2Props.designToolsRulerPenPencil_SvgrepoCo"
      :designTools="deisgnAndTools2Props.designTools"
    />
    <cloud2
      :cloudComputing_SvgrepoCom="cloud2Props.cloudComputing_SvgrepoCom"
      :cloudInfrastructure="cloud2Props.cloudInfrastructure"
      :learnMore="cloud2Props.learnMore"
    />
    <project-management2
      :layer2="projectManagement2Props.layer2"
      :projectManagementBusiness="projectManagement2Props.projectManagementBusiness"
      :learnMore="projectManagement2Props.learnMore"
    />
  </div>
</template>

<script>
import SoftwareEngineering2 from "./SoftwareEngineering2";
import Programming2 from "./Programming2";
import EmergingTechnology2 from "./EmergingTechnology2";
import DeisgnAndTools2 from "./DeisgnAndTools2";
import Cloud2 from "./Cloud2";
import ProjectManagement2 from "./ProjectManagement2";
export default {
  name: "Skills2",
  components: {
    SoftwareEngineering2,
    Programming2,
    EmergingTechnology2,
    DeisgnAndTools2,
    Cloud2,
    ProjectManagement2,
  },
  props: [
    "softwareEngineering2Props",
    "programming2Props",
    "emergingTechnology2Props",
    "deisgnAndTools2Props",
    "cloud2Props",
    "projectManagement2Props",
  ],
};
</script>

<style>
.skills-7 {
  align-items: center;
  flex-direction: column;
  gap: 40px;
  height: 1235.13px;
  opacity: 0;
  position: relative;
  width: 263px;
}

.skills-7.animate-enter1 {
  animation: animate-enter1-frames 0.2s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

@keyframes animate-enter1-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
