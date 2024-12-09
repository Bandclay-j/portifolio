document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const radios = carousel.querySelectorAll('input[type="radio"]');
        let currentIndex = 0;

        function updateCarousel(index) {
            radios[index].checked = true;
            const offset = -index * 100;
            const imagesContainer = carousel.querySelector('.carousel-images');
            imagesContainer.style.transform = `translateX(${offset}%)`;
        }

        function autoSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel(currentIndex);
        }

        setInterval(autoSlide, 3000); // Muda a imagem a cada 3 segundos

        radios.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                currentIndex = index;
                updateCarousel(index);
            });
        });
    });
});

function ativarModo() {
    let body = document.body;
    let botao = document.getElementById('botao');
    let img = botao.querySelector('img');

    //Alterna a classe do modo escuro no body
    body.classList.toggle('dark-mode');

    // Altera o ícone entre lua e sol
    if (body.classList.contains('dark-mode')) {
        img.src = './img/sun.png'; // Ícone de sol para modo escuro
        img.alt = 'Icone do Sol';
    } else {
        img.src = './img/half-moon.png';
        img.alt = 'Icone da Lua';
    }
}