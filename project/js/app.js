const menuButton = document.querySelector('.menu');
const grid = document.querySelector('.grid');
const menuContainer = document.querySelector('.menu-container');
const main = document.querySelector('.main');


// clears content box
function clearContent() {
    var lastmessage = document.getElementById('construction');
    if (lastmessage != null) {
        lastmessage.parentNode.removeChild(lastmessage);
    }
}

// builds output for social tab
var socialOutput = '<h3>Follow me on these social networking platforms.</h3>';
socialOutput += '<a href="https://github.com/jim9112" target="_blank"><img src="media/github-brands.svg" class="icon"></a>';
socialOutput += '<a href="https://twitter.com/jim9112" target="_blank"><img src="media/twitter-brands.svg" class="icon"></a>';
socialOutput += '<a href="https://stackoverflow.com/users/8940844/james-hannan" target="_blank"><img src="media/stack-overflow-brands.svg" class="icon"></a>';
socialOutput += '<a href="https://www.linkedin.com/in/james-hannan-811771144/" target="_blank"><img src="media/linkedin-in-brands.svg" class="icon"></a>';

// adds the content div
function contentDiv() {
    clearContent();
    const content = document.createElement('div');
    content.id = 'construction';
    main.appendChild(content);

}

// social content creator
function addSocial() {
    const constructor = document.getElementById('construction');
    constructor.innerHTML = socialOutput;
}

// project content creatoe
const addProject = () => {
    const constructor = document.getElementById('construction');
    
}

// creates under construction message
function constructionMessageCreator(section) {
    clearContent();
    const underConstructionMessage = document.createElement('h1');
    underConstructionMessage.id = 'construction';
    underConstructionMessage.textContent = section + ': Coming Soon!!';
    main.appendChild(underConstructionMessage);

}

// create individual buttons
function createButton(textContent) {

    const button = document.createElement('button');
    button.type = 'button';
    button.id = textContent;
    button.className = 'button ' + textContent;
    button.textContent = textContent;
    menuContainer.appendChild(button);

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
        const section = e.target.id;
        constructionMessageCreator(section);
    } else if (e.target.id === 'Projects') {
        const section = e.target.id;
        constructionMessageCreator(section);
    } else if (e.target.id === 'Social') {
        contentDiv();
        addSocial();
    } else if (e.target.id === 'Contact') {
        const section = e.target.id;
        constructionMessageCreator(section);
    }
});