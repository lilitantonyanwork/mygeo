var swiper = new Swiper(".review__list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll('.video').forEach(wrapper => {
        console.log('aaa')
        wrapper.addEventListener('click', function() {
            const videoSrc = this.dataset.video;
            this.innerHTML = `
      <video 
        src="${videoSrc}" 
        controls 
        autoplay 
       >
      </video>
    `;

        });
    });
});

