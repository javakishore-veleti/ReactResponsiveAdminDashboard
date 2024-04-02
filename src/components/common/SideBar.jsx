import React from "react";
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 
function SideBar({openSideBarToggle, OpenSideBar}) {

    return (
        <aside id="sidebar" className={openSideBarToggle ? "sidebar-responsive": ""}>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <BsCart3 className="icon_header"></BsCart3>
                </div>
            </div>

        </aside>

    )

}

export default SideBar;
