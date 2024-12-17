<template>
  <div class="container-center-horizontal">
    <div class="desktop-2 screen">
      <div class="overlap-group6-1">
        <div class="homepage-header">
          <img
            class="unnamed__1_-removebg-preview-1-3"
            :src="unnamed__1_RemovebgPreview1"
            alt="unnamed__1_-removebg-preview 1"
          />
          <div class="frame-211">
            <certifications :certifications="certificationsProps.certifications" />
            <return-to-hompage />
          </div>
        </div>
        <h1 class="a-blend-of-technical">{{ aBlendOfTechnical }}</h1>
        <div class="frame-193">
          <div class="frame-193-item">
            <div class="overlap-group-1">
              <div class="rectangle-175"></div>
              <div class="rectangle-174"></div>
              <img class="group-201-1" :src="group2011" alt="Group 201" />
              <div class="group-191 crimsonpro-mediumitalic-medium-white-22px">
                <p class="group-191-item">{{ languagesJavaJse }}</p>
                <p class="group-191-item-1">{{ developmentHtml5 }}</p>
                <p class="group-191-item-1">{{ projectsWebsiteV }}</p>
                <p class="group-191-item">{{ mobileDevelopment }}</p>
                <p class="group-191-item">{{ databasesSqlRdbm }}</p>
              </div>
              <div class="programming-and-development crimsonpro-semi-bold-cultured-pearl-30px">
                {{ programmingAndDevelopment }}
              </div>
              <img class="rectangle-176" :src="rectangle1761" alt="Rectangle 176" />
            </div>
          </div>
          <div class="frame-193-item">
            <div class="overlap-group-1">
              <div class="rectangle-175"></div>
              <div class="rectangle-174"></div>
              <img class="group-201" :src="group2012" alt="Group 201" />
              <div class="group-192 crimsonpro-mediumitalic-medium-white-22px">
                <p class="expertise-agile-sc">{{ expertiseAgileSc }}</p>
                <p class="development-advance" v-html="developmentAdvance"></p>
                <p class="projects-document-c">{{ projectsDocumentC }}</p>
              </div>
              <div class="software-engineering crimsonpro-semi-bold-cultured-pearl-30px">{{ softwareEngineering }}</div>
              <img class="rectangle-176" :src="rectangle1762" alt="Rectangle 176" />
            </div>
          </div>
          <div class="frame-193-item">
            <div class="overlap-group-1">
              <div class="rectangle-175"></div>
              <div class="rectangle-174"></div>
              <img class="group-201" :src="group2013" alt="Group 201" /><group192
                :specializationAiM="group192Props.specializationAiM"
                :toolsAndFrameworks="group192Props.toolsAndFrameworks"
                :projectsFakeNews="group192Props.projectsFakeNews"
              />
              <p class="artificial-intellige-1 crimsonpro-semi-bold-cultured-pearl-30px">{{ artificialIntellige }}</p>
              <img class="rectangle-176" :src="rectangle1763" alt="Rectangle 176" />
            </div>
          </div>
          <ui
            :group201="uI1Props.group201"
            :designAndTools="uI1Props.designAndTools"
            :rectangle176="uI1Props.rectangle176"
            :group192Props="uI1Props.group192Props"
          />
          <ui
            :group201="uI2Props.group201"
            :designAndTools="uI2Props.designAndTools"
            :rectangle176="uI2Props.rectangle176"
            :group192Props="uI2Props.group192Props"
          />
          <div class="frame-193-item">
            <div class="overlap-group-1">
              <div class="rectangle-175"></div>
              <div class="rectangle-174"></div>
              <img class="group-201" :src="group2014" alt="Group 201" />
              <div class="group-192-1 crimsonpro-mediumitalic-medium-white-22px">
                <p class="group-192-item">{{ expertiseAgileMet }}</p>
                <p class="group-192-item">{{ skillsProblemSolv }}</p>
                <p class="tools-jira-click-u">{{ toolsJiraClickU }}</p>
                <p class="group-192-item">{{ projectsAmazonBid }}</p>
              </div>
              <div class="project-management-and-business crimsonpro-semi-bold-cultured-pearl-30px">
                {{ projectManagementAndBusiness }}
              </div>
              <img class="rectangle-176-1" :src="rectangle1764" alt="Rectangle 176" />
            </div>
          </div>
        </div>
        <div class="certificates">
          <div class="overlap-group-2">
            <div class="certifications" id="certifications">{{ certifications }}</div>
            <img class="line-5" :src="line5" alt="Line 5" /><img class="line-6" :src="line6" alt="Line 6" />
          </div>
          <div class="flex-row-1">
            <img class="aws-prompt-engineering" :src="awsPromptEngineering" alt="AWS Prompt Engineering" /><img
              class="automation"
              :src="automation"
              alt="Automation"
            />
          </div>
          <div class="flex-row">
            <img class="html" :src="html" alt="HTML" /><img class="css" :src="css" alt="CSS" />
          </div>
          <div class="flex-row-2">
            <img class="java-niit" :src="javaNiit" alt="Java NIIT" /><img class="oracle" :src="oracle" alt="Oracle" />
          </div>
          <div class="flex-row">
            <img class="python" :src="python" alt="Python" /><img class="maths" :src="maths" alt="Maths" />
          </div>
        </div>
        <div class="frame-203">
          <div class="overlap-group-3">
            <img class="rectangle-140-1" :src="rectangle140" alt="Rectangle 140" />
            <div class="copyrights-3 ibmplexsans-normal-black-20px">
              <div class="maheswar">{{ maheswar }}</div>
              <img class="copyright-3" :src="copyright" alt="copyright" />
              <div class="number">{{ number }}</div>
            </div>
            <img class="up-1" :src="up" alt="Up" /><icons
              :linkedin="iconsProps.linkedin"
              :gmail="iconsProps.gmail"
              :figma="iconsProps.figma"
              :github="iconsProps.github"
              :facebook="iconsProps.facebook"
              :twitter="iconsProps.twitter"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Certifications from "./Certifications";
import ReturnToHompage from "./ReturnToHompage";
import Group192 from "./Group192";
import UI from "./UI";
import Icons from "./Icons";
export default {
  name: "Desktop2",
  components: {
    Certifications,
    ReturnToHompage,
    Group192,
    UI,
    Icons,
  },
  props: [
    "unnamed__1_RemovebgPreview1",
    "aBlendOfTechnical",
    "group2011",
    "languagesJavaJse",
    "developmentHtml5",
    "projectsWebsiteV",
    "mobileDevelopment",
    "databasesSqlRdbm",
    "programmingAndDevelopment",
    "rectangle1761",
    "group2012",
    "expertiseAgileSc",
    "developmentAdvance",
    "projectsDocumentC",
    "softwareEngineering",
    "rectangle1762",
    "group2013",
    "artificialIntellige",
    "rectangle1763",
    "group2014",
    "expertiseAgileMet",
    "skillsProblemSolv",
    "toolsJiraClickU",
    "projectsAmazonBid",
    "projectManagementAndBusiness",
    "rectangle1764",
    "certifications",
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
    "maheswar",
    "copyright",
    "number",
    "up",
    "certificationsProps",
    "group192Props",
    "uI1Props",
    "uI2Props",
    "iconsProps",
  ],
};
</script>

<style>
.desktop-2 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 5990px;
  width: 1440px;
}

.overlap-group6-1 {
  align-items: center;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(3, 1, 77, 0.9) 0%,
    rgb(0, 122, 255) 24.4%,
    rgb(16, 25, 58) 55.91%,
    rgba(217, 160, 91, 0.95) 78.87%,
    rgb(3, 0, 77) 100%
  );
  display: flex;
  flex-direction: column;
  min-height: 5990px;
  width: 1440px;
}

.homepage-header {
  align-items: center;
  background: linear-gradient(180deg, rgb(217, 160, 91) 35.56%, rgb(27, 38, 79) 72.17%);
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  gap: 781px;
  padding: 0 84px;
  width: 1440px;
}

.unnamed__1_-removebg-preview-1-3 {
  height: 60px;
  object-fit: cover;
  width: 63px;
}

.frame-211 {
  align-items: center;
  display: flex;
  gap: 60px;
  height: 30px;
  position: relative;
  width: 403px;
}

.a-blend-of-technical {
  color: var(--cultured-pearl);
  font-family: var(--font-family-source_serif_pro);
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 130px;
  min-height: 50px;
  min-width: 972px;
  text-shadow: 0px 4px 4px #00000040;
}

.frame-193 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 2752px;
  margin-right: 1px;
  margin-top: 132px;
  position: relative;
  width: 1223px;
}

.frame-193-item {
  align-items: flex-start;
  display: flex;
  margin-left: 2px;
  min-width: 1225px;
}

.overlap-group-1 {
  height: 417px;
  position: relative;
  width: 1223px;
}

.rectangle-175 {
  background-color: var(--black-4);
  border-radius: 10px;
  box-shadow: 4px 4px 4px #00000040;
  height: 404px;
  left: 13px;
  position: absolute;
  top: 13px;
  width: 1210px;
}

.rectangle-174 {
  background: linear-gradient(180deg, rgb(225.25, 195.06, 158.61) 0%, rgb(52.83, 139.42, 234.81) 100%);
  border-radius: 10px;
  height: 406px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1213px;
}

.group-201-1 {
  height: 35px;
  left: 59px;
  position: absolute;
  top: 330px;
  width: 583px;
}

.group-191 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 224px;
  left: 59px;
  position: absolute;
  top: 92px;
  width: 664px;
}

.group-191-item {
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -10px;
  width: 654px;
}

.group-191-item-1 {
  height: 48px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -10px;
  width: 654px;
}

.programming-and-development,
.software-engineering,
.artificial-intellige-1,
.project-management-and-business {
  left: 59px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-decoration: underline;
  top: 30px;
  white-space: nowrap;
}

.rectangle-176 {
  height: 350px;
  left: 804px;
  object-fit: cover;
  position: absolute;
  top: 28px;
  width: 350px;
}

.group-201 {
  height: 35px;
  left: 59px;
  position: absolute;
  top: 320px;
  width: 583px;
}

.group-192 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 172px;
  left: 59px;
  position: absolute;
  top: 92px;
  width: 660px;
}

.expertise-agile-sc {
  height: 48px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -6px;
  width: 654px;
}

.development-advance {
  height: 72px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -6px;
  width: 654px;
}

.projects-document-c {
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -6px;
  width: 654px;
}

.group-192-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 210px;
  left: 59px;
  position: absolute;
  top: 92px;
  width: 662px;
}

.group-192-item {
  height: 48px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -8px;
  width: 654px;
}

.tools-jira-click-u {
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -8px;
  width: 654px;
}

.rectangle-176-1 {
  height: 350px;
  left: 804px;
  position: absolute;
  top: 28px;
  width: 350px;
}

.certificates {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 2192px;
  margin-right: 17px;
  margin-top: 107px;
  width: 1207px;
}

.overlap-group-2 {
  height: 50px;
  position: relative;
  width: 246px;
}

.certifications {
  color: var(--white);
  font-family: var(--font-family-source_serif_pro);
  font-size: 40px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 246px;
}

.line-5 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 46px;
  width: 150px;
}

.line-6 {
  height: 4px;
  left: 160px;
  position: absolute;
  top: 46px;
  width: 86px;
}

.flex-row-1 {
  align-items: flex-start;
  display: flex;
  gap: 10px;
  margin-top: 43px;
  min-width: 1087px;
}

.aws-prompt-engineering,
.java-niit {
  height: 484px;
  width: 537px;
}

.automation,
.html,
.oracle {
  height: 484px;
  width: 540px;
}

.flex-row {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 10px;
  margin-top: 61px;
  min-width: 1070px;
}

.css {
  height: 484px;
  width: 520px;
}

.flex-row-2 {
  align-items: flex-start;
  display: flex;
  gap: 10px;
  margin-top: 61px;
  min-width: 1087px;
}

.python {
  height: 464px;
  width: 540px;
}

.maths {
  height: 464px;
  width: 520px;
}

.frame-203 {
  align-items: flex-start;
  display: flex;
  margin-top: 272px;
  width: 1440px;
}

.overlap-group-3 {
  height: 294px;
  position: relative;
  width: 1440px;
}

.rectangle-140-1 {
  height: 272px;
  left: 0;
  position: absolute;
  top: 22px;
  width: 1440px;
}

.copyrights-3 {
  align-items: center;
  display: flex;
  gap: 5px;
  justify-content: center;
  left: 630px;
  padding: 5px;
  position: absolute;
  top: 258px;
  width: 179px;
}

.maheswar {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -1px;
  margin-top: -1px;
  position: relative;
  text-decoration: underline;
  width: fit-content;
}

.copyright-3 {
  height: 20px;
  position: relative;
  width: 20px;
}

.number {
  letter-spacing: 0;
  line-height: normal;
  margin-right: -1px;
  margin-top: -1px;
  position: relative;
  text-decoration: underline;
  width: fit-content;
}

.up-1 {
  height: 67px;
  left: 682px;
  position: absolute;
  top: 0;
  width: 76px;
}
</style>
