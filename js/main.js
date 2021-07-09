// NAVBAR FIX POSITION
$(document).ready(function() {
  $(document).scroll(function () {
      const headerHeigh = $('#Heading')[0].scrollHeight
      const scrollPosition = $(window).scrollTop();
  
      if (scrollPosition >= headerHeigh) {
          $('.NavBar').css({"position":"fixed","top":"0", "background-color": "rgb(0, 0, 0)"});
          $('.NavBar-list ul li a').css({"color": "rgb(255, 255, 255)"});
      } else {
          $('.NavBar').css({"position":"static","top":"auto", "background-color": "rgba(255, 255, 255, 0)"});
          $('.NavBar-list ul li a').css({"color": "rgb(255, 255, 255)"});
      }
  });
});


// LAX.JS SCROLL SETTING
window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.selector', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
        ]
      }
    })
  }

  // LOOP GLOBE BACKGROUND
  var myVideo = document.getElementById('Bg');
if (typeof myVideo.loop == 'boolean') { // loop supported
  myVideo.loop = true;
} else { // loop property not supported
  myVideo.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}
//...
myVideo.play();