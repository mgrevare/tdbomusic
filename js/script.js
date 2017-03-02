// $( ".about-page-content, .music-page-content, .connect-page-content" ).hide();


function handleAboutClick() {
  $(".js-about").click(function(){
    $(".home-page-content, .connect-page-content").addClass("hidden");
    $(".about-page-content").removeClass("hidden");
  });
};

function handleHomeClick() {
  $(".js-home").click(function(){
    $(".connect-page-content, .about-page-content").addClass("hidden");
    $(".home-page-content").removeClass("hidden");
    $(".mdl-layout__drawer").removeClass("is-visibe").attr("aria", "true");
});
};

function handleConnectClick() {
  $(".js-connect").click(function(){
    $(".home-page-content, .about-page-content").addClass("hidden");
    $(".connect-page-content").removeClass("hidden");
  });
};

$(handleAboutClick());
$(handleConnectClick());
$(handleHomeClick());
