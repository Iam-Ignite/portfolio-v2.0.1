import React from "react";
import "./home.css"
import { Chart } from '../libs/Chart'
import { useTheme } from "../hooks/useModeTheme";



const Home = () => {

const { mode } = useTheme()

return (
        <section className={`home-section ${mode}`} id="home">
            <div className="home-main">
                <div className="bg-home">
                    <Chart />
                </div>
                <div className="home-page">
                    <div className="home-content">
                        <h1 className={mode}>Hi, I'm <span>Faith Godwin</span>. <br />Web Developer</h1>
                        <b>Specialized in client side development</b>
                        <br />
                        <a href="/assets/Faith Godwin -  Resume (1).pdf"> 
                        <button className="btn-cv">View CV</button></a> <a href="/assets/Faith Godwin -  Resume (1).pdf" download> <button className="btn-cvs">Download CV</button></a>
                    </div>
                    <div className="home-content bg-img">
                        <img className="img-profile" src="/assets/Group 3 (1).svg" alt="porile-imag" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;