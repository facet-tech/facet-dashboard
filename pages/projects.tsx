import React, { useEffect } from "react";
import Admin from "../layouts/Admin.js";

const Projects = () => {

    useEffect(() => {

        return () => {
            // HTTP call here..
        }
    }, []);

    return <>
        <h2>Workspace domains</h2>
        <ul>
            <li> <a href='https://facet.run'>https://facet.run</a></li>
        </ul>
    </>
}

Projects.layout = Admin;

export default Projects;
