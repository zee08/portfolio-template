// $('#client').owlCarousel({
//     items:7,
//     loop:true,
//     smartSpeed: 1000,
//     autoplay:true,
//     dots:false,
//     autoplayHoverPause:true,
//     responsive:{
//             0:{
//                 items:2
//             },
//             415:{
//                 items:2
//             },
//             600:{
//                 items:4

//             },
//             1199:{
//                 items:4
//             },
//             1200:{
//                 items:7
//             }
//         }
//     });
    
    
//     $('.play').on('click',function(){
//         owl.trigger('play.owl.autoplay',[1000])
//     })
//     $('.stop').on('click',function(){
//         owl.trigger('stop.owl.autoplay')
//     })

$(document).ready(function() {
 
    $("#client").owlCarousel({
        items : 7, //10 items above 1000px browser width
        autoplay:true,
        loop:true,
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0;
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
   
  });

  //scroll-to-top//

 // Fade in the "scroll to top" button when user scrolls down
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const scrollToTopButton = document.getElementById('scroll-top');

  if (scrollPosition > 300) {
      scrollToTopButton.style.display = 'block'; // Show the button
  } else {
      scrollToTopButton.style.display = 'none'; // Hide the button
  }
});

// Scroll to top when the button is clicked
document.getElementById('scroll-top').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default link behavior
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

//****progress bar*********** */

$(".progress-bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});




 
// Select all .single-profile-overlay elements
const overlayElements = document.querySelectorAll('.single-profile-overlay');
// Select all .single-profile parent elements
const parentElements = document.querySelectorAll('.single-profile');

// Add event listeners to each parent element
parentElements.forEach((parentElement) => {
  parentElement.addEventListener('mouseover', () => {
    // Apply styles to the corresponding overlay element
    const overlayElement = parentElement.querySelector('.single-profile-overlay');
    overlayElement.style.transform = 'scale(1)';
    overlayElement.style.top = '0';
  });

  parentElement.addEventListener('mouseout', () => {
    // Reset styles when the mouse leaves the parent element
    const overlayElement = parentElement.querySelector('.single-profile-overlay');
    overlayElement.style.transform = '';
    overlayElement.style.top = '';
  });
});


