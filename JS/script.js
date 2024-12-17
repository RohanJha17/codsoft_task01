var typed = new Typed(".text", {
  strings: ["Front-End Devloper.", "Web Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// menu scroll section
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// message box section
const scriptURL = "https://script.google.com/macros/s/AKfycbyV6aTTjLQplPv_MxLkG4LcPhUXNrHHJfL259NmUIHXTwpHHCQ2LWgWsvqH8ZeRaqMn/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML = "ThankYou! Your message sent successfuly.";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
