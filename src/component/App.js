import React  from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Login from "./Login";
import Feed from "./Feed";
import  Widgets  from "./Widgets";
function App(){
    const user=null;
    return (
       <div  className="App">
         {!user ? <Login/> : (
             <>
              <Header />
            <div className="App_body">
<Sidebar />
<Feed />
<Widgets/>
            </div>
            </>
            )}
           
       </div>
    )
}

export default App;