hrApp.controller('UserController', function($scope,$location,UserService)
{
    $scope.backButton = function(){
        $location.url("");
    }
    $scope.resetButton = function(){
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.cnp = "";
        $scope.age = "";
        $scope.sex = "";
    }
    $scope.saveButton = function(){
        var status = UserService.addUser($scope.firstName, $scope.lastName, $scope.cnp, $scope.age, $scope.sex);
        if(status)
        {
            alert("userul a fost salvat");
        }
        else
        {
            alert("userul nu a fost salvat");
        }
    }
    $scope.toggleShowButton = function(){

    }
});