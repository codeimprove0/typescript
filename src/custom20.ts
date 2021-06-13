
/* 
 "experimentalDecorators": true, 
Decorators
1) invoked at runtime
2) it's simply functions that return functions
3)  Decorators allow you to execute functions
type:- 
1) class Decorators
2)  Property
3) Method
4)  Parameter
@
*/

// @Input @Ouput
function first(value:number) {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("first(): called");
 
        var originalMethod =  descriptor.value;
       // console.log(originalMethod)
        descriptor.value =  function(){
            var context  = this
            var args = arguments;
            setTimeout(()=>{
                originalMethod.apply(context,args)
            },value)
        } 

    };
  }
  
  function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("second(): called");
    };
  }
  
  class ExampleClass {
      count:number = 0;
    @first(3000)
    @second()
    method() {
        this.count++;
        console.log('custom fn',this.count)
    }
  }
  let dec = new ExampleClass();

  console.log('++++++++++++++++++')
  dec.method();
  console.log('========',dec.count)