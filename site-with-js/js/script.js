// Swiper
let swiper = new Swiper(".swiper-container", {
 breakpoints: {
   320: {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
   },
   768: {
    slidesPerView: "auto",
    spaceBetween: 0,
    slidesPerGroup: 0,
    hiddenClass: 'swiper-pagination-hidden',
   
   },
   1120: {
    slidesPerView: "auto",
    spaceBetween: 0,
    slidesPerGroup: 0,
    hiddenClass: 'swiper-pagination-hidden',
   },
 }
  });

  // Перезагрузка страницы при изменениии ширины контента
function reload() {
  const widthClient = document.documentElement.clientWidth;
  
  if ( widthClient < 768 || widthClient >= 768) {
      window.location.reload();
      
      setTimeout(() => {
        reload();
      }, 1000);
  }
};
  
window.addEventListener("resize", reload);

// Показать / скрыть
const showBtn = document.querySelector('.show__more'); 
const hideBtn = document.querySelector('.hide__all');

const elements = document.querySelectorAll('.hidden__tablet-slide'); 
 
for (let elem of elements) {
  showBtn.addEventListener('click', function () {
    if (elem.style.display = "none") {
     elem.style.display = "flex";
      hideBtn.style.display = "flex";
      showBtn.style.display = "none";
    } else {
     elem.style.display = "none";
    }
  });
 
  hideBtn.addEventListener('click', function () {
    if (elem.style.display = "flex") {
     elem.style.display = "none";
      showBtn.style.display = "flex";
      hideBtn.style.display = "none";
    } else {
      elem.style.display = "flex";
    }
  });  
}; 
