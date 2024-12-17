<template>
  <div class="container-center-horizontal">
    <div class="iphone-16-pro-max-2 screen">
      <mobile-header2 :unnamed__1_RemovebgPreview1="mobileHeader2Props.unnamed__1_RemovebgPreview1" />
      <div class="overlap-group6-3">
        <p class="a-blend-of-technical-1">{{ aBlendOfTechnical }}</p>
        <div class="skills-2">
          <div class="programming-1">
            <div class="overlap-group-19">
              <div class="rectangle-175-2"></div>
              <img class="rectangle-174-2" :src="rectangle1741" alt="Rectangle 174" /><img
                class="rectangle-176-3"
                :src="rectangle1761"
                alt="Rectangle 176"
              />
              <div class="programming-and-development-1 crimsonpro-semi-bold-cultured-pearl-26px">
                {{ programmingAndDevelopment }}
              </div>
              <div class="frame-191 crimsonpro-italic-normal-white-20px">
                <p class="languages-java-jse">{{ languagesJavaJse }}</p>
                <p class="frame-191-item">{{ developmentHtml5 }}</p>
                <p class="frame-191-item">{{ projectsWebsiteV }}</p>
                <p class="frame-191-item">{{ mobileDevelopment }}</p>
                <p class="frame-191-item">{{ databasesSqlRdbm }}</p>
              </div>
              <img class="group-201-3" :src="group2011" alt="Group 201" />
            </div>
          </div>
          <div class="software-eng">
            <div class="overlap-group1-2">
              <div class="rectangle-175-3"></div>
              <img class="rectangle-174-3" :src="rectangle1742" alt="Rectangle 174" /><img
                class="rectangle-176-3"
                :src="rectangle1762"
                alt="Rectangle 176"
              />
              <div class="software-engineering-3 crimsonpro-semi-bold-cultured-pearl-26px">
                {{ softwareEngineering }}
              </div>
              <div class="frame-192-1 crimsonpro-italic-normal-white-20px">
                <p class="expertise-agile-sc-1">{{ expertiseAgileSc }}</p>
                <p class="development-advance-1" v-html="developmentAdvance"></p>
                <p class="projects-document-c-1">{{ projectsDocumentC }}</p>
              </div>
              <img class="group-201-4" :src="group2012" alt="Group 201" />
            </div>
          </div>
          <div class="ai-mobile">
            <div class="overlap-group2-2">
              <div class="rectangle-175-4"></div>
              <img class="rectangle-174-4" :src="rectangle1743" alt="Rectangle 174" /><img
                class="rectangle-176-3"
                :src="rectangle1763"
                alt="Rectangle 176"
              />
              <p class="artificial-intellige-3 crimsonpro-semi-bold-cultured-pearl-26px">{{ artificialIntellige }}</p>
              <div class="frame-192-2 crimsonpro-italic-normal-white-20px">
                <p class="specialization-aim-1">{{ specializationAiM }}</p>
                <p class="tools-and-frameworks-1">{{ toolsAndFrameworks }}</p>
                <p class="projects-fake-news">{{ projectsFakeNews }}</p>
              </div>
              <img class="group-201-5" :src="group2013" alt="Group 201" />
            </div>
          </div>
          <div class="design-and-tool">
            <div class="overlap-group3-2">
              <div class="rectangle-175-5"></div>
              <img class="rectangle-174-5" :src="rectangle1744" alt="Rectangle 174" /><img
                class="rectangle-176-4"
                :src="rectangle1764"
                alt="Rectangle 176"
              />
              <div class="design-and-tools crimsonpro-semi-bold-cultured-pearl-26px">{{ designAndTools }}</div>
              <div class="frame-192 crimsonpro-italic-normal-white-20px">
                <p class="uiux-design-user-i-1">{{ uiUxDesignUserI }}</p>
                <p class="tools-figma-adobe-1">{{ toolsFigmaAdobe }}</p>
                <p class="projects-inventory" v-html="projectsInventory1"></p>
              </div>
              <img class="group-201-6" :src="group2014" alt="Group 201" />
            </div>
          </div>
          <div class="cloud-1">
            <div class="overlap-group4-2">
              <div class="rectangle-175-6"></div>
              <img class="rectangle-174-6" :src="rectangle1745" alt="Rectangle 174" /><img
                class="rectangle-176-4"
                :src="rectangle1765"
                alt="Rectangle 176"
              />
              <div class="cloud-and-infrastructure crimsonpro-semi-bold-cultured-pearl-26px">
                {{ cloudAndInfrastructure }}
              </div>
              <div class="frame-192 crimsonpro-italic-normal-white-20px">
                <p class="platforms-aws-amaz-1">{{ platformsAwsAmaz }}</p>
                <p class="cloud-tools-aws-sch-1">{{ cloudToolsAwsSch }}</p>
                <p class="projects-inventory-1" v-html="projectsInventory2"></p>
              </div>
              <img class="group-201-7" :src="group2015" alt="Group 201" />
            </div>
          </div>
          <div class="project-management-2">
            <div class="overlap-group5-3">
              <div class="rectangle-177"></div>
              <img class="rectangle-178" :src="rectangle178" alt="Rectangle 178" /><img
                class="rectangle-176-4"
                :src="rectangle1766"
                alt="Rectangle 176"
              />
              <div class="project-management-and-business-1 crimsonpro-semi-bold-cultured-pearl-26px">
                {{ projectManagementAndBusiness }}
              </div>
              <div class="frame-192 crimsonpro-italic-normal-white-20px">
                <p class="expertise-agile-met">{{ expertiseAgileMet }}</p>
                <p class="skills-problem-solv">{{ skillsProblemSolv }}</p>
                <p class="tools-jira-click-u-1">{{ toolsJiraClickU }}</p>
                <p class="projects-amazon-bid">{{ projectsAmazonBid }}</p>
              </div>
              <img class="group-201-8" :src="group2016" alt="Group 201" />
            </div>
          </div>
        </div>
        <div class="certificatio">
          <div class="group-211">
            <h1 class="title">{{ title }}</h1>
            <div class="line-container-4">
              <img class="line-5-5" :src="line5" alt="Line 5" /><img class="line-6-5" :src="line6" alt="Line 6" />
            </div>
          </div>
          <div class="frame-212">
            <img class="frame-212-item" :src="awsPromptEngineering" alt="AWS Prompt Engineering" /><img
              class="frame-212-item"
              :src="automation"
              alt="Automation"
            /><img class="frame-212-item" :src="html" alt="HTML" /><img
              class="frame-212-item"
              :src="css"
              alt="CSS"
            /><img class="frame-212-item" :src="javaNiit" alt="Java NIIT" /><img
              class="frame-212-item"
              :src="oracle"
              alt="Oracle"
            /><img class="frame-212-item" :src="python" alt="Python" /><img
              class="frame-212-item"
              :src="maths"
              alt="Maths"
            />
          </div>
        </div>
        <div class="overlap-group-20">
          <img class="rectangle-140-4" :src="rectangle140" alt="Rectangle 140" /><frame183 />
          <copyrights />
          <a href="#mobile-header-_2"><img class="up-4" :src="up" alt="Up" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobileHeader2 from "./MobileHeader2";
import Frame183 from "./Frame183";
import Copyrights from "./Copyrights";
export default {
  name: "IPhone16ProMax2",
  components: {
    MobileHeader2,
    Frame183,
    Copyrights,
  },
  props: [
    "aBlendOfTechnical",
    "rectangle1741",
    "rectangle1761",
    "programmingAndDevelopment",
    "languagesJavaJse",
    "developmentHtml5",
    "projectsWebsiteV",
    "mobileDevelopment",
    "databasesSqlRdbm",
    "group2011",
    "rectangle1742",
    "rectangle1762",
    "softwareEngineering",
    "expertiseAgileSc",
    "developmentAdvance",
    "projectsDocumentC",
    "group2012",
    "rectangle1743",
    "rectangle1763",
    "artificialIntellige",
    "specializationAiM",
    "toolsAndFrameworks",
    "projectsFakeNews",
    "group2013",
    "rectangle1744",
    "rectangle1764",
    "designAndTools",
    "uiUxDesignUserI",
    "toolsFigmaAdobe",
    "projectsInventory1",
    "group2014",
    "rectangle1745",
    "rectangle1765",
    "cloudAndInfrastructure",
    "platformsAwsAmaz",
    "cloudToolsAwsSch",
    "projectsInventory2",
    "group2015",
    "rectangle178",
    "rectangle1766",
    "projectManagementAndBusiness",
    "expertiseAgileMet",
    "skillsProblemSolv",
    "toolsJiraClickU",
    "projectsAmazonBid",
    "group2016",
    "title",
    "line5",
    "line6",
    "awsPromptEngineering",
    "automation",
    "html",
    "css",
    "javaNiit",
    "oracle",
    "python",
    "maths",
    "rectangle140",
    "up",
    "mobileHeader2Props",
  ],
};
</script>

<style>
.iphone-16-pro-max-2 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 9364px;
  position: relative;
  width: 440px;
}

.overlap-group6-3 {
  align-items: center;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(3, 1, 77) 0%,
    rgb(0, 122, 255) 24.4%,
    rgb(16, 25, 58) 55.91%,
    rgba(217, 160, 91, 0.95) 78.87%,
    rgb(3, 0, 77) 100%
  );
  display: flex;
  flex-direction: column;
  min-height: 9304px;
  width: 440px;
}

.a-blend-of-technical-1 {
  color: var(--cultured-pearl);
  font-family: var(--font-family-source_serif_pro);
  font-size: var(--font-size-l);
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 67px;
  min-height: 60px;
  text-align: center;
  text-shadow: 0px 4px 4px #00000040;
  width: 440px;
}

.skills-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 5478px;
  justify-content: center;
  margin-left: 10px;
  margin-top: 31px;
  overflow: hidden;
  position: relative;
  width: 410px;
}

.programming-1 {
  height: 938px;
  margin-right: -0.5px;
  position: relative;
  width: 409px;
}

.overlap-group-19 {
  height: 938px;
  position: relative;
  width: 407px;
}

.rectangle-175-2 {
  background-color: var(--black-4);
  border-radius: 10px;
  box-shadow: 4px 4px 4px #00000040;
  height: 400px;
  left: -260px;
  position: absolute;
  top: 272px;
  transform: rotate(-90deg);
  width: 933px;
}

.rectangle-174-2 {
  height: 933px;
  left: 0;
  position: absolute;
  top: 0;
  width: 400px;
}

.rectangle-176-3 {
  height: 335px;
  left: 33px;
  object-fit: cover;
  position: absolute;
  top: 35px;
  width: 335px;
}

.programming-and-development-1 {
  left: 27px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 403px;
  white-space: nowrap;
}

.frame-191 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  left: 35px;
  position: absolute;
  top: 464px;
  width: 330px;
}

.languages-java-jse {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: 320px;
}

.frame-191-item {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 320px;
}

.group-201-3 {
  height: 30px;
  left: 19px;
  position: absolute;
  top: 868px;
  width: 362px;
}

.software-eng {
  height: 863px;
  margin-right: -0.5px;
  position: relative;
  width: 409px;
}

.overlap-group1-2 {
  height: 863px;
  position: relative;
  width: 407px;
}

.rectangle-175-3 {
  background-color: var(--black-4);
  border-radius: 10px;
  box-shadow: 4px 4px 4px #00000040;
  height: 400px;
  left: -222px;
  position: absolute;
  top: 234px;
  transform: rotate(-90deg);
  width: 858px;
}

.rectangle-174-3 {
  height: 858px;
  left: 0;
  position: absolute;
  top: 0;
  width: 400px;
}

.software-engineering-3 {
  left: 83px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 403px;
  white-space: nowrap;
}

.frame-192-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 15px;
  left: 35px;
  position: absolute;
  top: 464px;
  width: 330px;
}

.expertise-agile-sc-1,
.specialization-aim-1,
.uiux-design-user-i-1,
.platforms-aws-amaz-1,
.expertise-agile-met {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.development-advance-1,
.projects-document-c-1,
.tools-and-frameworks-1,
.tools-figma-adobe-1,
.projects-inventory,
.cloud-tools-aws-sch-1,
.projects-inventory-1,
.skills-problem-solv,
.tools-jira-click-u-1,
.projects-amazon-bid {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
}

.group-201-4 {
  height: 30px;
  left: 19px;
  position: absolute;
  top: 793px;
  width: 362px;
}

.ai-mobile {
  height: 893px;
  margin-right: -0.5px;
  position: relative;
  width: 409px;
}

.overlap-group2-2 {
  height: 893px;
  position: relative;
  width: 407px;
}

.rectangle-175-4 {
  background-color: var(--black-4);
  border-radius: 10px;
  box-shadow: 4px 4px 4px #00000040;
  height: 400px;
  left: -237px;
  position: absolute;
  top: 249px;
  transform: rotate(-90deg);
  width: 888px;
}

.rectangle-174-4 {
  height: 888px;
  left: 0;
  position: absolute;
  top: 0;
  width: 400px;
}

.artificial-intellige-3 {
  left: 60px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  text-decoration: underline;
  top: 403px;
  width: 280px;
}

.frame-192-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 15px;
  left: 35px;
  position: absolute;
  top: 493px;
  width: 330px;
}

.projects-fake-news {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  width: 327px;
}

.group-201-5 {
  height: 30px;
  left: 19px;
  position: absolute;
  top: 823px;
  width: 362px;
}

.design-and-tool {
  height: 884px;
  margin-right: -0.5px;
  position: relative;
  width: 409px;
}

.overlap-group3-2 {
  height: 884px;
  position: relative;
  width: 407px;
}

.rectangle-175-5 {
  background-color: var(--black-4);
  border-radius: 10px;
  box-shadow: 4px 4px 4px #00000040;
  height: 400px;
  left: -232px;
  position: absolute;
  top: 244px;
  transform: rotate(-90deg);
  width: 879px;
}

.rectangle-174-5 {
  height: 879px;
  left: 0;
  position: absolute;
  top: 0;
  width: 400px;
}

.rectangle-176-4 {
  height: 335px;
  left: 33px;
  position: absolute;
  top: 35px;
  width: 335px;
}

.design-and-tools {
  left: 108px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 403px;
  white-space: nowrap;
}

.frame-192 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 14px;
  left: 35px;
  position: absolute;
  top: 464px;
  width: 330px;
}

.group-201-6 {
  height: 30px;
  left: 19px;
  position: absolute;
  top: 814px;
  width: 362px;
}

.cloud-1 {
  height: 796px;
  margin-right: -0.5px;
  position: relative;
  width: 409px;
}

.overlap-group4-2 {
  height: 796px;
  position: relative;
  width: 407px;
}

.rectangle-175-6 {
  background-color: var(--black-4);
  border-radius: 10px;
  box-shadow: 4px 4px 4px #00000040;
  height: 400px;
  left: -188px;
  position: absolute;
  top: 200px;
  transform: rotate(-90deg);
  width: 791px;
}

.rectangle-174-6 {
  height: 791px;
  left: 0;
  position: absolute;
  top: 0;
  width: 400px;
}

.cloud-and-infrastructure {
  left: 66px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 403px;
  white-space: nowrap;
}

.group-201-7 {
  height: 30px;
  left: 19px;
  position: absolute;
  top: 726px;
  width: 362px;
}

.project-management-2 {
  height: 854px;
  margin-right: -0.5px;
  position: relative;
  width: 409px;
}

.overlap-group5-3 {
  height: 854px;
  position: relative;
  width: 407px;
}

.rectangle-177 {
  background-color: var(--black-4);
  border-radius: 10px;
  box-shadow: 4px 4px 4px #00000040;
  height: 400px;
  left: -217px;
  position: absolute;
  top: 230px;
  transform: rotate(-90deg);
  width: 849px;
}

.rectangle-178 {
  height: 849px;
  left: 0;
  position: absolute;
  top: 0;
  width: 400px;
}

.project-management-and-business-1 {
  left: 16px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 403px;
  white-space: nowrap;
}

.group-201-8 {
  height: 30px;
  left: 19px;
  position: absolute;
  top: 784px;
  width: 362px;
}

.certificatio {
  display: flex;
  flex-direction: column;
  height: 3269px;
  margin-top: 60px;
  width: 440px;
}

.group-211 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 3px;
  min-height: 39px;
  width: 187px;
}

.title {
  color: var(--white);
  font-family: var(--font-family-source_serif_pro);
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  min-height: 30px;
  white-space: nowrap;
}

.line-container-4 {
  align-items: flex-start;
  display: flex;
  gap: 10px;
  min-width: 185px;
}

.line-5-5 {
  height: 4px;
  width: 110px;
}

.line-6-5 {
  height: 4px;
  width: 65px;
}

.frame-212 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 0px;
  height: 3230px;
  justify-content: center;
  position: relative;
  width: 440px;
}

.frame-212-item {
  height: 390px;
  position: relative;
  width: 433.75px;
}

.overlap-group-20 {
  height: 247px;
  margin-top: 92px;
  position: relative;
  width: 440px;
}

.rectangle-140-4 {
  height: 226px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 440px;
}

.up-4 {
  cursor: pointer;
  height: 63px;
  left: 189px;
  position: absolute;
  top: 0;
  width: 63px;
}
</style>
