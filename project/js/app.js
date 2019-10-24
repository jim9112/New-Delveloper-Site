const grid = document.querySelector('.grid');
const menuContainer = document.querySelector('.menu-container');
const outerMenuBox = document.querySelector('.menu-outer');
const menuIcon = document.querySelector('.menuIcon');
const main = document.querySelector('.main');
const banner = document.querySelector('.banner');
const constructor = document.getElementById('construction');
let counter = 0;

// clears content box
const clearContent = () => {
    let lastmessage = document.getElementById('construction');
    lastmessage.innerHTML = '';
};

// builds output for social tab
let socialOutput = '';
socialOutput += '<a href="https://github.com/jim9112" target="_blank"><img src="media/github-brands.svg" class="icon"></a>';
socialOutput += '<a href="https://twitter.com/jim9112" target="_blank"><img src="media/twitter-brands.svg" class="icon"></a>';
// socialOutput += '<a href="https://stackoverflow.com/users/8940844/james-hannan" target="_blank"><img src="media/stack-overflow-brands.svg" class="icon"></a>';
socialOutput += '<a href="https://www.linkedin.com/in/james-hannan-811771144/" target="_blank"><img src="media/linkedin-in-brands.svg" class="icon"></a>';

// social content creator
const addSocial = () => {
    banner.textContent = 'Follow me on these social networking platforms';
    constructor.innerHTML = socialOutput;
};

// about content creator
const addAbout = () => {
    banner.textContent = 'Here is a little bit about me';
    constructor.innerHTML = `<h3>My name is James and I am currently studying web development at Southern New Hampshire University. I live in Southern New Hampshire where I am a father, husband, and avid cyclist. I enjoy working with NodeJS and React and I look forward to using my JavaScript skills to build your progressive web application.</h3>`;
};

// project content creator
const addProject = () => {
    banner.textContent = 'Here are some things that I have made';
    const projectBox = document.createElement('div');
    projectBox.innerHTML = `<img class="image" src="${projectList[counter].image}">`;
    constructor.appendChild(projectBox);
    const description = document.createElement('div');
    description.className = 'description';
    description.innerHTML = `<h4>${projectList[counter].description}<h4>`;
    constructor.appendChild(description);
    createOtherButton('Try It');
    createOtherButton('Next');
};

// creates other buttons inside constructor
function createOtherButton(textContent) {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = textContent;
    button.className = 'button ' + textContent;
    button.style = 'margin: 20px;';
    button.textContent = textContent;
    constructor.appendChild(button);
}

// event listener for menu buttons
menuContainer.addEventListener('click', (e) => {
    if (e.target.id === 'About') {
        clearContent();
        addAbout();
    } else if (e.target.id === 'Projects') {
        const section = e.target.id;
        clearContent();
        addProject();
    } else if (e.target.id === 'Social') {
        clearContent();
        addSocial();
    } 
});

// event listener for buttons on project screen
main.addEventListener('click', (e) => {
    if (e.target.id === 'Try It') {
        window.open(`${projectList[counter].location}`, '_blank');
    } else if (e.target.id === 'Next') {
        clearContent();
        counter += 1;
        if (counter >= projectList.length){
            counter = 0;
        }
        addProject();
    }
});

// Eventlistener for hamburger menu (mobile view)
menuIcon.addEventListener('click', (e) => {
    outerMenuBox.style.display = 'block';
    outerMenuBox.onclick = (e) => outerMenuBox.style.display = 'none';
});