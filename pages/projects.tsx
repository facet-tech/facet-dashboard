import React, { useEffect } from "react";
import StyledH2 from "../components/StyledH2";
import Admin from "../layouts/Admin.js";

const Projects = () => {

    useEffect(() => {

        return () => {
            // HTTP call here..
        }
    }, []);

    return <>
        <StyledH2>Workspace domains</StyledH2>
        <ul>
            <li> <a href='https://facet.run'>https://facet.run</a></li>
        </ul>
    </>
}

Projects.layout = Admin;

export default Projects;
