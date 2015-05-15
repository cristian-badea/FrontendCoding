/**
 * Created by user on 12/05/2015.
 */
hrApp.controller('MainController',function($scope,$rootScope)
{
    $scope.name="Default name";
    $scope.someVal = 10;
    console.log("Hello World");
    console.log($scope.name);
});