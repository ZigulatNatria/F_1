import React from "react";
import "../styles/App.css";
import Header from "./Header";
//import Main from "./Main";
import Success from "./Geo";
import List from "./List";





function App() {
    const buttonName = "Some button updated Ы"


    return (
        <React.Fragment>

            <Header buttonName = {buttonName}></Header>


            <List />
         </React.Fragment>
        );
}

export default App;