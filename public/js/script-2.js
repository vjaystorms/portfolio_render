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

function hello() {
  $(".text-1").text("Hello.");
  $(".text-2").text("I am");
  $(".text-3").text("Abiola");
  $("a").css("pointer-events", "none");
}

function about() {
  $(".text-1").text("About");
  $(".text-2").text("Work");
  $(".text-3").text("Contact");
  $("a").css("pointer-events", "auto");
}

let i = 0

$(".section-2").click(
  function() {
    if (i === 1) {
      hello();
      i--;
      toggle();
      remove();
    } else if (i === 0) {
      about();
      i++;
      toggle();
      remove();
    }
  }
);


setTimeout(function() {
  if (i === 1) {
    hello();
    i--;
    toggle();
    remove();
  } else if (i === 0) {
    about();
    i++;
    toggle();
    remove();
  }
}, 100);
