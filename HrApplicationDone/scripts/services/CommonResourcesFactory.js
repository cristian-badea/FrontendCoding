hrApp.factory('commonResourcesFactory', function () {
        //var baseUrl = "http://demo.teamnet.ro:8282/hrapp/";
        var baseUrl = "http://hrapp-zth.rhcloud.com/hrapp/";
        return {
           findAllDepartmentsUrl : baseUrl + "departments",
           findAllEmployeesUrl : baseUrl + "employees",
           findAllJobsUrl : baseUrl + "jobs",
           findOneDepartmentUrl : baseUrl + "departments/",
           findOneEmployeeUrl : baseUrl + "employees/",
           findOneJobUrl : baseUrl + "jobs/",
           deleteDepartmentUrl : baseUrl + "departments/",
           deleteEmployeeUrl : baseUrl + "employees/",
           deleteJobUrl : baseUrl + "jobs/",
           addDepartmentUrl : baseUrl + "departments/",
           addEmployeeUrl : baseUrl + "employees/",
           addJobUrl : baseUrl + "jobs/",
           editDepartmentUrl : baseUrl + "departments/",
           editEmployeeUrl : baseUrl + "employees/",
           editJobUrl : baseUrl + "jobs/"
        };
    }
);