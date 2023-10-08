import React, { useState } from "react";
import "../../src/assets/styles/Sidebar.css";
import showSidebarIcon from "../assets/image/icon-show-sidebar.svg";
import hideSidebarIcon from "../assets/image/icon-hide-sidebar.svg";
import HeaderDropdown from "./HeaderDropdown";
import AddEditBoardModal from "../modals/AddEditBoardModal";


export default function Sidebar({ isSideBarOpen, setIsSideBarOpen }) {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSideBarOpen((curr) => !curr);
  };

  return (
    
    <div className={`sidebar  ${!isSideBarOpen && "sidebar-closed"} ${isBoardModalOpen && 'sidebar-infront'}`}>
      {isSideBarOpen && <HeaderDropdown setIsBoardModalOpen={setIsBoardModalOpen} />}
      <div
        className={`toggle-sidebar-container  ${
          !isSideBarOpen && "toggle-closed"
        }`}
        onClick={() => toggleSidebar()}
      >
        <img
          src={isSideBarOpen ? hideSidebarIcon : showSidebarIcon}
          alt="show/hide sidebar icon"
        />
        {isSideBarOpen && <p className="heading-M">Hide Sidebar</p>}
      </div>
        
   
      {isBoardModalOpen && (
        
        <AddEditBoardModal
          type="add"
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      ) }
    </div>
  );
}
