document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});


const words = ["Web Developer", "Designer"];
let wordIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".text-animation span");

function type() {
    if (charIndex < words[wordIndex].length) {
        typingElement.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        timelineItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionVisible = window.innerHeight * 0.85;

            if (sectionTop < sectionVisible) {
                section.classList.add("show");
            }
        });
    }

    setTimeout(revealSections, 300); 

    window.addEventListener("scroll", revealSections);
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');

});

  const form = document.getElementById('contact-form');
  const popup = document.getElementById('popup');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/syedamaniafaraz@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success === 'true') {
        popup.style.display = 'block';
        setTimeout(() => {
          popup.style.display = 'none';
        }, 3000);
        form.reset(); 
      } else {
        alert('Something went wrong. Please try again.');
      }
    })
    .catch(error => {
      alert('Error sending email.');
      console.error(error);
    });
  });

  document.getElementById("popup").style.display = "flex"; 

setTimeout(() => {
  document.getElementById("popup").style.display = "none"; 
}, 2000);
