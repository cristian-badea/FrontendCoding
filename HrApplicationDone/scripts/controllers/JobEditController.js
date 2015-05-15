hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory'
    , function ($scope, $http, $routeParams, $location, $commonResourcesFactory) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO#HR5

        $scope.job;

        $http.get($commonResourcesFactory.findOneJobUrl + $routeParams.jobId)
            .success(function(data) {
                $scope.job = data;
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.job = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addjob) {
            $http({url: $commonResourcesFactory.editEmployeeUrl, method: 'PUT', data:addjob}).
                success(function (data) {
                    $scope.job = data;
                    $location.url('/jobview/'+$scope.job.jobId);
                });
        }
    }]);