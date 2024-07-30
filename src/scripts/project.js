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

    projects.forEach((project) => {
        const projectCardContainer = document.querySelector(".project-card-container");
        const image = createImage(project.image);
        projectCardContainer.appendChild(image);

        const title = createTitle(project.title, project.github);
        projectCardContainer.appendChild(title);

        const description = createDescription(project.description);
        projectCardContainer.appendChild(description);
    })
}

function createImage(image){
    const imageContainer = document.querySelector(".project-image");
    imageContainer.classList.add('project-image-container');
    const projectImage = document.createElement('img');
    projectImage.src = image;
    projectImage.classList.add('project-img');
    imageContainer.appendChild(projectImage);
    return imageContainer;
}

function createTitle(title, icon){
    const projectHeader = document.querySelector(".project-header")
    const projectTitleContainer = document.querySelector(".project-heading")
    const projectTitle = document.createElement("p")
    projectTitle.textContent = title
    projectTitle.classList.add("project-title")
    projectTitleContainer.appendChild(projectTitle)
    projectHeader.appendChild(projectTitleContainer)

    const projectIconContainer = document.querySelector(".links")
    const projectIcon = document.createElement("img")
    projectIcon.src = icon
    projectIcon.classList.add("project-icon")
    projectIconContainer.appendChild(projectIcon)
    projectHeader.appendChild(projectIconContainer)

    return projectHeader;
}

function createDescription(description){
    const projectDescription = document.querySelector(".project-text")
    const projectDescriptionText = document.createElement("p")
    projectDescriptionText.textContent = description
    projectDescriptionText.classList.add("project-description-text")
    projectDescription.appendChild(projectDescriptionText)
    return projectDescription;
}