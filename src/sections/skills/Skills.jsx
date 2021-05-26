import React, { useState } from "react";
import "./skills.css"
import Programming from "./components/Programming";
import Cms from "./components/Cms"
import Databases from "./components/Databases"
// import Zoom from '@material-ui/core/Zoom';

const Skills = () =>{

    const [programming, setProgramming] = useState(true);
    const [cms, setCms] = useState(false);
    const [database, setDB] = useState(false);
    

    function onclickprogramming(){
        setProgramming(true);
        setCms(false);
        setDB(false);
    }

    function onclickcms(){
        setProgramming(false);
        setCms(true);
        setDB(false);
    }

    function onclickdatabase(){
        setProgramming(false);
        setCms(false);
        setDB(true);
    }

    let programcolor = "";
    let cmscolor = "";
    let databasecolor = "";

    if (programming === true){
        programcolor = "#c6ffc1";
    }

    if (cms === true){
        cmscolor = "#c6ffc1";
    }

    if (database === true){
        databasecolor = "#c6ffc1";
    }
    


    return (
        <div className="skills">
            <div>
                <h1 className="skill-heading"><strong>Our Skills</strong></h1>
            </div>
            <div className="topskillrow">
            <div class="row">
                <div class="col-lg-4">
                    <h4 class="programmingHeading" onClick={onclickprogramming} style={{backgroundColor: programcolor, borderRadius: "5%"}}>Programming</h4>
                </div>

                <div class="col-lg-4">
                    <h4 class="cmsheading" onClick={onclickcms} style={{backgroundColor: cmscolor, borderRadius: "5%"}}>CMS & Frameworks</h4>
                </div>

                <div class="col-lg-4">
                    <h4 class="databaseHeading" onClick={onclickdatabase} style={{backgroundColor: databasecolor, borderRadius:"5%"}}>Database & Cloud</h4>
                </div>
            </div>
            </div>

             
            
            {programming && 
            <Programming checked={programming}/>}
        
            
            {cms && 
            <Cms checked={cms}/>}

            
            
            {database && 
            <Databases checked={database}/>}
            
            
            
            
        </div>
    )
}

export default Skills;