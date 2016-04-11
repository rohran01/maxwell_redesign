var app = angular.module('webApp', ['ngRoute'])

//CONFIGURATION//

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/workPartials/film.html',
      controller: 'WorkController'
    })
    .when('/commercial', {
      templateUrl: 'views/workPartials/commercial.html',
      controller: 'WorkController'
    })
    .when('/paintings', {
      templateUrl: 'views/workPartials/paintings.html',
      controller: 'WorkController'
    })
    .when('/white-board', {
      templateUrl: 'views/workPartials/white-board.html',
      controller: 'WorkController'
    })
    .when('/undone', {
      templateUrl: 'views/workPartials/undone.html',
      controller: 'WorkController'
    });

  $locationProvider.html5Mode(true);
}])

//CONTROLLERS//

app.controller('MainController', ['$scope', '$location', 'anchorSmoothScroll', function($scope, $location, anchorSmoothScroll) {
  $scope.goTo = function(locationId) {
    // $location.hash(locationId);
    anchorSmoothScroll.scrollTo(locationId);
  }
}])

app.controller('WorkController', ['$scope', function($scope) {
  $scope.test = 'working';
}])

//SERVICES//

app.service('anchorSmoothScroll', function(){

    this.scrollTo = function(locationId) {

        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(locationId) - 20;
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
