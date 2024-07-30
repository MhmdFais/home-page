import Project from '../assets/images/project.jpg'
import Git from '../assets/images/git.png';

export function projectSection(){
    createCards();
}

function createCards(){
    const projectsContainer = document.querySelector('.projects-section');

    const header = createHeader();
    projectsContainer.appendChild(header);

    const cards = createCards();
}

function createHeader(){
    const headerContainer = document.querySelector('.projects-heading');
    const header = document.createElement('p');
    header.classList.add('projects-header');
    header.textContent = 'Projects';
    headerContainer.appendChild(header);
    return headerContainer;
}

function createCards(){
    const projects = [
        {
            title: 'Project 1',
            description: 'This is the first project',
            image: Project,
            github: Git,
            link: ''
        },
        {
            title: 'Project 2',
            description: 'This is the second project',
            image: Project,
            github: Git,
            link: ''
        },
        {
            title: 'Project 3',
            description: 'This is the third project',
            image: Project,
            github: Git,
            link: ''
        },
        {
            title: 'Project 4',
            description: 'This is the fourth project',
            image: Project,
            github: Git,
            link: ''
        },
        {
            title: 'Project 5',
            description: 'This is the fifth project',
            image: Project,
            github: Git,
            link: ''
        },
        {
            title: 'Project 6',
            description: 'This is the sixth project',
            image: Project,
            github: Git,
            link: ''
        }
    ];
}