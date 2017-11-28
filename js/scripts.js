$(document).ready(function() {
  $("button#butt-on").click(function() {
    $("body").toggleClass("light-font");
    $("#darkroom-text").toggle();
    $("#normal-text").toggle();
  });
});
