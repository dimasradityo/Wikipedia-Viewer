var app = angular.module('WikipediaApp', []);
app.controller('mainController', function ($scope, $http) {    
   var url = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=popeye&limit=10&callback=JSON_CALLBACK"
   $http.jsonp(url)
    .success(function (json) {
      $scope.entries = json;
      console.log($scope.entries);       
   });
});





