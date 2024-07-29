import ProfileImage from '../assets/images/profile.jpg';

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
    const text = document.createElement("p");
    text.textContent = "I am a full stack developer with experience in JavaScript, React, Node.js, and Ruby on Rails. I am passionate about creating user-friendly applications that are both functional and visually appealing. I am currently seeking new opportunities to further develop my skills and contribute to a team.";
    textContainer.appendChild(text);
    return textContainer;
}