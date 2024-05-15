document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let index = 0;

    function nextSlide() {
        index++;
        if (index >= images.length) /*(index >= totalSlides - 2)*/ {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 33.33}%)`;
    }

    setInterval(nextSlide, 3000);
});


function openModal(imageUrl) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "flex";
    modal.style.marginTop = "85px"
    modalImg.src = imageUrl;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


