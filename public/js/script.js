setTimeout(function() {
  $(".x").addClass("x-1");
}, 1500);

function remove() {
  setTimeout(function() {
    $(".a1").removeClass("a-1");
    $(".a2").removeClass("a-2");
    $(".a3").removeClass("a-3");
  }, 1000);
}

function toggle() {
  $(".a1").toggleClass("a-1");
  $(".a2").toggleClass("a-2");
  $(".a3").toggleClass("a-3");
}
$(".footer-1-arrow").click(
  function() {
    $(".body").css("overflow","scroll");
    $(".portfolio1").toggleClass("portfolio2 col-w");
    setTimeout(function() {
    $(".section-2").toggleClass("section-2-2");
    $(".body").css("overflow","hidden");
  }, 1200);
  setTimeout(function() {
    $(".text-1").text("Hello.");
    $(".text-2").text("I am");
    $(".text-3").text("Victor");
    $("a").css("pointer-events","none");
    toggle();
    remove();
}, 400);
  }
);
let i = 0
$(".section-2").click(
  function() {
    if (i === 1) {
      $(".text-1").text("Hello.");
      $(".text-2").text("I am");
      $(".text-3").text("Victor");
      $("a").css("pointer-events","none");
      i--;
      toggle();
      remove();
    } else if (i === 0) {
      $(".text-1").text("About");
      $(".text-2").text("Work");
      $(".text-3").text("Contact");
      $("a").css("pointer-events","auto");
      i++;
      toggle();
      remove();
    }
  }
);
function topFunction() {
window.scrollTo(0,document.body.scrollHeight)
}
