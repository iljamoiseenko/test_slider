let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("myslide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.classList.remove('active')
    } 
    slides[slideIndex - 1].classList.add('active')
  
}

let timer = setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

},5000);

var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active"); 
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}

fetch('http://localhost:3000/posts')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.post.description);
    document.getElementById('first').innerHTML = data.post.title;
    document.getElementById('second').innerHTML = data.post2.title;
    document.getElementById('third').innerHTML = data.post3.title;
    document.getElementById('desc-first').innerHTML = data.post.description;
    document.getElementById('desc-second').innerHTML = data.post2.description;
    document.getElementById('desc-third').innerHTML = data.post3.description;
    document.getElementById('slide-title-db').innerHTML = data.postTitle.title;
    document.getElementById('slide-sub-title-db').innerHTML = data.postTitle.description;
    document.getElementById('desc-first2').innerHTML = data.post.description2;
    document.getElementById('desc-second2').innerHTML = data.post2.description2;
    document.getElementById('desc-third2').innerHTML = data.post3.description2;
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000,
      },
});