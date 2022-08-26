$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  $(".toggle-btn").click(function () {
    $(".section").toggleClass("active");
    $(".toggle-btn i").toggleClass("active");
  });
  $(".nav-ico").click(function () {
    $(".section").removeClass("active");
    $(".toggle-btn i").removeClass("active");
  });
});

document.getElementById("tri").style.background = "pink";

