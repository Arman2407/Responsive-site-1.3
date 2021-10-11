// Swiper
var swiper = new Swiper(".swiper-container", {
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
   },
   1120: {
    slidesPerView: "auto",
    spaceBetween: 0,
    slidesPerGroup: 0,
   },
 }
  });

// Показать / скрыть 
let showBtn = document.querySelector('.show__more');
let hideBtn = document.querySelector('.hide__all');   


let elements = document.querySelectorAll('.hidden__tablet-slide'); 
 
for (let elem of elements) {
  showBtn.addEventListener('click', function () {
    if (elem.style.display == "none") {
     elem.style.display = "block";
      hideBtn.style.display = "block";
      showBtn.style.display = "none";
    } else {
     elem.style.display = "none";
    }
  });
 
  hideBtn.addEventListener('click', function () {
    if (elem.style.display == "block") {
     elem.style.display = "none";
      showBtn.style.display = "block";
      hideBtn.style.display = "none";
    } else {
      null
    }
  });   
}; 
