angular.module("blogPosts").config(function($routeProvider) {

  $routeProvider.when("/index", {
    templateUrl: "posts.html"
  });

  $routeProvider.when("/newPost", {
    templateUrl: "newPost.html"
  });
});
