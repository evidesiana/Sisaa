// LINK FOR LOGO
document.getElementById("GetAccess-btn").addEventListener("click", getaccess);
function getaccess() {
  // ORIGINAL LINK
  location.replace("./get-access.html");
}

// LINK FOR LOGO
document.getElementById("logo").addEventListener("click", Home);
function Home(event) {
  // ORIGINAL LINK
  location.replace("./index.html");
}




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
