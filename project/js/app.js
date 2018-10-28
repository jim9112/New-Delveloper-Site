const menuButton = document.querySelector('.menu');
const grid = document.querySelector('.grid');
const menuContainer = document.querySelector('.menu-container');
const main = document.querySelector('.main');
var counter = 0;

// clears content box
function clearContent() {
    var lastmessage = document.getElementById('construction');
    lastmessage.innerHTML = '';
    // if (lastmessage != null) {
    //     lastmessage.parentNode.removeChild(lastmessage);
    // }
}

// builds output for social tab
var socialOutput = '<h3>Follow me on these social networking platforms.</h3>';
socialOutput += '<a href="https://github.com/jim9112" target="_blank"><img src="media/github-brands.svg" class="icon"></a>';
socialOutput += '<a href="https://twitter.com/jim9112" target="_blank"><img src="media/twitter-brands.svg" class="icon"></a>';
socialOutput += '<a href="https://stackoverflow.com/users/8940844/james-hannan" target="_blank"><img src="media/stack-overflow-brands.svg" class="icon"></a>';
socialOutput += '<a href="https://www.linkedin.com/in/james-hannan-811771144/" target="_blank"><img src="media/linkedin-in-brands.svg" class="icon"></a>';


// social content creator
function addSocial() {
    const constructor = document.getElementById('construction');
    constructor.innerHTML = socialOutput;
}

// project content creator
const addProject = () => {
    const constructor = document.getElementById('construction');
    constructor.innerHTML = '<h3>Here are some things that I have made.</h3>';
    const projectBox = document.createElement('div');
    projectBox.innerHTML = `<img src="${projectList[counter].image}">`;
    constructor.appendChild(projectBox);
    const description = document.createElement('div');
    description.className = 'description';
    description.innerHTML = `<h4>${projectList[counter].description}<h4>`;
    constructor.appendChild(description);
    createOtherButton('Visit Project');
    createOtherButton('Next');
};

// creates under construction message
function constructionMessageCreator(section) {
    clearContent();
    const constructor = document.getElementById('construction');
    const underConstructionMessage = document.createElement('h1');
    underConstructionMessage.id = 'construction';
    underConstructionMessage.textContent = section + ': Coming Soon!!';
    constructor.appendChild(underConstructionMessage);

}

// create individual menu buttons
function createButton(textContent) {

    const button = document.createElement('button');
    button.type = 'button';
    button.id = textContent;
    button.className = 'button ' + textContent;
    button.textContent = textContent;
    menuContainer.appendChild(button);

}

// creates other buttons inside constructor
function createOtherButton(textContent) {
    const constructor = document.getElementById('construction');
    const button = document.createElement('button');
    button.type = 'button';
    button.id = textContent;
    button.className = 'button ' + textContent;
    button.style = 'margin: 20px;';
    button.textContent = textContent;
    constructor.appendChild(button);
}

// create menu buttons
menuButton.addEventListener('click', (e) => {
    createButton('About');
    createButton('Projects');
    createButton('Social');
    createButton('Contact');
    menuButton.style.display = 'none';
});

// event listener for menu buttons
menuContainer.addEventListener('click', (e) => {
    if (e.target.id === 'About') {
        clearContent();
        const section = e.target.id;
        constructionMessageCreator(section);
    } else if (e.target.id === 'Projects') {
        const section = e.target.id;
        // contentDiv();
        clearContent();
        addProject();
    } else if (e.target.id === 'Social') {
        // contentDiv();
        clearContent();
        addSocial();
    } else if (e.target.id === 'Contact') {
        clearContent();
        const section = e.target.id;
        constructionMessageCreator(section);
    }
});

// event listener for buttons on project screen
main.addEventListener('click', (e) => {
    if (e.target.id === 'Visit Project') {
        window.open(`${projectList[counter].location}`, '_blank');
    } else if (e.target.id === 'Next') {
        // contentDiv();
        clearContent();
        counter += 1;
        if (counter >= projectList.length){
            counter = 0;
        }
        addProject();
    }

});

