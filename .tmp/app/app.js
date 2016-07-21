var app = angular.module('getAds', []);

app.controller('adList', function($scope, $http) {
    $http({
        method : "POST",
        url : "http://ec2-52-86-89-220.compute-1.amazonaws.com/api/assets/search",
	        {
	        "location":{"lat":40.7127837,"lon":-74.00594130000002,
	        "radius":"5mi"},
	        "currentPage":1
    	}
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});