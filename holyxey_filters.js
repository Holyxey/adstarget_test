let social = document.getElementsByClassName('soc');
let prof = document.getElementsByClassName('prof');

let socialButton = document.getElementById('socialButton');
let profButton = document.getElementById('profButton');

let socialVis = 1;
let profVis = 0;

let zaglushkaBlock = document.getElementsByClassName('zaglushka');

if (social.length % 2 != 1) {

    for (let i = 0; i < zaglushkaBlock.length; i++) {
        zaglushkaBlock[i].style.cssText = 'display: none;';
    } 
    
}



function socialClick(el) {

    switch (socialVis) {
        case 1 :
            for (let i = 0; i < social.length; i++) {
                social[i].style.cssText = 'display: none';
                socialButton.style.cssText = 'border: 1px solid #55555520; color: #555555;';
            }
            socialVis = 0;
            break;
        case 0:
            for (let i = 0; i < social.length; i++) {
                social[i].style.cssText = 'display: flex';
                socialButton.style.cssText = 'border: 1px solid #FF4F92; color: #222222;';
            }
            socialVis = 1;
            break;
    }
    if (social.length % 2 != 1) {

        for (let i = 0; i < zaglushkaBlock.length; i++) {
            zaglushkaBlock[i].style.cssText = 'display: none;';
        } 
        
    }
    if (social.length % 2 == 1) {
    
        for (let i = 0; i < zaglushkaBlock.length; i++) {
            zaglushkaBlock[i].style.cssText = 'display: flex;';
        } 
        
    }
}

function profClick(el) {

    switch (profVis) {
        case 1 :
            for (let i = 0; i < prof.length; i++) {
                prof[i].style.cssText = 'display: none';
                profButton.style.cssText = 'border: 1px solid #55555520; color: #555555;';
            }
            profVis = 0;
            break;
        case 0:
            for (let i = 0; i < prof.length; i++) {
                prof[i].style.cssText = 'display: flex';
                profButton.style.cssText = 'border: 1px solid #FF4F92; color: #222222;';
            }
            profVis = 1;
            break;
    }
}

if (socialVis == 0) {
    for (let i = 0; i < social.length; i++) {
        social[i].style.cssText = 'display: none!important';
    }
} else {
    for (let i = 0; i < social.length; i++) {
        social[i].style.cssText = 'display: flex!important';
        socialButton.style.cssText = 'border: 1px solid #FF4F92; color: #222222!important;';
    }
}

if (profVis == 0) {
    for (let i = 0; i < prof.length; i++) {
        prof[i].style.cssText = 'display: none!important';
    }
} else {
    for (let i = 0; i < prof.length; i++) {
        prof[i].style.cssText = 'display: flex!important';
        profButton.style.cssText = 'border: 1px solid #FF4F92; color: #222222!important;';
    }
}


