const picture = document.querySelector('.reviews');
let theTurnA = 15;
let theTurnB = 15;
let theTurnC = 15;
picture.addEventListener('click', (e) => {
    if (e.target.className === 'flipA'){
        e.target.style = `transform: rotate(${theTurnA}deg)`;
        theTurnA += 15;
        if (theTurnA>360){
            theTurnA = 0;
        }
    } else if (e.target.className === 'flipB'){
        e.target.style = `transform: rotate(${theTurnB}deg)`;
        theTurnB += 15;
        if (theTurnB>360){
            theTurnB = 0;
        }
    } else if(e.target.className === 'flipC'){
        e.target.style = `transform: rotate(${theTurnC}deg)`;
        theTurnC += 15;
        if (theTurnC>360){
            theTurnC= 0;
        }
    }
});