hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'employeeService', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, employeeService, commonResourcesFactory) {

        // TODO get employee by id
        $http({url: 'http://hrapp-zth.rhcloud.com/hrapp/employees/'+$routeParams.employeeid, method: 'GET'}).
            success(function (data) {
                $scope.employee = data;
            });

        // TODO back to Employee List page
        $scope.back = function() {
            $location.url('/employeeslist');
        }

        //delete current user and redirect
        $scope.delete = function() {
            $http({url : commonResourcesFactory.deleteEmployeeUrl + $routeParams.employeeid, method: 'DELETE'}).
                success(function(){
                    $location.url('/employeeslist');
                });
        }


    }]);


