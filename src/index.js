import ReactDOM from "react-dom/client";
import React from "react";
import Links from "./Links";
 function Index() {

  return (
       <>
       <Links/> 
       </>
     
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />)