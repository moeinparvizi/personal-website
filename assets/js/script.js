function displayMenu(sub,menuH){
        sub.style.transition = "1s";
    if (sub.style.opacity == "0"){
        sub.style.opacity = "1";
        sub.style.visibility = 'visible'
        menuH.classList.add('clickMenuEffect');

    }
    else{
        sub.style.opacity = "0";
        sub.style.visibility = 'hidden'
        menuH.classList.remove('clickMenuEffect');
    }
}

socials.style.top = "0px";
socials.style.opacity = "0";
function socialUp(){
    let socials = document.getElementById('socials');
    socials.style.transition = ".4s";
    if (socials.style.top == "0px"){
        socials.style.top = "-55px";
        socials.style.opacity = "1";
    }
    else{
        socials.style.top = "0px";
        socials.style.opacity = "0";
    }
}