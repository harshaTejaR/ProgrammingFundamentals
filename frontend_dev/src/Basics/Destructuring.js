function Destructure() {
  const sandwitch = {
    bread: "wheat",
    meat: "ham",
    cheese: "cheddar",
    toppings: ["tomato", "onion", "pickles"],
  };
  const { bread, meat } = sandwitch;
  return (
  <div className="Destructuring">
    <p>{`type of bread is :${bread}, meat added is:${meat}`}</p>;
  </div>
  )
}
export default Destructure;
