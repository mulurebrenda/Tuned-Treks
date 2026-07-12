//responsive navbar (hide on scroll up, show on scroll down)
var scroll1 = window.pageYOffset;
window.onscroll = function () {
  var scroll2 = window.pageYOffset;
  if (scroll1 > scroll2) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  scroll1 = scroll2;
};

//sidebar
function showSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "none";
}

//animate-sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//password copy
function copyText(buttonElement) {
  // Get the text from the paragraph
  const text = document.getElementById("text-to-copy").innerText;
  // Copy the text to the clipboard
  navigator.clipboard.writeText(text).then(() => {
    //alert("Text copied to clipboard!");

    // Save the original text
    const originalText = buttonElement.innerText;

    // Change the button text
    buttonElement.innerText = "Copied!";

    // Reset back to original text after 2 seconds
    setTimeout(() => {
      buttonElement.innerText = originalText;
    }, 2000);

  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

//Cards Transition
 // ---- Roll-in / roll-out cards (features, story, offer cards, etc.) ----
  // Unlike .reveal above, this observer is NEVER unobserved: every time a
  // card crosses the trigger zone it toggles the class, so scrolling down
  // rolls the card in and scrolling back up rolls it back out again.
  var rollEls = document.querySelectorAll('.roll-card');
  if ('IntersectionObserver' in window && rollEls.length) {
    var rollObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('roll-in');
        } else {
          entry.target.classList.remove('roll-in');
        }
      });
    }, {
      threshold: 0.05,
      // Trigger a bit before the card fully enters/exits either edge
      rootMargin: '0px 0px -10% 0px'
    });
    rollEls.forEach(function (el) { rollObserver.observe(el); });
  } else {
    rollEls.forEach(function (el) { el.classList.add('roll-in'); });
  }

//copyright
const now = new Date();
const year = now.getFullYear();
const currentYear = document.querySelector(".year");
currentYear.innerHTML = `${year}`;

//form submit
function sendMessage() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "tunedtreks_service";
  const templateID = "template_sqwv5nl";

  emailjs
    .send(serviceID, templateID, params)
    .then((message) => {
      console.log(message);
      Swal.fire({
        width: 150,
        icon: "success",
        iconColor: "#858587",
        title: "Message sent!",
        color: "#858587",
        showConfirmButton: true,
        timer: 1500,
        showClass: {
          popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutUp
      animate__faster
    `,
        },
      });
      return false;
    })
    .catch((err) => console.log(err));
}

function handleFormSubmit (e) {
  e.preventDefault();
  sendMessage();
};


