hrApp.controller('MenuController', ['$scope', 'employeeActionsService', 'jobsActionsService',
    function($scope, employeeActionsService, jobsActionsService){
    /*$scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];*/

    $scope.employeeActionList = employeeActionsService;
    $scope.jobsActionsService = jobsActionsService;
    $scope.currentDate = new Date();

}]);
