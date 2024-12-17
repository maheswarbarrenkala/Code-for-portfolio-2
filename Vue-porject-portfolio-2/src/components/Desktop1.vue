<template>
  <div class="container-center-horizontal">
    <div class="desktop-1 screen">
      <div class="homepage">
        <div class="overlap-group3-3" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
          <div class="homepage-header-2">
            <img
              class="unnamed__1_-removebg-preview-1-5"
              :src="unnamed__1_RemovebgPreview11"
              alt="unnamed__1_-removebg-preview 1"
            />
            <div class="frame-189">
              <home />
              <about />
              <skills />
              <portfolio />
              <resume />
              <contact />
            </div>
          </div>
          <div class="flex-row-4">
            <div class="flex-col">
              <h1 class="hello-im-maheswar-barrenkala-1 animate-enter3">
                <span class="crimsontext-normal-white-42px">{{ spanText1 }}</span
                ><span class="span1-2">{{ spanText2 }}</span
                ><span class="crimsontext-normal-white-42px">{{ spanText3 }}</span>
              </h1>
              <p class="lead-solutions-archi-1 timesnewroman-regular-normal-white-28px animate-enter4">
                {{ leadSolutionsArchi }}
              </p>
              <my-work2 :myWork="myWork2Props.myWork" :arrow8="myWork2Props.arrow8" />
            </div>
            <p class="full-stack-maestro-1 valign-text-middle animate-enter5">
              <span
                ><span class="timesnewroman-bold-di-serria-24px">{{ spanText4 }}</span
                ><span class="timesnewroman-bold-white-24px">{{ spanText5 }}</span
                ><span class="timesnewroman-bold-di-serria-24px">{{ spanText6 }}</span
                ><span class="timesnewroman-bold-white-24px">{{ spanText7 }}</span
                ><span class="timesnewroman-bold-di-serria-24px">{{ spanText8 }}</span
                ><span class="span5">{{ spanText9 }}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <header class="header">
        <div class="overlap-group2-3">
          <img class="line-7" :src="line7" alt="Line 7" />
          <div class="frame-189-1">
            <home :className="homeProps.className" />
            <about />
            <skills />
            <portfolio />
            <resume />
            <contact :className="contactProps.className" />
          </div>
        </div>
        <img class="line-8" :src="line8" alt="Line 8" /><img class="line-10" :src="line10" alt="Line 10" /><img
          class="unnamed__1_-removebg-preview-1-6"
          :src="unnamed__1_RemovebgPreview12"
          alt="unnamed__1_-removebg-preview 1"
        />
      </header>
      <div class="overlap-group4-3">
        <img class="homepage-background" id="homepage-background" :src="homepageBackground" alt="Homepage background" />
        <div class="resume">
          <div class="overlap-group-21">
            <div class="rectangle-163" id="rectangle-163"></div>
            <img class="designer-1-1" :src="designer1" alt="Designer 1" />
            <div class="group-193"><img class="union-1" :src="union" alt="Union" /></div>
            <div class="frame-212-1">
              <p class="want-to-have-look-at-my-resume-1">{{ wantToHaveLookAtMyResume }}</p>
              <img class="resume-doc-1" :src="resumeDoc" alt="resume doc" /><download-pdf
                :className="downloadPdfProps.className"
              />
            </div>
          </div>
        </div>
        <div class="contact-information-end-page">
          <div class="overlap-group-22">
            <div class="place-1 sourceserifpro-normal-white-38px">{{ place }}</div>
            <img class="line-5-6" :src="line51" alt="Line 5" /><img class="line-6-6" :src="line61" alt="Line 6" />
          </div>
          <div class="flex-col-1">
            <div class="want-to-work-together-1">{{ wantToWorkTogether }}</div>
            <lets-connect :letsConnect="letsConnectProps.letsConnect" />
            <div class="contact-me-1">{{ contactMe }}</div>
            <saimaheswar0024gmailcom2
              :saimaheswar0024GmailCom="saimaheswar0024gmailcom2Props.saimaheswar0024GmailCom"
            />
            <maheswarbarrenkalagmailcom2
              :maheswarBarrenkalaGmailCom="maheswarbarrenkalagmailcom2Props.maheswarBarrenkalaGmailCom"
            />
          </div>
        </div>
        <div class="buttom">
          <div class="overlap-group1-3">
            <img class="rectangle-140-5" :src="rectangle140" alt="Rectangle 140" />
            <div class="copyrights-5 ibmplexsans-semi-bold-black-20px">
              <div class="maheswar-2">{{ maheswar }}</div>
              <img class="copyright-5" :src="copyright" alt="copyright" />
              <div class="number-2">{{ number }}</div>
            </div>
            <icons
              :linkedin="iconsProps.linkedin"
              :gmail="iconsProps.gmail"
              :figma="iconsProps.figma"
              :github="iconsProps.github"
              :facebook="iconsProps.facebook"
              :twitter="iconsProps.twitter"
              :className="iconsProps.className"
            />
            <img class="up-5" :src="up" alt="Up" />
          </div>
        </div>
        <div class="portfolio-2" id="portfolio">
          <div class="overlap-group1-4">
            <div class="portfolio-3 sourceserifpro-normal-white-38px">{{ portfolio }}</div>
            <img class="line-5-7" :src="line52" alt="Line 5" /><img class="line-6-7" :src="line62" alt="Line 6" />
          </div>
          <div class="flex-col-2">
            <full-stack2
              :fullStack="fullStack2Props.fullStack"
              :fullStackDevelopment="fullStack2Props.fullStackDevelopment"
              :designingDevelopin="fullStack2Props.designingDevelopin"
              :openLink_SvgrepoCom="fullStack2Props.openLink_SvgrepoCom"
            />
            <ai2
              :ai="aI2Props.ai"
              :artificialIntelligence="aI2Props.artificialIntelligence"
              :revolutionizingTheFutureWithAi="aI2Props.revolutionizingTheFutureWithAi"
              :openLink_SvgrepoCom="aI2Props.openLink_SvgrepoCom"
            />
            <management2
              :management1="management2Props.management1"
              :management2="management2Props.management2"
              :drivingInnovationT="management2Props.drivingInnovationT"
              :openLink_SvgrepoCom="management2Props.openLink_SvgrepoCom"
            />
          </div>
          <div class="flex-col-3">
            <uiux2
              :uiUx1="uIUX2Props.uiUx1"
              :uiUx2="uIUX2Props.uiUx2"
              :craftingDigitalSol="uIUX2Props.craftingDigitalSol"
              :openLink_SvgrepoCom="uIUX2Props.openLink_SvgrepoCom"
            />
            <software-architecture2
              :softwareArchitecture="softwareArchitecture2Props.softwareArchitecture"
              :softwareCloudArchitecture="softwareArchitecture2Props.softwareCloudArchitecture"
              :buildingTheBackbon="softwareArchitecture2Props.buildingTheBackbon"
              :openLink_SvgrepoCom="softwareArchitecture2Props.openLink_SvgrepoCom"
            />
          </div>
        </div>
        <div class="skill" id="skill">
          <div class="skills-3">
            <div class="overlap-group-23">
              <div class="skills-4 sourceserifpro-normal-white-38px">{{ skills }}</div>
              <img class="line-5-8" :src="line53" alt="Line 5" /><img class="line-6-8" :src="line63" alt="Line 6" />
            </div>
          </div>
          <div class="frame-213">
            <skills2
              :softwareEngineering2Props="skills2Props.softwareEngineering2Props"
              :programming2Props="skills2Props.programming2Props"
              :emergingTechnology2Props="skills2Props.emergingTechnology2Props"
              :deisgnAndTools2Props="skills2Props.deisgnAndTools2Props"
              :cloud2Props="skills2Props.cloud2Props"
              :projectManagement2Props="skills2Props.projectManagement2Props"
            />
          </div>
        </div>
        <div class="about-section-1">
          <div class="flex-row-5">
            <div class="about-2">
              <div class="overlap-group1-5">
                <div class="about-3 sourceserifpro-normal-white-38px">{{ about }}</div>
                <img class="line-5-9" :src="line54" alt="Line 5" /><img class="line-6-9" :src="line64" alt="Line 6" />
              </div>
            </div>
            <div class="frame-190-1">
              <div class="flex-row-6">
                <div class="performance-2">
                  <group19
                    :overlapGroup="group19Props.overlapGroup"
                    :frame16="group19Props.frame16"
                    :className="group19Props.className"
                  />
                  <div class="performance-3 valign-text-middle timesnewroman-bold-white-26px">{{ performance }}</div>
                  <p class="delivering-lightning-1 crimsontext-normal-cultured-pearl-18px">{{ deliveringLightning }}</p>
                </div>
                <div class="dynamic-1">
                  <group25
                    :overlapGroup="group25Props.overlapGroup"
                    :codeSnippet02_SvgrepoCom="group25Props.codeSnippet02_SvgrepoCom"
                    :className="group25Props.className"
                  />
                  <div class="dynamic-2 valign-text-middle timesnewroman-bold-white-26px">{{ dynamic }}</div>
                  <p class="websites-dont-have-1 crimsontext-normal-cultured-pearl-18px">{{ websitesDonTHave }}</p>
                </div>
              </div>
              <div class="flex-row-3">
                <div class="ai-2">
                  <group122
                    :vectorContainer="group122Props.vectorContainer"
                    :vector2="group122Props.vector2"
                    :vector3="group122Props.vector3"
                    :className="group122Props.className"
                  />
                  <div class="artificial-intelligence-3 valign-text-middle timesnewroman-bold-white-26px">
                    {{ artificialIntelligence }}
                  </div>
                  <p class="ing crimsontext-normal-cultured-pearl-16px">{{ developingIntellige }}</p>
                </div>
                <div class="responsive-1">
                  <group21
                    :overlapGroup="group21Props.overlapGroup"
                    :responsiveDesignSymbol_SvgrepoCom="group21Props.responsiveDesignSymbol_SvgrepoCom"
                    :className="group21Props.className"
                  />
                  <div class="responsive-2 valign-text-middle timesnewroman-bold-white-26px">{{ responsive }}</div>
                  <p class="building-websites-th-1 crimsontext-normal-cultured-pearl-18px">{{ buildingWebsitesTh }}</p>
                </div>
                <div class="interactive-1">
                  <group24
                    :overlapGroup="group24Props.overlapGroup"
                    :idea_SvgrepoCom="group24Props.idea_SvgrepoCom"
                    :className="group24Props.className"
                  />
                  <div class="interactive-2 valign-text-middle timesnewroman-bold-white-26px">{{ interactive }}</div>
                  <p class="surname-1 crimsontext-normal-cultured-pearl-18px">{{ surname }}</p>
                </div>
              </div>
              <div class="flex-row-3">
                <div class="cloud-computing-1">
                  <group123 :overlapGroup="group123Props.overlapGroup" :className="group123Props.className" />
                  <div class="cloud-computing-2 valign-text-middle timesnewroman-bold-white-26px">
                    {{ cloudComputing }}
                  </div>
                  <p class="ing crimsontext-normal-cultured-pearl-16px">{{ leveragingCloudPla }}</p>
                </div>
                <div class="software-architecture-1">
                  <img class="group-124-1" :src="group124" alt="Group 124" />
                  <div class="software-architect-1 valign-text-middle timesnewroman-bold-white-26px">
                    {{ softwareArchitect }}
                  </div>
                  <p class="crafting-robust-and-1 crimsontext-normal-cultured-pearl-18px">{{ craftingRobustAnd }}</p>
                </div>
                <div class="mobile-application-1">
                  <group125
                    :vectorContainer="group125Props.vectorContainer"
                    :vector2="group125Props.vector2"
                    :vector3="group125Props.vector3"
                    :vector4="group125Props.vector4"
                    :vector5="group125Props.vector5"
                    :className="group125Props.className"
                  />
                  <div class="mobile-application-2 valign-text-middle timesnewroman-bold-white-26px">
                    {{ mobileApplication }}
                  </div>
                  <p class="designing-and-develo-1 crimsontext-normal-cultured-pearl-18px">{{ designingAndDevelo }}</p>
                </div>
              </div>
              <div class="flex-row-7">
                <div class="project-mangament">
                  <group126
                    :vectorContainer="group126Props.vectorContainer"
                    :vector2="group126Props.vector2"
                    :vector3="group126Props.vector3"
                    :className="group126Props.className"
                  />
                  <div class="project-management-3 valign-text-middle timesnewroman-bold-white-26px">
                    {{ projectManagement }}
                  </div>
                  <p class="guiding-teams-to-ach-1 crimsontext-normal-cultured-pearl-18px">{{ guidingTeamsToAch }}</p>
                </div>
                <div class="product-design-2">
                  <group127
                    :vectorContainer="group127Props.vectorContainer"
                    :vector2="group127Props.vector2"
                    :vector3="group127Props.vector3"
                    :vector4="group127Props.vector4"
                    :vector5="group127Props.vector5"
                    :vector6="group127Props.vector6"
                    :className="group127Props.className"
                  />
                  <div class="product-design-3 valign-text-middle timesnewroman-bold-white-26px">
                    {{ productDesign }}
                  </div>
                  <p class="creating-innovative-1 crimsontext-normal-cultured-pearl-18px">{{ creatingInnovative }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="frame-34-1">
            <img class="dp-1" :src="dp" alt="Dp" />
            <div class="flex-col-4">
              <div class="whos-this-guy-1">{{ whosThisGuy }}</div>
              <p class="im-a-tech-obsessed-1 valign-text-middle timesnewroman-regular-normal-white-28px-2">
                <span
                  ><span class="timesnewroman-regular-normal-tutu-28px">{{ spanText10 }}</span
                  ><span class="span1-3">{{ spanText11 }}</span
                  ><span class="span2-1">{{ spanText12 }}</span
                  ><span class="timesnewroman-regular-normal-tutu-28px">{{ spanText13 }}</span>
                </span>
              </p>
              <p class="lets-create-something-amazing-together valign-text-middle">
                {{ letsCreateSomethingAmazingTogether }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import MyWork2 from "./MyWork2";
import DownloadPdf from "./DownloadPdf";
import LetsConnect from "./LetsConnect";
import Saimaheswar0024gmailcom2 from "./Saimaheswar0024gmailcom2";
import Maheswarbarrenkalagmailcom2 from "./Maheswarbarrenkalagmailcom2";
import Icons from "./Icons";
import FullStack2 from "./FullStack2";
import AI2 from "./AI2";
import Management2 from "./Management2";
import UIUX2 from "./UIUX2";
import SoftwareArchitecture2 from "./SoftwareArchitecture2";
import Skills2 from "./Skills2";
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
  name: "Desktop1",
  components: {
    Home,
    About,
    Skills,
    Portfolio,
    Resume,
    Contact,
    MyWork2,
    DownloadPdf,
    LetsConnect,
    Saimaheswar0024gmailcom2,
    Maheswarbarrenkalagmailcom2,
    Icons,
    FullStack2,
    AI2,
    Management2,
    UIUX2,
    SoftwareArchitecture2,
    Skills2,
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
    "unnamed__1_RemovebgPreview11",
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
    "line7",
    "line8",
    "line10",
    "unnamed__1_RemovebgPreview12",
    "homepageBackground",
    "designer1",
    "union",
    "wantToHaveLookAtMyResume",
    "resumeDoc",
    "place",
    "line51",
    "line61",
    "wantToWorkTogether",
    "contactMe",
    "rectangle140",
    "maheswar",
    "copyright",
    "number",
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
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "letsCreateSomethingAmazingTogether",
    "myWork2Props",
    "homeProps",
    "contactProps",
    "downloadPdfProps",
    "letsConnectProps",
    "saimaheswar0024gmailcom2Props",
    "maheswarbarrenkalagmailcom2Props",
    "iconsProps",
    "fullStack2Props",
    "aI2Props",
    "management2Props",
    "uIUX2Props",
    "softwareArchitecture2Props",
    "skills2Props",
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
.desktop-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 7383px;
  overflow: hidden;
  width: 1440px;
}

.homepage {
  align-items: flex-start;
  display: flex;
  height: 900px;
  min-width: 1446px;
}

.overlap-group3-3 {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 118px;
  min-height: 900px;
  width: 1440px;
}

.homepage-header-2 {
  align-items: center;
  display: flex;
  gap: 500px;
  justify-content: flex-end;
  min-width: 1440px;
  padding: 0 52px;
}

.unnamed__1_-removebg-preview-1-5 {
  height: 80px;
  object-fit: cover;
  width: 80px;
}

.frame-189 {
  align-items: center;
  display: inline-flex;
  gap: 30px;
  margin-bottom: 1px;
  padding: 0px 37px;
  position: relative;
}

.flex-row-4 {
  align-items: flex-start;
  display: flex;
  gap: 280px;
  height: 375px;
  margin-left: 22px;
  min-width: 1240px;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 356px;
  position: relative;
  width: 563px;
}

.hello-im-maheswar-barrenkala-1 {
  color: transparent;
  font-family: var(--font-family-crimson_text);
  font-size: 42px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  min-height: 55px;
  opacity: 0;
}

.span1-2 {
  color: var(--violet-red);
  font-family: var(--font-family-crimson_text-semibold);
  font-weight: 600;
}

.hello-im-maheswar-barrenkala-1.animate-enter3 {
  animation: animate-enter3-frames 0.2s ease-in 0s 1 normal forwards;
  opacity: 0;
}

.lead-solutions-archi-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 25px;
  min-height: 64px;
  opacity: 0;
  width: 423px;
}

.lead-solutions-archi-1.animate-enter4 {
  animation: animate-enter4-frames 0.2s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.full-stack-maestro-1 {
  align-self: flex-end;
  color: transparent;
  font-family: var(--font-family-times_new_roman-bold);
  font-size: var(--font-size-l);
  font-weight: 400;
  height: 179px;
  letter-spacing: 0;
  line-height: normal;
  opacity: 0;
  text-align: right;
  width: 397px;
}

.span5 {
  color: var(--white);
  font-family: var(--font-family-times_new_roman-regular);
}

.full-stack-maestro-1.animate-enter5 {
  animation: animate-enter5-frames 0.2s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.header {
  align-items: flex-end;
  background: linear-gradient(180deg, rgb(27, 38, 79) 27.4%, rgba(217, 160, 91, 0.95) 80.95%);
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  justify-content: flex-start;
  width: 1440px;
}

.overlap-group2-3 {
  height: 58px;
  position: relative;
  width: 799px;
}

.line-7 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 54px;
  width: 799px;
}

.frame-189-1 {
  align-items: flex-start;
  display: flex;
  gap: 35px;
  height: 56px;
  justify-content: center;
  left: 1px;
  padding: 10px 50px;
  position: absolute;
  top: 0;
  width: 730px;
}

.line-8 {
  height: 4px;
  margin-left: 35px;
  width: 200px;
}

.line-10 {
  height: 4px;
  margin-left: 36px;
  width: 200px;
}

.unnamed__1_-removebg-preview-1-6 {
  height: 60px;
  margin-left: 80px;
  object-fit: cover;
  width: 70px;
}

.overlap-group4-3 {
  height: 6424px;
  margin-left: -2px;
  position: relative;
  width: 1706px;
}

.homepage-background {
  height: 4782px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 1440px;
}

.resume {
  align-items: flex-start;
  display: flex;
  height: 1006px;
  left: 2px;
  position: absolute;
  top: 4753px;
  width: 1704px;
}

.overlap-group-21 {
  height: 1006px;
  position: relative;
  width: 1704px;
}

.rectangle-163 {
  background-color: #03004d;
  height: 700px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.designer-1-1 {
  height: 512px;
  left: 35px;
  position: absolute;
  top: 76px;
  width: 626px;
}

.group-193 {
  box-shadow: inset -12px 50px 50px #03004d80;
  display: flex;
  height: 641px;
  left: 954px;
  position: absolute;
  top: 365px;
  width: 750px;
}

.union-1 {
  height: 641px;
  width: 486px;
}

.frame-212-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  left: 802px;
  position: absolute;
  top: 180px;
  width: 489px;
}

.want-to-have-look-at-my-resume-1 {
  align-self: stretch;
  color: var(--white);
  font-family: var(--font-family-figma_hand-regular);
  font-size: var(--font-size-xl);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
}

.resume-doc-1 {
  height: 114px;
  position: relative;
  width: 114px;
}

.contact-information-end-page {
  align-items: flex-start;
  background: linear-gradient(180deg, rgb(3, 0, 77) 0%, rgb(1, 10, 39) 100%);
  display: flex;
  gap: 228px;
  height: 971px;
  left: 2px;
  padding: 110px 150px;
  position: absolute;
  top: 5453px;
  width: 1440px;
}

.overlap-group-22 {
  height: 48px;
  margin-top: 165px;
  position: relative;
  width: 131px;
}

.place-1 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
}

.line-5-6 {
  height: 4px;
  left: 2px;
  position: absolute;
  top: 42px;
  width: 80px;
}

.line-6-6 {
  height: 4px;
  left: 96px;
  position: absolute;
  top: 42px;
  width: 35px;
}

.flex-col-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 360px;
  position: relative;
  width: 423px;
}

.want-to-work-together-1 {
  color: var(--white);
  font-family: var(--font-family-figma_hand-regular);
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  min-height: 44px;
  min-width: 423px;
  text-align: center;
}

.contact-me-1 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(180deg, rgb(225.25, 195.06, 158.61) 0%, rgb(52.83, 139.42, 234.81) 100%);
  background-clip: text;
  color: transparent;
  font-family: var(--font-family-times_new_roman-regular);
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 2px;
  margin-top: 102px;
  min-height: 37px;
  min-width: 151px;
  text-align: center;
  text-decoration: underline;
  text-fill-color: transparent;
  white-space: nowrap;
}

.buttom {
  align-items: flex-start;
  display: flex;
  height: 294px;
  left: 2px;
  position: absolute;
  top: 6130px;
  width: 1440px;
}

.overlap-group1-3 {
  height: 293px;
  position: relative;
  width: 1440px;
}

.rectangle-140-5 {
  height: 272px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 1440px;
}

.copyrights-5 {
  align-items: center;
  display: flex;
  gap: 5px;
  justify-content: center;
  left: 630px;
  padding: 5px;
  position: absolute;
  top: 257px;
  width: 179px;
}

.maheswar-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: -2.5px;
  margin-top: -1px;
  position: relative;
  text-decoration: underline;
  width: fit-content;
}

.copyright-5 {
  height: 20px;
  position: relative;
  width: 20px;
}

.number-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-right: -2.5px;
  margin-top: -1px;
  position: relative;
  text-decoration: underline;
  width: fit-content;
}

.up-5 {
  height: 67px;
  left: 682px;
  position: absolute;
  top: 0;
  width: 76px;
}

.portfolio-2 {
  align-items: flex-start;
  display: flex;
  height: 1229px;
  left: 2px;
  min-width: 1440px;
  padding: 31px 150px;
  position: absolute;
  top: 3524px;
}

.overlap-group1-4 {
  height: 48px;
  margin-top: 122px;
  position: relative;
  width: 149px;
}

.portfolio-3,
.about-3 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.line-5-7 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 44px;
  width: 85px;
}

.line-6-7 {
  height: 4px;
  left: 102px;
  position: absolute;
  top: 44px;
  width: 45px;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 294px;
  min-height: 1000px;
  position: relative;
  width: 255px;
}

.flex-col-3 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 130px;
  margin-bottom: 123px;
  margin-left: 182px;
  min-height: 730px;
  position: relative;
  width: 255px;
}

.skill {
  align-items: flex-start;
  display: flex;
  gap: 328px;
  height: 1298px;
  left: 0;
  padding: 21px 162px;
  position: absolute;
  top: 2010px;
  width: 1438px;
}

.skills-3 {
  align-items: flex-start;
  display: flex;
  margin-top: 132px;
  min-width: 93px;
}

.overlap-group-23 {
  height: 48px;
  position: relative;
  width: 91px;
}

.skills-4 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 91px;
}

.line-5-8 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 44px;
  width: 50px;
}

.line-6-8 {
  height: 4px;
  left: 61px;
  position: absolute;
  top: 44px;
  width: 30px;
}

.frame-213 {
  align-items: center;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  position: relative;
}

.about-section-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 81px;
  left: 138px;
  min-height: 1764px;
  position: absolute;
  top: 92px;
  width: 1154px;
}

.flex-row-5 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 153px;
  height: 1184px;
  min-width: 1130px;
}

.about-2 {
  align-items: flex-start;
  display: flex;
  height: 48px;
  margin-top: 90.46px;
  width: 103px;
}

.overlap-group1-5 {
  height: 49px;
  margin-top: -1px;
  position: relative;
  width: 103px;
}

.line-5-9 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 45px;
  width: 60px;
}

.line-6-9 {
  height: 4px;
  left: 73px;
  position: absolute;
  top: 45px;
  width: 30px;
}

.frame-190-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  min-height: 1184px;
  width: 874px;
}

.flex-row-6 {
  align-items: flex-start;
  display: flex;
  gap: 78px;
  margin-left: 2.5px;
  min-width: 590px;
}

.performance-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 260px;
  position: relative;
  width: 273px;
}

.performance-3 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  white-space: nowrap;
  width: 145px;
}

.delivering-lightning-1 {
  height: 46px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  width: 269px;
}

.dynamic-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 260px;
  position: relative;
  width: 239px;
}

.dynamic-2 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  white-space: nowrap;
  width: 100px;
}

.websites-dont-have-1 {
  height: 46px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  width: 235px;
}

.flex-row-3 {
  align-items: center;
  display: flex;
  gap: 76px;
  margin-left: 4px;
  min-width: 878px;
}

.ai-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 257px;
  position: relative;
  width: 242px;
}

.artificial-intelligence-3 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  white-space: nowrap;
  width: 234px;
}

.ing {
  height: 42px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  width: 238px;
}

.responsive-1,
.interactive-1,
.mobile-application-1,
.product-design-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 260px;
  position: relative;
  width: 242px;
}

.responsive-2 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  white-space: nowrap;
  width: 125px;
}

.building-websites-th-1,
.surname-1,
.crafting-robust-and-1,
.designing-and-develo-1,
.creating-innovative-1 {
  height: 46px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  width: 238px;
}

.interactive-2 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  white-space: nowrap;
  width: 122px;
}

.cloud-computing-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 256px;
  position: relative;
  width: 242px;
}

.cloud-computing-2 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  white-space: nowrap;
  width: 201px;
}

.software-architecture-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 260px;
  width: 242px;
}

.group-124-1 {
  height: 163.92px;
  margin-left: -4px;
  width: 166.02px;
}

.software-architect-1 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  width: 210.66px;
}

.mobile-application-2 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  width: 216.73px;
}

.flex-row-7 {
  align-items: center;
  display: flex;
  gap: 76px;
  margin-left: 4.06px;
  min-width: 560px;
}

.project-mangament {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 260px;
  margin-top: 0;
  position: relative;
  width: 242px;
}

.project-management-3 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  white-space: nowrap;
  width: 233px;
}

.guiding-teams-to-ach-1 {
  height: 46px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  width: 237.87px;
}

.product-design-3 {
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: -4px;
  text-align: center;
  white-space: nowrap;
  width: 171px;
}

.frame-34-1 {
  align-items: flex-start;
  display: flex;
  gap: 60px;
  width: 1131px;
}

.dp-1 {
  height: 500px;
  margin-left: 32px;
  object-fit: cover;
  width: 459px;
}

.flex-col-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  min-height: 408px;
  width: 579px;
}

.whos-this-guy-1 {
  color: var(--white);
  font-family: var(--font-family-times_new_roman-bold);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  min-height: 46px;
  min-width: 285px;
  text-align: center;
  white-space: nowrap;
}

.im-a-tech-obsessed-1 {
  height: 192px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 74px;
  text-align: center;
  width: 579px;
}

.span1-3 {
  color: var(--black);
  font-family: var(--font-family-times_new_roman-bolditalic);
  font-size: var(--font-size-xxl);
  font-style: italic;
  font-weight: 700;
}

.span2-1 {
  color: var(--violet-red);
  font-family: var(--font-family-times_new_roman-bolditalic);
  font-size: var(--font-size-xxl);
  font-style: italic;
  font-weight: 700;
}

.lets-create-something-amazing-together {
  color: var(--di-serria-2);
  font-family: var(--font-family-times_new_roman-bold);
  font-size: 32px;
  font-weight: 700;
  height: 37px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 4px;
  margin-top: 59px;
  min-width: 553px;
  text-align: center;
  white-space: nowrap;
}

@keyframes animate-enter4-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter3-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter5-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
