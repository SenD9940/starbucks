const badgeEl = document.querySelector("header > .badges");

window.addEventListener("scroll", _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        gsap.to(badgeEl, .5, {
            opacity: 0,
            display:"none"
        });
        //gsap.to(요소, 지속시간 s, 옵션);
    }else{
        //배지 보이기
        gsap.to(badgeEl, .5, {
            opacity: 1,
            display:"block"
        });
    }
}, 300));
// _.throttle(함수, 시간 mills);

const fadeEls = document.querySelectorAll(".visual > .inner > .fade-in");
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity:1
    });
})

//슬라이드 뷰
new Swiper(".notice-line .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true
});


new Swiper(".promotion .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop:true,
    autoplay:{
        delay: 5000
    },
    pagination:{
        el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
        clickable: true
    },
    navigation: {
        prevEl:".promotion .swiper-prev",
        nextEl:".promotion .swiper-next",
    }
});

//프로모션 토글
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add("hide");
    }else{
        promotionEl.classList.remove("hide");
    }
});

