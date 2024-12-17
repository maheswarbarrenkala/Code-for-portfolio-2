<template>
  <div class="container-center-horizontal">
    <div class="desktop-3 screen">
      <div class="homepage-header-1">
        <img
          class="unnamed__1_-removebg-preview-1-4"
          :src="unnamed__1_RemovebgPreview1"
          alt="unnamed__1_-removebg-preview 1"
        /><return-to-hompage :className="returnToHompageProps.className" />
      </div>
      <div class="overlap-group6-2" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
        <div class="portfolio-page-title" :style="{ 'background-image': 'url(' + portfolioPageTitle + ')' }">
          <h1 class="building-software-so-1">{{ buildingSoftwareSo }}</h1>
          <p class="this-showcases-my-jo-1">{{ thisShowcasesMyJo }}</p>
        </div>
        <div class="list-container">
          <div class="side-list">
            <portfolio-list
              :overlapGroup="portfolioListProps.overlapGroup"
              :fullStackDevelopment="portfolioListProps.fullStackDevelopment"
              :group2071Props="portfolioListProps.group2071Props"
              :group2072Props="portfolioListProps.group2072Props"
              :group2073Props="portfolioListProps.group2073Props"
              :group2074Props="portfolioListProps.group2074Props"
            />
          </div>
          <div class="work-exp-list">
            <div class="full-stack-1" :style="{ 'background-image': 'url(' + fullStack + ')' }">
              <p class="full-stack-developme-1 valign-text-middle crimsontext-bold-black-22px-2">
                Full Stack Development<br /><br />Overview<br /><br />With over 3 years of experience in full-stack
                development, I have mastered the art of building seamless, secure, and scalable applications that cater
                to complex business needs. My ability to work across the entire stack ensures efficient communication
                between front-end interfaces and robust back-end systems.<br /><br />Key Skills<br /><br />Front-End
                Technologies: HTML, CSS, JavaScript (React.js, Angular.js, Bootstrap 5, jQuery), Xml.<br />Back-End
                Technologies: Node.js, Express.js, Java (Spring Framework), Kotlin, Python.<br />Databases: MySQL,
                PostgreSQL, MongoDB.<br />Cloud Integration: AWS, Microsoft Azure, GCP, Firebase.<br />Other Tools:
                Docker, Kubernetes, Jenkins, Git, Bitbucket, Android Studio, Swift, Flutter .<br /><br />Work
                Experience<br /><br />Application Developer | Accenture (2021-2023):<br />Spearheaded the development of
                a responsive e-commerce platform, improving user engagement by 15% and cutting development time by 10%
                through optimized workflows.<br />Automated daily server checks with RPA tools, saving 20% of the team’s
                manual effort.<br />Integrated RESTful APIs and built data pipelines for a financial services client,
                ensuring 98% data accuracy.<br />Collaborated with cross-functional teams to implement Agile
                methodologies, boosting project completion speed by 25%.<br />Completed 8 Accenture Technology training
                in Java (JSE 11+), Advanced Java (including Spring Framework), Agile methodologies (including Scrum and
                Kanban), MySQL (up to version 8.0), RDBMS concepts, Full Stack Engineering (using MERN or MEAN stack),
                and Robotic Process Automation (RPA) tools like Blue Prism.<br />Developed and implemented an SMTP
                mailing system with integration for 200+ user notifications and LDAP for enhanced system security
                in client applications.<br />Managed URL changes, website name changes, and link redirection for a
                client rebranding project, ensuring smooth data transfer of 50 GB from the old cloud storage to the new
                one and minimizing downtime for 10,000+ daily users.<br /><br />IT Developer | ITU (2023-2024):<br />Designed
                and implemented a feature-rich Education Management System (EMS), improving operational efficiency for
                ITU&#39;s student and staff management processes.<br />Upgraded my.ITU.edu, enhancing navigation,
                accessibility, and data visualization.<br /><br />Projects<br /><br />Website development freelance
                projects: Design and Developed multiple projects like Blogs, Static websites, E-commerce.<br />Inventory
                Management Mobile APP: Designed and Developed Mobile application using Android studio, Google Single
                sign on, Firebase as cloud.<br />Document Control System: Designed a web application to manage sensitive
                documents with role-based access, high encryption standards, and automated audit logs.<br />Portfolio
                Website: Developed a professional, interactive portfolio using React.js, Node.js, and MongoDB to
                showcase skills and projects.<br />Smart Home Automation Dashboard: Built a full-stack IoT dashboard for
                smart home devices, allowing real-time monitoring and control.<br />ValleyOak Farm Website: Delivered an
                interactive e-commerce platform for a farm-to-table service, integrating payment gateways and live
                inventory management.<br /><br />Achievements<br /><br />Increased team efficiency by introducing
                advanced testing frameworks and improving code review processes.<br />Delivered 100% of full-stack
                projects within budget and deadlines.
              </p>
            </div>
            <product-design v-bind="productDesign1Props" />
            <div class="ai-1" :style="{ 'background-image': 'url(' + ai + ')' }">
              <p class="artificial-intellige-2 valign-text-middle crimsontext-bold-black-22px-2">
                Artificial Intelligence<br /><br />Overview<br /><br />I specialize in designing and deploying AI
                solutions that address complex challenges in automation, prediction, and intelligent systems. Leveraging
                frameworks like Tensor Flow, Py Torch, and Lang Chain, my focus is on creating scalable, high-impact
                applications. I integrate advanced architectures such as RAG (Retrieval-Augmented Generation) and tools
                like Gradio and Stream lit to deliver intuitive and efficient AI-powered solutions.<br /><br />Key
                Skills<br /><br />AI/ML Frameworks: Tensor Flow, Py Torch, Scikit-learn, AWS Sage Maker, Lang Chain,
                OpenAI GPT, GPT API’s.<br />Emerging Technologies: Generative AI, Prompt Engineering, RAG, AI-powered
                automation.<br />Expertise Areas: NLP, Deep Learning, Computer Vision, Model Fine-Tuning.<br />Deployment
                Tools: Gradio, Stream lit, AWS.<br /><br />Work Experience<br /><br />Application Developer | Accenture
                (2021-2023):<br />Built AI-powered RPA tools, boosting team productivity by 20%.<br />Developed a fraud
                detection model with 95% accuracy for a financial client.<br />Integrated NLP algorithms to enhance
                enterprise applications, improving customer satisfaction by 30%.<br />IT Developer | ITU (2023-2024):<br />Developed
                an AI-based student assistance chatbot handling over 1,000 monthly queries with 98% satisfaction.<br />Created
                a personalized recommendation engine for educational resources, increasing engagement by 40%.<br /><br />Projects<br /><br />Fake
                News Detection System: Achieved 90% accuracy using NLP and deep learning techniques, deployed with
                Stream lit for real-time use.<br />Gender Recognition using voice: Achieved 92% accuracy using
                Fine-tuning the model to recognize gender by voice.<br />Stock Market Prediction: Built a predictive
                model using time-series analysis and deep learning, integrated into a user-friendly Gradio interface.<br />AI
                Chat Bot: Designed a CSTU Bot to assist students with University Information and Guiding students
                trought out the admissions and tuition process.<br />AI-Powered Document Insights: Automated client
                reporting by integrating GPT models with Lang Chain.<br /><br />Achievements<br /><br />Improved ML
                model accuracy by 25% for business applications.<br />Deployed Generative AI solutions, saving 15+ hours
                per week on manual tasks.<br />Recognized for innovative AI applications using RAG architecture and
                advanced frameworks.
              </p>
            </div>
            <div class="software-and-cloud-arch" :style="{ 'background-image': 'url(' + softwareAndCloudArch + ')' }">
              <p class="software-and-cloud-a-1 valign-text-middle crimsontext-bold-black-22px">
                <span
                  ><span class="span0 crimsontext-bold-black-22px">{{ spanText1 }}</span
                  ><span class="crimsontext-bold-black-22px">{{ spanText2 }}</span
                  ><span class="crimsontext-bold-black-20px">{{ spanText3 }}</span
                  ><span class="crimsontext-normal-black-20px">{{ spanText4 }}</span
                  ><span class="crimsontext-bold-black-20px">{{ spanText5 }}</span
                  ><span class="crimsontext-normal-black-20px">{{ spanText6 }}</span
                  ><span class="crimsontext-bold-black-20px">{{ spanText7 }}</span
                  ><span class="crimsontext-normal-black-20px">{{ spanText8 }}</span
                  ><span class="crimsontext-bold-black-20px">{{ spanText9 }}</span
                  ><span class="crimsontext-normal-black-20px">{{ spanText10 }}</span
                  ><span class="crimsontext-bold-black-20px">{{ spanText11 }}</span
                  ><span class="crimsontext-normal-black-20px">{{ spanText12 }}</span
                  ><span class="crimsontext-bold-black-20px">{{ spanText13 }}</span
                  ><span class="crimsontext-normal-black-20px">{{ spanText14 }}</span>
                </span>
              </p>
            </div>
            <product-design v-bind="productDesign2Props" />
          </div>
        </div>
        <div class="bottom">
          <div class="overlap-group5-2">
            <img class="rectangle-140-3" :src="rectangle140" alt="Rectangle 140" />
            <div class="copyrights-4 ibmplexsans-normal-black-20px">
              <div class="maheswar-1">{{ maheswar }}</div>
              <img class="copyright-4" :src="copyright" alt="copyright" />
              <div class="number-1">{{ number }}</div>
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
            <img class="up-3" :src="up" alt="Up" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReturnToHompage from "./ReturnToHompage";
import PortfolioList from "./PortfolioList";
import ProductDesign from "./ProductDesign";
import Icons from "./Icons";
export default {
  name: "Desktop3",
  components: {
    ReturnToHompage,
    PortfolioList,
    ProductDesign,
    Icons,
  },
  props: [
    "unnamed__1_RemovebgPreview1",
    "overlapGroup6",
    "portfolioPageTitle",
    "buildingSoftwareSo",
    "thisShowcasesMyJo",
    "fullStack",
    "ai",
    "softwareAndCloudArch",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "rectangle140",
    "maheswar",
    "copyright",
    "number",
    "up",
    "returnToHompageProps",
    "portfolioListProps",
    "productDesign1Props",
    "productDesign2Props",
    "iconsProps",
  ],
};
</script>

<style>
.desktop-3 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 7353px;
  width: 1440px;
}

.homepage-header-1 {
  align-items: center;
  background: linear-gradient(180deg, rgb(217, 160, 91) 35.56%, rgb(27, 38, 79) 72.17%);
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  gap: 985px;
  padding: 0 84px;
  position: relative;
  width: 1440px;
}

.unnamed__1_-removebg-preview-1-4 {
  height: 60px;
  object-fit: cover;
  width: 63px;
}

.overlap-group6-2 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  min-height: 7293px;
  width: 1440px;
}

.portfolio-page-title {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 103px;
  height: 770px;
  width: 1440px;
}

.building-software-so-1 {
  color: var(--white);
  font-family: var(--font-family-source_serif_pro);
  font-size: 35px;
  font-weight: 600;
  height: 44px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 177px;
  width: 888px;
}

.this-showcases-my-jo-1 {
  color: var(--white);
  font-family: var(--font-family-source_serif_pro);
  font-size: var(--font-size-xl);
  font-weight: 400;
  height: 198px;
  letter-spacing: 0;
  line-height: normal;
  text-align: justify;
  width: 888px;
}

.list-container {
  align-items: flex-start;
  display: flex;
  gap: 42px;
  height: 6113px;
  min-width: 1398px;
}

.side-list {
  background: linear-gradient(180deg, rgb(97, 97, 97) 0%, rgba(217, 160, 91, 0.5) 3%);
  display: flex;
  height: 823px;
  justify-content: center;
  position: relative;
  width: 318px;
}

.work-exp-list {
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 135px;
  height: 6033px;
  position: relative;
  width: 1038px;
}

.full-stack-1 {
  background-size: 100% 100%;
  display: flex;
  height: 1560px;
  justify-content: center;
  width: 1038px;
}

.full-stack-developme-1 {
  height: 1514px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 23px;
  width: 950px;
}

.ai-1 {
  background-size: 100% 100%;
  display: flex;
  height: 1154px;
  justify-content: center;
  width: 1038px;
}

.artificial-intellige-2 {
  height: 1108px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 23px;
  width: 950px;
}

.software-and-cloud-arch {
  background-size: 100% 100%;
  display: flex;
  height: 832px;
  justify-content: center;
  width: 1038px;
}

.software-and-cloud-a-1 {
  height: 786px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 23px;
  width: 950px;
}

.span0 {
  text-decoration: underline;
}

.bottom {
  align-items: flex-end;
  display: flex;
  margin-left: 0;
  margin-top: 190px;
  overflow: hidden;
  width: 1440px;
}

.overlap-group5-2 {
  height: 219px;
  margin-bottom: 0;
  position: relative;
  width: 1440px;
}

.rectangle-140-3 {
  height: 200px;
  left: 0;
  position: absolute;
  top: 19px;
  width: 1440px;
}

.copyrights-4 {
  align-items: center;
  display: flex;
  gap: 5px;
  height: 33px;
  justify-content: center;
  left: 630px;
  padding: 5px;
  position: absolute;
  top: 186px;
  width: 179px;
}

.maheswar-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -0.59px;
  margin-left: -1px;
  margin-top: -2.59px;
  position: relative;
  text-decoration: underline;
  width: fit-content;
}

.copyright-4 {
  height: 20px;
  position: relative;
  width: 20px;
}

.number-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -0.59px;
  margin-right: -1px;
  margin-top: -2.59px;
  position: relative;
  text-decoration: underline;
  width: fit-content;
}

.up-3 {
  height: 67px;
  left: 682px;
  position: absolute;
  top: 0;
  width: 76px;
}
</style>
