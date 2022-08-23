// A Normal javascript function is written as follows:
//A key word function is used next name of the function and () inside parenthesis are used to define the function(properties of this function).
// function nameOfFunction() { return(); }
/*************************************************************************************************************************************************
//When to USE FUNCTION?
//1. When we want to reuse the code.
//2. When we want to create a reusable component.
//3. When we want to create a reusable function. and many few other cases includes resuable utilities, services, pipes, animations etc,.
*************************************************************************************************************************************************/
//This is a regular function declartion
function Function() {
  //This is a function expression
  /***************************************************************************
     Const protects the function from being modified.And function is not hoisted.
     Prevented from being accessed before it is declared.
     *****************************************************************************/
  // const Function = function () {
  //   return "Function Expression";
  // };

  /************************ARROW fUNCTION*****************************/
//normal function
/* 
  function myFunc(){
    return;
  }
*/const myFunc = (name) => {    //NO more issues with this keyword since arrow is used to refer the (props).
  return `${name} is a good boy`;
}


  //Passing Arguments to a Function
  /********************************************************SIMPLE ARGUMENTS**************************************************** 
   function add(a) { 
       return a;
   }
  ********************************************************************************************************************************/
  /************************** IF WE WANT TO PROVIDE DYNAMIC VARIABLES TO THE FUNCTION WE CAN PASS NAMED PARAMETERS ***************/
 //We want to call this function inside the return statement.  
  const Add = function (a, b, name) {  //Add is a function expression. a,b,name are named parameters.
    return ` ${name} is ${a + b} years old`; //function invocation returns arguments.
  };
  /**********************************************************ARROW FUNCTIONS *****************************************************/
  //Passing Arguments to a Function
  return (
    <div className="Function">
      <div>{Add(10, 19, "harsha")}</div>{/**Add function is called here.We are passing dynamic values here**/}
    	<p>{myFunc("Harsha")} </p>
    </div>
  );
}
export default Function;



