import React from 'react';
import { Pizza } from "./components/Pizza";
import { GroceryCart } from "./components/GroceryCart";
import { SandBox } from "./components/SandBox";
import { ToggleWord } from "./components/ToggleWord";
import { Login } from "./components/Login";
import { EditProfile } from "./components/EditProfile";
import { Counter } from "./components/Counter";


export function App() {
  const divStyle = { height: 100, backgroundColor: "lightblue" };
  return (
    <>
      <div style={(divStyle, { backgroundColor: "#e5eac8" })}>
        <Counter />
        <hr></hr>
      </div>
      <div style={(divStyle, { backgroundColor: "#e5eaf5" })}>
        <SandBox />
        <hr></hr>
      </div>
      {/* <div style={(divStyle, { backgroundColor: "#e5acd9" })}>
        <Login />
        <hr></hr>
      </div>
      <div style={(divStyle, { backgroundColor: "khaki" })}>
        <GroceryCart />
        <hr></hr>
      </div>
      
      <div style={divStyle}>
        <hr></hr>
      </div>
      <div style={divStyle}>
        <Pizza />
        <hr></hr>
      </div>
      <div style={(divStyle, { backgroundColor: "cyan" })}>
        <ToggleWord />
        <hr></hr>
      </div> */}
    </>
  );
}
