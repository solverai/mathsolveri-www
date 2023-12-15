(function() {
	"use strict";

    // Header Sticky
    window.addEventListener('scroll', event => {
        const height = 150;
        const { scrollTop } = event.target.scrollingElement;
        document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
    });

    window.onload = function(){
        
        // Back to Top
        const getId = document.getElementById("back-to-top");
        if (getId) {
            const topbutton = document.getElementById("back-to-top");
            topbutton.onclick = function (e) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
            window.onscroll = function () {
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    topbutton.style.opacity = "1";
                } else {
                    topbutton.style.opacity = "0";
                }
            };
        }
        
        // Counter Js
        if ("IntersectionObserver" in window) {
            let counterObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                    let counter = entry.target;
                    let target = parseInt(counter.innerText);
                    let step = target / 200;
                    let current = 0;
                    let timer = setInterval(function () {
                        current += step;
                        counter.innerText = Math.floor(current);
                        if (parseInt(counter.innerText) >= target) {
                        clearInterval(timer);
                        }
                    }, 10);
                    counterObserver.unobserve(counter);
                    }
                });
            });
        
            let counters = document.querySelectorAll(".counter");
            counters.forEach(function (counter) {
                counterObserver.observe(counter);
            });
        }

    };
    
    //  Partner Swiper Js
    var swiper = new Swiper(".partner", {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            },
            1400: {
                slidesPerView: 5
            }
        }
    });

    //  Screenshots Swiper Js
    var swiper = new Swiper(".screenshots", {
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 5
            },
            1400: {
                slidesPerView: 5
            }
        }
    });
    
    // ScrollCue
    scrollCue.init();

    try {
        document.addEventListener('DOMContentLoaded', function() {
            const menuIcon = document.querySelector(".menu_icon");
            const sidebar = document.querySelector(".sidebar");
        
            // Toggle "active" class on menu icon and sidebar on click
            menuIcon.addEventListener('click', function() {
                menuIcon.classList.toggle("active");
            });
        });
    } catch {}

   

    document.addEventListener('DOMContentLoaded', function() {
        const showPopupButton = document.getElementById("showPopup");
        const closePopupButton = document.getElementById("closePopup");
        const popup = document.getElementById("popup");
    
        showPopupButton.addEventListener('click', function() {
            popup.classList.add("active");
        });
    
        closePopupButton.addEventListener('click', function() {
            popup.classList.remove("active");
        });
    });
    




    
    
    
})();