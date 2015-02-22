var paintingsApp = angular.module('paintingsApp', []);

paintingsApp.controller('PaintingListCtrl', function ($scope, $http) {

 $scope.paintings = [];

$http.get('data/data.json').success(function(data) {
  $scope.paintings = data;
	$scope.paintings = partition($scope.paintings, 6);
	}).error(function(data, status) {
		console.log(status);
	});

	$scope.current = {
		'number': 1,
		'title': '',
		'isPrivate': false,
		'text': '',
		'imageFile': '001.jpg'
	};

});

function partition(arr, size) {
	arr = arr.filter(function(element) {
		return element.imageFile;
	});
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
  	newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}