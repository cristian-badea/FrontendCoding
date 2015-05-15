hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, $commonResourcesFactory) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO#HR1

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };

        $scope.create = function (addJob) {
            $http({url: $commonResourcesFactory.addJobUrl, method: 'POST',data:addJob}).
                success(function (data) {
                    $scope.job = data;
                    $location.url('/jobview/'+$scope.job.jobId);
                });
        }
    }]);