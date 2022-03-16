import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/useModeTheme";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FormProject = () => {
    const [name, setName] = useState('')
    const [liveUrl, setLiveUrl] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [githubUrl, setGithubUrl] = useState('')
    const [description, setDescription] = useState('')
    const [token, setToken] = useState('');
    const [statusMessage, setStatusMessage] = useState('')
    
    const { mode } = useTheme()
    let navigate = useNavigate();


    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, [])
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (token === (process.env.REACT_APP_TOKEN)) {
            const projectDatas = { name, imgUrl, liveUrl, githubUrl, description };

            fetch('http://localhost:8000/projects/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(projectDatas)
            }).then(() => {
                navigate('/');
                setStatusMessage("Succesfully Added A New Project")
            });
            console.log(projectDatas);
        }
        setStatusMessage("Incorrect Token")

       
    }

    return (
        <form onSubmit={handleSubmit} class="form-add" data-aos="fade-right">
            <h4 className={mode}>Add New Project</h4>

            <div className="add-box">
                <div class="input-container ic2">
                    <input id="Name" class="input " onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="Name" class="placeholder">Name</label>
                </div>
                <div class="input-container ic2">
                    <input id="imgUrl" class="input" type="text" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="imgUrl" class="placeholder">Image Url</label>
                </div>
                <div class="input-container ic2">
                    <input id="Live" class="input" type="text" onChange={(e) => setLiveUrl(e.target.value)} value={liveUrl} placeholder=" " required/>
                    <div class="cut cut-short"></div>
                    <label for="Live" class="placeholder">Live Url</label>
                </div>
                <div class="input-container ic2">
                    <input id="github" class="input" type="text" onChange={(e) => setGithubUrl(e.target.value)} value={githubUrl} placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="github" class="placeholder">Github Url</label>
                </div>
                <div class="input-container ic2">
                    <input id="Text" class="input" type="text" onChange={(e) => setDescription(e.target.value)} value={description} placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="Text" class="placeholder">Description</label>
                </div>
                <div class="input-container ic2">
                    <input id="token" class="input" type="password" onChange={(e) => setToken(e.target.value)} value={token} placeholder=" " required/>
                    <div class="cut cut-short"></div>
                    <label for="token" class="placeholder">Token</label>
                </div>
            <button type="text" class="btn-custom btn-cvs">Add Project</button>
             {handleSubmit && <p>{statusMessage}</p>}
            </div>

        </form>
    );
}

export default FormProject;