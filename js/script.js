document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 10000); // Change image every 10 seconds
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


