// JavaScript para o portfólio

// Função de animação de entrada nas seções
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(sections => {
        observer.observe(section);
    });
});

// Carrossel de imagens
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-image");
const totalSlides = slides.length;
const nextSlide = () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("active");
};

const prevSlide = () =>  {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add("active");
};

// Controles de navegação do carrossel
document.querySelector(".carousel-controls").addEventListener("click", (e) => {
    if (e.target.classList.contains("next")) {
        nextSlide();
    } else if (e.target.classList.contains("prev")) {
        prevSlide();
    }
});

// Rolagem suave ao clicar nos links do cabeçalho
document.querySelectorAll("header ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth"});
    });
});

// Validação do formulário de contato
const contatoForm = document.querySelector("#contato form");
contatoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.querySelector("#contato input[type='text']");
    const email = document.querySelector("#contato input[type='email']");
    const mensagem = document.querySelector("#contato textarea");

    let valid = true;
    if (nome.value.trim() === "") {
        alert("Por favor, insira seu nome.");
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert("Por favor, insira um e-mail válido.");
        valid = false;
    } else if (mensagem.value.trim() === "") {
        alert("Por favor, insira uma mensagem.");
        valid = false;
    }

    if (valid) {
        alert("Mensagem enviada com sucesso!");
        contatoForm.reset();
    }
})