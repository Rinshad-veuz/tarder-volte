// // preloader
//   // Ensure preloader disappears only after the page is fully loaded
//   window.onload = function () {
//     let preloader = document.getElementById("preloader");
//     let content = document.getElementById("content");

//     preloader.style.opacity = "0"; // Smooth fade-out

//     setTimeout(() => {
//         preloader.style.display = "none"; // Hide preloader
//         content.style.display = "block"; // Show content
//     }, 500); // Delay to match fade-out effect
// };




AOS.init();

AOS.init({ disable: 'mobile' });




// window.onscroll = () => {
//     toggleTopButton();
// }
// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// function toggleTopButton() {
//     if (document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20) {
//         document.getElementById('back-to-up').classList.remove('d-none');
//     } else {
//         document.getElementById('back-to-up').classList.add('d-none');
//     }
// }


$('.client-carousel').owlCarousel({

    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        375: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1300: {
            items: 5
        }
    }
})

$('.download-carousel').owlCarousel({

    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        350: {
            items: 2
        },
        700: {
            items: 3
        },
        1000: {
            items: 4
        },
        1300: {
            items: 6
        }
    }
})

$('.news-carousel').owlCarousel({

    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
      
        550: {
            items: 2
        },
        1000: {
            items: 3
        },
        1300: {
            items: 4
        }
    }
})

// scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// close