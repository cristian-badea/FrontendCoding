/**
 * Created by user on 11/05/2015.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '333',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '4444',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Ross',
        phone: '1111',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function showList()
{
    var myTable =
        '<table border="1" class="table" id="EmployeesTable">' +
            '<tr>' +
                '<th>First Name</th>' +
                '<th>LastName</th>' +
                '<th>Phone</th>' +
                '<th>Salary</th>' +
                '<th>ShowUser</th>' +
                '<th>DeleteUser</th>' +
            '</tr>';

    for(var i in employeesList) {
        myTable +=
            '<tr>' +
            '<td>' + employeesList[i].firstName + '</td>' +
            '<td>' + employeesList[i].lastName + '</td>' +
            '<td>' + employeesList[i].phone + '</td>' +
            '<td>' + employeesList[i].salary + '</td>' +
            '<td><button id="showUser' + i + '" onclick="showCurentUser(' + i + ')">Show User</button></td>' +
            '<td><button id="deleteUser' + i + '" onclick="deleteCurentUser(' + i + ')">Delete</button></td>' +
            '</tr>';
    }
    myTable += '</table>';
    var container = document.getElementById("listContainer");
    container.innerHTML = myTable;
    showTableInfo();
}

var Employee = function(firstName, lastName, phone, salary)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmplyee()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = parseInt(document.getElementById("salary").value);
    employeesList.push(new Employee(firstName,lastName,phone,salary));
    showList();
    showTotalSalary();
}

function showTotalSalary()
{
    var totalSalary = 0;
    for(var i in employeesList)
    {
        totalSalary += employeesList[i].salary;
    }
    var container = document.getElementById("salaryTotal");
    container.innerHTML = "";
    container.innerHTML = "Total Salaries = " + totalSalary;
}

function deleteLastEmployee()
{

    employeesList.pop();

    showList();
    showTotalSalary();
}

function showCurentUser(index)
{
    alert(employeesList[index].firstName + " " +
        employeesList[index].lastName + " " +
        employeesList[index].phone + " " +
        employeesList[index].salary);
}

function deleteCurentUser(index)
{
    employeesList.splice(index,1);
    showList();
    showTotalSalary();
}

function showTableInfo()
{
    var line = "";

    //parsare firstname
    var firstNames = {};
    var maxCount = 0, maxName = "";
    for(var i in employeesList)
    {
        if(firstNames[employeesList[i].firstName] == undefined)
        {
            firstNames[employeesList[i].firstName] = 1;
        }
        else
        {
            firstNames[employeesList[i].firstName]++;
        }
        if(maxCount < firstNames[employeesList[i].firstName])
        {
            maxCount = firstNames[employeesList[i].firstName];
            maxName = employeesList[i].firstName;
        }
    }

    //parsare lastName
    var lastNames = {}, counter = 0;
    for(var i in employeesList)
    {
        if(lastNames[employeesList[i].lastName] == undefined)
        {
            lastNames[employeesList[i].lastName] = 1;
            counter++;
        }
    }
    var uniqueLastNames = counter;

    //parsarePhone
    var digits = [];
    for(i=0;i<10;i++)
    {
        digits.push({ number: i, counter: 0});
    }
    for(var index in employeesList)
    {
        for(var j = 0; j< employeesList[index].phone.length; j++)
        {
            digits[parseInt(employeesList[index].phone[j])].counter++;
        }
    }

    digits.sort(function(digit1,digit2)
    {
        if(digit1.counter < digit2.counter)
            return 1;
        if(digit1.counter > digit2.counter)
            return -1;
        return 0;
    })
    digitsMessage = "";
    for(i=0;i<5;i++)
    {
        digitsMessage += digits[i].number + ",";
    }

    //parsareSalary
    var avgSal = 0.0;
    for (var i in employeesList)
    {
        avgSal += employeesList[i].salary;
    }
    avgSal /= employeesList.length;

    var line = '<tr>' +
        '<td>'+ maxName + '</td>'+
        '<td>'+ uniqueLastNames + '</td>'+
        '<td>'+ digitsMessage + '</td>'+
        '<td>'+ avgSal + '</td>'+
    '</tr>';

    var table;
    if(table = document.getElementById("EmployeesTable"))
    {
        //concat
        table.innerHTML += line;
    }
    else
    {
        //write
        table = document.getElementById("listContainer");
        table.innerHTML = '<table border="1" class="table" id="EmployeesTable">' + line + '</table>';
    }
}

function SortEmployees(){
    var sortCriteria = document.getElementById("sortByInput").value;
    switch (sortCriteria){
        case "1":
            employeesList.sort(
                function(employee1,employee2) {
                    if(employee1.firstName < employee2.firstName){
                        return -1;
                    }
                    if(employee1.firstName > employee2.firstName){
                        return 1;
                    }
                    return 0;
                });
            break;
        case  "2":
            employeesList.sort(
                function(employee1,employee2) {
                    if(employee1.lastName < employee2.lastName){
                        return -1;
                    }
                    if(employee1.lastName > employee2.lastName){
                        return 1;
                    }
                    return 0;
                });
            break;
        case "3":
            employeesList.sort(
                function(employee1,employee2) {
                    if(employee1.phone < employee2.phone){
                        return -1;
                    }
                    if(employee1.phone > employee2.phone){
                        return 1;
                    }
                    return 0;
                });
            break;
        case "4":
            employeesList.sort(
                function(employee1,employee2) {
                    if(employee1.salary < employee2.salary){
                        return -1;
                    }
                    if(employee1.salary > employee2.salary){
                        return 1;
                    }
                    return 0;
                });
            break;
    }
    showList();
}
function SearchEmployees(){
    var criteria = document.getElementById("searchInput").value;
    var myTable =
        '<table border="1" class="table" id="EmployeesTable">' +
        '<tr>' +
        '<th>First Name</th>' +
        '<th>LastName</th>' +
        '<th>Phone</th>' +
        '<th>Salary</th>' +
        '<th>ShowUser</th>' +
        '<th>DeleteUser</th>' +
        '</tr>';

    for(var i in employeesList) {
        if(employeesList[i].firstName.indexOf(criteria) != -1 || employeesList[i].lastName.indexOf(criteria)!= -1 ||
            employeesList[i].phone.indexOf(criteria)!= -1 || employeesList[i].salary.toString().indexOf(criteria) != -1)

        myTable +=
            '<tr>' +
            '<td>' + employeesList[i].firstName + '</td>' +
            '<td>' + employeesList[i].lastName + '</td>' +
            '<td>' + employeesList[i].phone + '</td>' +
            '<td>' + employeesList[i].salary + '</td>' +
            '<td><button id="showUser' + i + '" onclick="showCurentUser(' + i + ')">Show User</button></td>' +
            '<td><button id="deleteUser' + i + '" onclick="deleteCurentUser(' + i + ')">Delete</button></td>' +
            '</tr>';
    }
    myTable += '</table>';
    var container = document.getElementById("listContainer");
    container.innerHTML = myTable;
    showTableInfo();




}