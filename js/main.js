// NAVBAR FIX POSITION
var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $("#Nav").addClass("Navbar-active");
    } else {
      $("#Nav").removeClass("Navbar-active");
    }
});

// NAVBAR CHANGES COLOR
var num = 200; //number of pixels before modifying styles

$(window).bind('scroll', function () {
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
    const headerHeigh = header - 0;
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition >= headerHeigh) {
      $("#Nav").addClass("Navbar-active-colored");
      $(".NavBar-list-container ul li a").addClass("Navbar-scroled-section");
      $(".NavBar-list-container ul span").addClass("Navbar-scroled-section");
      $(".NavBar-list-container ul li a").removeClass("Navbar-scroled");
    } else {
      $("#Nav").removeClass("Navbar-active-colored");
      $(".NavBar-list-container ul li a").removeClass("Navbar-scroled-section");
      $(".NavBar-list-container ul span").removeClass("Navbar-scroled-section");
      $(".NavBar-list-container ul li a").addClass("Navbar-scroled");
    }
  });
});

// LINK FOR LOGO
document.getElementById("logo").addEventListener("click", PageOne);
function PageOne(event) {
  event.preventDefault();
  // ORIGINAL LINK
  location.replace("./index.html");
}

// RESIZE WIDTH DIV HOME COMPONENT
$(window).resize(function() {
  $('#homeLeft').css({
      top: ($(window).height() - $('#homeLeft').outerHeight()) / 2
  });
});

// To initially run the function:
$(window).resize();


var $scrollingDiv = $("#homeLeft");
$(window).scroll(function() {
  var winScrollTop = $(window).scrollTop() + 0,
      baseScroll = $(".Header-container").height() / 7,
      zeroSizeHeight = ($(".Header-container").height() - $(window).height() - baseScroll),
      newSize = `${100 * (1 - (winScrollTop / zeroSizeHeight))}%`;
  
  $scrollingDiv.css({
      width: newSize,
  }, 500, 'easeInOutSine');
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
myVideo.play();



// LINK FOR LOGO
document.getElementById("GetAccess-btn").addEventListener("click", getaccess);
function getaccess() {
  // ORIGINAL LINK
  location.replace("./get-access.html");
}