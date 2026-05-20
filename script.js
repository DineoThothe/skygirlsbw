console.log("SKYgirlsBW website loaded successfully");

// 1. MOBILE NAVBAR TOGGLE
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// 2. ACTIVE LINK HIGHLIGHT
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active-link");
  }
});


// 3. FAQ TOGGLE (HELP + RESOURCES PAGES)
document.querySelectorAll(".faq-question").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});


// 4. READ MORE / SHOW LESS (RESOURCES PAGE)
document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const fullText = card.querySelector(".full-text");

    if (!fullText) return;

    if (fullText.style.display === "block") {
      fullText.style.display = "none";
      btn.textContent = "Read More";
    } else {
      fullText.style.display = "block";
      btn.textContent = "Show Less";
    }
  });
});


// 5. FORM VALIDATION FEEDBACK (ALL FORMS)
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea, select");
    let valid = true;

    inputs.forEach(input => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        valid = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "1px solid #ccc";
      }
    });

    if (valid) {
      alert("✔ Submitted successfully! SKY Girls will respond soon.");
      form.reset();
    } else {
      alert("⚠ Please fill in all required fields.");
    }
  });
});


// 6. HERO BANNER FADE IN ANIMATION
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-banner, .hero");

  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";

    setTimeout(() => {
      hero.style.transition = "all 1s ease";
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 200);
  }
});


// 7. SCROLL REVEAL ANIMATION (CARDS, SECTIONS)
const revealElements = document.querySelectorAll(".card, section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "0.6s ease";
    } else {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// 8. BUTTON CLICK EFFECT (SMALL UX TOUCH)
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});