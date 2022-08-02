function Scope() {
  /* Lexical variable Scope in ES6 JS name is defined two times once outside of if block 
  and one more time inside of if block but var keyword lift this name's scope to global scope,
  inner block decleration is invoked */
  /***********************************************************************************************************************
   Note: BlockScope is available in ES6 but it is not available in ES5
   Note: let and const are block scoped variables
   Note: var is function scoped variable scope is lifetd to global scope. (Hoisting)
   Note: That is when why we use var keyword in name declaration inside for loop it's scope is lifted to global scope, hence it is invoked.
   Note: JS is unidirectional language, flows from top to bottom. so first checked for global scope and executed available variable in global scope.
   Note: To protect the variable from being accessed outside of the block scope, we use let and const keywords.
  
  ***********************************************************************************************************************/
  var name = "John in Global Scope";
  if (name) {
    var name = "Sara in block Scope";
    console.log("block scope", name);
  }
  var letname = "John in Global Scope";
  if (letname) {
    let letname = "Sara"; //secured this variable from being accessed outside of the block scope
    //Waring will pop up value never used: Sara.
    console.log("block scope", name);
  }
  return (
    <div className="Scope">
      <h1>Lets Get Started</h1>
      {name}
      <p>{letname}</p>
    </div>
  );
}
export default Scope;
