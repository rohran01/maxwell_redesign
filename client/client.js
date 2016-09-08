$(document).ready(function() {

  var fox9Activated = false;
  var jasonShowActivated = false;
  var filmActivated = false;
  var skillsShowing = false;
  var skills1 = $('.skills').find('.slideRight');
  var skills2 = $('.skills').find('.slideDown');
  console.log(skills1);
  console.log('2', skills2);
  var fox9ToLoad = $('#fox9').children('.work-holder').children();
  var jasonShowToLoad = $('#jasonShow').children('.work-holder').children();
  var filmToLoad = $('#film').children('.work-holder').children();

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
     var fromBottom = $(this).scrollTop() + $(this).height() - 200;

     // Get id of current scroll item
     var topCur = scrollItems.map(function() {
       if ($(this).offset().top < fromTop)
         return this;
       });

      // Get the id of the current element
      topCur = topCur[topCur.length-1];
      var id = topCur && topCur.length ? topCur[0].id : "";

      if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems.filter("[href!='#"+id+"']").removeClass('hovered');
       menuItems.filter("[href='#"+id+"']").addClass('hovered');
      }

      if (!fox9Activated && $('#fox9').offset().top < fromBottom) {
        loadVideos(fox9ToLoad);
        fox9Activated = true;
      }

      if (!jasonShowActivated && $('#jasonShow').offset().top < fromBottom) {
        loadVideos(jasonShowToLoad);
        jasonShowActivated = true;
      }

      if (!filmActivated && $('#film').offset().top < fromBottom) {
        loadVideos(filmToLoad);
        filmActivated = true;
      }

      if (!skillsShowing && $('#skills').offset().top < fromBottom) {
        showSkills();
        skillsShowing = true;
      }

      if (fox9Activated && $(window).scrollTop() < 200) {
        $('#fox9').children('.work-holder').children().fadeTo(0, 0);
        fox9Activated = false;
      }

      if (jasonShowActivated && id === 'fox9') {
        $('#jasonShow').children('.work-holder').children().fadeTo(0, 0);
        jasonShowActivated = false;
      }

      if (filmActivated && id === 'jasonShow') {
        $('#film').children('.work-holder').children().fadeTo(0, 0);
        filmActivated = false;
      }

      if (skillsShowing && id == 'aboutMe') {
        $('.skills').find('.slideRight').css('left', '-80%');
        $('.skills').find('.slideDown').css('top', '-620px');
        $('skills-title').css('top', '-620px');
        skillsShowing = false;
      }

    })

    function loadVideos(segment) {
      for (var i = 0; i < segment.length; i++) {
        $(segment[i]).delay(80 * i).fadeTo(600, 1);
      }
    }

    function showSkills() {
      var rightMovement = skillsShowing == true ? '-80%' : 0;
      var downMovement = skillsShowing == true ? '-620px' : 0
      for (var i = 0; i < skills1.length; i++) {
        $(skills1[i]).delay(400 * (i - 0.5 * i)).animate({
          left: rightMovement
        }, 1200, 'easeOutBounce')
      }
      for (var i = skills2.length; i > 0; i--) {
        $(skills2[i - 1]).delay(600 + 180 * (skills2.length - 1 - i)).animate({
          top: downMovement
        }, 800, 'easeOutBounce')
      }
      $('.skills-title').delay(1600).animate({
        top: downMovement
      }, 800, 'easeOutBounce')
    }

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
