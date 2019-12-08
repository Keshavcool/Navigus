var app = angular.module('app',['ngRoute']);
var url = 'http://localhost:3000';

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "home.html",
      controller : 'homeController'
    })
    .when("/favourite", {
      templateUrl : "favourite.html",
      controller : 'favController'
    })
    .when("/search", {
      templateUrl : "search.html",
      controller : 'searchController'
    })
});

app.controller('main',function($scope,$route){
    $scope.loader_show = false;
    $scope.search_name = "";
    $scope.products = [];

    $scope.fav = function(id){
      console.log(id);
      var product = $scope.products.filter(function(ele){
        return ele.id === id
      });

      if(product[0].isFav === 1){
        alert("This product is already is Favourite");
      }
      else{
        $scope.loader_show = true;
        var this_url = url + '/setFavorite';
        $.post(this_url,{productId : id})
        .then(function(response){
          $scope.loader_show = false;
          $route.reload();
        })
        .catch(function(err){
          $scope.loader_show = false;      
        });
      }
    }
});

app.controller('homeController',function($scope,$http){
    $scope.$parent.loader_show = true;
    var this_url = url + '/products';
    $http.get(this_url)
    .then(function(response){
      $scope.products = response.data.payload;
      $scope.$parent.products = response.data.payload;
      $scope.$parent.loader_show = false;
    })
    .catch(function(err){
      $scope.$parent.loader_show = false;      
    });
});

app.controller('favController',function($scope,$http){
  $scope.$parent.loader_show = true;
  var this_url = url + '/favorite';
  $http.get(this_url)
  .then(function(response){
    $scope.products = response.data.payload;
    $scope.$parent.products = response.data.payload;
    $scope.$parent.loader_show = false;
  })
  .catch(function(err){
    $scope.$parent.loader_show = false;      
  });
});


app.controller('searchController',function($scope,$http,$routeParams){
    var name = $routeParams.name;
    $scope.$parent.loader_show = true;
    var this_url = url + '/search/' + name;
    $http.get(this_url)
    .then(function(response){
      $scope.products = response.data.payload;
      $scope.$parent.products = response.data.payload;
      $scope.$parent.loader_show = false;
    })
    .catch(function(err){
      $scope.$parent.loader_show = false;      
    });
});