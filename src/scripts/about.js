import ProfileImage from '../assets/images/profile.jpg';
import Git from '../assets/images/git.png';
import Link from '../assets/images/lin.svg';

export function aboutSection(){
    createAbout();
}

function createAbout(){
    const aboutContainer = document.querySelector(".about-section");

    const image = createImage();
    aboutContainer.appendChild(image);

    const text = createAboutText();
    aboutContainer.appendChild(text);
}

function createImage(){
    const imageContainer = document.querySelector(".about-image")
    const image = document.createElement("img");
    image.classList.add("profile-image");
    image.src = ProfileImage;
    image.alt = "Profile Image";
    imageContainer.appendChild(image);
    return imageContainer;
}

function createAboutText(){
    const textContainer = document.querySelector(".about-text");

    const header = document.createElement("p");
    header.classList.add("about-header");
    header.textContent = "About Me";
    textContainer.appendChild(header);

    const text = document.createElement("p");
    text.classList.add("about-text-para");
    text.textContent = "I am John, I am a full stack developer with experience in JavaScript, React, Node.js, and MongoDB. I am passionate about creating user friendly applications that are both functional and visually appealing and I am currently seeking new opportunities to further develop my skills and contribute to a team.";
    textContainer.appendChild(text);

    const contacts = createContacts();
    textContainer.appendChild(contacts);

    return textContainer;
}

function createContacts(){
    const contactsContainer = document.createElement("div")
    contactsContainer.classList.add("about-contacts-container")

    const git = document.createElement("a");
    git.href = "";
    git.classList.add("contact-link");
    const gitImage = document.createElement("img");
    gitImage.src = Git;
    gitImage.alt = "Github";
    gitImage.classList.add("contact-image");
    git.appendChild(gitImage);
    contactsContainer.appendChild(git);

    const linkedin = document.createElement("a");
    linkedin.href = "";
    linkedin.classList.add("contact-link");
    const linkedinImage = document.createElement("img");
    linkedinImage.src = Link;
    linkedinImage.alt = "LinkedIn";
    linkedinImage.classList.add("contact-image");
    linkedin.appendChild(linkedinImage);
    contactsContainer.appendChild(linkedin);

    return contactsContainer;
}