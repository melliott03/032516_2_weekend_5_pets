var myApp = angular.module("myApp", ["ngRoute", "ngMaterial", "ngAnimate"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/home", {
            templateUrl: "/views/routes/home.html"
        }).
        when("/add", {
            templateUrl: "/views/routes/add.html",
            controller: "AddController"
        }).
        when("/view", {
            templateUrl: "/views/routes/view.html",
            controller: "ShowController"
        }).
        when("/view_table", {
            templateUrl: "/views/routes/view_table.html",
            controller: "ShowController"
        }).
        when("/view_table_second", {
            templateUrl: "/views/routes/view_table_second.html",
            controller: "ShowController"
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
