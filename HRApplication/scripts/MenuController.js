/**
 * Created by Cristian on 13-May-15.
 */
HRApp.controller('MenuController',function($rootScope,$scope)
{
    $scope.employeePageList = [
        {
            url: "addEmployee.html",
            label: "Add Employee"
        },
        {
            url: "editEmployee.html",
            label: "Edit Employee"
        },
        {
            url: "ViewEmployees.html",
            label: "View Employees"
        }];
});