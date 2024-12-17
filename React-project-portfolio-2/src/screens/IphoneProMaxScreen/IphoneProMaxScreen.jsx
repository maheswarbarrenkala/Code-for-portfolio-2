import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const IphoneProMaxScreen = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="iphone-pro-max-screen">
      <div
        className="iphone-pro-max-2"
        style={{
          height:
            screenWidth < 1440
              ? "9551px"
              : screenWidth >= 1440
                ? "7383px"
                : undefined,
          width:
            screenWidth < 1440
              ? "440px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="overlap-4"
          style={{
            height:
              screenWidth >= 1440
                ? "6424px"
                : screenWidth < 1440
                  ? "8766px"
                  : undefined,
            left:
              screenWidth >= 1440
                ? "-2px"
                : screenWidth < 1440
                  ? "0"
                  : undefined,
            top:
              screenWidth >= 1440
                ? "960px"
                : screenWidth < 1440
                  ? "785px"
                  : undefined,
            width:
              screenWidth >= 1440
                ? "1706px"
                : screenWidth < 1440
                  ? "444px"
                  : undefined,
          }}
        >
          {screenWidth >= 1440 && (
            <img
              className="homepage-background"
              alt="Homepage background"
              src="/img/homepage-background-1.png"
            />
          )}

          {screenWidth < 1440 && <div className="mobile-background" />}

          <div
            className="resume"
            style={{
              height:
                screenWidth >= 1440
                  ? "1006px"
                  : screenWidth < 1440
                    ? "748px"
                    : undefined,
              left:
                screenWidth >= 1440
                  ? "2px"
                  : screenWidth < 1440
                    ? "0"
                    : undefined,
              top:
                screenWidth >= 1440
                  ? "4753px"
                  : screenWidth < 1440
                    ? "7173px"
                    : undefined,
              width:
                screenWidth >= 1440
                  ? "1704px"
                  : screenWidth < 1440
                    ? "440px"
                    : undefined,
            }}
          >
            {screenWidth >= 1440 && (
              <div className="overlap-group-5">
                <div className="rectangle-7" />

                <img
                  className="designer"
                  alt="Designer"
                  src="/img/designer-1-3.png"
                />

                <div className="union-wrapper">
                  <img className="union" alt="Union" src="/img/union-5.png" />
                </div>

                <div className="frame-4">
                  <p className="text-wrapper-21">
                    Want to have look at my resume?
                  </p>

                  <img
                    className="resume-doc"
                    alt="Resume doc"
                    src="/img/resume-doc-3.png"
                  />

                  <a
                    className="download-pdf"
                    href="https://docs.google.com/document/d/1YS2YXkWjsamKpcC9XVhlgwfU-tSOXvdn/edit?usp=sharing&amp;ouid=116805013174128996006&amp;rtpof=true&amp;sd=true"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="text-wrapper-22">Download PDF</div>
                  </a>
                </div>
              </div>
            )}

            {screenWidth < 1440 && (
              <>
                <img
                  className="resume-doc-2"
                  alt="Resume doc"
                  src="/img/resume-doc-2.png"
                />

                <a
                  className="download-pdf-2"
                  href="https://docs.google.com/document/d/1YS2YXkWjsamKpcC9XVhlgwfU-tSOXvdn/edit?usp=sharing&amp;ouid=116805013174128996006&amp;rtpof=true&amp;sd=true"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="text-wrapper-22">Download PDF</div>
                </a>

                <div className="overlap-group-6">
                  <img className="union-2" alt="Union" src="/img/union-3.png" />

                  <img
                    className="designer-2"
                    alt="Designer"
                    src="/img/designer-1-3.png"
                  />
                </div>

                <p className="text-wrapper-23">
                  Want to have look at my resume?
                </p>
              </>
            )}
          </div>

          {screenWidth < 1440 && (
            <>
              <div className="contact-section">
                <div className="overlap-5">
                  <div className="contact">
                    <div className="text-wrapper-24">Contact</div>

                    <img
                      className="line-3"
                      alt="Line"
                      src="/img/line-5-11.png"
                    />

                    <img
                      className="line-4"
                      alt="Line"
                      src="/img/line-6-11.png"
                    />
                  </div>

                  <div className="lets-connect-mobile">
                    <div className="text-wrapper-25">Let’s connect</div>
                  </div>

                  <div className="button">
                    <div className="overlap-group-7">
                      <img
                        className="rectangle-8"
                        alt="Rectangle"
                        src="/img/rectangle-140-6.png"
                      />

                      <div className="frame-5">
                        <img
                          className="img-3"
                          alt="Mobile linked in"
                          src="/img/mobile-linked-in-2.png"
                        />

                        <img
                          className="img-3"
                          alt="Mobile gmail"
                          src="/img/mobile-gmail-2.png"
                        />

                        <img
                          className="img-3"
                          alt="Mobile figma"
                          src="/img/mobile-figma-2.png"
                        />

                        <img
                          className="img-3"
                          alt="Mobile twitter"
                          src="/img/mobile-twitter-2.png"
                        />

                        <img
                          className="img-3"
                          alt="Mobile facebook"
                          src="/img/mobile-facebook-2.png"
                        />

                        <img
                          className="img-3"
                          alt="Mobile github"
                          src="/img/mobile-github-2.png"
                        />
                      </div>

                      <div className="copyrights-3">
                        <div className="text-wrapper-26">Maheswar</div>

                        <img
                          className="copyright-3"
                          alt="Copyright"
                          src="/img/copyright-6.png"
                        />

                        <div className="text-wrapper-26">2024</div>
                      </div>

                      <img className="up-3" alt="Up" src="/img/up-6.png" />
                    </div>
                  </div>

                  <a
                    className="maheswar-barrenkala"
                    href="mailto:maheswar.barrenkala@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="text-wrapper-27">
                      maheswar.barrenkala@gmail.com
                    </div>
                  </a>

                  <a
                    className="saimaheswargmail"
                    href="mailto:saimaheswar0024@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="text-wrapper-28">
                      saimaheswar0024gmail.com
                    </div>
                  </a>

                  <div className="text-wrapper-29">Want to work together?</div>

                  <div className="text-wrapper-30">Contact Me</div>
                </div>
              </div>

              <div className="portfolio-section">
                <div className="frame-6">
                  <div className="text-full-stack-wrapper">
                    <div className="text-full-stack">
                      <div className="overlap-group-8">
                        <p className="designing-developing">
                          Designing, Developing, &amp; Deploying end-to-end
                          solutions
                        </p>

                        <div className="text-wrapper-31">
                          Full Stack Development
                        </div>
                      </div>

                      <img
                        className="open-link-svgrepo"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </div>
                  </div>

                  <div className="UI-UX">
                    <div className="group-8">
                      <div className="overlap-group-8">
                        <p className="text-wrapper-32">
                          Crafting digital solutions that delight and inspire
                        </p>

                        <div className="text-wrapper-33">UI / UX</div>
                      </div>

                      <img
                        className="open-link-svgrepo-2"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </div>
                  </div>

                  <div className="group-wrapper">
                    <div className="group-8">
                      <div className="overlap-group-8">
                        <p className="text-wrapper-34">
                          Revolutionizing the Future with AI
                        </p>

                        <div className="text-wrapper-35">
                          Artificial Intelligence
                        </div>
                      </div>

                      <img
                        className="open-link-svgrepo-3"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </div>
                  </div>

                  <div className="software-2">
                    <div className="group-8">
                      <div className="overlap-group-8">
                        <p className="text-wrapper-36">
                          Building the Backbone of Modern Applications
                        </p>

                        <div className="software-cloud">
                          Software &amp; Cloud Architecture
                        </div>
                      </div>

                      <img
                        className="open-link-svgrepo-4"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </div>
                  </div>

                  <div className="management-2">
                    <div className="group-8">
                      <div className="overlap-group-8">
                        <p className="text-wrapper-37">
                          Driving Innovation Through Effective Project
                          Management
                        </p>

                        <div className="text-wrapper-38">Management</div>
                      </div>

                      <img
                        className="open-link-svgrepo-5"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="portfolio">
                  <div className="text-wrapper-39">Portfolio</div>

                  <img className="line-5" alt="Line" src="/img/line-5-12.png" />

                  <img className="line-6" alt="Line" src="/img/line-6-12.png" />
                </div>
              </div>

              <div className="skills-section">
                <div className="mobile-skills">
                  <div className="software-engineering">
                    <Link className="text-wrapper-40" to="/iphone-16-pro-max-2">
                      Learn more...
                    </Link>

                    <div className="text-wrapper-41">Software Engineering</div>

                    <img
                      className="vector"
                      alt="Vector"
                      src="/img/vector-38.png"
                    />
                  </div>

                  <div className="programming-2">
                    <img
                      className="coding"
                      alt="Coding"
                      src="/img/coding-2.png"
                    />

                    <div className="programming-3">
                      Programming &amp; Development
                    </div>

                    <Link className="text-wrapper-40" to="/iphone-16-pro-max-2">
                      Learn more...
                    </Link>
                  </div>

                  <div className="emerging-technology">
                    <Link className="text-wrapper-40" to="/iphone-16-pro-max-2">
                      Learn more...
                    </Link>

                    <div className="text-wrapper-41">Emerging Technology</div>

                    <img
                      className="img-4"
                      alt="Icons"
                      src="/img/q3-icons-2.png"
                    />
                  </div>

                  <div className="deisgn-and-tools">
                    <Link className="text-wrapper-40" to="/iphone-16-pro-max-2">
                      Learn more...
                    </Link>

                    <div className="text-wrapper-41">Design &amp; Tools</div>

                    <img
                      className="img-4"
                      alt="Design tools ruler"
                      src="/img/design-tools-ruler-pen-pencil-svgrepo-com-2.png"
                    />
                  </div>

                  <div className="cloud-2">
                    <Link className="text-wrapper-40" to="/iphone-16-pro-max-2">
                      Learn more...
                    </Link>

                    <div className="text-wrapper-41">
                      Cloud &amp; infrastructure
                    </div>

                    <img
                      className="img-4"
                      alt="Cloud computing"
                      src="/img/cloud-computing-svgrepo-com-2.png"
                    />
                  </div>

                  <div className="project-management-2">
                    <Link className="text-wrapper-40" to="/iphone-16-pro-max-2">
                      Learn more...
                    </Link>

                    <div className="project-management-3">
                      Project Management &amp; Business
                    </div>

                    <img
                      className="layer"
                      alt="Layer"
                      src="/img/layer-2-2.png"
                    />
                  </div>
                </div>

                <div className="skills">
                  <div className="text-wrapper-42">Skills</div>

                  <img className="line-7" alt="Line" src="/img/line-5-13.png" />

                  <img className="line-8" alt="Line" src="/img/line-6-13.png" />
                </div>
              </div>

              <div className="about-section">
                <div className="frame-7">
                  <img className="dp" alt="Dp" src="/img/dp-3.png" />

                  <div className="text-wrapper-43">Who’s this guy ?</div>

                  <p className="i-m-a-tech-obsessed">
                    <span className="text-wrapper-44">I’m a</span>

                    <span className="text-wrapper-45">&nbsp;</span>

                    <span className="text-wrapper-46">
                      tech-obsessed innovator
                    </span>

                    <span className="text-wrapper-44">
                      , passionate about building extraordinary digital
                      products. Blending full-stack development, UI/UX design,
                      and AI, I transform ideas into reality. With a knack for
                      architecture and project management, I deliver scalable
                      solutions that captivate users.
                    </span>
                  </p>

                  <p className="text-wrapper-47">
                    Let’s create something amazing together.
                  </p>
                </div>

                <div className="frame-8">
                  <div className="performance">
                    <div className="group-9">
                      <div className="frame-wrapper">
                        <img
                          className="frame-9"
                          alt="Frame"
                          src="/img/frame-16-2.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-48">Performance</div>

                    <p className="text-wrapper-49">
                      Delivering lightning-fast websites for optimal user
                      experiences.
                    </p>
                  </div>

                  <div className="div-2">
                    <div className="group-10">
                      <div className="code-snippet-wrapper">
                        <img
                          className="code-snippet"
                          alt="Code snippet"
                          src="/img/code-snippet-02-svgrepo-com-2.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-48">Dynamic</div>

                    <p className="websites-don-t-have">
                      Websites don&#39;t have to be static, I love making pages
                      come to life.
                    </p>
                  </div>

                  <div className="div-2">
                    <div className="group-11">
                      <div className="overlap-group-9">
                        <img
                          className="vector-2"
                          alt="Vector"
                          src="/img/vector-39.png"
                        />

                        <img
                          className="vector-3"
                          alt="Vector"
                          src="/img/vector-40.png"
                        />

                        <img
                          className="vector-4"
                          alt="Vector"
                          src="/img/vector-41.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-48">
                      Artificial intelligence
                    </div>

                    <p className="text-wrapper-50">
                      Developing intelligent systems to solve complex problems.
                    </p>
                  </div>

                  <div className="div-2">
                    <div className="group-12">
                      <div className="img-wrapper">
                        <img
                          className="responsive-design"
                          alt="Responsive design"
                          src="/img/responsive-design-symbol-svgrepo-com-2.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-48">Responsive</div>

                    <p className="text-wrapper-51">
                      Building websites that adapt to any screen size.
                    </p>
                  </div>

                  <div className="div-2">
                    <div className="group-12">
                      <div className="img-wrapper">
                        <img
                          className="idea-svgrepo-com"
                          alt="Idea svgrepo com"
                          src="/img/idea-svgrepo-com-2.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-48">Interactive</div>

                    <p className="text-wrapper-51">
                      Strong preference for easy to use, intuitive UX/UI.
                    </p>
                  </div>

                  <div className="div-2">
                    <div className="group-12">
                      <div className="img-wrapper">
                        <img
                          className="vector-5"
                          alt="Vector"
                          src="/img/vector-42.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-48">Cloud Computing</div>

                    <p className="text-wrapper-50">
                      Leveraging cloud platforms for scalable and reliable
                      solutions.
                    </p>
                  </div>

                  <div className="div-2">
                    <img
                      className="group-12"
                      alt="Group"
                      src="/img/group-124-2.png"
                    />

                    <div className="text-wrapper-52">Software Architect</div>

                    <p className="text-wrapper-51">
                      Crafting robust and scalable system blueprints.
                    </p>
                  </div>

                  <div className="div-2">
                    <div className="group-12">
                      <div className="overlap-group-10">
                        <img
                          className="vector-6"
                          alt="Vector"
                          src="/img/vector-43.png"
                        />

                        <img
                          className="vector-7"
                          alt="Vector"
                          src="/img/vector-44.png"
                        />

                        <img
                          className="vector-8"
                          alt="Vector"
                          src="/img/vector-45.png"
                        />

                        <img
                          className="vector-9"
                          alt="Vector"
                          src="/img/vector-46.png"
                        />

                        <img
                          className="vector-10"
                          alt="Vector"
                          src="/img/vector-47.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-53">Mobile Application</div>

                    <p className="text-wrapper-51">
                      Designing and developing high-quality mobile software.
                    </p>
                  </div>

                  <div className="div-2">
                    <div className="group-13">
                      <div className="overlap-group-11">
                        <img
                          className="vector-11"
                          alt="Vector"
                          src="/img/vector-48.png"
                        />

                        <img
                          className="vector-12"
                          alt="Vector"
                          src="/img/vector-49.png"
                        />

                        <img
                          className="vector-13"
                          alt="Vector"
                          src="/img/vector-50.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-48">Project Management</div>

                    <p className="text-wrapper-54">
                      Guiding teams to achieve project objectives.
                    </p>
                  </div>

                  <div className="div-2">
                    <div className="group-12">
                      <div className="overlap-group-12">
                        <img
                          className="vector-14"
                          alt="Vector"
                          src="/img/vector-51.png"
                        />

                        <img
                          className="vector-15"
                          alt="Vector"
                          src="/img/vector-52.png"
                        />

                        <img
                          className="vector-16"
                          alt="Vector"
                          src="/img/vector-53.png"
                        />

                        <img
                          className="vector-17"
                          alt="Vector"
                          src="/img/vector-54.png"
                        />

                        <img
                          className="vector-18"
                          alt="Vector"
                          src="/img/vector-55.png"
                        />

                        <img
                          className="vector-19"
                          alt="Vector"
                          src="/img/vector-56.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-48">Product Design</div>

                    <p className="text-wrapper-51">
                      Creating innovative and user-centric products.
                    </p>
                  </div>
                </div>

                <div className="about">
                  <div className="text-wrapper-55">About</div>

                  <img className="line-9" alt="Line" src="/img/line-5-14.png" />

                  <img
                    className="line-10"
                    alt="Line"
                    src="/img/line-6-13.png"
                  />
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1440 && (
            <>
              <div className="contact-information">
                <a
                  className="maheswar-barrenkala-2"
                  href="mailto:maheswar.barrenkala@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="text-wrapper-56">
                    maheswar.barrenkala@gmail.com
                  </div>
                </a>

                <a
                  className="saimaheswargmail-2"
                  href="mailto:saimaheswar0024@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="text-wrapper-56">
                    saimaheswar0024gmail.com
                  </div>
                </a>

                <a
                  className="lets-connect"
                  href="https://drive.google.com/drive/folders/153BliignT5009lI0p9kQEnTmzwHUixzj?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="text-wrapper-57">Let’s connect</div>
                </a>

                <div className="text-wrapper-58">Want to work together?</div>

                <div className="text-wrapper-59">Contact Me</div>

                <div className="contact-2">
                  <div className="overlap-group-13">
                    <div className="text-wrapper-60">Contact</div>

                    <img
                      className="line-11"
                      alt="Line"
                      src="/img/line-5-16.png"
                    />

                    <img
                      className="line-12"
                      alt="Line"
                      src="/img/line-6-16.png"
                    />
                  </div>
                </div>
              </div>

              <div className="buttom-2">
                <div className="overlap-6">
                  <img
                    className="rectangle-9"
                    alt="Rectangle"
                    src="/img/rectangle-140-9.png"
                  />

                  <div className="copyrights-4">
                    <div className="text-wrapper-61">Maheswar</div>

                    <img
                      className="copyright-3"
                      alt="Copyright"
                      src="/img/copyright-9.png"
                    />

                    <div className="text-wrapper-62">2024</div>
                  </div>

                  <div className="icons-2">
                    <img
                      className="figma-2"
                      alt="Figma"
                      src="/img/figma-3.png"
                    />

                    <img
                      className="github-2"
                      alt="Github"
                      src="/img/github-3.png"
                    />

                    <img
                      className="gmail-2"
                      alt="Gmail"
                      src="/img/gmail-3.png"
                    />

                    <img
                      className="facebook-2"
                      alt="Facebook"
                      src="/img/facebook-3.png"
                    />

                    <img
                      className="l-inked-in-2"
                      alt="L inked in"
                      src="/img/linkedin-3.png"
                    />

                    <img
                      className="twitter-2"
                      alt="Twitter"
                      src="/img/twitter-3.png"
                    />
                  </div>

                  <img className="up-4" alt="Up" src="/img/up-7.png" />
                </div>
              </div>

              <div className="portfolio-2">
                <div className="full-stack-3">
                  <div className="text-full-stack">
                    <div className="overlap-group-8">
                      <p className="designing-developing">
                        Designing, Developing, &amp; Deploying end-to-end
                        solutions
                      </p>

                      <div className="text-wrapper-31">
                        Full Stack Development
                      </div>
                    </div>

                    <Link to="/desktop-3">
                      <img
                        className="open-link-svgrepo-6"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </Link>
                  </div>
                </div>

                <div className="management-3">
                  <div className="group-8">
                    <div className="overlap-group-8">
                      <p className="text-wrapper-37">
                        Driving Innovation Through Effective Project Management
                      </p>

                      <div className="text-wrapper-38">Management</div>
                    </div>

                    <Link to="/desktop-3">
                      <img
                        className="open-link-svgrepo-7"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </Link>
                  </div>
                </div>

                <div className="software-3">
                  <div className="group-8">
                    <div className="overlap-group-8">
                      <p className="text-wrapper-36">
                        Building the Backbone of Modern Applications
                      </p>

                      <div className="software-cloud">
                        Software &amp; Cloud Architecture
                      </div>
                    </div>

                    <Link to="/desktop-3">
                      <img
                        className="open-link-svgrepo-8"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </Link>
                  </div>
                </div>

                <div className="AI-3">
                  <div className="group-8">
                    <div className="overlap-group-8">
                      <p className="text-wrapper-34">
                        Revolutionizing the Future with AI
                      </p>

                      <div className="text-wrapper-35">
                        Artificial Intelligence
                      </div>
                    </div>

                    <Link to="/desktop-3">
                      <img
                        className="open-link-svgrepo-9"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </Link>
                  </div>
                </div>

                <div className="UI-UX-2">
                  <div className="group-8">
                    <div className="overlap-group-8">
                      <p className="text-wrapper-32">
                        Crafting digital solutions that delight and inspire
                      </p>

                      <div className="text-wrapper-33">UI / UX</div>
                    </div>

                    <Link to="/desktop-3">
                      <img
                        className="open-link-svgrepo-10"
                        alt="Open link svgrepo"
                        src="/img/open-link-svgrepo-com-10.png"
                      />
                    </Link>
                  </div>
                </div>

                <div className="portfolio-3">
                  <div className="overlap-7">
                    <div className="text-wrapper-63">Portfolio</div>

                    <img
                      className="line-13"
                      alt="Line"
                      src="/img/line-5-17.png"
                    />

                    <img
                      className="line-14"
                      alt="Line"
                      src="/img/line-6-17.png"
                    />
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="skills-wrapper">
                  <div className="skills-2">
                    <div className="software-engineering-2">
                      <Link className="text-wrapper-64" to="/desktop-2">
                        Learn more...
                      </Link>

                      <div className="text-wrapper-65">
                        Software Engineering
                      </div>

                      <img
                        className="vector-20"
                        alt="Vector"
                        src="/img/vector-57.png"
                      />
                    </div>

                    <div className="div-3">
                      <img
                        className="coding-2"
                        alt="Coding"
                        src="/img/coding-3.png"
                      />

                      <div className="programming-4">
                        Programming &amp; Development
                      </div>

                      <Link className="text-wrapper-64" to="/desktop-2">
                        Learn more...
                      </Link>
                    </div>

                    <div className="div-3">
                      <Link className="text-wrapper-64" to="/desktop-2">
                        Learn more...
                      </Link>

                      <div className="text-wrapper-65">Emerging Technology</div>

                      <img
                        className="img-5"
                        alt="Icons"
                        src="/img/q3-icons-3.png"
                      />
                    </div>

                    <div className="div-3">
                      <Link className="text-wrapper-64" to="/desktop-2">
                        Learn more...
                      </Link>

                      <div className="text-wrapper-65">Design &amp; Tools</div>

                      <img
                        className="img-5"
                        alt="Design tools ruler"
                        src="/img/design-tools-ruler-pen-pencil-svgrepo-com-3.png"
                      />
                    </div>

                    <div className="div-3">
                      <Link className="text-wrapper-64" to="/desktop-2">
                        Learn more...
                      </Link>

                      <div className="text-wrapper-65">
                        Cloud &amp; infrastructure
                      </div>

                      <img
                        className="img-5"
                        alt="Cloud computing"
                        src="/img/cloud-computing-svgrepo-com-3.png"
                      />
                    </div>

                    <div className="project-management-4">
                      <Link className="text-wrapper-64" to="/desktop-2">
                        Learn more...
                      </Link>

                      <div className="project-management-5">
                        Project Management &amp; Business
                      </div>

                      <img
                        className="layer-2"
                        alt="Layer"
                        src="/img/layer-2-3.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="skills-3">
                  <div className="overlap-group-14">
                    <div className="text-wrapper-66">Skills</div>

                    <img
                      className="line-15"
                      alt="Line"
                      src="/img/line-5-18.png"
                    />

                    <img
                      className="line-16"
                      alt="Line"
                      src="/img/line-6-18.png"
                    />
                  </div>
                </div>
              </div>

              <div className="about-section-2">
                <div className="frame-10">
                  <img className="dp-2" alt="Dp" src="/img/dp-3.png" />

                  <div className="text-wrapper-67">Who’s this guy ?</div>

                  <p className="i-m-a-tech-obsessed-2">
                    <span className="text-wrapper-44">I’m a</span>

                    <span className="text-wrapper-45">&nbsp;</span>

                    <span className="text-wrapper-46">
                      tech-obsessed innovator
                    </span>

                    <span className="text-wrapper-44">
                      , passionate about building extraordinary digital
                      products. Blending full-stack development, UI/UX design,
                      and AI, I transform ideas into reality. With a knack for
                      architecture and project management, I deliver scalable
                      solutions that captivate users.
                    </span>
                  </p>

                  <p className="text-wrapper-68">
                    Let’s create something amazing together
                  </p>
                </div>

                <div className="frame-11">
                  <div className="performance-2">
                    <div className="group-14">
                      <div className="overlap-group-15">
                        <img
                          className="frame-9"
                          alt="Frame"
                          src="/img/frame-16-3.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-69">Performance</div>

                    <p className="text-wrapper-70">
                      Delivering lightning-fast websites for optimal user
                      experiences.
                    </p>
                  </div>

                  <div className="dynamic">
                    <div className="group-15">
                      <div className="overlap-group-16">
                        <img
                          className="code-snippet"
                          alt="Code snippet"
                          src="/img/code-snippet-02-svgrepo-com-3.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-71">Dynamic</div>

                    <p className="websites-don-t-have-2">
                      Websites don&#39;t have to be static, I love making pages
                      come to life.
                    </p>
                  </div>

                  <div className="AI-4">
                    <div className="group-16">
                      <div className="overlap-group-17">
                        <img
                          className="vector-2"
                          alt="Vector"
                          src="/img/vector-58.png"
                        />

                        <img
                          className="vector-3"
                          alt="Vector"
                          src="/img/vector-59.png"
                        />

                        <img
                          className="vector-4"
                          alt="Vector"
                          src="/img/vector-60.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-72">
                      Artificial intelligence
                    </div>

                    <p className="text-wrapper-73">
                      Developing intelligent systems to solve complex problems.
                    </p>
                  </div>

                  <div className="responsive">
                    <div className="group-17">
                      <div className="overlap-group-18">
                        <img
                          className="responsive-design"
                          alt="Responsive design"
                          src="/img/responsive-design-symbol-svgrepo-com-3.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-74">Responsive</div>

                    <p className="text-wrapper-75">
                      Building websites that adapt to any screen size.
                    </p>
                  </div>

                  <div className="interactive">
                    <div className="group-17">
                      <div className="overlap-group-18">
                        <img
                          className="idea-svgrepo-com"
                          alt="Idea svgrepo com"
                          src="/img/idea-svgrepo-com-3.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-76">Interactive</div>

                    <p className="text-wrapper-75">
                      Strong preference for easy to use, intuitive UX/UI.
                    </p>
                  </div>

                  <div className="cloud-computing">
                    <div className="group-17">
                      <div className="overlap-group-18">
                        <img
                          className="vector-5"
                          alt="Vector"
                          src="/img/vector-61.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-77">Cloud Computing</div>

                    <p className="text-wrapper-78">
                      Leveraging cloud platforms for scalable and reliable
                      solutions.
                    </p>
                  </div>

                  <div className="software-4">
                    <img
                      className="group-17"
                      alt="Group"
                      src="/img/group-124-3.png"
                    />

                    <div className="text-wrapper-79">Software Architect</div>

                    <p className="text-wrapper-75">
                      Crafting robust and scalable system blueprints.
                    </p>
                  </div>

                  <div className="mobile-application">
                    <div className="group-17">
                      <div className="overlap-group-18">
                        <img
                          className="vector-6"
                          alt="Vector"
                          src="/img/vector-62.png"
                        />

                        <img
                          className="vector-7"
                          alt="Vector"
                          src="/img/vector-63.png"
                        />

                        <img
                          className="vector-8"
                          alt="Vector"
                          src="/img/vector-64.png"
                        />

                        <img
                          className="vector-9"
                          alt="Vector"
                          src="/img/vector-65.png"
                        />

                        <img
                          className="vector-10"
                          alt="Vector"
                          src="/img/vector-66.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-80">Mobile Application</div>

                    <p className="text-wrapper-75">
                      Designing and developing high-quality mobile software.
                    </p>
                  </div>

                  <div className="project-mangament">
                    <div className="group-17">
                      <div className="overlap-group-19">
                        <img
                          className="vector-11"
                          alt="Vector"
                          src="/img/vector-67.png"
                        />

                        <img
                          className="vector-12"
                          alt="Vector"
                          src="/img/vector-68.png"
                        />

                        <img
                          className="vector-13"
                          alt="Vector"
                          src="/img/vector-69.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-81">Project Management</div>

                    <p className="text-wrapper-75">
                      Guiding teams to achieve project objectives.
                    </p>
                  </div>

                  <div className="product-design-2">
                    <div className="group-17">
                      <div className="overlap-group-18">
                        <img
                          className="vector-14"
                          alt="Vector"
                          src="/img/vector-70.png"
                        />

                        <img
                          className="vector-15"
                          alt="Vector"
                          src="/img/vector-71.png"
                        />

                        <img
                          className="vector-16"
                          alt="Vector"
                          src="/img/vector-72.png"
                        />

                        <img
                          className="vector-17"
                          alt="Vector"
                          src="/img/vector-73.png"
                        />

                        <img
                          className="vector-18"
                          alt="Vector"
                          src="/img/vector-74.png"
                        />

                        <img
                          className="vector-19"
                          alt="Vector"
                          src="/img/vector-75.png"
                        />
                      </div>
                    </div>

                    <div className="text-wrapper-82">Product Design</div>

                    <p className="text-wrapper-75">
                      Creating innovative and user-centric products.
                    </p>
                  </div>
                </div>

                <div className="about-2">
                  <div className="overlap-8">
                    <div className="text-wrapper-63">About</div>

                    <img
                      className="line-17"
                      alt="Line"
                      src="/img/line-5-19.png"
                    />

                    <img
                      className="line-18"
                      alt="Line"
                      src="/img/line-6-19.png"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {screenWidth >= 1440 && (
          <header className="header">
            <img
              className="unnamed-removebg-3"
              alt="Unnamed removebg"
              src="/img/unnamed-1-removebg-preview-1-3.png"
            />

            <div className="overlap-9">
              <img className="line-19" alt="Line" src="/img/line-7-1.png" />

              <div className="frame-12">
                <div className="home">
                  <div className="text-wrapper-83">Home</div>
                </div>

                <div className="about-3">
                  <div className="text-wrapper-83">About</div>
                </div>

                <div className="skills-4">
                  <div className="text-wrapper-84">Skills</div>
                </div>

                <div className="portfolio-4">
                  <div className="text-wrapper-85">Portfolio</div>
                </div>

                <div className="div-wrapper-2">
                  <div className="text-wrapper-86">Resume</div>
                </div>

                <div className="contact-3">
                  <div className="text-wrapper-87">Contact</div>
                </div>
              </div>
            </div>

            <img className="line-20" alt="Line" src="/img/line-8-1.png" />

            <img className="line-21" alt="Line" src="/img/line-10-1.png" />
          </header>
        )}

        <div
          className="overlap-10"
          style={{
            height:
              screenWidth < 1440
                ? "785px"
                : screenWidth >= 1440
                  ? "900px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "446px"
                : screenWidth >= 1440
                  ? "1446px"
                  : undefined,
          }}
        >
          {screenWidth < 1440 && (
            <>
              <div className="homepage-section">
                <div className="overlap-11">
                  <div className="my-work">
                    <div className="overlap-group-20">
                      <div className="rectangle-10" />

                      <div className="text-wrapper-88">My Work</div>

                      <img
                        className="arrow"
                        alt="Arrow"
                        src="/img/arrow-8-2.png"
                      />
                    </div>
                  </div>

                  <p className="full-stack-maestro">
                    <span className="text-wrapper-89">Full-Stack Maestro</span>

                    <span className="text-wrapper-90">, </span>

                    <span className="text-wrapper-89">AI/ML Visionary</span>

                    <span className="text-wrapper-90">, </span>

                    <span className="text-wrapper-89">Design Innovator</span>

                    <span className="text-wrapper-90">.</span>

                    <span className="text-wrapper-91">
                      {" "}
                      Discover how I leverage my diverse skillset as a Lead
                      Solutions Architect &amp; Product Engineer to create
                      cutting-edge digital experiences.
                    </span>
                  </p>

                  <p className="lead-solutions">
                    Lead Solutions Architect &amp; Product Engineer
                  </p>

                  <p className="hello-i-m-maheswar">
                    <span className="text-wrapper-92">Hello, I’m </span>

                    <span className="text-wrapper-93">Maheswar Barrenkala</span>

                    <span className="text-wrapper-92">,</span>
                  </p>
                </div>
              </div>

              <div className="mobile-header-bar">
                <div className="group-18">
                  <img
                    className="unnamed-removebg-4"
                    alt="Unnamed removebg"
                    src="/img/unnamed-1-removebg-preview-1-3.png"
                  />

                  <img className="menu-2" alt="Menu" src="/img/menu-2.png" />
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1440 && (
            <div className="overlap-12">
              <div className="my-work-2">
                <div className="overlap-group-21">
                  <div className="rectangle-11" />

                  <div className="text-wrapper-94">My Work</div>

                  <img
                    className="arrow-2"
                    alt="Arrow"
                    src="/img/arrow-8-2.png"
                  />
                </div>
              </div>

              <p className="hello-i-m-maheswar-2">
                <span className="text-wrapper-92">Hello, I’m </span>

                <span className="text-wrapper-95">Maheswar Barrenkala</span>

                <span className="text-wrapper-92">,</span>
              </p>

              <p className="lead-solutions-2">
                Lead Solutions Architect &amp; Product Engineer
              </p>

              <p className="full-stack-maestro-2">
                <span className="text-wrapper-89">Full-Stack Maestro</span>

                <span className="text-wrapper-90">, </span>

                <span className="text-wrapper-89">AI/ML Visionary</span>

                <span className="text-wrapper-90">, </span>

                <span className="text-wrapper-89">Design Innovator</span>

                <span className="text-wrapper-91">
                  . Discover how I leverage my diverse skillset as a Lead
                  Solutions Architect &amp; Product Engineer to create
                  cutting-edge digital experiences.
                </span>
              </p>

              <div className="homepage-header-2">
                <div className="frame-13">
                  <div className="home-2">
                    <div className="text-wrapper-83">Home</div>
                  </div>

                  <div className="about-3">
                    <div className="text-wrapper-83">About</div>
                  </div>

                  <div className="skills-4">
                    <div className="text-wrapper-84">Skills</div>
                  </div>

                  <div className="portfolio-4">
                    <div className="text-wrapper-85">Portfolio</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-86">Resume</div>
                  </div>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-87">Contact</div>
                  </div>
                </div>

                <img
                  className="unnamed-removebg-5"
                  alt="Unnamed removebg"
                  src="/img/unnamed-1-removebg-preview-1-3.png"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
