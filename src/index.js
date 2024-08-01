import './style.css';
import {aboutSection} from './scripts/about'
import {projectSection} from './scripts/project'
import {contactSection} from './scripts/contact'


document.addEventListener("DOMContentLoaded", () => {
    aboutSection();
    projectSection();
    contactSection();
})