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

const socials6 = document.getElementById('socials6');
socials6.style.top = "0px";
socials6.style.opacity = "0";
function socialUp6() {
  socials6.style.transition = ".4s";
  if (socials6.style.top === "0px") {
    socials6.style.top = "-73px";
    socials6.style.opacity = "1";
  }
  else {
    socials6.style.top = "0px";
    socials6.style.opacity = "0";
  }
}

const socials7 = document.getElementById('socials7');
socials7.style.top = "0px";
socials7.style.opacity = "0";
function socialUp7() {
  socials7.style.transition = ".4s";
  if (socials7.style.top === "0px") {
    socials7.style.top = "-73px";
    socials7.style.opacity = "1";
  }
  else {
    socials7.style.top = "0px";
    socials7.style.opacity = "0";
  }
}

const socials8 = document.getElementById('socials8');
socials8.style.top = "0px";
socials8.style.opacity = "0";
function socialUp8() {
  socials8.style.transition = ".4s";
  if (socials8.style.top === "0px") {
    socials8.style.top = "-73px";
    socials8.style.opacity = "1";
  }
  else {
    socials8.style.top = "0px";
    socials8.style.opacity = "0";
  }
}
const socials9 = document.getElementById('socials9');
socials9.style.top = "0px";
socials9.style.opacity = "0";
function socialUp9() {
  socials9.style.transition = ".4s";
  if (socials9.style.top === "0px") {
    socials9.style.top = "-73px";
    socials9.style.opacity = "1";
  }
  else {
    socials9.style.top = "0px";
    socials9.style.opacity = "0";
  }
}

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
window.addEventListener('scroll', function () {
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
    sweetAlert('copy number in your clipboard', true)
  } catch (err) {
    alert('i cant copy , open permission');
  }
}
// copy mail in clipboard
const gmail = 'giventulip@gmail.com'
const copyMail = async () => {
  try {
    await navigator.clipboard.writeText(gmail);
    sweetAlert('copy gmail in your clipboard', true)
  } catch (err) {
    alert('i cant copy , please open your permission');
  }
}

// customize mouse
let x = document.querySelector('.cursor')
window.addEventListener('mousemove', (e) => {
  x.style.transition = '0s'
  x.style.display = 'flex'
  x.style.left = e.pageX + 'px'
  x.style.top = e.pageY + 'px'
  // change title of tab when come back user
  document.title = 'moein parvizi'
})
document.body.addEventListener('mouseleave', () => {
  x.style.display = 'none'
  // change title of tab when left user
  document.title = 'come back ;('
})
window.addEventListener('click', () => {
  x.style.transition = '.2s'
  x.style.width = '30px'
  x.style.height = '30px'
  setTimeout(() => {
    x.style.width = '50px'
    x.style.height = '50px'
  }, 100);
})

// page line
const Th = document.querySelector('section').clientHeight
const line = document.querySelector('.pages-line')
window.addEventListener('scroll', function () {
  const st = this.scrollY
  line.style.width = (((st * 100) / Th) + 1) + '%'
  if (st == 0) {
    line.style.display = 'none'
  } else {
    line.style.display = 'flex'
  }
})

// alert for resume
const resume = (e) => {
  e.preventDefault()
  sweetAlert('the resume isn`t  yet complete', false)
}

// sweet alert library for alert in page
const sweetAlert = (str, bool) => {
  let icon
  if (bool == true) {
    icon = 'success'
  } else {
    icon = 'warning'
  }
  Swal.fire({
    title: str,
    icon: icon,
    confirmButtonColor: '#F668B4',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}

// scroll to in ham munu
document.querySelector('#aboutMenu').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView()
})
document.querySelector('#skillsMenu').addEventListener('click', () => {
  document.querySelector('#skills').scrollIntoView()
})
document.querySelector('#projectsMenu').addEventListener('click', () => {
  document.querySelector('.projects').scrollIntoView()
})
document.querySelector('#socialsMenu').addEventListener('click', () => {
  document.querySelector('#gofooter').scrollIntoView()
})
