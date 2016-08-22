var app = angular.module('webApp', ['ngRoute'])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
   $routeProvider
    .when('/', {
      templateUrl: 'views/workPartials/film.html',
      controller: 'WorkController'
     })
    .when('/fox9', {
      templateUrl: 'views/workPartials/fox9.html',
      controller: 'WorkController'
     })
    .when('/paintings', {
      templateUrl: 'views/workPartials/paintings.html',
      controller: 'WorkController'
     })
     .when('/commercial', {
      templateUrl: 'views/workPartials/commercial.html',
      controller: 'WorkController'
     })
     .when('/undone', {
      templateUrl: 'views/workPartials/undone.html',
      controller: 'WorkController'
     });

   $locationProvider.html5Mode(true);
}])

//SETS OF IMAGES//



var whiteBoard = [];



var commercial = [];

//CONTROLLERS//

app.controller('MainController', ['$scope', '$location', 'anchorSmoothScroll', function($scope, $location, anchorSmoothScroll) {
  $scope.goTo = function(locationId) {
    // $location.hash(locationId);
    anchorSmoothScroll.scrollTo(locationId);
  }

}])

app.controller('WorkController', ['$scope', '$sce', function($scope, $sce) {

  $scope.films = [
    {title: 'My Burrito', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/93672257'), description: 'Support The Southern Theater and feed your face at the same time!'},
    {title: 'The Interview', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/92856230'), description: ''},
    {title: 'Undone: A New Musical - Trailer', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/21698859'), description: ''},
    {title: 'Genetech', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/93288070'), description: ''},
    {title: 'Laddie Documentary Trailer', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/15367947'), description: 'This is a pre-production trailer I edited for Amanda Ladd-Jones. In order to pitch her father\'s story she needed a video to show future producers. It\'s always fun to have access to such great work.'},
    {title: 'Lagina', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/15375316'), description: 'I made for the 24-hour Minneapolis Film Race. I was the writer and editor. We received Best Set Design and Best Sound Design.'},
    {title: 'The Voice', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/25569801'), description: 'A short video I made for Short Cuts at IFP Minnesota'},
    {title: '5 Hour Energy Commercial', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/15373779'), description: 'PA and Boom Operator on this project. I was also involved with the concept and production of the ad. We were one of the top 5 finalists.'},
    {title: 'Untitled', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/16113718'), description: ''},
  ]

  $scope.fox9 = [
    {title: 'Big Bang Theory - Dance', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161862885'), description: ''},
    {title: 'FOX9 Weather App', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161863815'), description: ''},
    {title: 'FOX9.com', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161862930'), description: ''},
    {title: 'Ride Abuse', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161862993'), description: ''},
    {title: 'Forgiveness', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161863029'), description: ''},
    {title: 'Tickets Tossed', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161863079'), description: ''},
    {title: 'The Missing', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161863154'), description: ''},
    {title: 'The Jason Show - Valentine\'s Day', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161863715'), description: ''},
    {title: 'The Jason Show - Segment Animations', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161863262'), description: ''},
    {title: 'Fish Out of Water', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161863324'), description: ''},
    {title: 'Drama Horn', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161863299'), description: ''},
    {title: 'Shayne - Morning Traffic', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161864093'), description: ''},
    {title: 'Cody and Leah - Food', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161864180'), description: ''},
    {title: 'FOX9 Mornings End Page', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161864970'), description: ''},
    {title: 'Evenings - Animated', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161864967'), description: ''},
    {title: 'FOX9 Nightly End Page', url: $sce.trustAsResourceUrl('https://player.vimeo.com/video/161864972'), description: ''},
  ];

  $scope.paintings = [
    {title: 'Octopus', image: 'assets/images/paintings/octopus.jpeg',
      description: 'This is a freaking octopus, man'},
    {title: 'Elephant', image: 'assets/images/paintings/elephant.jpeg',
      description: 'This is a freaking elephant, man'},
    {title: 'Great White', image: 'assets/images/paintings/greatwhite.jpeg',
      description: 'This is a freaking shark, man'},
    {title: 'Jelly Fish', image: 'assets/images/paintings/jellyfish.jpeg',
      description: 'This is a freaking jelly fish, man'},
    {title: 'Lion', image: 'assets/images/paintings/lionBust.jpg',
      description: 'This is a freaking lion, man'},
    {title: 'Three Ostriches', image: 'assets/images/paintings/ostriches.jpeg',
      description: 'This is a freaking group of ostriches, man'},
    {title: 'Plumed Bird', image: 'assets/images/paintings/plumedBird.jpeg',
      description: 'This is a freaking bird head, man'},
    {title: 'Sea Dragon', image: 'assets/images/paintings/seadragon.jpeg',
      description: 'This is a freaking sea dragon, man'},
    {title: 'Stag', image: 'assets/images/paintings/stag.jpg',
      description: 'This is a freaking stag, man'},
    {title: 'Humpback', image: 'assets/images/paintings/whaleTriptych.jpeg',
      description: 'This is a freaking humpback whale, man'},
    {title: 'AZebra', image: 'assets/images/paintings/zebra.jpeg',
      description: 'This is a freaking zebra, man'}
  ];

  $scope.commercial = [
    {title: 'VP Skin for Fairview', image: 'assets/images/commercial/fairview.png',
      description: ''},
    {title: '3M Advertisement', image: 'assets/images/commercial/threemBooth.jpg',
      description: ''},
    {title: '3M Graphic Solutions Advertisement', image: 'assets/images/commercial/threemGraphicSolutions.jpg',
      description: ''},
    {title: 'VP Skin for 3M Innovations', image: 'assets/images/commercial/threemInnovationSkin.png',
      description: ''},
    {title: '3M Interactive Advertisement', image: 'assets/images/commercial/threemInteractive.jpg',
      description: ''},
    {title: 'VP Skin for 3M Thinsulate', image: 'assets/images/commercial/threemThinsulate.jpg',
      description: ''},
    {title: '3M Vehicle Advertisement', image: 'assets/images/commercial/threemVehicle.png',
      description: ''},
    {title: 'VP Skin for 3M Window Film', image: 'assets/images/commercial/threemWindowFilm.png',
      description: ''}
  ];

}])

//SERVICES//

app.service('anchorSmoothScroll', function(){

    this.scrollTo = function(locationId) {

        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(locationId) - 21;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 20);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(locationId) {
            var elm = document.getElementById(locationId);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }
    };
});
