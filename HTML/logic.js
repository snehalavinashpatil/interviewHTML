var app = angular.module("myApp",[]);
app.controller("logicController",['$scope','$http',function($scope,$http){
    $scope.showSearch = false;
    $scope.openSearch = function (){
        $scope.showSearch = true;
      };

      $scope.closeSearch = function (){
        $scope.showSearch = false;
      };
       
      var slideIndex = 1;
      $scope.showDivs = function(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        x[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " w3-white";
      }
     
      $scope.showDivs(slideIndex);
     
      $scope.plusDivs =function(n) {
        $scope.showDivs(slideIndex += n);
      }
     
      $scope.currentDiv = function(n) {
        $scope.showDivs(slideIndex = n);
      }
}]);
