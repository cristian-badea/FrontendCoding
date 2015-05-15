hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {

        // TODO get job by id
        $http({url: 'http://hrapp-zth.rhcloud.com/hrapp/jobs/findOne/'+$routeParams.jobid, method: 'GET'}).
            success(function (data) {
                $scope.job = data;
            });

        // TODO back to Employee List page
        $scope.back = function() {
            $location.url('/joblist');
        }

    }]);