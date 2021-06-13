 

 class Employee{

    empName:string;
    readonly empCode:number;
    static pi:number = 3.14;
    pi:number = 3;
    constructor(name:string,code:number){
        this.empName = name
        this.empCode = code
    }

    static getName(){
        return "test static"
    }
 }

 let emp = new Employee('Code Improve',2009);
 emp.empName = 'Test';
 //emp.empCode = 3001;
 console.log(emp.empName,emp.empCode,emp.pi)

 console.log(Employee.pi)

 console.log(Employee.getName())