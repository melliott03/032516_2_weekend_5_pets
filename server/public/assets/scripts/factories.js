myApp.factory("PetService", ["$http", function($http){
    var greeting = function(){
      // console.log("Works");
    };
    var allPetsReturned={};
    var getData = function(){
       $http.get("/pets").then(function(response){
          allPetsReturned.thePets = response.data;

       });
      //  console.log('in getData allPetsReturned outside getcall', allPetsReturned);
    };


    var postData = function(data){
       $http.post("/pets", data).then(function(response){
          console.log("response.data inside postData function return", response.data);
       });
       getData();
    };

    var deleteData = function(req){
      console.log("req.params inside deleteData function in factory", req);
      $http.delete('/pets/'+req);
      getData();
    };

    return {
      postData: postData,
      getData: getData,
      greeting : greeting,
      allPetsReturned : allPetsReturned,
      deleteData: deleteData
    };
}]);
