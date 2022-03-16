import Footer from "../footer/Footer";
import { useTheme } from "../hooks/useModeTheme";
import SubNav from "../Navbar/SubNav";
import "./about.css"

const ContactPage = () => {
    const { mode } = useTheme();


    return (
        <div className={`app ${mode}`}>
            <SubNav />
            <div className="about-main">
                <div className="about-content">
                    <h2 className={mode}>About Me</h2>
                    <p className={mode}>Hey there 😃<br/>
                        My name is Faith Godwin and i am a web developer and freelancer with over 2 years of experience, over the years i has used quite a vairity of technologies.</p>
                        <p className={mode}>From the very start, i have always had a thing for technology and how it works, even as a kid i would like to use my broken toys and some electronic gadgets and start experimenting with them to see if i could invent some new.
                       Up until i was 17 i wasn't sure of what career path to take until my big brother introduce a whole new world you guess it, programming.</p>
                        <p className={mode}>I aways wonder how mobile games where made and how to create a website, So i decided to learn programming and to my greatest surprise i understood it, though it wasn't an easy ride i felt like i was making the word better one code at a time.  
                           Time passed which gave me the opportunity start an internship.</p>
                </div>
                <div className="about-content"></div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactPage;