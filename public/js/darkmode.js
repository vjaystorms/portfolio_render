///// Dark mode
$(".toggle").click(
  function() {
    $(".bg-b").toggleClass("bg-w");
    $(".col-w").toggleClass("col-b");
    // $(".col-r").toggleClass("col-b");
    $(".x-1-b").toggleClass("x-1-w");
    $(".toggle-on").toggleClass("toggle-off");
  }
);
