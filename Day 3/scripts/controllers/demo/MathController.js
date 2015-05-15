hrApp.controller('MathController', function($scope,MathService){

    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        //$scope.op1 = $scope.nbA + $scope.nbB;
        //$scope.op2 = $scope.nbA - $scope.nbB;
        //$scope.op3 = $scope.nbA * $scope.nbB;
        //$scope.op4 = $scope.nbA / $scope.nbB;

//        TODO #13 refactor your calculations using MathService

        $scope.op1 = MathService.add($scope.nbA,$scope.nbB);
        $scope.op2 = MathService.substract($scope.nbA,$scope.nbB);
        $scope.op3 = MathService.multiply($scope.nbA,$scope.nbB);
        $scope.op4 = MathService.divide($scope.nbA,$scope.nbB);

    }

});
