import React, {useState} from "react";
import Weather from "./Weather";
import List from "./List"


import "../styles/Main.css";

function Main() {
//    let [value, setValue] = useState('киров')


    return(
        <main>
            <div>
                <Weather />
            </div>
        </main>
    )
}

export default Main;