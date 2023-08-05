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
