hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactory',
    function($scope, $http, $routeParams, $location, commonResourcesFactory) {

        // TODO get job by id
        $http({url: commonResourcesFactory.findOneJobUrl+$routeParams.jobid, method: 'GET'}).
            success(function (data) {
                $scope.job = data;
            });

        // TODO back to Employee List page
        $scope.back = function() {
            $location.url('/joblist');
        }

        $scope.delete = function() {
            $http({url : commonResourcesFactory.deleteJobUrl + $routeParams.jobid, method: 'DELETE'}).
                success(function(){
                    $location.url('/joblist');
                });
        }
    }]);