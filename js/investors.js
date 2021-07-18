// LINK FOR get investor
document.getElementById("investor").addEventListener("click", investor);
function investor() {
  // ORIGINAL LINK
  window.open("https://services.intralinks.com/logon/v3/index.html?clientID=744da155-ac5c-4b79-83e1-948c05096422");
};
// LINK FOR get access
document.getElementById("GetAccess-btn").addEventListener("click", getaccess);
function getaccess() {
  // ORIGINAL LINK
  location.replace("./get-access.html");
};

// LINK FOR LOGO
document.getElementById("logo").addEventListener("click", Home);
function Home(event) {
  // ORIGINAL LINK
  location.replace("./index.html");
};




// -------------------Mobile Version---------------------------------

// Navbar appearing
$(document).ready(function () {
  $(".NavBar-mobile-lines").click(function () {
    // $("#navbar").toggleClass("NavBar-mobile-show");

    // hide / show navbar
    if ($("#navbar").hasClass("NavBar-mobile-hide")) {
      $("#navbar").removeClass("NavBar-mobile-hide");
      $("#navbar").removeClass("NavBar-mobile-list");
      $("#navbar").addClass("NavBar-mobile-show");
    } else {
      $("#navbar").removeClass("NavBar-mobile-show");
      $("#navbar").addClass("NavBar-mobile-hide");
    }

    // switch icon
    if ($("#NavBar-icon").hasClass("fa-bars")) {
      $("#NavBar-icon").removeClass("fa-bars");
      $("#NavBar-icon").addClass("fa-sign-out-alt");
    } else {
      $("#NavBar-icon").removeClass("fa-sign-out-alt");
      $("#NavBar-icon").addClass("fa-bars");
    }
  });
});


// MENU MOBILE BUTTON
$("#Service-mobile").click(function () {
  $("#NavBar-icon").removeClass("fa-sign-out-alt");
  $("#NavBar-icon").addClass("fa-bars");
  $("#navbar").removeClass("NavBar-mobile-show");
  $("#navbar").addClass("NavBar-mobile-hide");
  
  location.replace("./index.html#OurService");
});
$("#Benefit-mobile").click(function () {
  $("#NavBar-icon").removeClass("fa-sign-out-alt");
  $("#NavBar-icon").addClass("fa-bars");
  $("#navbar").removeClass("NavBar-mobile-show");
  $("#navbar").addClass("NavBar-mobile-hide");
  
  location.replace("./index.html#Platform");
});
$("#About-mobile").click(function () {
  $("#NavBar-icon").removeClass("fa-sign-out-alt");
  $("#NavBar-icon").addClass("fa-bars");
  $("#navbar").removeClass("NavBar-mobile-show");
  $("#navbar").addClass("NavBar-mobile-hide");
  
  location.replace("./index.html#AboutUs");
});
$("#Contact-mobile").click(function () {
  $("#NavBar-icon").removeClass("fa-sign-out-alt");
  $("#NavBar-icon").addClass("fa-bars");
  $("#navbar").removeClass("NavBar-mobile-show");
  $("#navbar").addClass("NavBar-mobile-hide");
  
  location.replace("./index.html#ContactUs");
});
