import React, {useState} from "react";

import "../styles/Header.css";



function Header(props) {
    let [count, setNewCount] = useState(0);
    const handleClick = () => {
        setNewCount(count + 1);
    };

    return(
        <header>
               Погода в России
        </header>
    )
}

export default Header;