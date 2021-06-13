 

interface Sport{ 
    newCategory:string,
    getReport:()=>string 
}

interface SportNew {
    getReport2:()=>string 
}

interface  SportMain extends  Sport,SportNew{}

 //class News implements  Sport,SportNew {
class News implements SportMain {
    newCategory:string; 
    constructor(category:string){
        this.newCategory = category;
    }
    getReport(){
        return 'Report Called';
    }
    getReport2(){
        return 'Report2 Called';
    } 
 }

 //let newObj:Sport = new News('Sports');

 let newObj:SportMain = new News('Sports');
 console.log(newObj.getReport())
 console.log(newObj.getReport2())