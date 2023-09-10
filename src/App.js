import React,{useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
 


function App() {

    const [item, setItem] = useState(Data);
    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curcat) => {
      const newItem = Data.filter((newVal) => {
        return newVal.category === curcat;
      });
      setItem(newItem);
    };

    return (
      <div className="app">

         

        <Router>
          <Routes>
            <Route path="/" element={<><Header/>, <Home/></> } />
             
            
          </Routes>
        </Router>
         

        <div className="container-fluid">
          <div className="row">
            <h1 className="col-12 text-center my-3 fw-bold">Clothes</h1>
            <Buttons
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
             
            <Card item={item} />  
          </div>
        </div>
      </div>
    );
}
export default App;
