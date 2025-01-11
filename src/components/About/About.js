import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/foto.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Farhan Zibran</strong>. I am an undergraduate student at Ary Ginanjar University, majoring in Information Systems. During my time in college, I have gained invaluable experiences through both learning and practical applications, which have significantly enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which motivated me to pursue the Information Systems program. Despite the challenges this program presents, I have remained diligent and built the confidence that I can achieve success in the future.
            Throughout my studies at Ary Ginanjar University, I have had the opportunity to engage in various exciting projects. Some of my contributions include working in the fields of data, digital product development, developing websites for small and medium enterprises (SMEs), as well as projects that have been recognized by my peers, instructors, and clients.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
             Collaborating within a team to achieve shared goals has been an incredibly rewarding and unique experience for me. I am very enthusiastic about continuing to explore exciting projects in the future, with a particular interest in the field data.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
