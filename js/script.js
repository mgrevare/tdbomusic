$( ".about-page-content, .music-page-content, .connect-page-content" ).hide();


function handleAboutClick() {
  $(".js-about").click(function(){
    $(".home-page-content, .connect-page-content").fadeOut("fast")
    $(".about-page-content").fadeIn("fast");
  });
};

function handleHomeClick() {
  $(".js-home").click(function(){
    $(".about-page-content, .connect-page-content").fadeOut("fast");
    $(".home-page-content").fadeIn("fast");
});
};

function handleConnectClick() {
  $(".js-connect").click(function(){
    $(".home-page-content, .about-page-content").fadeOut("fast");
    $(".connect-page-content").fadeIn("fast");
  });
};

$(handleAboutClick());
$(handleConnectClick());
$(handleHomeClick());
