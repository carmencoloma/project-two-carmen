
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function typing(p) {
  $("#" + p).addClass("cursor");
  let text = $("#" + p).text(),
    randInt = 0;
  for (let i = 0; i < text.length; i++) {
    randInt += parseInt(randomIntFromInterval(10, 140));
    let typing = setTimeout(
      function(y) {
        $("#" + p).append(text.charAt(y));
      },
      randInt,
      i
    );
  }
}
typing("text");

function toggleIcon() {
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(300);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}



function desktopMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $(window).width() > 768) {
            $('header.desktop').fadeIn(500);
        } else {
            $('header.desktop').fadeOut(500);
        }
    })
}

//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu);

/*<slideshow>  */
function(){
$('.slideshow').square1({
	animation: 'slide',
	transition_time: 2000,
	prev_next_nav: 'hover',
	dots_nav: 'hover'
});

/*</slideshowend>*/

// End of Your Code . Don't delete that line below!!
/*});*/