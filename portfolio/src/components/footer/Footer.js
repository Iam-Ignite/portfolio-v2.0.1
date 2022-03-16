import React, { useEffect } from "react";
import { useTheme } from "../hooks/useModeTheme";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    const { mode } = useTheme()
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    return (
        <>
            <footer className={mode}>
                <div className="footer">
                  <div class="elfsight-app-491ea368-c246-43a0-a3e6-3be49e855503"></div>
                    <p className={mode}> &copy; Faith Godwin 2022   </p><br />
                    <a href="https://web.facebook.com/Mula.feels.9/"><span><img src="./assets/icons8-facebook.gif" className="lang-icon" height="30" alt="jbrbfj" /> </span></a>
                    <a href="https://www.linkedin.com/in/faith-godwin-163a48213/"> <span><img src="./assets/icons8-linkedin-2.gif" className="lang-icon" height="30" alt="jbrbfj" /></span> </a>
                    <a href="https://www.instagram.com/mr_loop233/"><span><img src="./assets/icons8-instagram.gif" className="lang-icon" height="30" alt="jbrbfj" /></span></a>
                    <a href="https://github.com/Iam-Ignite"><span><img src="./assets/icons8-github.gif" className="lang-icon" height="30" alt="jbrbfj" /></span></a>
                    <a href="https://twitter.com/feelscodes02?t=FC-4qO2P390wnsB0swh59A&s=09"><span><img src="./assets/icons8-twitter.gif" className="lang-icon" height="30" alt="jbrbfj" /></span></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
