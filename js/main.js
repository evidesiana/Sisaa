// NAVBAR FIX POSITION
$(document).ready(function () {
  $(document).scroll(function () {
    const header = $("#Heading")[0].scrollHeight;
    const headerHeigh = header - 0;
    const scrollPosition = $(window).scrollTop();
    console.log(scrollPosition);
    if (scrollPosition >= headerHeigh) {
      $(".NavBar").css({
        position: "fixed",
        top: "0",
        "background-color": "rgb(0, 0, 0)",
      });
      $(".NavBar-list ul li a").css({ color: "rgb(255, 255, 255)" });
    } else {
      $(".NavBar").css({
        position: "static",
        top: "auto",
        "background-color": "rgba(255, 255, 255, 0)",
      });
      $(".NavBar-list ul li a").css({ color: "rgb(255, 255, 255)" });
    }
  });
});

// LINK FOR LOGO
document.getElementById("logo").addEventListener("click", PageOne);
function PageOne(event) {
  event.preventDefault();
  location.replace("/index.html");
}

// BACKGROUND SCROLL 3D
const html = document.documentElement;
const canvas = document.getElementById("Thee_d");
const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = (index) =>
  
`/asset/images/3D/${index
.toString()
.padStart(4, "0")}.jpg`;
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 4096;
canvas.height = 2160;
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

// FOOTER BACK TOP BUTTON
document.getElementById("arrow").addEventListener("click", scrollTop);
function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
