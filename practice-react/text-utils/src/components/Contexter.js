import React,{ useState, createContext, useContext } from "react";
// to avoid props-drilling another way was 
//passing props from all components even to those where its not used .
export default function Contexter() {
  return (
    <div>
      <Component1/>
    </div>
  )
}
const UserContext = createContext();
//(1) creating context
function Component1() {
  const [user,setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
    //(2) using context provider with value as a state so that any component in tree can use it
  );
}
function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
//(3) using useContext to get context and use the state
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}