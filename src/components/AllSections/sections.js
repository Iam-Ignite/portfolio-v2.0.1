import React,{ useEffect } from "react";
import { useTheme } from "../hooks/useModeTheme";
import PieChart from "../libs/PieChart";
import "./allsections.css"
import ProjectList from "./ProjectsList";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


const AllSections = () => {
    
    useEffect(() => {
     AOS.init({duration: 1500})
    }, [])
  
   const dataArr = ['JavaScript','ReactJs','HTML','Css/sass','boostrap,tailwind','Jquery', 'Nextjs'];
   const { mode } = useTheme();
 
    return (

        <section className={`projcet-section ${mode}`}>
            <div className="project-main">
                  <ProjectList/>
                <Link to="projects"><button className="btn-custom btn-cv">View CodePen for more project</button></Link>
            </div>

            <div className="project-main" id="skills">
                <div className="project-item-2" data-aos="fade-up">
                    <h2 className={mode}>Skills</h2>
                    <div className="mypie">
                        <PieChart/>
                      <div className="skill-level">
                         {dataArr.map(col => (
                         <div className="levels" key={col}>
                            <span className={`skill-col ${mode}`}>{col}</span>
                        </div>
                        ))}
                      </div>
                    </div>
                </div>

                <div className="project-item-3" data-aos="fade-down">
                    <h2 className={mode}>About Me</h2>
                    <p className={mode}>I’m a <span>Front-End Developer</span>
                        located in Nigeria. I have a serious passion for UI effects,
                        animations and creating intuitive, dynamic user experiences. I'm a
                        <span> Software Engineer</span> with <span>2+ years experience </span> on
                        <span> client-side</span><span>
                             technologies</span>. The primary area of my interest is
                        <span>client-side</span>.
                    </p>
                    <p className={mode}>I have a business minded and idea driven personality and I am
                        <span> passionate</span> about building <span> innovative solutions
                        </span> with great <span>teams</span> that contribute directly or indirectly to the betterment of
                        the task at hand.
                    </p>
                    <a href="https://web.facebook.com/Mula.feels.9/"><span><img src="./assets/facebook-brands.svg" alt="hghcgcg" className="lang-icon" height="20" /> </span></a>
                    <a href="https://www.linkedin.com/in/faith-godwin-163a48213/"> <span><img src="./assets/linkedin-brands.svg" alt="hfggfhh" className="lang-icon" height="20" /></span> </a>
                    <a href="https://www.instagram.com/mr_loop233/"><span><img src="./assets/instagram-brands.svg" className="lang-icon" alt="jf" height="20" /></span></a>
                    <a href="https://github.com/Iam-Ignite"><span><img src="./assets/github-brands.svg" className="lang-icon" height="20" alt="gchch" /></span></a>
                </div>
                <div className="project-item-2 form" data-aos="fade-right" id="contact">
                    <div className="input_container ">
                        <h4 className={mode}>Send me a message</h4>

                        <form action="https://formsubmit.co/faithgodwin821@gmail.com" method="POST">
                            <p className={mode} type="Name:"><input className="input-field" name="Name" type="text" placeholder="Write your name here.." required></input></p>
                            <p className={mode} type="Email:"><input className="input-field" name="Email" type="text" placeholder="Let us know how to contact you back.." required></input></p>
                            <p className={mode} type="Message:"><textarea name="Message" placeholder="What would you like to tell us.." required></textarea></p>
                            <input type="hidden" name="_next" value="https://faith-thank-you.netlify.app/" />
                            <input type="hidden" name="_captcha" value="false" />
                            <button className="btn-custom btn-cvs">Send Message</button>
                            <div className="callp">
                                <span className="fa fa-phone"></span>+2348050768489
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default AllSections;