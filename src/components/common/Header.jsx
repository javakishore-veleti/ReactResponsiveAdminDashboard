import React from "react";
import  {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'

function Header({OpenSideBar}) {

    return (
        <header className="header">
            <div className="menu-icon">
                <BsJustify className="icon" onClick={OpenSideBar}></BsJustify>
            </div>
            <div className="header-left">
                <BsSearch className="icon"></BsSearch>
            </div>
            <div className="header-right">
                <BsFillBellFill className="icon"></BsFillBellFill>
                <BsFillEnvelopeFill className="icon"></BsFillEnvelopeFill>
                <BsPersonCircle className="icon"></BsPersonCircle>
            </div>
        </header>

    )

}

export default Header;
