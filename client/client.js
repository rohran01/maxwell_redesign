$(document).ready(function() {

  var picturesFlipped = false;
  var fox9Activated = false;
  var jasonShowActivated = false;
  var filmActivated = false;
  var skillsShowing = false;
  var rotationCounter = 0;
  var skills1 = $('.skills').find('.slideRight');
  var skills2 = $('.skills').find('.slideDown');
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

      if (!picturesFlipped && id === 'aboutMe')
      {
        $('.portrait, .chewie').fadeTo(400, 1);
        $('.portrait').css('animation', 'coinflip 0.5s');
        $('.chewie').css('animation', 'coinflip 0.5s 0.25s')
        picturesFlipped = true;
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

      if (picturesFlipped && $(window).scrollTop() < 200) {
        console.log('picturesFlipped reset');
        $('.portrait, .chewie').css('animation', 'none');
        picturesFlipped = false;
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

      if (skillsShowing && id === 'aboutMe') {
        $('.skills').find('.slideRight').css('left', '-80%');
        $('.skills').find('.slideDown').css('top', '-620px');
        $('.skills-title').css('top', '-620px');
        skillsShowing = false;
      }
    });

    function loadVideos(segment) {
      for (var i = 0; i < segment.length; i++) {
        $(segment[i]).delay(100 * i).fadeTo(600, 1);
      }
    }

    function showSkills() {
      var rightMovement = skillsShowing === true ? '-80%' : 0;
      var downMovement = skillsShowing === true ? '-620px' : 0;
      for (var i = 0; i < skills1.length; i++) {
        $(skills1[i]).delay(600 * i - (60 * i * i)).animate({
          left: rightMovement
        }, 1200, 'easeOutBack');
      }
      for (var j = 0; j < skills2.length; j++) {
        $(skills2[skills2.length - 1 - j]).delay(200 + 200 * j - (10 * j * j)).animate({
          top: downMovement
        }, 800, 'easeOutBack');
      }
      $('.skills-title').delay(800).animate({
        top: downMovement
      }, 800, 'easeOutBack');
    }

    $('.up').on('click', function() {
      console.log('up clicked');
      rotationCounter += 90;
      $('.cube').css('transform', 'translateZ(-250px) rotateX(' + rotationCounter + 'deg)');
      // switch(rotationCounter) {
      //   case 1:
      //     $('.cube').css('transform', 'translateZ(-250px) rotateX(90deg)');
      //     rotationCounter++;
      //     break;
      //   case 2:
      //     $('.cube').css('transform', 'translateZ(-250px) rotateX(180deg)');
      //     rotationCounter++;
      //     break;
      //   case 3:
      //     $('.cube').css('transform', 'translateZ(-250px) rotateX(270deg)');
      //     rotationCounter++;
      //     break;
      //   case 4:
      //     $('.cube').css('transform', 'translateZ(-250px) rotateX(360deg)');
      //     rotationCounter = 1;
      //     break;
        // case 5:
        //   $('.cube').css('transform', 'translateZ(-200px) rotateX(0deg)');
        //   rotationCounter = 1;
        //   break;
      // }

    });

    $('.down').on('click', function() {
      console.log('down clicked');
      rotationCounter -= 90;
      $('.cube').css('transform', 'translateZ(-250px) rotateX(' + rotationCounter + 'deg)');
    });

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
    });
});
