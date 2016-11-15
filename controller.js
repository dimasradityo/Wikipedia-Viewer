
var app = angular.module('WikipediaApp', []);

app.controller('mainController', function ($scope, $http) {

  $scope.display = function () {
    var tes = '';
    tes = $scope.search;
    var url = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=" + tes + "&limit=10&callback=JSON_CALLBACK";

    $http.jsonp(url)
      .success(function (json) {
        $scope.entries = json;
        var names = json[1];
        var descs = json[2];
        var links = json[3];

        $scope.repeatData = names.map(function (val, index) {
          return {
            name: val,
            desc: descs[index],
            link: links[index]
          }
        });
      });
  };
});




