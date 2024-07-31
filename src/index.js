import './style.css';
import {aboutSection} from './scripts/about'
import {projectSection} from './scripts/project'


document.addEventListener("DOMContentLoaded", () => {
    aboutSection();
    projectSection();
})