import React from "react";
import { createRoot } from "react-dom/client";

function Book(){
    return(
        <div className="book">
            <img src="/book.jpg" width="100" height="150" />
            <h3>title: ReactJS</h3>
            <h3>author: J.B Dutta</h3>
            <h3>price : Rs. 467</h3>
            <button>Add To Cart</button>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>
                <center>
                    Prx. Book Store
                </center>
            </h1>
            <div className="bookstore">
            <Book/>
           <Book/>
         <Book/>


            </div>
        </div>
    )
}

const parent=document.getElementById("root");
const root = createRoot(parent);
root.render(<App />)