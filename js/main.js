
// -------------------NAVBAR FIX POSITION---------------------------------
var num = 50; //number of pixels before modifying styles

$(window).bind("scroll", function () {
  if ($(window).scrollTop() > num) {
    $("#Nav").addClass("Navbar-active");
  } else {
    $("#Nav").removeClass("Navbar-active");
  }
});

// MENU BUTTON
$("#OurService-btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#OurService").offset().top,
    },
    2000
  );
});
$("#Platform-btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#Platform").offset().top,
    },
    2000
  );
});
$("#AboutUs-btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#AboutUs").offset().top,
    },
    2000
  );
});
$("#ContactUs-btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#ContactUs").offset().top,
    },
    2000
  );
});

// NAVBAR CHANGES COLOR
var num = 200; //number of pixels before modifying styles

$(window).bind("scroll", function () {
  if ($(window).scrollTop() > num) {
    $(".NavBar-list-container ul li a").addClass("Navbar-scroled");
    $(".NavBar-list-container ul span").addClass("Navbar-scroled");
  } else {
    $(".NavBar-list-container ul li a").removeClass("Navbar-scroled");
    $(".NavBar-list-container ul span").removeClass("Navbar-scroled");
  }
});

// NAVBAR CONTAINER CHANGES COLOR POSITION
$(document).ready(function () {
  $(document).scroll(function () {
    const header = $("#Heading")[0].scrollHeight;
    const navtriger = header / 4; //total header height / 4
    const navStart = header - navtriger;
    const headerHeigh =
      window.innerHeight <= 698
        ? header - navStart + 1000
        : header - navStart + 1400;
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition >= headerHeigh) {
      $("#Nav").addClass("Navbar-active-colored");
      $(".NavBar-list-container ul li a").addClass("Navbar-scroled-section");
      $(".NavBar-list-container ul span").addClass("Navbar-scroled-section");
      $("#Header-text").removeClass("display-none");
      $("#Header-text").addClass("Header-home-right-text-wrap");
      $(".NavBar-list-container ul li a").removeClass("Navbar-scroled");
    } else {
      $("#Nav").removeClass("Navbar-active-colored");
      $(".NavBar-list-container ul li a").removeClass("Navbar-scroled-section");
      $(".NavBar-list-container ul span").removeClass("Navbar-scroled-section");
      $("#Header-text").addClass("display-none");
      $("#Header-text").removeClass("Header-home-right-text");
      $(".NavBar-list-container ul li a").addClass("Navbar-scroled");
    }
  });
});

// LINK FOR LOGO
document.getElementById("logo").addEventListener("click", Home);
function Home(event) {
  // ORIGINAL LINK
  location.replace("./index.html");
}

// RESIZE WIDTH DIV HOME COMPONENT
$(window).resize(function () {
  $("#homeLeft").css({
    top: ($(window).height() - $("#homeLeft").outerHeight()) / 2,
  });
});

// To initially run the function:
$(window).resize();

var $scrollingDiv = $("#homeLeft");
$(window).scroll(function () {
  var winScrollTop = $(window).scrollTop() + 0,
    baseScroll = $(".Header-container").height() / 7,
    zeroSizeHeight =
      $(".Header-container").height() - $(window).height() - baseScroll,
    newSize = `${100 * (1 - winScrollTop / zeroSizeHeight)}%`;

  $scrollingDiv.css(
    {
      width: newSize,
    },
    500,
    "easeInOutSine"
  );
});

// BACKGROUND SCROLL 3D
const html = document.documentElement;
const canvas = document.getElementById("Thee_d");
const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = (index) =>
  // ORIGINAL LINK
  `./asset/images/3D/${index.toString().padStart(4, "0")}.jpg`;
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1458;
canvas.height = 820;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();

// LAX.JS SCROLL SETTING
window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".selector", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, "screenWidth/2", "screenWidth"],
      ],
    },
  });
};

// LOOP GLOBE BACKGROUND
var myVideo = document.getElementById("Bg");
myVideo.play();
if (typeof myVideo.loop == "boolean") {
  // loop supported
  myVideo.loop = true;
} else {
  // loop property not supported
  myVideo.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
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

// MENU MOBILE BUTTON
$("#Service-mobile").click(function () {
  $("#NavBar-icon").removeClass("fa-sign-out-alt");
  $("#NavBar-icon").addClass("fa-bars");
  $("#navbar").removeClass("NavBar-mobile-show");
  $("#navbar").addClass("NavBar-mobile-hide");
  $("html, body").animate(
    {
      scrollTop: $("#OurService").offset().top,
    },
    2000
  );
});
$("#Benefit-mobile").click(function () {
  $("#NavBar-icon").removeClass("fa-sign-out-alt");
  $("#NavBar-icon").addClass("fa-bars");
  $("#navbar").removeClass("NavBar-mobile-show");
  $("#navbar").addClass("NavBar-mobile-hide");
  $("html, body").animate(
    {
      scrollTop: $("#Platform").offset().top,
    },
    2000
  );
});
$("#About-mobile").click(function () {
  $("#NavBar-icon").removeClass("fa-sign-out-alt");
  $("#NavBar-icon").addClass("fa-bars");
  $("#navbar").removeClass("NavBar-mobile-show");
  $("#navbar").addClass("NavBar-mobile-hide");
  $("html, body").animate(
    {
      scrollTop: $("#AboutUs").offset().top,
    },
    2000
  );
});
$("#Contact-mobile").click(function () {
  $("#NavBar-icon").removeClass("fa-sign-out-alt");
  $("#NavBar-icon").addClass("fa-bars");
  $("#navbar").removeClass("NavBar-mobile-show");
  $("#navbar").addClass("NavBar-mobile-hide");
  $("html, body").animate(
    {
      scrollTop: $("#ContactUs").offset().top,
    },
    2000
  );
});
