"use strict";
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.pi = 3;
        this.empName = name;
        this.empCode = code;
    }
    Employee.getName = function () {
        return "test static";
    };
    Employee.pi = 3.14;
    return Employee;
}());
var emp = new Employee('Code Improve', 2009);
emp.empName = 'Test';
//emp.empCode = 3001;
console.log(emp.empName, emp.empCode, emp.pi);
console.log(Employee.pi);
console.log(Employee.getName());
