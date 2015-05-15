hrApp.service("UserService", function()
{
    var employeeList = [
        {
            firstName: "firstTest",
            lastName: "lastTest",
            cnp: "cnpTest",
            age: "ageTest",
            sex: "sexTest"
        }
    ];
    return {
        addUser: function (firstName, lastName, cnp, age, sex)
        {
            employeeList.push({firstName: firstName, lastname: lastName, cnp: cnp, age: age, sex: sex});
            return true;
        },
        getUsers: function ()
        {
            return employeeList;
        }
    }

});