// Toggle Content Button
function toggleContent(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More ...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
$(document).ready(function () {
  // Initialize Owl Carousel
  $(".owl-carousel").owlCarousel({
    items: 3, // Display three items in each column
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    // nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Initialize Magnific Popup for lightbox
  $(".lightbox").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Show the carousel after it's initialized
  $(".owl-carousel").css("display", "block");
});

// Popup Auto
$(window).ready(function () {
  setTimeout(function () {
    $("#popupModal").modal("show");
  }, 3000);
});
