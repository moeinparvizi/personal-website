function displayMenu(sub, menuH) {
  sub.style.transition = "1s";
  if (sub.style.opacity === "0") {
    sub.style.opacity = "1";
    sub.style.visibility = 'visible'
    menuH.classList.add('clickMenuEffect');

  }
  else {
    sub.style.opacity = "0";
    sub.style.visibility = 'hidden'
    menuH.classList.remove('clickMenuEffect');
  }
}

// project details shoing 
const socials = document.getElementById('socials');
socials.style.top = "0px";
socials.style.opacity = "0";
function socialUp() {
  socials.style.transition = ".4s";
  if (socials.style.top === "0px") {
    socials.style.top = "-73px";
    socials.style.opacity = "1";
  }
  else {
    socials.style.top = "0px";
    socials.style.opacity = "0";
  }
}


const socials2 = document.getElementById('socials2');
socials2.style.top = "0px";
socials2.style.opacity = "0";
function socialUp2() {
  socials2.style.transition = ".4s";
  if (socials2.style.top === "0px") {
    socials2.style.top = "-73px";
    socials2.style.opacity = "1";
  }
  else {
    socials2.style.top = "0px";
    socials2.style.opacity = "0";
  }
}


const socials3 = document.getElementById('socials3');
socials3.style.top = "0px";
socials3.style.opacity = "0";
function socialUp3() {
  socials3.style.transition = ".4s";
  if (socials3.style.top === "0px") {
    socials3.style.top = "-73px";
    socials3.style.opacity = "1";
  }
  else {
    socials3.style.top = "0px";
    socials3.style.opacity = "0";
  }
}
//
//
const socials4 = document.getElementById('socials4');
socials4.style.top = "0px";
socials4.style.opacity = "0";
function socialUp4() {
  socials4.style.transition = ".4s";
  if (socials4.style.top === "0px") {
    socials4.style.top = "-73px";
    socials4.style.opacity = "1";
  }
  else {
    socials4.style.top = "0px";
    socials4.style.opacity = "0";
  }
}

const socials5 = document.getElementById('socials5');
socials5.style.top = "0px";
socials5.style.opacity = "0";
function socialUp5() {
  socials5.style.transition = ".4s";
  if (socials5.style.top === "0px") {
    socials5.style.top = "-73px";
    socials5.style.opacity = "1";
  }
  else {
    socials5.style.top = "0px";
    socials5.style.opacity = "0";
  }
}
//
//
//const socials6 = document.getElementById('socials6');
//socials6.style.top = "0px";
//socials6.style.opacity = "0";
//function socialUp6() {
//  socials6.style.transition = ".4s";
//  if (socials6.style.top === "0px") {
//    socials6.style.top = "-73px";
//    socials6.style.opacity = "1";
//  }
//  else {
//    socials6.style.top = "0px";
//    socials6.style.opacity = "0";
//  }
//}

// scroll animation
const boxes = document.querySelectorAll(".box");
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {

  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}

// scroll skills animation
window.addEventListener('scroll', function() {
  const scroll = this.scrollY
  if (scroll > 1300) {
    this.document.getElementById('skills').classList.add('showSkills');
  }
  else {
    this.document.getElementById('skills').classList.remove('showSkills');
  }
})

// copy my number in clipboard
const text = '09107215381';
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    alert('copy number to your clipboard');
  } catch (err) {
    alert('i cant copy , open permission');
  }
}
// copy mail in clipboard
const gmail = 'giventulip@gmail.com'
const copyMail = async () => {
  try {
    await navigator.clipboard.writeText(gmail);
    alert('copy gmail to your clipboard');
  } catch (err) {
    alert('i cant copy , please open your permission');
  }
}
