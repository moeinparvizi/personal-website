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

// scroll animation
const boxes = document.querySelectorAll(".box")
window.addEventListener('scroll', checkBoxes)

function checkBoxes() {

  const triggerBottom = window.innerHeight / 5 * 4
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

// scroll skills animation
window.addEventListener('scroll', function() {
  const scroll = this.scrollY
  console.log(scroll)
  if (scroll > 1300) {
    this.document.getElementById('skills').classList.add('showSkills');
  }
  else {
    this.document.getElementById('skills').classList.remove('showSkills')
  }
})

// copy my number in clipboard
const text = '09107215381';
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    alert('copy number to your clipboard')
  } catch (err) {
    alert('i cant copy , open permission')
  }
}
