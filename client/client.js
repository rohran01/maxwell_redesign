$(document).ready(function() {

  var commercialActivated = false;
  var commercialToLoad = $('#commercial').children('.work-holder').children();
  console.log(commercialToLoad.length);

  var lastId,
      topMenu = $('.scroll-links'),
      topMenuHeight = $('.nav-bar').outerHeight(),
      // All list items
      menuItems = topMenu.find('li'),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  $(window).on('scroll', function() {
     // Get container scroll position
     var fromTop = $(this).scrollTop() + topMenuHeight;
     var fromBottom = $(this).scrollTop() + $(this).height() - 100;

     console.log('commercial', $('#commercial').offset().top);
     console.log(fromBottom);


     // Get id of current scroll item
     var topCur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
       })

      if (!commercialActivated && $('#commercial').offset().top < fromBottom) {

        $('.video-holder').fadeTo('slow', 1);
        commercialActivated = true;
      }



    // Get the id of the current element
    topCur = topCur[topCur.length-1];
    var id = topCur && topCur.length ? topCur[0].id : "";

    if (lastId !== id) {
     lastId = id;
     // Set/remove active class
     menuItems.filter("[href!='#"+id+"']").removeClass('hovered');
     menuItems.filter("[href='#"+id+"']").addClass('hovered');
    }

  })

  $('.highlight').on('click', function() {
    var target = $(this.getAttribute('href'));
    if ($(this).attr('href') === '#maxwell') {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $('body').offset().top
      }, 1000);
    } else if ($(this).attr('href') !== '#maxwell' && target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: (target.offset().top + 2)
      }, 1000);
    }
  })



})
