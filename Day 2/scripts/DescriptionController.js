/**
 * Created by user on 12/05/2015.
 */
//hrApp.controller('DescriptionController',function($scope,$rootScope){
angular.module("hrApp").controller('DescriptionController',function($scope,$rootScope){
    $scope.descriptionShow = true;

    $scope.toggleDescriptionShow = function toggleDescriptionShow()
    {
        $scope.descriptionShow = !$scope.descriptionShow;
    };

    /*$scope.title = "Two Way Binding Demo";
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function(){
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val)
    {
        $scope.firstVariable = val;
    }*/
});