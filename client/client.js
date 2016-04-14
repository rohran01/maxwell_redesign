var app = angular.module('webApp', [])

//SETS OF IMAGES//

var films = [
  {title: 'Octopus', image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'}
]

var paintings = [
  {title: 'Octopus', image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'},
  {image: 'assets/images/octopus1.jpeg',
    description: 'this is a freaking octopus, man'}
]

var commercial = [];

//CONTROLLERS//

app.controller('MainController', ['$scope', '$location', 'anchorSmoothScroll', function($scope, $location, anchorSmoothScroll) {
  $scope.goTo = function(locationId) {
    // $location.hash(locationId);
    anchorSmoothScroll.scrollTo(locationId);
  }

}])

app.controller('WorkController', ['$scope', function($scope) {

  $scope.itemsToDisplay = [];

  $scope.showItems = function(category) {

    $scope.itemsToDisplay = [];

    switch(category) {
      case 'films':
        $scope.itemsToDisplay = films;
        break;
      case 'commercial':
        $scope.itemsToDisplay = commercial;
        break;
      case 'paintings':
        $scope.itemsToDisplay = paintings;
        break;
      case 'whiteBoard':
        $scope.itemsToDisplay = whiteBoard;
        break;
      case 'undone':
        $scope.itemsToDisplay = undone;
        break;
    };
  };

  $scope.showItems(films);
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
