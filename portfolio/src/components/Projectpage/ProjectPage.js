import ProjectList from "../AllSections/ProjectsList";
import Footer from "../footer/Footer";
import { useTheme } from "../hooks/useModeTheme";
import SubNav from "../Navbar/SubNav";
import './projectPage.css'


const ProjectPage = () => {
    const { mode } = useTheme();

    return (
        <div className={`app ${mode}`}>
            <SubNav />
            <div className="pro-main">
                <ProjectList />
            </div>
            <Footer />
        </div>
    );
}

export default ProjectPage;