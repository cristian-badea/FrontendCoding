hrApp.controller('JobListController', ['$scope', '$http', '$location', 'commonResourcesFactory',
    function ($scope, $http, $location, commonResourcesFactory) {

        $scope.jobs = [];

        //TODO Load employee list from server
        $http({url: commonResourcesFactory.findAllJobsUrl, method: 'GET'}).
            success(function (data, status, headers, config) {
                $scope.jobs = data;
            });


        // TODO add viewEmployee function using $location
        $scope.viewJob = function (jobId) {
            $location.url('/jobview/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobedit/'+jobId);
        };


    }]);