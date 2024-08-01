import ProfileImage from '../assets/images/profile.jpg';
import Git from '../assets/images/git.png';
import Link from '../assets/images/lin.svg';

export function contactSection(){
    createContact();
}

function createContact(){
    const contactContainer = document.querySelector(".contact-section");

    const text = createContactText();
    contactContainer.appendChild(text);

    const image = createContactImage();
    contactContainer.appendChild(image);
}

function createContactText(){
    const textContainer = document.createElement("div");
    textContainer.classList.add("contact-text");

    const header = document.createElement("p");
    header.classList.add("contact-header");
    header.textContent = "Contact Me";
    textContainer.appendChild(header);

    const text = document.createElement("p");
    text.classList.add("contact-text-para");
    text.textContent = "Feel free to reach out to me if you have any questions or would like to collaborate on a project.";
    textContainer.appendChild(text);

    const git = document.createElement("a");
    git.href = ""
    git.classList.add("contact-link");
    const gitImage = document.createElement("img");
    gitImage.src = Git;
    gitImage.alt = "Github";
    gitImage.classList.add("contact-image");
    git.appendChild(gitImage);
    textContainer.appendChild(git);

    const lin = document.createElement("a");
    lin.href = ""
    lin.classList.add("contact-link");
    const linImage = document.createElement("img");
    linImage.src = Link;
    linImage.alt = "LinkedIn";
    linImage.classList.add("contact-image");
    lin.appendChild(linImage);
    textContainer.appendChild(lin);

    return textContainer;
}

function createContactImage(){
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("contact-image-container");

    const image = document.createElement("img");
    image.classList.add("profile-image");
    image.src = ProfileImage;
    image.alt = "Profile Image";
    imageContainer.appendChild(image);

    return imageContainer;
}
