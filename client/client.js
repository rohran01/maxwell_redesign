var app = angular.module('webApp', []);

app.controller('mainController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(locationId) {
    $location.hash(locationId);
    $anchorScroll();
  }
}])
