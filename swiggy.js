import React,{useState,useEffect, useMemo} from "react";
import { BrowserRouter ,Routes,Link, Route} from "react-router";
import ReactDOM from "react-dom/client";
import Header from "../Components/Header";
import Food_option from "../Components/Food_option";
import Grocery_option from "../Components/Grocery_option";
import Dineoption from "../Components/Dineoption";
import Restaurant from "../Components/Restaurant";
import Home from "../Components/Home";
import Restaurant_menu from "../Components/Restaurant_menu";
import SearchFood from "../Components/SearchFood";
import SecondaryHome from "../Components/SecondaryHome";
import Checkout from "../Components/Checkout";
import { store } from "../Stored/Stores";
import {Provider} from "react-redux";

function App(){
    return(
        <>
        <Provider store={store}>
         <BrowserRouter>
         <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route element = {<SecondaryHome></SecondaryHome>}>
              <Route path="/restaurant" element = {<Restaurant/>}></Route>
              <Route path="/city/delhi/:id" element = {<Restaurant_menu/>}></Route>
              <Route path="/city/delhi/:id/search" element = {<SearchFood></SearchFood>}></Route>
            </Route>
            <Route path="/Checkout" element = {<Checkout></Checkout>}></Route>
         </Routes>
         </BrowserRouter>
        </Provider>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)