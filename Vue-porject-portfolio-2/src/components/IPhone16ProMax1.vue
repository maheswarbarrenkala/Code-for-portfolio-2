<template>
  <div class="container-center-horizontal">
    <div class="iphone-16-pro-max-1 screen">
      <div class="overlap-group5-1">
        <div class="overlap-group3-1" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
          <div class="hello-im-maheswar-barrenkala timesnewroman-regular-normal-white-28px-2 animate-enter">
            <span class="timesnewroman-regular-normal-white-28px">{{ spanText1 }}</span
            ><span class="span1">{{ spanText2 }}</span
            ><span class="timesnewroman-regular-normal-white-28px">{{ spanText3 }}</span>
          </div>
          <p class="lead-solutions-archi timesnewroman-regular-normal-white-18px">{{ leadSolutionsArchi }}</p>
          <p class="full-stack-maestro valign-text-middle">
            <span
              ><span class="timesnewroman-bold-di-serria-16px">{{ spanText4 }}</span
              ><span class="timesnewroman-bold-white-16px">{{ spanText5 }}</span
              ><span class="timesnewroman-bold-di-serria-16px">{{ spanText6 }}</span
              ><span class="timesnewroman-bold-white-16px">{{ spanText7 }}</span
              ><span class="timesnewroman-bold-di-serria-16px">{{ spanText8 }}</span
              ><span class="timesnewroman-bold-white-16px">{{ spanText9 }}</span
              ><span class="span6">{{ spanText10 }}</span>
            </span>
          </p>
          <my-work :myWork="myWorkProps.myWork" :arrow8="myWorkProps.arrow8" />
        </div>
        <mobile-header2
          :unnamed__1_RemovebgPreview1="mobileHeader2Props.unnamed__1_RemovebgPreview1"
          :className="mobileHeader2Props.className"
        />
      </div>
      <div class="overlap-group4-1">
        <div class="mobile-background"></div>
        <div class="resume-section">
          <p class="want-to-have-look-at-my-resume">{{ wantToHaveLookAtMyResume }}</p>
          <img class="resume-doc" :src="resumeDoc" alt="resume doc" />
          <div class="overlap-group1-1">
            <download-pdf />
            <div class="overlap-group-5">
              <img class="union" :src="union" alt="Union" /><img class="designer-1" :src="designer1" alt="Designer 1" />
            </div>
          </div>
        </div>
        <div class="overlap-group2-1">
          <div class="contact">
            <div class="place sourceserifpro-normal-white-30px">{{ place }}</div>
            <div class="line-container">
              <img class="line-5-1" :src="line51" alt="Line 5" /><img class="line-6-1" :src="line61" alt="Line 6" />
            </div>
          </div>
          <div class="want-to-work-together">{{ wantToWorkTogether }}</div>
          <lets-connect-mobile :letsConnect="letsConnectMobileProps.letsConnect" />
          <div class="contact-me timesnewroman-regular-normal-white-22px">{{ contactMe }}</div>
          <saimaheswar0024gmailcom :saimaheswar0024GmailCom="saimaheswar0024gmailcomProps.saimaheswar0024GmailCom" />
          <maheswarbarrenkalagmailcom
            :maheswarBarrenkalaGmailCom="maheswarbarrenkalagmailcomProps.maheswarBarrenkalaGmailCom"
          />
          <div class="overlap-group-6">
            <img class="rectangle-140-2" :src="rectangle140" alt="Rectangle 140" /><frame183 />
            <copyrights />
            <a href="#homepage-section"><img class="up-2" :src="up" alt="Up" /></a>
          </div>
        </div>
        <div class="portfolio-section">
          <div class="portfolio">
            <div class="portfolio-1 sourceserifpro-normal-white-30px">{{ portfolio }}</div>
            <div class="line-container-1">
              <img class="line-5-2" :src="line52" alt="Line 5" /><img class="line-6-2" :src="line62" alt="Line 6" />
            </div>
          </div>
          <div class="frame-211-1">
            <full-stack
              :fullStack="fullStackProps.fullStack"
              :openLink_SvgrepoCom="fullStackProps.openLink_SvgrepoCom"
              :fullStackDevelopment="fullStackProps.fullStackDevelopment"
              :designingDevelopin="fullStackProps.designingDevelopin"
            />
            <uiux
              :uiUx1="uIUXProps.uiUx1"
              :openLink_SvgrepoCom="uIUXProps.openLink_SvgrepoCom"
              :uiUx2="uIUXProps.uiUx2"
              :craftingDigitalSol="uIUXProps.craftingDigitalSol"
            />
            <ai
              :ai="aIProps.ai"
              :openLink_SvgrepoCom="aIProps.openLink_SvgrepoCom"
              :artificialIntelligence="aIProps.artificialIntelligence"
              :revolutionizingTheFutureWithAi="aIProps.revolutionizingTheFutureWithAi"
            />
            <software-architecture
              :softwareArchitecture="softwareArchitectureProps.softwareArchitecture"
              :openLink_SvgrepoCom="softwareArchitectureProps.openLink_SvgrepoCom"
              :softwareCloudArchitecture="softwareArchitectureProps.softwareCloudArchitecture"
              :buildingTheBackbon="softwareArchitectureProps.buildingTheBackbon"
            />
            <management
              :management1="managementProps.management1"
              :openLink_SvgrepoCom="managementProps.openLink_SvgrepoCom"
              :management2="managementProps.management2"
              :drivingInnovationT="managementProps.drivingInnovationT"
            />
          </div>
        </div>
        <div class="skills-section">
          <div class="skills">
            <div class="skills-1 sourceserifpro-normal-white-30px">{{ skills }}</div>
            <div class="line-container-2">
              <img class="line-5-3" :src="line53" alt="Line 5" /><img class="line-6-3" :src="line63" alt="Line 6" />
            </div>
          </div>
          <div class="mobile-skills">
            <software-engineering
              :softwareEngineering="softwareEngineeringProps.softwareEngineering"
              :learnMore="softwareEngineeringProps.learnMore"
            />
            <programming
              :coding="programmingProps.coding"
              :programmingDevelopment="programmingProps.programmingDevelopment"
              :learnMore="programmingProps.learnMore"
            />
            <emerging-technology
              :q3Icons="emergingTechnologyProps.q3Icons"
              :emergingTechnology="emergingTechnologyProps.emergingTechnology"
              :learnMore="emergingTechnologyProps.learnMore"
            />
            <deisgn-and-tools
              :designToolsRulerPenPencil_SvgrepoCo="deisgnAndToolsProps.designToolsRulerPenPencil_SvgrepoCo"
              :designTools="deisgnAndToolsProps.designTools"
              :learnMore="deisgnAndToolsProps.learnMore"
            />
            <cloud
              :cloudComputing_SvgrepoCom="cloudProps.cloudComputing_SvgrepoCom"
              :cloudInfrastructure="cloudProps.cloudInfrastructure"
              :learnMore="cloudProps.learnMore"
            />
            <project-management
              :layer2="projectManagementProps.layer2"
              :projectManagementBusiness="projectManagementProps.projectManagementBusiness"
              :learnMore="projectManagementProps.learnMore"
            />
          </div>
        </div>
        <div class="about-section">
          <div class="about">
            <div class="about-1 sourceserifpro-normal-white-30px">{{ about }}</div>
            <div class="line-container-3">
              <img class="line-5-4" :src="line54" alt="Line 5" /><img class="line-6-4" :src="line64" alt="Line 6" />
            </div>
          </div>
          <div class="frame-190">
            <div class="performance">
              <group19 :overlapGroup="group19Props.overlapGroup" :frame16="group19Props.frame16" />
              <div class="performance-1 valign-text-middle timesnewroman-bold-white-26px">{{ performance }}</div>
              <p class="delivering-lightning crimsontext-normal-cultured-pearl-18px">{{ deliveringLightning }}</p>
            </div>
            <div class="frame-190-item">
              <group25
                :overlapGroup="group25Props.overlapGroup"
                :codeSnippet02_SvgrepoCom="group25Props.codeSnippet02_SvgrepoCom"
              />
              <div class="dynamic valign-text-middle timesnewroman-bold-white-26px">{{ dynamic }}</div>
              <p class="websites-dont-have crimsontext-normal-cultured-pearl-18px">{{ websitesDonTHave }}</p>
            </div>
            <div class="frame-190-item">
              <group122
                :vectorContainer="group122Props.vectorContainer"
                :vector2="group122Props.vector2"
                :vector3="group122Props.vector3"
              />
              <div class="artificial-intelligence valign-text-middle timesnewroman-bold-white-26px">
                {{ artificialIntelligence }}
              </div>
              <p class="developing-intellige crimsontext-normal-cultured-pearl-16px">{{ developingIntellige }}</p>
            </div>
            <div class="frame-190-item">
              <group21
                :overlapGroup="group21Props.overlapGroup"
                :responsiveDesignSymbol_SvgrepoCom="group21Props.responsiveDesignSymbol_SvgrepoCom"
              />
              <div class="responsive valign-text-middle timesnewroman-bold-white-26px">{{ responsive }}</div>
              <p class="building-websites-th crimsontext-normal-cultured-pearl-18px">{{ buildingWebsitesTh }}</p>
            </div>
            <div class="frame-190-item">
              <group24 :overlapGroup="group24Props.overlapGroup" :idea_SvgrepoCom="group24Props.idea_SvgrepoCom" />
              <div class="interactive valign-text-middle timesnewroman-bold-white-26px">{{ interactive }}</div>
              <p class="surname crimsontext-normal-cultured-pearl-18px">{{ surname }}</p>
            </div>
            <div class="frame-190-item">
              <group123 :overlapGroup="group123Props.overlapGroup" />
              <div class="cloud-computing valign-text-middle timesnewroman-bold-white-26px">{{ cloudComputing }}</div>
              <p class="leveraging-cloud-pla crimsontext-normal-cultured-pearl-16px">{{ leveragingCloudPla }}</p>
            </div>
            <div class="frame-190-item">
              <img class="group-124" :src="group124" alt="Group 124" />
              <div class="software-architect valign-text-middle timesnewroman-bold-white-26px">
                {{ softwareArchitect }}
              </div>
              <p class="crafting-robust-and crimsontext-normal-cultured-pearl-18px">{{ craftingRobustAnd }}</p>
            </div>
            <div class="frame-190-item">
              <group125
                :vectorContainer="group125Props.vectorContainer"
                :vector2="group125Props.vector2"
                :vector3="group125Props.vector3"
                :vector4="group125Props.vector4"
                :vector5="group125Props.vector5"
              />
              <div class="mobile-application valign-text-middle timesnewroman-bold-white-26px">
                {{ mobileApplication }}
              </div>
              <p class="designing-and-develo crimsontext-normal-cultured-pearl-18px">{{ designingAndDevelo }}</p>
            </div>
            <div class="frame-190-item">
              <group126
                :vectorContainer="group126Props.vectorContainer"
                :vector2="group126Props.vector2"
                :vector3="group126Props.vector3"
              />
              <div class="project-management valign-text-middle timesnewroman-bold-white-26px">
                {{ projectManagement }}
              </div>
              <p class="guiding-teams-to-ach crimsontext-normal-cultured-pearl-18px">{{ guidingTeamsToAch }}</p>
            </div>
            <div class="frame-190-item">
              <group127
                :vectorContainer="group127Props.vectorContainer"
                :vector2="group127Props.vector2"
                :vector3="group127Props.vector3"
                :vector4="group127Props.vector4"
                :vector5="group127Props.vector5"
                :vector6="group127Props.vector6"
              />
              <div class="product-design valign-text-middle timesnewroman-bold-white-26px">{{ productDesign }}</div>
              <p class="creating-innovative crimsontext-normal-cultured-pearl-18px">{{ creatingInnovative }}</p>
            </div>
          </div>
          <div class="frame-34">
            <img class="dp" :src="dp" alt="Dp" />
            <h1 class="whos-this-guy">{{ whosThisGuy }}</h1>
            <p class="im-a-tech-obsessed valign-text-middle timesnewroman-regular-normal-white-22px">
              <span
                ><span class="timesnewroman-regular-normal-tutu-22px">{{ spanText11 }}</span
                ><span class="span1-1">{{ spanText12 }}</span
                ><span class="span2">{{ spanText13 }}</span
                ><span class="timesnewroman-regular-normal-tutu-22px">{{ spanText14 }}</span>
              </span>
            </p>
            <p class="lets-create-somethi valign-text-middle">{{ letsCreateSomethi }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyWork from "./MyWork";
import MobileHeader2 from "./MobileHeader2";
import DownloadPdf from "./DownloadPdf";
import LetsConnectMobile from "./LetsConnectMobile";
import Saimaheswar0024gmailcom from "./Saimaheswar0024gmailcom";
import Maheswarbarrenkalagmailcom from "./Maheswarbarrenkalagmailcom";
import Frame183 from "./Frame183";
import Copyrights from "./Copyrights";
import FullStack from "./FullStack";
import UIUX from "./UIUX";
import AI from "./AI";
import SoftwareArchitecture from "./SoftwareArchitecture";
import Management from "./Management";
import SoftwareEngineering from "./SoftwareEngineering";
import Programming from "./Programming";
import EmergingTechnology from "./EmergingTechnology";
import DeisgnAndTools from "./DeisgnAndTools";
import Cloud from "./Cloud";
import ProjectManagement from "./ProjectManagement";
import Group19 from "./Group19";
import Group25 from "./Group25";
import Group122 from "./Group122";
import Group21 from "./Group21";
import Group24 from "./Group24";
import Group123 from "./Group123";
import Group125 from "./Group125";
import Group126 from "./Group126";
import Group127 from "./Group127";
export default {
  name: "IPhone16ProMax1",
  components: {
    MyWork,
    MobileHeader2,
    DownloadPdf,
    LetsConnectMobile,
    Saimaheswar0024gmailcom,
    Maheswarbarrenkalagmailcom,
    Frame183,
    Copyrights,
    FullStack,
    UIUX,
    AI,
    SoftwareArchitecture,
    Management,
    SoftwareEngineering,
    Programming,
    EmergingTechnology,
    DeisgnAndTools,
    Cloud,
    ProjectManagement,
    Group19,
    Group25,
    Group122,
    Group21,
    Group24,
    Group123,
    Group125,
    Group126,
    Group127,
  },
  props: [
    "overlapGroup3",
    "spanText1",
    "spanText2",
    "spanText3",
    "leadSolutionsArchi",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "wantToHaveLookAtMyResume",
    "resumeDoc",
    "union",
    "designer1",
    "place",
    "line51",
    "line61",
    "wantToWorkTogether",
    "contactMe",
    "rectangle140",
    "up",
    "portfolio",
    "line52",
    "line62",
    "skills",
    "line53",
    "line63",
    "about",
    "line54",
    "line64",
    "performance",
    "deliveringLightning",
    "dynamic",
    "websitesDonTHave",
    "artificialIntelligence",
    "developingIntellige",
    "responsive",
    "buildingWebsitesTh",
    "interactive",
    "surname",
    "cloudComputing",
    "leveragingCloudPla",
    "group124",
    "softwareArchitect",
    "craftingRobustAnd",
    "mobileApplication",
    "designingAndDevelo",
    "projectManagement",
    "guidingTeamsToAch",
    "productDesign",
    "creatingInnovative",
    "dp",
    "whosThisGuy",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "letsCreateSomethi",
    "myWorkProps",
    "mobileHeader2Props",
    "letsConnectMobileProps",
    "saimaheswar0024gmailcomProps",
    "maheswarbarrenkalagmailcomProps",
    "fullStackProps",
    "uIUXProps",
    "aIProps",
    "softwareArchitectureProps",
    "managementProps",
    "softwareEngineeringProps",
    "programmingProps",
    "emergingTechnologyProps",
    "deisgnAndToolsProps",
    "cloudProps",
    "projectManagementProps",
    "group19Props",
    "group25Props",
    "group122Props",
    "group21Props",
    "group24Props",
    "group123Props",
    "group125Props",
    "group126Props",
    "group127Props",
  ],
};
</script>

<style>
.iphone-16-pro-max-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 9551px;
  overflow: hidden;
  width: 440px;
}

.overlap-group5-1 {
  height: 785px;
  position: relative;
  width: 446px;
}

.overlap-group3-1 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 787px;
  padding: 89px 19px;
  position: absolute;
  top: 0;
  width: 440px;
}

.hello-im-maheswar-barrenkala {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: normal;
  min-height: 32px;
  min-width: 400px;
  opacity: 0;
  white-space: nowrap;
}

.span1 {
  color: var(--violet-red);
  font-family: var(--font-family-times_new_roman-bold);
  font-size: var(--font-size-xxl);
  font-weight: 700;
}

.hello-im-maheswar-barrenkala.animate-enter {
  animation: animate-enter-frames 0.2s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.lead-solutions-archi {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  margin-top: 14px;
  min-height: 42px;
  width: 227px;
}

.full-stack-maestro {
  align-self: flex-end;
  color: transparent;
  font-family: var(--font-family-times_new_roman-bold);
  font-size: var(--font-size-xxs);
  font-weight: 400;
  height: 108px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 2px;
  margin-top: 88px;
  text-align: right;
  width: 252px;
}

.span6 {
  color: var(--white);
  font-family: var(--font-family-times_new_roman-regular);
}

.overlap-group4-1 {
  height: 8766px;
  position: relative;
  width: 444px;
}

.mobile-background {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(3, 1, 77) 0%,
    rgb(0, 122, 255) 24.4%,
    rgb(16, 25, 58) 55.91%,
    rgba(217, 160, 91, 0.95) 78.87%,
    rgb(3, 0, 77) 100%
  );
  box-shadow: 0px 4px 4px #00000040;
  height: 7544px;
  left: 0;
  position: absolute;
  top: 0;
  width: 440px;
}

.resume-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 748px;
  left: 0;
  position: absolute;
  top: 7173px;
  width: 440px;
}

.want-to-have-look-at-my-resume {
  color: var(--white);
  font-family: var(--font-family-figma_hand-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1px;
  margin-top: -1px;
  min-height: 60px;
  text-align: center;
  width: 371px;
}

.resume-doc {
  height: 114px;
  margin-top: 31px;
  width: 114px;
}

.overlap-group1-1 {
  height: 506px;
  margin-top: 30px;
  position: relative;
  width: 440px;
}

.overlap-group-5 {
  height: 505px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 440px;
}

.union {
  height: 220px;
  left: 300px;
  position: absolute;
  top: 0;
  width: 140px;
}

.designer-1 {
  height: 372px;
  left: 0;
  position: absolute;
  top: 133px;
  width: 440px;
}

.overlap-group2-1 {
  align-items: center;
  background-color: #030245;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 853px;
  position: absolute;
  top: 7913px;
  width: 440px;
}

.contact {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-left: 1px;
  margin-top: 40px;
  min-height: 38px;
  width: 105px;
}

.place {
  letter-spacing: 0;
  line-height: normal;
  min-height: 32px;
  text-align: center;
  white-space: nowrap;
  width: 103px;
}

.line-container {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 103px;
}

.line-5-1 {
  height: 3px;
  width: 65px;
}

.line-6-1 {
  align-self: flex-end;
  height: 3px;
  width: 30px;
}

.want-to-work-together {
  color: var(--white);
  font-family: var(--font-family-figma_hand-regular);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1px;
  margin-top: 33px;
  min-height: 28px;
  min-width: 265px;
  text-align: center;
}

.contact-me {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(225.25, 195.06, 158.61) 0%, rgb(52.83, 139.42, 234.81) 100%);
  background-clip: text;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 126px;
  min-height: 25px;
  min-width: 104px;
  text-align: center;
  text-decoration: underline;
  text-fill-color: transparent;
  white-space: nowrap;
}

.overlap-group-6 {
  height: 247px;
  margin-top: 162px;
  position: relative;
  width: 440px;
}

.rectangle-140-2 {
  height: 226px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 440px;
}

.up-2 {
  cursor: pointer;
  height: 63px;
  left: 189px;
  position: absolute;
  top: 0;
  width: 63px;
}

.portfolio-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 45px;
  height: 1721px;
  left: 93px;
  position: absolute;
  top: 5345px;
  width: 255px;
}

.portfolio {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 1px;
  min-height: 36px;
  width: 120px;
}

.portfolio-1,
.skills-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 29px;
  white-space: nowrap;
}

.line-container-1 {
  align-items: flex-start;
  display: flex;
  gap: 9px;
  min-width: 117px;
}

.line-5-2 {
  height: 3px;
  width: 70px;
}

.line-6-2 {
  height: 3px;
  width: 38px;
}

.frame-211-1 {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 35px 180px;
  height: 1640px;
  justify-content: center;
  position: relative;
  width: 255px;
}

.skills-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 45px;
  height: 1337px;
  left: 92px;
  position: absolute;
  top: 3946px;
  width: 263px;
}

.skills {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: -5px;
  min-height: 37px;
  width: 74px;
}

.line-container-2 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  min-width: 71px;
}

.line-5-3 {
  height: 3px;
  width: 40px;
}

.line-6-3 {
  align-self: flex-end;
  height: 3px;
  width: 25px;
}

.mobile-skills {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 36.2px;
  height: 1255.2px;
  position: relative;
  width: 263px;
}

.about-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 3871px;
  left: 0;
  position: absolute;
  top: 46px;
  width: 440px;
}

.about {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 3px;
  min-height: 36px;
  width: 83px;
}

.about-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 28px;
  white-space: nowrap;
}

.line-container-3 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  min-width: 81px;
}

.line-5-4 {
  height: 3px;
  width: 50px;
}

.line-6-4 {
  height: 3px;
  width: 25px;
}

.frame-190 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 15px 40px;
  height: 2965px;
  justify-content: center;
  position: relative;
  width: 440px;
}

.performance {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 283px;
  justify-content: flex-end;
  position: relative;
  width: 269px;
}

.performance-1,
.dynamic,
.artificial-intelligence,
.responsive,
.interactive,
.cloud-computing,
.project-management,
.product-design {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.delivering-lightning {
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
}

.frame-190-item {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 283px;
  justify-content: flex-end;
  position: relative;
  width: 238px;
}

.websites-dont-have {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 235px;
}

.developing-intellige,
.building-websites-th,
.surname,
.leveraging-cloud-pla,
.crafting-robust-and,
.designing-and-develo,
.creating-innovative {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 238px;
}

.group-124 {
  height: 163.92px;
  position: relative;
  width: 166.02px;
}

.software-architect {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 210.66px;
}

.mobile-application {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 216.73px;
}

.guiding-teams-to-ach {
  height: 46px;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 237.87px;
}

.frame-34 {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 35px 274px;
  height: 870px;
  justify-content: center;
  padding: 40px 0px;
  position: relative;
  width: 440px;
}

.dp {
  height: 400px;
  object-fit: cover;
  position: relative;
  width: 355.6px;
}

.whos-this-guy {
  color: var(--white);
  font-family: var(--font-family-times_new_roman-bold);
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.im-a-tech-obsessed {
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 385px;
}

.span1-1 {
  color: var(--black);
  font-family: var(--font-family-times_new_roman-bolditalic);
  font-size: var(--font-size-m);
  font-style: italic;
  font-weight: 700;
}

.span2 {
  color: var(--violet-red);
  font-family: var(--font-family-times_new_roman-bolditalic);
  font-size: var(--font-size-m);
  font-style: italic;
  font-weight: 700;
}

.lets-create-somethi {
  color: var(--di-serria-2);
  font-family: var(--font-family-times_new_roman-bolditalic);
  font-size: 30px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
  width: 438px;
}

@keyframes animate-enter-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
