myApp.controller("AddController", ["$scope", "PetService", function($scope, PetService){
  var petObject = {};
  var petService = PetService;

  //POST
  $scope.submit = function(data){
    petService.postData(data);
  };
}]);
myApp.controller("ShowController", ["$scope", "PetService", function($scope, PetService){
  //GET
  var petService = PetService;
  petService.getData();
  $scope.allPetsReturned = PetService.allPetsReturned;
  console.log('inside of ShowController ',$scope.allPetsReturned.response);

  //SORT
  $scope.changeSort = function(value){
    if ($scope.sort == value){
      $scope.reverse = !$scope.reverse;
      console.log("if ($scope.sort == value) $scope.sort=", $scope.sort);
      console.log("if ($scope.sort == value) $scope.reverse=", $scope.reverse);
      return;
    }else{
      $scope.sort = "name";
      $scope.reverse = false;
    }
    $scope.sort = value;
    $scope.reverse = false;
  }

  $scope.sort = "name";
  $scope.reverse = false;

  $scope.changeTblSort = function(value){
    if ($scope.sort == value){
      $scope.reverse = !$scope.reverse;
      return;
    }

    $scope.sort = value;
    $scope.reverse = false;
  }
}]);
myApp.controller("SecondShowController", ["$scope", "PetService", function($scope, PetService){
  //GET HERE
  var petService = PetService;
  petService.getData();
  $scope.allPetsReturned = PetService.allPetsReturned;
  console.log('inside of ShowController ',$scope.allPetsReturned.response);

  //SORT
  $scope.changeTblSort = function(value){
    if ($scope.sort == value){
      $scope.reverse = !$scope.reverse;
      return;
    }

    $scope.sort = value;
    $scope.reverse = false;
  }
}]);
myApp.controller("DeleteController", ["$scope", "PetService", function($scope, PetService){
  //GET 
  var petService = PetService;
  $scope.deleteData = petService.deleteData;
  petService.getData();
}]);
