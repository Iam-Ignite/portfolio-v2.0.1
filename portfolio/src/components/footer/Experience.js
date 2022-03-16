import React, { useEffect } from "react";
import { useTheme } from "../hooks/useModeTheme";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Experiences = () => {
    const { mode } = useTheme()

    useEffect(() => {
        const activePage = window.location.pathname;
        const sliding = activePage === "/" ? true : "";
        var counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = sliding;
            counter++;
            if (counter > 3) {
                counter = 1;
            }
        }, 10000);
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <section className={`experince-section ${mode}`} data-aos="fade-up">
                <h2 style={{ textAlign: 'center', padding: '3rem 0' }} className={mode}>experience</h2>

                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />
                        <div className="slide first">
                            <img src="http://brightstar.ng/wp-content/uploads/2019/03/brightstar-logo.png" alt="kjjnkj" />
                            <p className={mode} style={{ textAlign: "center" }}> Brightstar Integral Technology is a service delivery company that provide a combination of technology and media services we are led by certified professional with expertise in Research, Design, Development and Delivery of high-end Technology Solution services</p>
                           <a href="https://brightstar.ng/">
                           <center><button className="btn-cvs" style={{ marginTop:"18px"}}>Learn More</button></center>
                           </a>
                        </div>
                        <div className="slide">
                            <img src="https://resumepage.netlify.app/static/media/i4g.9476a2d1.png" alt="nkkjnk" />
                            <p className={mode} style={{ textAlign: "center" }}>HNG Internship is a long running, large scale virtual internship for people learning to code and design. It focuses on the post-training phase, and creates a virtual work environment for participants.</p>
                            <a href="https://internship.zuri.team/">
                           <center><button className="btn-cvs" style={{ marginTop:"18px"}}>Learn More</button></center>
                           </a>
                        </div>
                        <div className="slide">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAUVBMVEX///8AAADnMytgYGCAgIDf399AQEC/v78gICCfn5/v7++vr6/pQDgwMDBQUFAQEBDzmZXqTEWPj4/+8vL2srD0pqLsWVNvb2/wf3v85uXPz89b/NAUAAACL0lEQVR4nO3Y6XaCMBCGYUR2BRV37/9CS4EgQsCknVjteZ9/sgwfSmY4eh4AAAAAAAAAAAAAAAAAAAAAAAAAfJpwgvyV4jSWKpUs9MQu0Aq/L5QIfRevCt1cJ5Es5jx0LFr2RaHTtmwqUu0/fdNSS6YT1WVz4aq1TN3DSrpyWFRVo0y67LdlmzlwUDuMHTR/775chDrTS4Tq4XDzlbgRtZnL0Z4wqHWfV/XHYf+Ku61ZWSSPy6I5Q3ypeEGbeTne1Xas7nPz7EfaAtXWYDNqycup0r8TznQ7q9BZrpkjjkKrB1o3tKxC57o6bkKrh+Os22kTWnlBaDVn9d3uPUM/6XbvGfrJKLQMHaXVvT+ObAeh1SgsJvbbhdbduXxo9XBMvttZhR5u7p0hGVqNwslXdKvQ2nfmmdD77c73T5erXebZbmcdeqOtMB36sPZr66NN5m4UTh9iOcZtQh/9zsEitMG73TB0IRb6ur6HXu+NM59n1vwgdHdbiVjoi9+zNc28Wsys+UFotcRu+lN+EvrUD70zzPy02zVHPf4YhVxo/4FhaDUK5/+QyJqDNs2dqQfqr0KrUTgyuAn1ewRxXKquLhJ61898MgsdjONqQ2uPkwi97Ye+yIbONo5C7/stz3Aomob2yv7OJBIL7R3uoU1HonHo/pF5KDgRvaMa48YD0Ty0d2sXYF6KjvFqKF6qZr3bmo9DK1mcpukn/ZEDAAAAAAAAAAAAAAAAAAAAAABg5wtB6BDSu2g4ogAAAABJRU5ErkJggg==" alt="jkbjk" />
                            <p className={mode} style={{ textAlign: "center" }}>After finishing my internship i will promoted to work for ZuriChat project which last for three month, Our was my team was able to finshing the project and we got pay and desolve as the program ended</p>
                            <a href="https://internship.zuri.team/">
                          <center> <button className="btn-cvs" style={{margin:"auto", marginTop:"18px"}}>Learn More</button></center>
                           </a>
                        </div>

                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                        </div>
                    </div>
                    <div className="navigation-manual">
                        <label for="radio1" className="manual-btn"></label>
                        <label for="radio2" className="manual-btn"></label>
                        <label for="radio3" className="manual-btn"></label>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Experiences;
