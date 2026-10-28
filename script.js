// LUCIDE ICONS
lucide.createIcons();

// PROJECT CARDS
const projects = [
  {
    title: "DamaKita - Sentiment Analysis",
    image: "assets/images/damakita.png",
    tech: ["Next.js", "Node.js", "OpenAI API"],
    desc: "A web app that combines sentiment analysis with a conversational chatbot powered by ChatGPT. Built to demonstrate AI integration, natural language processing, and responsive UI design.",
    demoLink: "https://damakitawithdaki.netlify.app",
    githubLink: "https://github.com/mccbico/DamaKita"
  },
  {
    title: "Portfolio Website",
    image: "assets/images/portfolio.png",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive personal portfolio built with HTML, CSS, and JavaScript to showcase my skills, projects, and professional journey.",
    demoLink: "https://mccbico.github.io/",
    githubLink: "https://github.com/mccbico/mccrbico.github.io"
  },
  
  
  // Add more projects here
];

const container = document.getElementById("project-grid");

projects.forEach(project => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <div class="project-content">
      <img src="${project.image}" alt="${project.title} preview" />
      <h3>${project.title}</h3>
      <p class="tech">Developed with ${project.tech.map(t => `<span>${t}</span>`).join(", ")}</p>
      <p class="desc">${project.desc}</p>
    </div>
    <div class="project-buttons">
      <a href="${project.demoLink}" target="_blank" class="btn primary">Demo <i class="fa-solid fa-arrow-right"></i></a>
      <a href="${project.githubLink}" target="_blank" class="btn secondary"><i class="fab fa-github"></i> GitHub</a>
    </div>
  `;
  slide.appendChild(card);      // card goes inside slide
  container.appendChild(slide); // slide goes inside swiper-wrapper
});




// ELEMENTS
const nav = document.getElementById("navigation");
const hamMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// STATE
let prevScroll = window.scrollY;

// FUNCTIONS
function toggleMenu() {
  hamMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  nav.classList.toggle("active");
}

function closeMenu() {
  hamMenu.classList.remove("active");
  navMenu.classList.remove("active");
  nav.classList.remove("active");
}

function updateActiveSection() {
  let current = "home";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

function handleNavbarScroll() {
  const currentScroll = window.scrollY;

  nav.style.top =
    prevScroll > currentScroll ? "0.5vh" : "-160px";

  prevScroll = currentScroll;

  closeMenu();
}


// HAMBURGER MENU
hamMenu.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// WINDOW SCROLL
window.addEventListener("scroll", () => {
  updateActiveSection();
  handleNavbarScroll();
});

updateActiveSection();


new Swiper('.project-wrapper', {
  // centeredSlides: false,
  // initialSlide: 3,
  spaceBetween: 15,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1500: {
      slidesPerView: 3,
    },
  }
});

document.getElementById('year').textContent = new Date().getFullYear();


