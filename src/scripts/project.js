import Project from '../assets/images/project.jpg'
import Git from '../assets/images/git.png';

export function projectSection() {
    createHeading();
    createCards();
}

function createHeading() {
    const projectsContainer = document.querySelector('.projects-heading');

    const heading = document.createElement('p');
    heading.textContent = 'Projects';
    heading.classList.add('projects-heading-text');

    projectsContainer.appendChild(heading);
}

function createCards() {
    const projectsContainer = document.querySelector('.projects-section');
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
        const card = document.createElement('div');
        card.classList.add('project-card');

        const image = document.createElement('img');
        image.src = project.image;
        image.classList.add('project-img');

        const header = document.createElement('div');
        header.classList.add('project-header');

        const title = document.createElement('p');
        title.textContent = project.title;
        title.classList.add('project-title');

        const icon = document.createElement('img');
        icon.src = project.github;
        icon.classList.add('project-icon');

        header.appendChild(title);
        header.appendChild(icon);

        const description = document.createElement('p');
        description.textContent = project.description;
        description.classList.add('project-description');

        card.appendChild(image);
        card.appendChild(header);
        card.appendChild(description);

        projectsContainer.appendChild(card);
    });
}
